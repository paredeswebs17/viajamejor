import { useEffect, useState } from 'react';

/**
 * Banner de consentimiento de cookies.
 * Google Analytics NO se carga hasta que la persona pulsa "Aceptar".
 * La eleccion se guarda en este navegador y se puede cambiar desde el pie de
 * pagina ("Configurar cookies"), que lanza el evento 'vm:cookie-settings'.
 */
const STORAGE_KEY = 'vm-consent';
const GA_ID = 'G-L1ZJ6QKGKN';

type Choice = 'granted' | 'denied';

const readChoice = (): Choice | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
};

let analyticsLoaded = false;

const loadAnalytics = () => {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
};

const clearAnalyticsCookies = () => {
  const host = window.location.hostname.replace(/^www\./, '');
  document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      ['', '; domain=.' + host, '; domain=' + host].forEach((domain) => {
        document.cookie = name + '=; Max-Age=0; path=/' + domain;
      });
    });
};

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === 'granted') loadAnalytics();
    if (!choice) setOpen(true);
    const onOpen = () => setOpen(true);
    window.addEventListener('vm:cookie-settings', onOpen);
    return () => window.removeEventListener('vm:cookie-settings', onOpen);
  }, []);

  const choose = (choice: Choice) => {
    const previous = readChoice();
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Sin almacenamiento disponible: se volvera a preguntar en la proxima visita
    }
    setOpen(false);
    if (choice === 'granted') {
      loadAnalytics();
    } else if (previous === 'granted') {
      clearAnalyticsCookies();
      window.location.reload();
    }
  };

  if (!open) return null;

  const button =
    'flex-1 sm:flex-none rounded-lg bg-gray-800 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition-colors';

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:flex sm:items-center sm:gap-6 sm:p-6">
        <p className="text-sm leading-relaxed text-gray-700">
          Usamos cookies de análisis (Google Analytics) para saber qué guías te resultan útiles.
          Solo se activan si las aceptas, y puedes cambiar de opinión cuando quieras desde el pie de página.
        </p>
        <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
          <button type="button" onClick={() => choose('denied')} className={button}>
            Rechazar
          </button>
          <button type="button" onClick={() => choose('granted')} className={button}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

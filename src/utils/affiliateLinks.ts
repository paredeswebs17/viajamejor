/**
 * Marca los enlaces de afiliado con rel="sponsored": Google exige identificar
 * los enlaces por los que se cobra comision. Actua sobre el DOM ya pintado, asi
 * cubre todos los componentes y ficheros de datos sin editar cada enlace.
 * Para un partner nuevo, anade su dominio a AFFILIATE_HOSTS.
 */
const AFFILIATE_HOSTS = [
  'tpk.lv', // Travelpayouts (Booking, Kiwi...)
  'gyg.me',
  'getyourguide.',
  'iatiseguros.',
  'revolut.',
  'amazon.',
  'amzn.to',
  'booking.com',
  'kiwi.com',
  'freetour.com',
  'civitatis.',
];

const isAffiliate = (a: HTMLAnchorElement) =>
  AFFILIATE_HOSTS.some((host) => a.hostname.includes(host));

const markAffiliateLinks = () => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((a) => {
    if (!isAffiliate(a)) return;
    const rel = new Set(a.rel.split(/\s+/).filter(Boolean));
    if (rel.has('sponsored')) return;
    rel.add('sponsored');
    rel.add('noopener');
    a.rel = Array.from(rel).join(' ');
  });
};

export const watchAffiliateLinks = () => {
  if (typeof window === 'undefined') return;
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      markAffiliateLinks();
    });
  };
  markAffiliateLinks();
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
};

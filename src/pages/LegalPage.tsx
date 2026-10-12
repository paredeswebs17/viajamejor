import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Paginas legales: aviso legal, privacidad, cookies y afiliados.
 * Son una base razonable, no asesoramiento juridico: revisalas antes de publicar.
 * Los datos del titular (LSSI, art. 10) se cambian solo aqui.
 */
const OWNER = {
  name: 'Antonio José Paredes Cabello',
  nif: 'PENDIENTE',
  address: 'PENDIENTE',
  email: 'paredeswebs17@gmail.com',
  site: 'viajamejor.net',
};
const UPDATED = '12 de octubre de 2026';

export type LegalPageKey = 'aviso-legal' | 'privacidad' | 'cookies' | 'afiliados';

const LINKS: { key: LegalPageKey; label: string }[] = [
  { key: 'aviso-legal', label: 'Aviso legal' },
  { key: 'privacidad', label: 'Política de privacidad' },
  { key: 'cookies', label: 'Política de cookies' },
  { key: 'afiliados', label: 'Divulgación de afiliados' },
];

const openCookieSettings = () => window.dispatchEvent(new Event('vm:cookie-settings'));

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-10">
    <h2 className="mb-3 text-xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-3 leading-relaxed text-gray-700">{children}</div>
  </section>
);

const Email = () => (
  <a className="text-teal-700 underline" href={'mailto:' + OWNER.email}>
    {OWNER.email}
  </a>
);

const OwnerData = () => (
  <ul className="space-y-1">
    <li><strong>Titular:</strong> {OWNER.name}</li>
    <li><strong>NIF:</strong> {OWNER.nif}</li>
    <li><strong>Domicilio:</strong> {OWNER.address}</li>
    <li><strong>Email de contacto:</strong> <Email /></li>
    <li><strong>Sitio web:</strong> {OWNER.site}</li>
  </ul>
);

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc space-y-2 pl-5">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const PAGES: Record<LegalPageKey, { title: string; description: string; content: ReactNode }> = {
  'aviso-legal': {
    title: 'Aviso legal',
    description: 'Datos identificativos del titular de Viaja Mejor y condiciones de uso del sitio web.',
    content: (
      <>
        <Section title="1. Datos identificativos">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información
            y de comercio electrónico (LSSI), estos son los datos del titular de este sitio web:
          </p>
          <OwnerData />
        </Section>
        <Section title="2. Objeto">
          <p>
            Viaja Mejor es un sitio de contenidos sobre viajes: guías de destinos, consejos y recomendaciones
            de productos y servicios. Algunos enlaces son de afiliado (ver la{' '}
            <a className="text-teal-700 underline" href="/afiliados">divulgación de afiliados</a>).
          </p>
          <p>
            En la sección de viajes organizados, Viaja Mejor pone en contacto a la persona interesada con la
            agencia local que organiza y presta el viaje. Esa agencia es quien fija el precio, las condiciones
            y la contratación del servicio.
          </p>
        </Section>
        <Section title="3. Condiciones de uso">
          <p>
            El acceso a esta web es gratuito e implica la aceptación de este aviso legal. Te comprometes a
            hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o que puedan
            dañar el sitio o a terceros.
          </p>
        </Section>
        <Section title="4. Propiedad intelectual">
          <p>
            Los textos, el diseño y la marca Viaja Mejor pertenecen a su titular. No se permite su
            reproducción total o parcial sin autorización. Las fotografías de terceros se usan conforme a
            sus licencias (por ejemplo, Pexels).
          </p>
        </Section>
        <Section title="5. Responsabilidad">
          <p>
            La información de las guías es orientativa. Precios, horarios y condiciones pueden cambiar, así
            que compruébalos con el proveedor antes de reservar. Viaja Mejor no se hace responsable del
            contenido ni de las políticas de las webs de terceros a las que enlaza.
          </p>
        </Section>
        <Section title="6. Legislación aplicable">
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia serán
            competentes los juzgados y tribunales que correspondan conforme a la normativa de consumidores.
          </p>
        </Section>
      </>
    ),
  },

  privacidad: {
    title: 'Política de privacidad',
    description: 'Cómo trata Viaja Mejor tus datos personales y cómo ejercer tus derechos.',
    content: (
      <>
        <Section title="Responsable del tratamiento">
          <OwnerData />
        </Section>
        <Section title="Qué datos tratamos y para qué">
          <Bullets
            items={[
              <><strong>Formulario de contacto:</strong> nombre, email y mensaje, para responder a tu consulta. Base legal: tu consentimiento al enviarlo.</>,
              <><strong>Solicitudes de viajes organizados:</strong> nombre, email, teléfono o WhatsApp, fechas, número de viajeros y preferencias, para preparar tu propuesta y transmitirla a la agencia local que organiza el viaje. Base legal: aplicación de medidas precontractuales a petición tuya.</>,
              <><strong>Conversaciones por WhatsApp:</strong> los datos que compartas al escribirnos, para atenderte. Base legal: tu consentimiento.</>,
              <><strong>Datos de navegación:</strong> solo si aceptas las cookies de análisis y de afiliados, para medir el uso de la web. Base legal: tu consentimiento (ver la <a className="text-teal-700 underline" href="/cookies">política de cookies</a>).</>,
            ]}
          />
        </Section>
        <Section title="Con quién compartimos tus datos">
          <Bullets
            items={[
              'Formspree (envío de los formularios) y Netlify (alojamiento de la web), con sede en EE. UU.',
              'Google (Google Analytics) y Travelpayouts (medición de afiliados), solo si aceptas sus cookies.',
              'WhatsApp (Meta), si decides escribirnos por ese canal.',
              'La agencia local en Marruecos que organiza el viaje, solo en las solicitudes de viajes organizados.',
            ]}
          />
          <p>
            Las transferencias a EE. UU. se realizan con las garantías previstas en el RGPD (Marco de
            Privacidad de Datos UE-EE. UU. o cláusulas contractuales tipo, según el proveedor). La
            comunicación a la agencia en Marruecos es necesaria para preparar el viaje que solicitas.
          </p>
        </Section>
        <Section title="Cuánto tiempo los conservamos">
          <p>
            El tiempo necesario para atender tu consulta o solicitud y, después, durante los plazos que
            exija la ley. Los datos de navegación se conservan según la duración de cada cookie.
          </p>
        </Section>
        <Section title="Tus derechos">
          <p>
            Puedes pedir el acceso, rectificación, supresión, oposición, limitación y portabilidad de tus
            datos, y retirar tu consentimiento en cualquier momento, escribiendo a <Email />. Si crees que no
            hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos
            (<a className="text-teal-700 underline" href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
          </p>
          <p>Esta web no está dirigida a menores de 14 años.</p>
        </Section>
      </>
    ),
  },

  cookies: {
    title: 'Política de cookies',
    description: 'Qué cookies usa Viaja Mejor, para qué sirven y cómo cambiar tu elección.',
    content: (
      <>
        <Section title="Qué son las cookies">
          <p>
            Son pequeños archivos que una web guarda en tu navegador. Aquí solo usamos las de análisis y
            de afiliados si las aceptas en el aviso que aparece al entrar.
          </p>
        </Section>
        <Section title="Cookies que usamos">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 pr-4">Nombre</th>
                  <th className="py-2 pr-4">Proveedor</th>
                  <th className="py-2 pr-4">Finalidad</th>
                  <th className="py-2">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">vm-consent</td>
                  <td className="py-2 pr-4">Viaja Mejor</td>
                  <td className="py-2 pr-4">Guarda tu elección sobre cookies (técnica, no requiere consentimiento)</td>
                  <td className="py-2">Hasta que la borres</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">_ga, _ga_*</td>
                  <td className="py-2 pr-4">Google Analytics</td>
                  <td className="py-2 pr-4">Análisis de visitas, solo si aceptas</td>
                  <td className="py-2">Hasta 2 años</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 pr-4">am_user_session y otras</td>
                  <td className="py-2 pr-4">Travelpayouts</td>
                  <td className="py-2 pr-4">Medición de los enlaces de afiliado, solo si aceptas</td>
                  <td className="py-2">Según el proveedor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Al hacer clic en un enlace de afiliado (Booking, GetYourGuide, IATI, Amazon…) sales de esta web y
            se aplican las cookies y la política de privacidad de esa empresa.
          </p>
        </Section>
        <Section title="Cómo cambiar tu elección">
          <p>Puedes aceptar o rechazar las cookies en cualquier momento:</p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="rounded-lg bg-gray-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
          >
            Configurar cookies
          </button>
          <p>También puedes borrarlas desde la configuración de tu navegador.</p>
        </Section>
      </>
    ),
  },

  afiliados: {
    title: 'Divulgación de afiliados',
    description: 'Cómo se financia Viaja Mejor: enlaces de afiliado y viajes organizados.',
    content: (
      <>
        <Section title="Cómo se financia esta web">
          <p>
            Algunos enlaces de Viaja Mejor son de afiliado. Si reservas o compras a través de ellos, puedo
            recibir una comisión sin que a ti te cueste nada más. Esos enlaces están marcados como
            patrocinados para los buscadores.
          </p>
          <p>Trabajo, entre otros, con estos programas:</p>
          <Bullets
            items={[
              'Travelpayouts (Booking, Kiwi.com y otros proveedores de viaje)',
              'GetYourGuide',
              'IATI Seguros',
              'Revolut',
              'FreeTour',
              'Amazon: como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.',
            ]}
          />
        </Section>
        <Section title="Viajes organizados">
          <p>
            En los viajes organizados, Viaja Mejor te pone en contacto con la agencia local que organiza el
            viaje y puede recibir una compensación por ello.
          </p>
        </Section>
        <Section title="Mi compromiso">
          <p>
            Solo recomiendo productos y servicios que uso o que he comprobado. Las comisiones no cambian
            mis opiniones. Si tienes cualquier duda, escríbeme a <Email />.
          </p>
        </Section>
      </>
    ),
  },
};

const LegalPage = ({ page }: { page: LegalPageKey }) => {
  const data = PAGES[page];
  const url = 'https://viajamejor.net/' + page;
  return (
    <>
      <Helmet>
        <title>{data.title + ' | Viaja Mejor'}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
        <p className="mb-3 text-xs uppercase tracking-widest text-teal-600">Información legal</p>
        <h1 className="font-serif text-3xl text-gray-900 sm:text-4xl">{data.title}</h1>
        <p className="mt-2 text-sm text-gray-500">Última actualización: {UPDATED}</p>
        {data.content}
        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-gray-200 pt-6 text-sm">
          {LINKS.filter((l) => l.key !== page).map((l) => (
            <a key={l.key} href={'/' + l.key} className="text-teal-700 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
      </article>
    </>
  );
};

export default LegalPage;

import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelCardsArticleProps {
  onBack: () => void;
}

const TravelCardsArticle: React.FC<TravelCardsArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Tarjetas de credito para viajar sin comisiones"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Finanzas
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Las mejores tarjetas para viajar sin comisiones
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              9 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              28.7k lecturas
            </span>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-slate-900 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            Volver
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Tarjetas para viajar sin comisiones', url: window.location.href }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => alert('Enlace copiado al portapapeles')).catch(() => {});
              }
            }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <Share2 size={14} />
            Compartir
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              <strong className="font-medium">Una de las formas más tontas de perder dinero viajando es con comisiones bancarias.</strong> Por eso, desde hace años viajo con tarjetas que no me cobran por pagar ni por sacar dinero. He probado varias y tengo claras mis favoritas.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Aquí te cuento cuáles uso, qué me gusta de cada una, y cómo puedes conseguirlas tú también. Desde que las uso, he ahorrado cientos de euros en comisiones absurdas.
            </p>
          </div>

          {/* Problem section */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">¿Por qué necesitas una tarjeta sin comisiones?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong>Los bancos tradicionales te cobran por todo cuando viajas.</strong> En un viaje de dos semanas puedes gastarte fácilmente 50-100EUR solo en comisiones:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Comisiones por cambio de divisa</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- Entre 3-4% por cada pago</li>
                  <li>- Se aplica automáticamente</li>
                  <li>- Se acumula rápidamente</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Comisiones por sacar dinero</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- 3-6EUR por cada retirada</li>
                  <li>- Independiente de la cantidad</li>
                  <li>- Tipo de cambio desfavorable</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
              <p className="text-teal-800 text-sm">
                <strong>Ejemplo real:</strong> En mi último viaje a Japón, mi banco me habría cobrado 4EUR por cada retirada + 3.5% por cada pago. En 10 días habría pagado más de 80EUR en comisiones. Con Revolut: 0EUR.
              </p>
            </div>
          </section>

          {/* Cards */}
          <div className="space-y-10">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">Recomendaciones</span>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Las tarjetas que recomiendo</h2>
            </div>

            {/* Revolut */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">1.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Revolut</h2>
              </div>
              <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-5">Mi favorita para viajar</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Revolut es la tarjeta que más uso cuando viajo.</strong> La tengo desde hace 4 años y me ha ahorrado una fortuna en comisiones. Lo que más me gusta es que puedes cambiar dinero a más de 30 divisas desde la app, al tipo de cambio real.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Lo mejor:</strong> Retiros gratis hasta 200EUR al mes, pagos sin comisiones en cualquier divisa, app súper intuitiva, tarjeta física gratis. Puedes bloquearla y desbloquearla desde el móvil si la pierdes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>Lo único malo:</strong> A partir de 200EUR de retiradas al mes, cobra una pequeña comisión (2%). Pero para la mayoría de viajes es más que suficiente.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4 mb-6">
                <p className="text-teal-800 text-sm font-medium mb-2">Versión gratuita incluye:</p>
                <ul className="text-teal-700 text-xs space-y-1">
                  <li>- Tarjeta física gratuita</li>
                  <li>- Retiros gratis hasta 200EUR/mes</li>
                  <li>- Pagos sin comisiones en cualquier divisa</li>
                  <li>- Cambio de divisa al tipo real (entre semana)</li>
                  <li>- App móvil completa</li>
                </ul>
              </div>
              <a
                href="https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver Revolut
              </a>
            </section>

            {/* N26 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">2.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">N26</h2>
              </div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-5">Banco online alemán con IBAN europeo</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>N26 es un banco 100% digital alemán que funciona muy bien para viajar por Europa.</strong> Lo que más me gusta es que tienes un IBAN alemán real, lo que facilita muchas gestiones en Europa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Lo mejor:</strong> IBAN alemán real, retiros gratis en toda la eurozona, app muy intuitiva, notificaciones instantáneas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>Limitaciones:</strong> Fuera de Europa las condiciones no son tan buenas como Revolut. Es mas una opcion complementaria.
              </p>
              <div className="bg-stone-100 border border-stone-200 rounded-sm p-4 mb-6">
                <p className="text-gray-700 text-sm font-medium mb-2">Versión gratuita incluye:</p>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>- Cuenta corriente con IBAN alemán</li>
                  <li>- Tarjeta Mastercard gratuita</li>
                  <li>- 3 retiradas gratis al mes en eurozona</li>
                  <li>- Pagos sin comisiones en euros</li>
                </ul>
              </div>
              <a
                href="https://n26.com/es-es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver N26
              </a>
            </section>
          </div>

          {/* Comparison */}
          <div className="mt-16 mb-16">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">Resumen</span>
            <h2 className="font-serif text-2xl text-gray-900 mb-8">Comparativa rápida</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Tarjeta</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Comisiones</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Retiros gratis</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Multidivisa</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">Revolut</td>
                    <td className="py-3 pr-4">0% pagos</td>
                    <td className="py-3 pr-4">Hasta 200EUR/mes</td>
                    <td className="py-3">30+ divisas</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-gray-900">N26</td>
                    <td className="py-3 pr-4">0% en euros</td>
                    <td className="py-3 pr-4">3 retiradas/mes</td>
                    <td className="py-3">Solo euros</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategy */}
          <div className="border-t border-stone-200 pt-12 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi estrategia personal</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Yo no viajo solo con una tarjeta, siempre llevo al menos dos.</strong> Mi combinación favorita es Revolut + N26. Revolut para el día a día y N26 por si Revolut me da algún problema.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              También llevo algo de efectivo en euros (por si acaso) y mi tarjeta del banco español como última opción de emergencia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Mi consejo:</strong> Empieza con Revolut, que es la más fácil de conseguir y usar. Cuando veas lo que ahorras en comisiones, ya no querrás volver a tu banco tradicional para viajar.
            </p>
          </div>

          {/* Related */}
          <RelatedArticles currentCategory="Finanzas" currentArticleId="tarjetas-sin-comisiones" />
        </div>
      </div>
    </article>
  );
};

export default TravelCardsArticle;

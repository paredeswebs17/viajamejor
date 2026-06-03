import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface CheapFlightsArticleProps {
  onBack: () => void;
}

const CheapFlightsArticle: React.FC<CheapFlightsArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Persona buscando vuelos baratos en laptop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Vuelos
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Cómo encontrar vuelos baratos: mis 10 trucos infalibles
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              8 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              67.3k lecturas
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
                navigator.share({
                  title: 'Cómo encontrar vuelos baratos: mis 10 trucos infalibles',
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {});
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
              <strong className="font-medium">Después de muchos viajes, he probado de todo para conseguir vuelos baratos.</strong> He perdido
              horas comparando precios, he usado trucos raros que encontré en foros, y sí, también he cometido errores
              que me costaron dinero extra.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Aquí te dejo mis 10 trucos favoritos que realmente me funcionan. Con estos consejos he conseguido vuelos a Tailandia por 350EUR, a Japón por 420EUR y a Nueva York por 280EUR.
            </p>
          </div>

          {/* Tricks */}
          <div className="space-y-10">

            {/* Trick 1 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">1.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Usa Kiwi.com para buscar vuelos baratos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mi rutina siempre empieza aquí. <strong>Kiwi.com es mi herramienta favorita para buscar vuelos porque te permite encontrar rutas poco habituales, conexiones raras y vuelos con escalas múltiples a buen precio.</strong> Además, tiene funciones muy útiles para ver fechas flexibles y detectar combinaciones que otros buscadores no muestran.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lo que hago: busco directamente en Kiwi.com para comparar precios, explorar rutas alternativas y, si es necesario, añadir escalas. A veces la diferencia puede ser de 100-200EUR respecto a buscar solo vuelos directos.
              </p>
              <a
                href="https://kiwi.tpk.lv/z2gZyZ3E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver Kiwi.com
              </a>
            </section>

            {/* Trick 2 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">2.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Sé flexible con fechas y aeropuertos</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>La flexibilidad es tu mejor amiga.</strong> Si puedes moverte 3 días en tus fechas,
                activa siempre la opción de "fechas flexibles". He ahorrado hasta 300EUR simplemente cambiando
                el vuelo del viernes al martes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Con los aeropuertos pasa igual. En lugar de buscar solo Madrid-Bangkok, prueba también
                Barcelona-Bangkok o incluso París-Bangkok. A veces un tren o bus barato hasta otro aeropuerto
                te puede ahorrar una fortuna.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
                <p className="text-teal-800 text-sm">
                  <strong>Tip:</strong> Los martes y miércoles suelen ser los días más baratos para volar.
                </p>
              </div>
            </section>

            {/* Trick 3 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">3.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Busca en modo incógnito (y mejor aún: usa una VPN)</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Este truco me ha ahorrado cientos de euros.</strong> Las webs de vuelos rastrean tus búsquedas
                y pueden subir los precios si ven que estás muy interesado en una ruta específica. Siempre busco en
                modo incógnito para evitar esto.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pero el truco definitivo es usar una VPN para cambiar tu ubicación. Los precios pueden variar según
                el país desde donde busques. He encontrado vuelos 200EUR más baratos buscando desde Argentina que desde España.
              </p>
              <a
                href="https://nordvpn.com/es/?ref=viajamejor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver NordVPN
              </a>
            </section>

            {/* Trick 4 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">4.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Reserva con antelación (pero no demasiado)</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>El timing es crucial.</strong> Después de analizar mis compras de vuelos durante años,
                he descubierto que el punto dulce está entre 6-8 semanas antes del viaje para vuelos europeos,
                y 8-12 semanas para vuelos intercontinentales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Reservar con 6 meses de antelación no siempre es más barato. Las aerolíneas suelen lanzar sus
                mejores ofertas cuando quedan 2-3 meses, porque ya tienen una idea clara de la demanda.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm">
                  <strong>Excepción:</strong> En temporada alta (Navidad, verano) sí que conviene reservar antes.
                </p>
              </div>
              <a
                href="https://kiwi.tpk.lv/z2gZyZ3E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors mt-6"
              >
                Ver Kiwi.com
              </a>
            </section>

            {/* Trick 5 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">5.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Aprovecha alertas de precios y apps</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Deja que la tecnología trabaje por ti.</strong> Configuro alertas de precios en Skyscanner
                y Google Flights para rutas que me interesan. Cuando baja el precio, me llega un email automáticamente.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                También uso apps como Hopper, que predice si los precios van a subir o bajar en los próximos días.
                No es 100% exacta, pero me ha ayudado a decidir si comprar ya o esperar un poco más.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
                <p className="text-teal-800 text-sm">
                  <strong>Tip:</strong> Configura alertas para varias fechas, no solo una específica.
                </p>
              </div>
            </section>

            {/* Trick 6 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">6.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Vuela entre semana si puedes</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Los fines de semana son caros, punto.</strong> Si tienes flexibilidad laboral, volar martes,
                miércoles o jueves puede ahorrarte entre 50-150EUR por trayecto. Los viernes y domingos son los peores días.
              </p>
              <p className="text-gray-600 leading-relaxed">
                También evita los lunes por la mañana (vuelos de negocios) y los viernes por la tarde (vuelos de ocio).
                Los vuelos nocturnos o muy temprano por la mañana también suelen ser más baratos.
              </p>
            </section>

            {/* Trick 7 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">7.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Usa tarjetas de puntos o millas</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Las millas no son solo para viajeros de negocios.</strong> Tengo una tarjeta que me da millas
                por cada compra normal (supermercado, gasolina, etc.). En un año junto suficientes para un vuelo
                doméstico gratis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                También aprovecho las promociones de "millas dobles" que hacen las aerolíneas. A veces vale la pena
                pagar un poco más por un vuelo si te da muchas más millas para futuros viajes.
              </p>
            </section>

            {/* Trick 8 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">8.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Considera aerolíneas low-cost (pero revisa extras)</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Ryanair, Vueling, EasyJet... pueden ser geniales si sabes usarlas.</strong> El truco está en
                leer la letra pequeña. Un vuelo de 30EUR puede convertirse en 80EUR si añades equipaje, asiento y comida.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Mi estrategia: viajo solo con equipaje de mano, llevo mi propia comida, y no me importa el asiento
                que me toque. Así el precio inicial es el precio final.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm">
                  <strong>Cuidado:</strong> Revisa las políticas de equipaje antes de comprar.
                </p>
              </div>
            </section>

            {/* Trick 9 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">9.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Evita fechas de alta demanda</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Esto parece obvio, pero mucha gente no lo tiene en cuenta.</strong> Navidad, Semana Santa,
                puentes largos, festivales famosos... en esas fechas los precios se disparan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Si quieres ir a Oktoberfest, no busques vuelos para esas fechas exactas. Ve una semana antes o después.
                Lo mismo para Tailandia en año nuevo chino, o Japón durante la floración de los cerezos.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
                <p className="text-teal-800 text-sm">
                  <strong>Tip:</strong> Busca las fechas de festivales locales antes de planificar tu viaje.
                </p>
              </div>
            </section>

            {/* Trick 10 */}
            <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">10.</span>
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Borra cookies o cambia de país con VPN</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Este es mi truco secreto favorito.</strong> Las webs de vuelos usan cookies para rastrear
                tus búsquedas y pueden subir los precios si ven que vuelves varias veces a la misma ruta.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cada vez que busco vuelos, lo hago en modo incógnito. Y si veo un precio que me gusta pero no estoy
                seguro, borro las cookies antes de volver a buscar. También uso VPN para buscar desde diferentes países.
              </p>
              <a
                href="https://nordvpn.com/es/?ref=viajamejor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
              >
                Ver NordVPN
              </a>
            </section>
          </div>

          {/* Conclusion */}
          <div className="mt-16 border-t border-stone-200 pt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi consejo final</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No hay una fórmula mágica, pero si combinas varios de estos trucos seguro que consigues vuelos
              mucho más baratos.</strong> Yo suelo usar 4-5 de estos consejos en cada búsqueda, y rara vez pago el
              precio "normal" de un vuelo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lo más importante es ser paciente y flexible. A veces encontrar el vuelo perfecto lleva tiempo, pero
              cuando ahorras 300-400EUR, ese tiempo está muy bien invertido.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>¿Tienes algún truco extra que funcione?</strong> Escríbeme y lo añado en próximos posts.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <RelatedArticles currentCategory="Vuelos" currentArticleId="vuelos-baratos" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CheapFlightsArticle;

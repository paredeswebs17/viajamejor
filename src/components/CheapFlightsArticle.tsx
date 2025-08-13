import { ArrowLeft, Share2 } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface CheapFlightsArticleProps {
  onBack: () => void;
  onArticleSelect?: (articleId: string) => void;
}

const CheapFlightsArticle: React.FC<CheapFlightsArticleProps> = ({ onBack, onArticleSelect }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-sky-500 hover:text-sky-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al blog
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Vuelos
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Cómo encontrar vuelos baratos: mis 10 trucos infalibles
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Cómo encontrar vuelos baratos: mis 10 trucos infalibles',
                  text: 'Descubre cómo encontrar los mejores precios en vuelos',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                window.open(`https://twitter.com/intent/tweet?text=Cómo encontrar vuelos baratos: mis 10 trucos infalibles&url=${encodeURIComponent(window.location.href)}`, '_blank');
              }
            }}
            className="flex items-center hover:text-sky-500 transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Persona buscando vuelos baratos en laptop con billetes de avión"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Después de muchos viajes, he probado de todo para conseguir vuelos baratos.</strong> He perdido 
            horas comparando precios, he usado trucos raros que encontré en foros, y sí, también he cometido errores 
            que me costaron dinero extra.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Aquí te dejo mis 10 trucos favoritos que realmente me funcionan (y algunos son poco conocidos). 
            Con estos consejos he conseguido vuelos a Tailandia por 350€, a Japón por 420€ y a Nueva York por 280€. 
            No es magia, es estrategia.
          </p>
        </div>

        {/* Lista de trucos */}
        <div className="space-y-12">
          
          {/* Truco 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Usa Kiwi.com para buscar vuelos baratos
            </h2>
            <p className="text-gray-700 mb-4">
             Mi rutina siempre empieza aquí.<strong>Kiwi.com es mi herramienta favorita para buscar vuelos porque te permite encontrar rutas poco habituales, conexiones               raras y vuelos con escalas múltiples a buen precio.</strong> Además, tiene funciones muy útiles para ver fechas flexibles y detectar combinaciones que otros               buscadores no muestran
            </p>
            <p className="text-gray-700 mb-4">
             Lo que hago:<strong>busco directamente en Kiwi.com para comparar precios, explorar rutas alternativas y, si es necesario, añadir escalas.</strong> A veces la              diferencia puede ser de 100-200€ respecto a buscar solo vuelos directos.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-0">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Truco 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Sé flexible con fechas y aeropuertos
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>La flexibilidad es tu mejor amiga.</strong> Si puedes moverte ±3 días en tus fechas, 
              activa siempre la opción de "fechas flexibles". He ahorrado hasta 300€ simplemente cambiando 
              el vuelo del viernes al martes.
            </p>
            <p className="text-gray-700 mb-4">
              Con los aeropuertos pasa igual. En lugar de buscar solo Madrid-Bangkok, prueba también 
              Barcelona-Bangkok o incluso París-Bangkok. A veces un tren o bus barato hasta otro aeropuerto 
              te puede ahorrar una fortuna.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💡 Truco extra:</strong> Los martes y miércoles suelen ser los días más baratos para volar.
              </p>
            </div>
          </div>

          {/* Truco 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Busca en modo incógnito (y mejor aún: usa una VPN)
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Este truco me ha ahorrado cientos de euros.</strong> Las webs de vuelos rastrean tus búsquedas 
              y pueden subir los precios si ven que estás muy interesado en una ruta específica. Siempre busco en 
              modo incógnito para evitar esto.
            </p>
            <p className="text-gray-700 mb-4">
              Pero el truco definitivo es usar una VPN para cambiar tu ubicación. Los precios pueden variar según 
              el país desde donde busques. He encontrado vuelos 200€ más baratos buscando desde Argentina que desde España.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-0">
                👉 <strong>
                  <a href="https://nordvpn.com/es/?ref=viajamejor" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a NordVPN
                  </a>
               </strong>
              </p>
            </div>
          </div>

          {/* Truco 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Reserva con antelación (pero no demasiado)
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>El timing es crucial.</strong> Después de analizar mis compras de vuelos durante años, 
              he descubierto que el punto dulce está entre 6-8 semanas antes del viaje para vuelos europeos, 
              y 8-12 semanas para vuelos intercontinentales.
            </p>
            <p className="text-gray-700 mb-4">
              Reservar con 6 meses de antelación no siempre es más barato. Las aerolíneas suelen lanzar sus 
              mejores ofertas cuando quedan 2-3 meses, porque ya tienen una idea clara de la demanda.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm mb-0">
                <strong>⚠️ Excepción:</strong> En temporada alta (Navidad, verano) sí que conviene reservar antes.
              </p>
              <p className="text-orange-800 text-sm mb-0">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Truco 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Aprovecha alertas de precios y apps
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Deja que la tecnología trabaje por ti.</strong> Configuro alertas de precios en Skyscanner 
              y Google Flights para rutas que me interesan. Cuando baja el precio, me llega un email automáticamente.
            </p>
            <p className="text-gray-700 mb-4">
              También uso apps como Hopper, que predice si los precios van a subir o bajar en los próximos días. 
              No es 100% exacta, pero me ha ayudado a decidir si comprar ya o esperar un poco más.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💡 Consejo:</strong> Configura alertas para varias fechas, no solo una específica.
              </p>
            </div>
          </div>

          {/* Truco 6 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              Vuela entre semana si puedes
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Los fines de semana son caros, punto.</strong> Si tienes flexibilidad laboral, volar martes, 
              miércoles o jueves puede ahorrarte entre 50-150€ por trayecto. Los viernes y domingos son los peores días.
            </p>
            <p className="text-gray-700 mb-4">
              También evita los lunes por la mañana (vuelos de negocios) y los viernes por la tarde (vuelos de ocio). 
              Los vuelos nocturnos o muy temprano por la mañana también suelen ser más baratos.
            </p>
          </div>

          {/* Truco 7 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              Usa tarjetas de puntos o millas
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Las millas no son solo para viajeros de negocios.</strong> Tengo una tarjeta que me da millas 
              por cada compra normal (supermercado, gasolina, etc.). En un año junto suficientes para un vuelo 
              doméstico gratis.
            </p>
            <p className="text-gray-700 mb-4">
              También aprovecho las promociones de "millas dobles" que hacen las aerolíneas. A veces vale la pena 
              pagar un poco más por un vuelo si te da muchas más millas para futuros viajes.
            </p>
          </div>

          {/* Truco 8 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              Considera aerolíneas low-cost (pero revisa extras)
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Ryanair, Vueling, EasyJet... pueden ser geniales si sabes usarlas.</strong> El truco está en 
              leer la letra pequeña. Un vuelo de 30€ puede convertirse en 80€ si añades equipaje, asiento y comida.
            </p>
            <p className="text-gray-700 mb-4">
              Mi estrategia: viajo solo con equipaje de mano, llevo mi propia comida, y no me importa el asiento 
              que me toque. Así el precio inicial es el precio final.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm mb-0">
                <strong>⚠️ Cuidado:</strong> Revisa las políticas de equipaje antes de comprar.
              </p>
            </div>
          </div>

          {/* Truco 9 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
              Evita fechas de alta demanda
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Esto parece obvio, pero mucha gente no lo tiene en cuenta.</strong> Navidad, Semana Santa, 
              puentes largos, festivales famosos... en esas fechas los precios se disparan.
            </p>
            <p className="text-gray-700 mb-4">
              Si quieres ir a Oktoberfest, no busques vuelos para esas fechas exactas. Ve una semana antes o después. 
              Lo mismo para Tailandia en año nuevo chino, o Japón durante la floración de los cerezos.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💡 Truco:</strong> Busca las fechas de festivales locales antes de planificar tu viaje.
              </p>
            </div>
          </div>

          {/* Truco 10 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              Borra cookies o cambia de país con VPN
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Este es mi truco secreto favorito.</strong> Las webs de vuelos usan cookies para rastrear 
              tus búsquedas y pueden subir los precios si ven que vuelves varias veces a la misma ruta.
            </p>
            <p className="text-gray-700 mb-4">
              Cada vez que busco vuelos, lo hago en modo incógnito. Y si veo un precio que me gusta pero no estoy 
              seguro, borro las cookies antes de volver a buscar. También uso VPN para buscar desde diferentes países 
              - a veces los precios cambian radicalmente.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-0">
                👉 <strong>
                  <a href="https://nordvpn.com/es/?ref=viajamejor" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a NordVPN
                  </a>
               </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi consejo final</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>No hay una fórmula mágica, pero si combinas varios de estos trucos seguro que consigues vuelos 
            mucho más baratos.</strong> Yo suelo usar 4-5 de estos consejos en cada búsqueda, y rara vez pago el 
            precio "normal" de un vuelo.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lo más importante es ser paciente y flexible. A veces encontrar el vuelo perfecto lleva tiempo, pero 
            cuando ahorras 300-400€, ese tiempo está muy bien invertido.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tú tienes algún truco extra que funcione?</strong> Escríbeme y lo añado en próximos posts. 
            Me encanta descubrir nuevas formas de viajar gastando menos.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Te han servido estos trucos?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explora más consejos para ahorrar dinero en tus viajes
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Consejos
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentArticleId="cheap-flights" onArticleSelect={onArticleSelect || onBack} />
    </article>
  );
};

export default CheapFlightsArticle;
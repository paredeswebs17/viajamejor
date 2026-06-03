import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelInsuranceArticleProps {
  onBack: () => void;
}

const TravelInsuranceArticle: React.FC<TravelInsuranceArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Viajero con seguro de viaje"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Seguros
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            Seguro de viaje: por qué uso IATI y mi experiencia real
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              7 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              19.4k lecturas
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
                navigator.share({ title: 'Seguro de viaje: por qué uso IATI', url: window.location.href }).catch(() => {});
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
              <strong className="font-medium">Si me hubieras preguntado hace años, te habría dicho que el seguro de viaje no es necesario.</strong> Era uno de esos gastos que veía como "innecesarios" y que siempre intentaba evitar. Pero después de varios sustos, nunca salgo de casa sin él.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Aquí te cuento por qué uso IATI, que me cubrió cuando lo necesité de verdad, y cómo puedes contratarlo fácilmente con descuento.
            </p>
          </div>

          {/* Why you need it */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">¿Realmente necesitas un seguro de viaje?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong>La respuesta corta: SI.</strong> Un seguro de viaje te cubre en situaciones que pueden arruinar no solo tu viaje, sino también tu economía:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Emergencias médicas</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- Hospitalización por accidente</li>
                  <li>- Medicamentos de urgencia</li>
                  <li>- Repatriación médica</li>
                  <li>- Odontología de urgencia</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Problemas de viaje</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- Cancelación de vuelos</li>
                  <li>- Pérdida o retraso de equipaje</li>
                  <li>- Robo de documentos</li>
                  <li>- Responsabilidad civil</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
              <p className="text-teal-800 text-sm">
                <strong>Ejemplo:</strong> Una noche en urgencias en Estados Unidos puede costarte entre 3.000EUR y 10.000EUR. Una operación sencilla en Japón, fácilmente 15.000EUR. ¿Merece la pena arriesgarse por ahorrar 30EUR en seguro?
              </p>
            </div>
          </section>

          {/* Real experience */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <div className="mb-4">
              <span className="text-[10px] text-teal-600 font-bold uppercase tracking-[.2em] block mb-2">Experiencia real</span>
              <h2 className="font-serif text-xl md:text-2xl text-gray-900">Cuando IATI me salvó en Tailandia</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Bangkok, 2019. Segundo día de viaje.</strong> Me desperté con un dolor abdominal terrible que no mejoraba. Al principio pensé que era algo que había comido, pero cuando empecé a tener fiebre alta, supe que tenía que ir al hospital.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Resultado: apendicitis. Operación de urgencia, tres días hospitalizado, medicación y seguimiento. <strong>Coste total: 3.247EUR.</strong> Lo que yo pagué: 0EUR. IATI se encargó de todo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Pero lo mejor no fue solo el dinero. Fue tener a alguien que hablaba español al teléfono a las 3 de la madrugada, que me explicaba todo el proceso y que se encargó de hablar con el hospital.
            </p>
            <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
              <p className="text-teal-800 text-sm">
                <strong>Dato importante:</strong> El seguro de la tarjeta de crédito solo me cubría 600EUR. Sin IATI, habría tenido que pagar más de 2.600EUR de mi bolsillo.
              </p>
            </div>
          </section>

          {/* Why IATI */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">¿Por qué uso IATI?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Después de probar varios seguros, IATI es el que mejor me funciona.</strong> No es el más barato, pero la relación calidad-precio es excelente:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: 'Cobertura mundial real', desc: 'Funciona en todos los países, incluidos EEUU y Japón donde la sanidad es carísima.' },
                { title: 'Atención 24/7 en español', desc: 'Cuando estás enfermo a las 3 AM en Bangkok, poder hablar en tu idioma es un alivio enorme.' },
                { title: 'Deportes de aventura incluidos', desc: 'Senderismo, snorkel, buceo básico... están incluidos sin pagar extra.' },
                { title: 'Sin adelantar dinero', desc: 'En mi caso de Tailandia, IATI pagó directamente al hospital. No tuve que adelantar 3.000EUR.' },
                { title: 'App móvil práctica', desc: 'Tienes todos los datos del seguro en el móvil, puedes llamar directamente y hacer gestiones.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://www.iatiseguros.com?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
            >
              Ver IATI (5% descuento)
            </a>
          </section>

          {/* Types */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">¿Qué tipos de seguros tienen</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>IATI tiene varios tipos según tu perfil de viajero.</strong> Aquí te explico cuál recomiendo para cada situación:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { name: 'IATI Estándar', who: 'Viajes normales, turismo, ciudades, playa', price: '22-35EUR/semana', highlight: true },
                { name: 'IATI Estrella', who: 'Destinos caros (EEUU, Japón, Canadá)', price: '30-50EUR/semana', highlight: false },
                { name: 'IATI Mochilero', who: 'Viajes largos, aventura, nómadas digitales', price: '20-35EUR/semana', highlight: false },
                { name: 'IATI Escapadas', who: 'España y Europa en coche/furgoneta', price: '15-25EUR/semana', highlight: false },
              ].map((plan, i) => (
                <div key={i} className={`border rounded-sm p-5 ${plan.highlight ? 'border-teal-200 bg-teal-50/30' : 'border-stone-200'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold text-gray-900">{plan.name}</h3>
                    {plan.highlight && <span className="text-[9px] uppercase tracking-wider text-teal-600 font-bold">Mi favorito</span>}
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{plan.who}</p>
                  <p className="text-xs text-teal-700 font-medium">{plan.price}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.iatiseguros.com?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
            >
              Ver IATI (5% descuento)
            </a>
          </section>

          {/* How to */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">¿Cómo contratarlo (con 5% descuento)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Contratar IATI es súper fácil y se hace online en 5 minutos.</strong> Si usas mi enlace, tienes un 5% de descuento automático:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: '1', title: 'Entra desde mi enlace con descuento', desc: 'El descuento del 5% se aplica automáticamente.' },
                { step: '2', title: 'Elige tu tipo de seguro', desc: 'Para la mayoría de viajes, IATI Estándar es perfecto.' },
                { step: '3', title: 'Introduce fechas y destino', desc: 'El precio se calcula automáticamente según duración y destino.' },
                { step: '4', title: 'Rellena tus datos y paga', desc: 'Tarjeta, PayPal o transferencia. Recibes la póliza al instante.' },
                { step: '5', title: 'Descarga la app IATI', desc: 'Tendrás todos los datos del seguro en el móvil.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">{item.step}</span>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://www.iatiseguros.com?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
            >
              Contratar IATI con 5% descuento
            </a>
          </section>

          {/* Conclusion */}
          <div className="border-t border-stone-200 pt-12 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi conclusión personal</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Después de muchos viajes y algún que otro susto, para mí el seguro ya no es opcional.</strong> Prefiero pagar un poco más al principio y viajar tranquilo, sabiendo que si pasa algo, estoy cubierto.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              IATI me ha funcionado bien en situaciones reales, no solo en teoría. La experiencia de Tailandia me demostró que vale cada euro que cuesta.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>¿Tu qué opinas? ¿Has tenido alguna experiencia con seguros de viaje?</strong> Cuéntamelo, siempre me gusta conocer experiencias de otros viajeros.
            </p>
          </div>

          {/* Related */}
          <RelatedArticles currentCategory="Seguros" currentArticleId="iati-experiencia" />
        </div>
      </div>
    </article>
  );
};

export default TravelInsuranceArticle;

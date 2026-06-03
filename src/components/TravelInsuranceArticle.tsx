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
            Seguro de viaje: por que uso IATI y mi experiencia real
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
                navigator.share({ title: 'Seguro de viaje: por que uso IATI', url: window.location.href }).catch(() => {});
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
              <strong className="font-medium">Si me hubieras preguntado hace anos, te habria dicho que el seguro de viaje no es necesario.</strong> Era uno de esos gastos que veia como "innecesarios" y que siempre intentaba evitar. Pero despues de varios sustos, nunca salgo de casa sin el.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mt-5">
              Aqui te cuento por que uso IATI, que me cubrio cuando lo necesite de verdad, y como puedes contratarlo facilmente con descuento.
            </p>
          </div>

          {/* Why you need it */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">Realmente necesitas un seguro de viaje?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong>La respuesta corta: SI.</strong> Un seguro de viaje te cubre en situaciones que pueden arruinar no solo tu viaje, sino tambien tu economia:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Emergencias medicas</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- Hospitalizacion por accidente</li>
                  <li>- Medicamentos de urgencia</li>
                  <li>- Repatriacion medica</li>
                  <li>- Odontologia de urgencia</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-sm p-4">
                <p className="text-amber-800 text-sm font-medium mb-2">Problemas de viaje</p>
                <ul className="text-amber-700 text-xs space-y-1">
                  <li>- Cancelacion de vuelos</li>
                  <li>- Perdida o retraso de equipaje</li>
                  <li>- Robo de documentos</li>
                  <li>- Responsabilidad civil</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
              <p className="text-teal-800 text-sm">
                <strong>Ejemplo:</strong> Una noche en urgencias en Estados Unidos puede costarte entre 3.000EUR y 10.000EUR. Una operacion sencilla en Japon, facilmente 15.000EUR. Merece la pena arriesgarse por ahorrar 30EUR en seguro?
              </p>
            </div>
          </section>

          {/* Real experience */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[10px] text-teal-600 font-bold uppercase tracking-[.2em]">Experiencia real</span>
              <h2 className="font-serif text-xl md:text-2xl text-gray-900">Cuando IATI me salvo en Tailandia</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Bangkok, 2019. Segundo dia de viaje.</strong> Me desperte con un dolor abdominal terrible que no mejoraba. Al principio pense que era algo que habia comido, pero cuando empece a tener fiebre alta, supe que tenia que ir al hospital.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Resultado: apendicitis. Operacion de urgencia, tres dias hospitalizado, medicacion y seguimiento. <strong>Coste total: 3.247EUR.</strong> Lo que yo pague: 0EUR. IATI se encargo de todo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Pero lo mejor no fue solo el dinero. Fue tener a alguien que hablaba espanol al telefono a las 3 de la madrugada, que me explicaba todo el proceso y que se encargo de hablar con el hospital.
            </p>
            <div className="bg-teal-50 border border-teal-100 rounded-sm p-4">
              <p className="text-teal-800 text-sm">
                <strong>Dato importante:</strong> El seguro de la tarjeta de credito solo me cubria 600EUR. Sin IATI, habria tenido que pagar mas de 2.600EUR de mi bolsillo.
              </p>
            </div>
          </section>

          {/* Why IATI */}
          <section className="bg-white border border-stone-200 rounded-sm p-7 md:p-9 mb-10">
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">Por que uso IATI</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Despues de probar varios seguros, IATI es el que mejor me funciona.</strong> No es el mas barato, pero la relacion calidad-precio es excelente:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: 'Cobertura mundial real', desc: 'Funciona en todos los paises, incluidos EEUU y Japon donde la sanidad es carisima.' },
                { title: 'Atencion 24/7 en espanol', desc: 'Cuando estas enfermo a las 3 AM en Bangkok, poder hablar en tu idioma es un alivio enorme.' },
                { title: 'Deportes de aventura incluidos', desc: 'Senderismo, snorkel, buceo basico... estan incluidos sin pagar extra.' },
                { title: 'Sin adelantar dinero', desc: 'En mi caso de Tailandia, IATI pago directamente al hospital. No tuve que adelantar 3.000EUR.' },
                { title: 'App movil practica', desc: 'Tienes todos los datos del seguro en el movil, puedes llamar directamente y hacer gestiones.' },
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
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">Que tipos de seguros tienen</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>IATI tiene varios tipos segun tu perfil de viajero.</strong> Aqui te explico cual recomiendo para cada situacion:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { name: 'IATI Estandar', who: 'Viajes normales, turismo, ciudades, playa', price: '22-35EUR/semana', highlight: true },
                { name: 'IATI Estrella', who: 'Destinos caros (EEUU, Japon, Canada)', price: '30-50EUR/semana', highlight: false },
                { name: 'IATI Mochilero', who: 'Viajes largos, aventura, nomadas digitales', price: '20-35EUR/semana', highlight: false },
                { name: 'IATI Escapadas', who: 'Espana y Europa en coche/furgoneta', price: '15-25EUR/semana', highlight: false },
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
            <h2 className="font-serif text-xl md:text-2xl text-gray-900 mb-5">Como contratarlo (con 5% descuento)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Contratar IATI es super facil y se hace online en 5 minutos.</strong> Si usas mi enlace, tienes un 5% de descuento automatico:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: '1', title: 'Entra desde mi enlace con descuento', desc: 'El descuento del 5% se aplica automaticamente.' },
                { step: '2', title: 'Elige tu tipo de seguro', desc: 'Para la mayoria de viajes, IATI Estandar es perfecto.' },
                { step: '3', title: 'Introduce fechas y destino', desc: 'El precio se calcula automaticamente segun duracion y destino.' },
                { step: '4', title: 'Rellena tus datos y paga', desc: 'Tarjeta, PayPal o transferencia. Recibes la poliza al instante.' },
                { step: '5', title: 'Descarga la app IATI', desc: 'Tendras todos los datos del seguro en el movil.' },
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
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">Mi conclusion personal</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Despues de muchos viajes y algun que otro susto, para mi el seguro ya no es opcional.</strong> Prefiero pagar un poco mas al principio y viajar tranquilo, sabiendo que si pasa algo, estoy cubierto.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              IATI me ha funcionado bien en situaciones reales, no solo en teoria. La experiencia de Tailandia me demostro que vale cada euro que cuesta.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Tu que opinas? Has tenido alguna experiencia con seguros de viaje?</strong> Cuentamelo, siempre me gusta conocer experiencias de otros viajeros.
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

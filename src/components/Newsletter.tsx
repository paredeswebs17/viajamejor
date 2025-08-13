import { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };


  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-emerald-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¡Únete a Nuestra Comunidad!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Recibe consejos exclusivos, ofertas especiales y guías detalladas directamente en tu email. 
            Más de 10,000 viajeros ya forman parte de nuestra comunidad.
          </p>

          {isSubscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center text-green-600">
                <Mail className="h-6 w-6 mr-2" />
                <span className="font-semibold">¡Gracias por suscribirte!</span>
              </div>
              <p className="text-green-600 mt-2">
                Revisa tu email para confirmar tu suscripción.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email aquí..."
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Suscribirme
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Sin spam, lo prometemos
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Cancela cuando quieras
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Contenido exclusivo
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              <strong>¡Bonus!</strong> Al suscribirte tendrás acceso a contenido exclusivo y consejos premium:
            </p>
            <div className="text-center">
              <p className="text-orange-600 font-semibold">Contenido exclusivo para suscriptores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
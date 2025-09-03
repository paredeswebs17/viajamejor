import { useState } from 'react';
import { Gift, CheckCircle, TrendingUp } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Aquí integrarías con tu servicio de email marketing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubscribed(true);
      setEmail('');
      localStorage.setItem('newsletter-subscribed', 'true');
      
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      console.error('Error al suscribirse:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-sky-500 to-emerald-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ¡Únete a Nuestra Comunidad de Viajeros!
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Recibe consejos exclusivos, ofertas especiales y la guía gratuita 
            <strong> "Cómo Planificar tu Viaje Perfecto en 7 Pasos"</strong> directamente en tu email.
          </p>

          {/* Stats de credibilidad */}
          <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
              <span>+15,000 suscriptores</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-500 mr-1" />
              <span>Sin spam</span>
            </div>
          </div>

          {isSubscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center text-green-600 mb-3">
                <CheckCircle className="h-8 w-8 mr-3" />
                <span className="text-xl font-semibold">¡Bienvenido a la comunidad!</span>
              </div>
              <p className="text-green-700">
                Revisa tu email para descargar tu guía gratuita y confirmar tu suscripción.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none text-center sm:text-left"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    '🎁 CONSEGUIR GUÍA'
                  )}
                </button>
              </form>

              {/* Beneficios */}
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Guía PDF valorada en 29€
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Ofertas exclusivas semanales
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Cancela cuando quieras
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
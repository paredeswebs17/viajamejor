import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { trackContactFormSubmit } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://formspree.io/f/mwpqebpb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });

      // Track form submission
      trackContactFormSubmit({
        name: formData.name,
        email: formData.email
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-xl text-gray-600">
            Me encanta ayudar a otros viajeros. Escríbeme y te responderé lo antes posible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
              <p className="text-gray-600">
                Gracias por escribirme. Te responderé en las próximas 24 horas.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              method="POST" 
              action="https://formspree.io/f/mwpqebpb"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    placeholder="¿Cómo te llamas?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntame sobre tu próximo viaje o qué necesitas saber..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar mensaje
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-sky-500 mr-2" />
              <span className="text-gray-600">Respuesta en 24h</span>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
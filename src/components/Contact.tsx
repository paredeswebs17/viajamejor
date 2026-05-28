import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { trackContactFormSubmit } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://formspree.io/f/mwpqebpb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });

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
    <section ref={sectionRef} id="contacto" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center mb-14">
          <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light mt-4">
            Escríbeme y te responderé en 24h
          </p>
        </div>

        <div className="reveal">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 border-2 border-teal-200 rounded-full flex items-center justify-center mx-auto mb-5">
                <Send size={20} className="text-teal-600" />
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-2">Mensaje enviado</h3>
              <p className="text-sm text-gray-500">
                Te responderé en las próximas 24 horas.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              method="POST"
              action="https://formspree.io/f/mwpqebpb"
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm bg-slate-50"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm bg-slate-50"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none text-sm bg-slate-50"
                  placeholder="Cuéntame sobre tu próximo viaje..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-sm transition-colors duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-[.12em]"
              >
                <Send size={14} />
                <span>Enviar mensaje</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

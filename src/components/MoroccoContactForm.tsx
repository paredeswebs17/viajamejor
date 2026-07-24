import { useState, FormEvent } from 'react';
import { Check, Loader2, AlertCircle, Send } from 'lucide-react';
import { routes } from '../data/moroccoRoutes';

const FORMSPREE_ID = 'mgoglwbg';


const ROUTE_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'Aún no lo tengo claro' },
  { value: 'a-medida', label: 'A medida, diseñamos tu ruta' },
  ...routes.map((r) => ({ value: r.slug, label: r.title })),
];

export default function MoroccoContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    dates: '',
    route: '',
    message: '',
  });

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    const routeLabel = ROUTE_OPTIONS.find((o) => o.value === form.route)?.label ?? form.route;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          travelers: form.travelers,
          dates: form.dates || undefined,
          route: routeLabel || undefined,
          message: form.message || undefined,
          _source: 'marruecos_contact',
        }),
      });

      if (!res.ok) throw new Error('fetch failed');
      setStatus('ok');
      setForm({ name: '', email: '', phone: '', travelers: '2', dates: '', route: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const input =
    'w-full bg-transparent border-b border-ink-800/20 py-3 text-ink-900 placeholder:text-ink-500/60 focus:outline-none focus:border-terra-500 focus:ring-0 transition-colors text-sm';

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-cream-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 lg:gap-20">
        {/* Left column */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-terra-500 to-transparent" />
            <span className="text-[10px] uppercase tracking-[.25em] text-terra-600 font-medium">
              Diseña tu viaje
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.05] text-balance">
            Cuéntanos
            <span className="italic text-terra-600"> tu Marruecos </span>
            ideal.
          </h2>

          <div className="hidden md:block">
            <p className="mt-8 text-ink-500 font-light leading-relaxed max-w-md">
              Respondemos siempre en menos de 24h con una primera propuesta sin compromiso.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          className="md:col-span-7 bg-white p-8 md:p-12 space-y-6 shadow-lg border border-ink-100"
          noValidate
        >
          {status === 'ok' && (
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 rounded-sm">
              <Check size={16} className="flex-shrink-0 mt-0.5" />
              <p>Mensaje enviado correctamente. Te escribimos en menos de 24h.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 rounded-sm">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <p>No hemos podido enviarlo. Prueba de nuevo en unos minutos.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="morocco-name" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
                Nombre *
              </label>
              <input
                id="morocco-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className={input}
              />
            </div>
            <div>
              <label htmlFor="morocco-email" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
                Email *
              </label>
              <input
                id="morocco-email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className={input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="morocco-phone" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
              WhatsApp (opcional)
            </label>
            <input
              id="morocco-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+34 600 000 000"
              className={input}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="morocco-travelers" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
                Viajeros
              </label>
              <input
                id="morocco-travelers"
                type="number"
                min={1}
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="morocco-dates" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
                Fechas aproximadas
              </label>
              <input
                id="morocco-dates"
                value={form.dates}
                onChange={(e) => setForm({ ...form, dates: e.target.value })}
                placeholder="Abril 2026, 10 días"
                className={input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="morocco-route" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
              Ruta de interés
            </label>
            <select
              id="morocco-route"
              value={form.route}
              onChange={(e) => setForm({ ...form, route: e.target.value })}
              className={input}
            >
              {ROUTE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="morocco-message" className="text-[10px] uppercase tracking-[.15em] text-ink-500 font-medium block mb-1">
              Cuéntanos más
            </label>
            <textarea
              id="morocco-message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Qué os ilusiona, si viajáis con peques, alergias, presupuesto aproximado…"
              className={`${input} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full mt-4 py-4 bg-terra-500 text-white text-xs uppercase tracking-[.15em] font-medium hover:bg-terra-600 transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
          >
            {status === 'sending' ? (
              <><Loader2 size={16} className="animate-spin" /> Enviando...</>
            ) : (
              <><Send size={14} /> Enviar solicitud</>
            )}
          </button>
        </form>


      </div>
    </section>
  );
}

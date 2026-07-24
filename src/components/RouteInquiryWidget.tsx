import { FormEvent, useEffect, useState } from 'react';
import { Check, Loader2, MessageCircle, Clock3, Send, AlertCircle, Users } from 'lucide-react';
import { Route } from '../data/moroccoRoutes';

const FORMSPREE_ID = 'mgoglwbg';
const WA_NUMBER = '34660611668';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const STORAGE_KEY = 'morocco-inquiry-draft';

type Draft = {
  name: string;
  email: string;
  phone: string;
  travelers: string;
  month: string;
  message: string;
};

const EMPTY: Draft = {
  name: '',
  email: '',
  phone: '',
  travelers: '2',
  month: '',
  message: '',
};

function waLink(route: Route, travelers?: string, month?: string) {
  const parts = [`Hola! Me interesa la ruta "${route.title}" (${route.duration}).`];
  if (travelers && travelers !== '2') parts.push(`Somos ${travelers} viajeros.`);
  if (month) parts.push(`Nos gustaría ir en ${month}.`);
  parts.push('Me gustaría recibir más información.');
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(parts.join(' '))}`;
}

export default function RouteInquiryWidget({ route }: { route: Route }) {
  const [form, setForm] = useState<Draft>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setForm({ ...EMPTY, ...JSON.parse(raw) });
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (status === 'ok') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form, status]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          travelers: form.travelers,
          month: form.month || undefined,
          route: route.title,
          route_slug: route.slug,
          duration: route.duration,
          message: form.message || undefined,
          _source: 'route_inquiry_widget',
        }),
      });

      if (!res.ok) throw new Error('fetch failed');
      setStatus('ok');
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      setStatus('error');
    }
  }

  const markTouched = (field: string) => setTouched((t) => ({ ...t, [field]: true }));

  const input =
    'w-full bg-cream-50 border border-ink-800/15 px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-500/50 focus:outline-none focus:border-terra-500 focus:ring-1 focus:ring-terra-500/30 transition-all';

  const inputError = (field: string, value: string) =>
    touched[field] && !value.trim() ? 'border-red-400 bg-red-50/30' : '';

  if (status === 'ok') {
    return (
      <div className="bg-white border border-ink-100 p-7 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-terra-500 text-white flex items-center justify-center">
          <Check size={24} strokeWidth={2.5} />
        </div>
        <h3 className="font-serif text-2xl text-ink-900 mt-5">Solicitud recibida</h3>
        <p className="text-sm text-ink-500 mt-2 leading-relaxed">
          Ya estamos trabajando en tu propuesta personalizada.
        </p>

        <div className="mt-6 text-left space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terra-500 text-white text-[10px] font-semibold flex items-center justify-center">1</span>
            <div>
              <p className="text-sm text-ink-900 font-medium">Revisamos tu solicitud</p>
              <p className="text-xs text-ink-400">Hoy mismo</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terra-500/20 text-terra-700 text-[10px] font-semibold flex items-center justify-center">2</span>
            <div>
              <p className="text-sm text-ink-900 font-medium">Te enviamos propuesta a medida</p>
              <p className="text-xs text-ink-400">Lo antes posible</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-terra-500/20 text-terra-700 text-[10px] font-semibold flex items-center justify-center">3</span>
            <div>
              <p className="text-sm text-ink-900 font-medium">Conversación personal contigo</p>
              <p className="text-xs text-ink-400">Para ajustar cada detalle</p>
            </div>
          </div>
        </div>

        <a
          href={waLink(route, form.travelers, form.month)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-ink-900 text-white text-xs uppercase tracking-[.12em] font-medium hover:bg-terra-600 transition-colors"
        >
          <MessageCircle size={14} /> Escríbenos por WhatsApp
        </a>
        <p className="text-[11px] text-ink-400 mt-3">O espera nuestro email, te respondemos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white border border-ink-100 p-6 md:p-7 space-y-4 shadow-sm">
      <div className="pb-4 border-b border-ink-100">
        <div className="text-[10px] uppercase tracking-[.2em] text-terra-600 font-medium">
          Reserva sin compromiso
        </div>
        <div className="font-serif text-xl text-ink-900 mt-1 leading-tight">
          {route.title}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onBlur={() => markTouched('name')}
          placeholder="Nombre"
          className={`${input} ${inputError('name', form.name)}`}
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onBlur={() => markTouched('email')}
          placeholder="Email"
          className={`${input} ${inputError('email', form.email)}`}
        />
      </div>

      <input
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder="WhatsApp (opcional, respondemos antes)"
        className={input}
      />

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[.12em] text-ink-500 font-medium">
            Viajeros
          </span>
          <input
            type="number"
            min={1}
            value={form.travelers}
            onChange={(e) => setForm({ ...form, travelers: e.target.value })}
            className={`${input} mt-1`}
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[.12em] text-ink-500 font-medium">
            Mes preferido
          </span>
          <select
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
            className={`${input} mt-1 appearance-none`}
          >
            <option value="">Seleccionar</option>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>
      </div>

      <textarea
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="¿Algo importante? Aniversario, alergias, ritmo del viaje..."
        className={`${input} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 bg-terra-500 text-white text-xs uppercase tracking-[.12em] font-medium hover:bg-terra-600 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <><Loader2 size={14} className="animate-spin" /> Enviando...</>
        ) : (
          <><Send size={13} /> Solicitar propuesta</>
        )}
      </button>

      {status === 'error' && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 rounded-sm">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <p>No hemos podido enviarlo. Prueba de nuevo o escríbenos por WhatsApp.</p>
        </div>
      )}

      <a
        href={waLink(route, form.travelers, form.month)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 border border-ink-200 text-ink-900 text-xs uppercase tracking-[.12em] font-medium hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-colors flex items-center justify-center gap-2"
      >
        <MessageCircle size={13} /> Hablar por WhatsApp
      </a>

      <div className="pt-3 mt-2 border-t border-ink-100 space-y-2.5">
        <div className="flex items-center gap-2 text-[11px] text-ink-500">
          <Clock3 size={12} className="text-terra-500" />
          Respuesta en menos de 24h
        </div>
        <div className="flex items-center gap-2 text-[11px] text-ink-500">
          <Users size={12} className="text-terra-500" />
          <span>+350 viajeros en lo que llevamos de año</span>
        </div>
      </div>
    </form>
  );
}

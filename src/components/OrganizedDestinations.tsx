import { useState } from 'react';
import { ChevronRight, MessageCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';

interface Route {
  days: number;
  title: string;
  highlights: string;
  icon: string;
  from: string;
}

// ─── PALETA MARRUECOS ───────────────────────────────
const M = {
  cream:    '#FAF4EA',
  creamD:   '#F0E8D8',
  sand:     '#E8DAC8',
  terra:    '#C25430',
  terraD:   '#A04020',
  gold:     '#B08020',
  goldL:    '#D4A838',
  ink:      '#1C1710',
  inkMid:   '#4A4235',
  inkSoft:  '#8A7F70',
  white:    '#FFFFFF',
};

const routes: Route[] = [
  { days: 7, title: 'Marrakech al Desierto',  highlights: 'Ait Ben Haddou · Sahara · Gargantas Todra', icon: '🏜️', from: 'Marrakech' },
  { days: 8, title: 'Tánger a Marrakech',     highlights: 'Chefchaouen · Fez · Desierto · Kasbahs',    icon: '🔵', from: 'Tánger'    },
  { days: 5, title: 'Marruecos esencial',      highlights: 'Marrakech · Atlas · Valle Ourika',          icon: '⭐', from: 'Marrakech' },
  { days: 6, title: 'Norte de Marruecos',      highlights: 'Tánger · Chefchaouen · Fez · Volubilis',   icon: '🕌', from: 'Tánger'    },
];

const trust = ['Guía bereber +15 años', 'Todo en español', 'Grupos reducidos', 'Viaje personalizado'];

// ─── FUNNEL MARRUECOS ────────────────────────────────
const MoroccoFunnel = () => {
  const [open, setOpen] = useState(true);
  const [hovered, setHovered] = useState<number | null>(null);

  const wa = (msg: string) => {
    const phone = '34660611668'; // ← Sustituye por tu número
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={{
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(26,22,18,.14)',
      fontFamily: "'Georgia', serif",
      border: `1px solid ${M.sand}`,
      transition: 'box-shadow .4s ease',
    }}>

      {/* ── HERO IMAGE ── */}
      <div
        onClick={() => setOpen(!open)}
        style={{ position: 'relative', height: '220px', cursor: 'pointer', overflow: 'hidden' }}
      >
        <img
          src="https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg"
          alt="Marruecos"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform .8s ease',
            transform: open ? 'scale(1.04)' : 'scale(1)',
          }}
          loading="lazy"
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(26,22,18,.88) 0%, rgba(26,22,18,.15) 55%, transparent 100%)',
        }} />

        {/* Badge top-left */}
        <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{
            background: M.terra, color: M.white,
            fontSize: '10px', fontWeight: 700,
            padding: '5px 14px', borderRadius: '100px',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '.14em', textTransform: 'uppercase',
          }}>
            Nuevo · Organizado
          </span>
        </div>

        {/* Rating top-right */}
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <span style={{
            background: 'rgba(255,255,255,.93)',
            color: M.gold, fontSize: '11px', fontWeight: 600,
            padding: '5px 12px', borderRadius: '100px',
            fontFamily: 'Arial, sans-serif',
          }}>
            ★ 5.0 TripAdvisor
          </span>
        </div>

        {/* Bottom content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '20px 24px',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        }}>
          <div>
            <p style={{
              color: M.goldL, fontSize: '9.5px', fontWeight: 500,
              letterSpacing: '.28em', textTransform: 'uppercase',
              fontFamily: 'Arial, sans-serif', marginBottom: 6,
            }}>
              Destino organizado
            </p>
            <h3 style={{
              color: M.white, fontSize: 'clamp(28px,5vw,36px)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1, margin: 0,
            }}>
              Marruecos
            </h3>
            <p style={{
              color: 'rgba(255,255,255,.72)', fontSize: '13px',
              fontFamily: 'Arial, sans-serif', fontWeight: 300,
              marginTop: 5,
            }}>
              Viajes a medida con guía local en español
            </p>
          </div>
          <div style={{
            flexShrink: 0, marginLeft: 12,
            background: 'rgba(255,255,255,.15)',
            border: '1px solid rgba(255,255,255,.3)',
            borderRadius: '50%', padding: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {open
              ? <ChevronUp size={18} color={M.white} />
              : <ChevronDown size={18} color={M.white} />
            }
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      {open && (
        <div style={{ background: M.cream }}>

          {/* Trust badges */}
          <div style={{ padding: '18px 20px 10px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {trust.map(b => (
              <span key={b} style={{
                background: M.white, border: `1px solid ${M.sand}`,
                color: M.inkMid, fontSize: '11px', fontWeight: 500,
                padding: '4px 12px', borderRadius: '100px',
                fontFamily: 'Arial, sans-serif',
              }}>
                {b}
              </span>
            ))}
          </div>

          {/* Section label */}
          <div style={{ padding: '8px 20px 4px' }}>
            <p style={{
              color: M.terra, fontSize: '9.5px', fontWeight: 700,
              letterSpacing: '.24em', textTransform: 'uppercase',
              fontFamily: 'Arial, sans-serif', margin: 0,
            }}>
              — Rutas disponibles
            </p>
          </div>

          {/* Routes */}
          <div style={{ padding: '6px 20px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {routes.map((r, i) => (
              <div
                key={i}
                onClick={() => wa(`Hola Antonio! He visto la ruta "${r.title}" (${r.days} días desde ${r.from}) en Viaja Mejor y me interesa más información. ¿Puedes contarme los detalles?`)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: M.white,
                  border: `1px solid ${hovered === i ? M.terra : M.sand}`,
                  borderRadius: 14, padding: '10px 14px',
                  cursor: 'pointer', fontFamily: 'Arial, sans-serif',
                  boxShadow: hovered === i ? '0 4px 20px rgba(194,84,48,.13)' : 'none',
                  transition: 'all .25s ease',
                }}
              >
                {/* Days circle */}
                <div style={{
                  flexShrink: 0, width: 50, height: 50,
                  borderRadius: '50%', background: M.cream,
                  border: `1px solid rgba(194,84,48,.25)`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Georgia',serif", fontSize: 19,
                    color: M.terra, fontWeight: 700, lineHeight: 1,
                  }}>{r.days}</span>
                  <span style={{
                    fontSize: 8, color: M.inkSoft,
                    letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 2,
                  }}>días</span>
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 14 }}>{r.icon}</span>
                    <p style={{
                      fontSize: 13.5, color: M.ink, fontWeight: 600,
                      margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>{r.title}</p>
                  </div>
                  <p style={{
                    fontSize: 11, color: M.inkSoft, margin: '3px 0 0',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{r.highlights}</p>
                </div>

                <ChevronRight size={15} color={M.terra} style={{ flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Editorial text */}
          <div style={{
            margin: '0 20px 16px',
            padding: '14px 16px',
            background: M.white,
            borderLeft: `3px solid ${M.terra}`,
            borderRadius: '0 12px 12px 0',
          }}>
            <p style={{
              fontSize: 13, color: M.inkMid, lineHeight: 1.75,
              fontFamily: 'Arial, sans-serif', margin: 0,
            }}>
              Tengo contacto con una agencia local con{' '}
              <strong style={{ color: M.ink }}>más de 15 años</strong>{' '}
              de experiencia. Viajes 100% personalizados,
              en grupo reducido o privado.{' '}
              <strong style={{ color: M.ink }}>Todo en español, sin intermediarios.</strong>
            </p>
          </div>

          {/* CTA WhatsApp */}
          <div style={{ padding: '0 20px 16px' }}>
            <button
              onClick={() => wa('Hola Antonio! He visto las rutas organizadas a Marruecos en Viaja Mejor y me gustaría más información. ¿Puedes ayudarme?')}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10,
                background: '#25D366', color: M.white,
                border: 'none', borderRadius: 14,
                padding: '15px 20px', cursor: 'pointer',
                fontSize: 13, fontWeight: 600,
                fontFamily: 'Arial, sans-serif',
                boxShadow: '0 6px 20px rgba(37,211,102,.3)',
                transition: 'all .2s ease',
                letterSpacing: '.02em',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#1DA855'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#25D366'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              <MessageCircle size={16} />
              Pedir información por WhatsApp
            </button>
            <p style={{
              textAlign: 'center', fontSize: 11,
              color: M.inkSoft, fontFamily: 'Arial, sans-serif',
              marginTop: 8,
            }}>
              Te respondo personalmente y te pongo en contacto con la agencia 🙌
            </p>
          </div>

          {/* Footer */}
          <div style={{
            padding: '10px 20px 16px',
            borderTop: `1px solid ${M.sand}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Star size={13} color={M.goldL} />
              <span style={{ fontSize: 11, color: M.inkSoft, fontFamily: 'Arial, sans-serif' }}>
                TripAdvisor 5.0 · Airbnb 4.97
              </span>
            </div>
            <span style={{ fontSize: 11, color: M.terra, fontStyle: 'italic' }}>
              Marruecos de verdad
            </span>
          </div>

        </div>
      )}
    </div>
  );
};

// ─── CONTENEDOR PRINCIPAL ────────────────────────────
const OrganizedDestinations = () => (
  <section className="relative py-6 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header — estilo Viaja Mejor */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            Nuevo
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Destinos Organizados</h2>
            <p className="text-sm text-gray-500 mt-0.5">Viajes a medida con guía local · Todo en español</p>
          </div>
        </div>
      </div>

      {/* Grid de destinos — añade más aquí cuando los tengas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <MoroccoFunnel />
        {/* <JapanFunnel /> */}
        {/* <JordanFunnel /> */}
      </div>

    </div>
  </section>
);

export default OrganizedDestinations;

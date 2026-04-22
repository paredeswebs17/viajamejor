import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, ChevronRight, Star, Shield, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const TERRA = '#C25430';
const GOLD  = '#D4A838';
const CREAM = '#FAF4EA';
const SAND  = '#E8DAC8';
const INK   = '#1C1710';
const MID   = '#4A4235';
const SOFT  = '#8A7F70';
const WA    = '34660611668'; // ← Cambia por tu número real

const routes = [
  { days:7, from:'Marrakech', title:'Marrakech al Desierto',  sub:'Ait Ben Haddou · Sahara · Gargantas Todra',  icon:'🏜️', img:'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg' },
  { days:8, from:'Tánger',    title:'Tánger a Marrakech',     sub:'Chefchaouen · Fez · Desierto · Kasbahs',     icon:'🔵', img:'https://images.pexels.com/photos/16834923/pexels-photo-16834923.jpeg' },
  { days:5, from:'Marrakech', title:'Marruecos esencial',     sub:'Marrakech · Atlas · Valle Ourika',           icon:'⭐', img:'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg' },
  { days:6, from:'Tánger',    title:'Norte de Marruecos',     sub:'Tánger · Chefchaouen · Fez · Volubilis',    icon:'🕌', img:'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg' },
];

const testimonials = [
  { name:'Trinidad R.', text:'Nos llevaron a lugares que nos dejaron sin aliento. Desde los zocos hasta una noche en el desierto con puestas de sol doradas. Una experiencia inolvidable.', source:'TripAdvisor', initial:'T', color:'linear-gradient(135deg,#C25430,#D4A838)' },
  { name:'Elvira M.',   text:'Viajar con ellos es hacerlo con la tranquilidad de que todo está organizado hasta el último detalle. Un trato excelente y atención única.', source:'TripAdvisor', initial:'E', color:'linear-gradient(135deg,#3A5A3A,#B08020)' },
  { name:'Isabel C.',   text:'Un viaje fantástico e inolvidable. Solo puedo decir mil gracias, ¡os llevo en el corazón!', source:'TripAdvisor', initial:'I', color:'linear-gradient(135deg,#B08020,#E89874)' },
];

const wa = (msg: string) =>
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');

export default function MarruecosOrganizadoPage() {
  const [openRoute, setOpenRoute] = useState<number|null>(null);

  return (
    <>
      <Helmet>
        <title>Marruecos Organizado — Rutas a medida · Viaja Mejor</title>
        <meta name="description" content="Rutas organizadas a Marruecos con guía local en español. Viajes a medida, grupos reducidos, TripAdvisor 5 estrellas." />
      </Helmet>

      {/* ─── HERO ─── */}
      <section style={{ position:'relative', height:'100vh', minHeight:640, overflow:'hidden', display:'flex', alignItems:'center' }}>
        <img
          src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg"
          alt="Marruecos"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:'heroZoom 14s ease-out forwards' }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(26,22,18,.75) 0%,rgba(26,22,18,.2) 50%,transparent 100%), linear-gradient(to right,rgba(26,22,18,.5) 0%,transparent 60%)' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:680, padding:'0 24px', marginLeft:'clamp(20px, 5vw, 80px)' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:12, marginBottom:28, fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:GOLD, fontFamily:'Arial,sans-serif' }}>
            <span style={{ width:28, height:1, background:GOLD, opacity:.7, display:'block' }} />
            Destino organizado · Viaja Mejor
          </div>
          <h1 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(48px,8vw,92px)', fontWeight:300, lineHeight:.97, color:'white', marginBottom:28, letterSpacing:'-.015em' }}>
            Marruecos,<br /><em style={{ color:'#F0D485' }}>a tu medida</em>
          </h1>
          <p style={{ fontSize:16, fontWeight:300, color:'rgba(248,241,228,.85)', maxWidth:460, lineHeight:1.8, marginBottom:40, fontFamily:'Arial,sans-serif' }}>
            Rutas auténticas con guía local bereber en español. Sin intermediarios, sin turismo de catálogo. Marruecos de verdad.
          </p>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'center' }}>
            <button
              onClick={() => wa('Hola Antonio! He visto las rutas de Marruecos en Viaja Mejor y me gustaría más información.')}
              style={{ display:'inline-flex', alignItems:'center', gap:10, background:TERRA, color:'white', border:'none', borderRadius:100, padding:'16px 32px', fontSize:12, fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', cursor:'pointer', fontFamily:'Arial,sans-serif', boxShadow:'0 6px 24px rgba(194,84,48,.35)', transition:'all .3s ease' }}
            >
              <MessageCircle size={15} /> Consultar por WhatsApp
            </button>
            <a href="#rutas" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'rgba(248,241,228,.8)', fontSize:12, fontWeight:400, letterSpacing:'.12em', textTransform:'uppercase', textDecoration:'none', fontFamily:'Arial,sans-serif' }}>
              Ver rutas <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ position:'absolute', bottom:32, left:0, right:0, zIndex:2, display:'flex', justifyContent:'center', gap:'clamp(16px,4vw,40px)', flexWrap:'wrap', padding:'0 24px' }}>
          {[['★ 5.0','TripAdvisor'],['4.97','Airbnb'],['15+','Años exp.'],['Grupos','Reducidos']].map(([v,l]) => (
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(18px,3vw,24px)', fontWeight:500, color:'white', lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:9, color:'rgba(248,241,228,.5)', letterSpacing:'.14em', textTransform:'uppercase', marginTop:4, fontFamily:'Arial,sans-serif' }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@keyframes heroZoom{from{transform:scale(1.08)}to{transform:scale(1.02)}}`}</style>
      </section>

      {/* ─── RUTAS ─── */}
      <section id="rutas" style={{ background:CREAM, padding:'96px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', marginBottom:16, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
              <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> Rutas disponibles <span style={{ width:24, height:1, background:TERRA, display:'block' }} />
            </p>
            <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:300, color:INK, lineHeight:1.05, letterSpacing:'-.01em' }}>
              Elige tu <em style={{ color:TERRA }}>ruta perfecta</em>
            </h2>
            <p style={{ fontSize:15, color:SOFT, fontFamily:'Arial,sans-serif', fontWeight:300, marginTop:16, maxWidth:500, margin:'16px auto 0' }}>
              Todas las rutas son 100% personalizables. Cuéntame tus fechas y preferencias.
            </p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {routes.map((r, i) => (
              <div
                key={i}
                style={{ background:'white', borderRadius:16, border:`1px solid ${openRoute===i ? TERRA : SAND}`, overflow:'hidden', transition:'all .4s ease', boxShadow: openRoute===i ? '0 8px 32px rgba(194,84,48,.12)' : '0 2px 12px rgba(26,22,18,.04)' }}
              >
                <div onClick={() => setOpenRoute(openRoute===i ? null : i)} style={{ display:'flex', alignItems:'center', gap:16, padding:'20px 24px', cursor:'pointer' }}>
                  <div style={{ flexShrink:0, width:72, height:72, borderRadius:12, overflow:'hidden' }}>
                    <img src={r.img} alt={r.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" />
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                      <span style={{ background:CREAM, border:`1px solid ${SAND}`, borderRadius:100, padding:'2px 10px', fontSize:10, fontWeight:600, color:TERRA, fontFamily:'Arial,sans-serif', letterSpacing:'.06em' }}>
                        Desde {r.from}
                      </span>
                      <span style={{ fontSize:10, color:SOFT, fontFamily:'Arial,sans-serif' }}>{r.days} días</span>
                    </div>
                    <h3 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(15px,2vw,21px)', fontWeight:500, color:INK, margin:0, lineHeight:1.2 }}>
                      {r.icon} {r.title}
                    </h3>
                    <p style={{ fontSize:12, color:SOFT, margin:'4px 0 0', fontFamily:'Arial,sans-serif' }}>{r.sub}</p>
                  </div>
                  <div style={{ flexShrink:0, display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
                    <div style={{ width:52, height:52, borderRadius:'50%', background:CREAM, border:`1px solid rgba(194,84,48,.2)`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontFamily:"'Georgia',serif", fontSize:20, fontWeight:700, color:TERRA, lineHeight:1 }}>{r.days}</span>
                      <span style={{ fontSize:8, color:SOFT, letterSpacing:'.1em', textTransform:'uppercase' }}>días</span>
                    </div>
                    {openRoute===i ? <ChevronUp size={16} color={TERRA} /> : <ChevronDown size={16} color={SOFT} />}
                  </div>
                </div>

                {openRoute===i && (
                  <div style={{ padding:'0 24px 24px', borderTop:`1px solid ${SAND}` }}>
                    <div style={{ paddingTop:20, display:'flex', flexDirection:'column', gap:12 }}>
                      <p style={{ fontSize:14, color:MID, lineHeight:1.8, fontFamily:'Arial,sans-serif' }}>
                        Ruta de <strong style={{ color:INK }}>{r.days} días</strong> desde <strong style={{ color:INK }}>{r.from}</strong> con guía local bereber en español. Alojamientos seleccionados con alma, transporte privado y experiencias auténticas.
                      </p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                        {['Guía en español','Transporte privado','Alojamiento incluido','Grupos reducidos'].map(b => (
                          <span key={b} style={{ background:CREAM, border:`1px solid ${SAND}`, color:MID, fontSize:11, fontWeight:500, padding:'4px 12px', borderRadius:100, fontFamily:'Arial,sans-serif' }}>{b}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => wa(`Hola Antonio! Me interesa la ruta "${r.title}" de ${r.days} días desde ${r.from} en Viaja Mejor. ¿Puedes darme más información?`)}
                        style={{ alignSelf:'flex-start', display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'white', border:'none', borderRadius:12, padding:'14px 24px', fontSize:13, fontWeight:600, fontFamily:'Arial,sans-serif', cursor:'pointer', boxShadow:'0 4px 16px rgba(37,211,102,.3)', transition:'all .2s ease' }}
                      >
                        <MessageCircle size={15} /> Consultar esta ruta
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POR QUÉ ─── */}
      <section style={{ background:'white', padding:'96px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:16 }}>
              <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> Por qué elegirnos <span style={{ width:24, height:1, background:TERRA, display:'block' }} />
            </p>
            <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(28px,4vw,50px)', fontWeight:300, color:INK, lineHeight:1.05 }}>
              Diferente <em style={{ color:TERRA }}>por naturaleza</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:48 }}>
            {[
              { icon:<Globe size={28} color={TERRA} />, title:'Guía local bereber', text:'Ali lleva más de 15 años recorriendo cada rincón del país. Conoce los lugares que no salen en las guías.' },
              { icon:<Shield size={28} color={TERRA} />, title:'Todo en español', text:'Atención personalizada de principio a fin, sin intermediarios. Gestionado directamente contigo.' },
              { icon:<Users size={28} color={TERRA} />, title:'100% personalizado', text:'Cada ruta se adapta a tus fechas, intereses y ritmo. Ningún viaje es igual a otro.' },
            ].map((item,i) => (
              <div key={i} style={{ textAlign:'center', padding:'24px 16px' }}>
                <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:72, height:72, borderRadius:'50%', background:CREAM, border:`1px solid ${SAND}`, marginBottom:20 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily:"'Georgia',serif", fontSize:22, fontWeight:500, color:INK, marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:SOFT, lineHeight:1.75, fontFamily:'Arial,sans-serif', fontWeight:300 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section style={{ background:INK, padding:'96px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:GOLD, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:16 }}>
              <span style={{ width:24, height:1, background:GOLD, opacity:.5, display:'block' }} /> Opiniones reales <span style={{ width:24, height:1, background:GOLD, opacity:.5, display:'block' }} />
            </p>
            <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(26px,4vw,50px)', fontWeight:300, color:'white', lineHeight:1.05 }}>
              Lo que dicen <em style={{ color:'#F0D485' }}>nuestros viajeros</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
            {testimonials.map((t,i) => (
              <div key={i} style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.08)', borderRadius:16, padding:'32px 28px', transition:'all .4s ease' }}>
                <div style={{ fontSize:13, letterSpacing:3, color:GOLD, marginBottom:16 }}>★★★★★</div>
                <p style={{ fontFamily:"'Georgia',serif", fontSize:16, fontWeight:300, fontStyle:'italic', color:'rgba(248,241,228,.9)', lineHeight:1.7, marginBottom:24 }}>
                  "{t.text}"
                </p>
                <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:20, borderTop:'1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ width:40, height:40, borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontFamily:"'Georgia',serif", fontSize:17, fontStyle:'italic' }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:500, color:'white', margin:0 }}>{t.name}</p>
                    <p style={{ fontSize:10, color:'rgba(248,241,228,.45)', letterSpacing:'.1em', textTransform:'uppercase', margin:'2px 0 0', fontFamily:'Arial,sans-serif' }}>{t.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:56 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'14px 32px', border:'1px solid rgba(212,168,56,.25)', borderRadius:100, background:'rgba(212,168,56,.05)' }}>
              <Star size={14} color={GOLD} />
              <span style={{ fontSize:11, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(212,168,56,.8)', fontFamily:'Arial,sans-serif', fontWeight:500 }}>
                ★ 5.0 TripAdvisor · Airbnb 4.97 · +200 viajeros satisfechos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background:CREAM, padding:'120px 24px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:300, background:`radial-gradient(ellipse,rgba(194,84,48,.1) 0%,transparent 70%)`, pointerEvents:'none' }} />
        <div style={{ maxWidth:720, margin:'0 auto', position:'relative' }}>
          <p style={{ fontSize:10, fontWeight:600, letterSpacing:'.28em', textTransform:'uppercase', color:TERRA, fontFamily:'Arial,sans-serif', display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:24 }}>
            <span style={{ width:24, height:1, background:TERRA, display:'block' }} /> Diseña tu viaje <span style={{ width:24, height:1, background:TERRA, display:'block' }} />
          </p>
          <h2 style={{ fontFamily:"'Georgia',serif", fontSize:'clamp(34px,5vw,62px)', fontWeight:300, color:INK, lineHeight:1.05, marginBottom:24, letterSpacing:'-.01em' }}>
            ¿Listo para vivir el<br /><em style={{ color:TERRA }}>Marruecos de verdad?</em>
          </h2>
          <p style={{ fontSize:15, color:SOFT, lineHeight:1.85, maxWidth:520, margin:'0 auto 48px', fontFamily:'Arial,sans-serif', fontWeight:300 }}>
            Cuéntame qué buscas en tu viaje y te pongo en contacto directo con la agencia. Sin compromiso, te respondo personalmente.
          </p>
          <div style={{ display:'inline-flex', alignItems:'center', gap:16, background:'white', padding:'10px 10px 10px 28px', borderRadius:100, border:`1px solid ${SAND}`, boxShadow:'0 12px 40px rgba(26,22,18,.08)' }}>
            <span style={{ fontSize:13, color:MID, fontFamily:'Arial,sans-serif' }}>Empezar conversación</span>
            <button
              onClick={() => wa('Hola Antonio! He visto las rutas de Marruecos en Viaja Mejor y me gustaría planificar mi viaje. ¿Puedes ayudarme?')}
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'white', border:'none', borderRadius:100, padding:'15px 28px', fontSize:12, fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', fontFamily:'Arial,sans-serif', cursor:'pointer', transition:'all .3s ease' }}
            >
              <MessageCircle size={14} /> WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

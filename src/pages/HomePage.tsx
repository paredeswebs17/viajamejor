import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ExploreDestinations from '../components/ExploreDestinations';
import OrganizedDestinations from '../components/OrganizedDestinations';
import BlogSection from '../components/BlogSection';
import Recommendations from '../components/Recommendations';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Viaja Mejor - Consejos de Viaje para Viajar Más y Gastar Menos</title>
        <meta name="description" content="Descubre cómo viajar más gastando menos. Consejos prácticos, herramientas útiles y trucos probados en más de 40 países para viajar inteligente." />
        <meta name="keywords" content="viajar barato, consejos viaje, vuelos baratos, equipaje viaje, seguro viaje" />
        <link rel="canonical" href="https://viajamejor.net/" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Viaja Mejor" />
        <meta name="theme-color" content="#0ea5e9" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viaja Mejor - Consejos de Viaje" />
        <meta name="twitter:description" content="Consejos prácticos para viajar más gastando menos" />
        <meta name="twitter:image" content="https://viajamejor.net/og-image.jpg" />

        {/* Open Graph */}
        <meta property="og:title" content="Viaja Mejor - Consejos de Viaje para Viajar Más y Gastar Menos" />
        <meta property="og:description" content="Descubre cómo viajar más gastando menos. Consejos prácticos y herramientas probadas en 40+ países." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viajamejor.net/" />
        <meta property="og:image" content="https://viajamejor.net/og-image.jpg" />

        {/* Schema markup para Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Viaja Mejor",
            "description": "Consejos de viaje para viajar más y gastar menos",
            "url": "https://viajamejor.net"
          })}
        </script>
        {/* Schema FAQ (preguntas visibles en la home) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuál es la mejor época para encontrar vuelos baratos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La mejor época para encontrar vuelos baratos es entre 6-8 semanas antes del viaje para vuelos europeos, y 8-12 semanas para vuelos intercontinentales. Los martes y miércoles suelen tener los precios más bajos, y evita las fechas de alta demanda como Navidad, Semana Santa y puentes largos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Necesito seguro de viaje para todos mis viajes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, recomiendo contratar seguro de viaje para todos los viajes al extranjero. Una emergencia médica puede costar miles de euros. Yo uso IATI Seguros porque ofrece cobertura mundial, atención 24/7 en español y no necesitas adelantar dinero en caso de emergencia."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué tarjeta es mejor para viajar sin comisiones?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Revolut es mi favorita para viajar. Permite retirar hasta 200€ al mes sin comisiones, cambio de divisa al tipo real, y pagos sin comisiones en cualquier moneda. Como alternativa, Wise es excelente para transferencias internacionales y N26 para viajes por Europa."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto dinero necesito para viajar por el Sudeste Asiático?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En el Sudeste Asiático puedes viajar cómodamente con 25-35€ al día incluyendo alojamiento, comida y transporte local. En Tailandia he llegado a gastar solo 15€/día durmiendo en hostels y comiendo comida local. Los vuelos suelen costar entre 400-600€ desde España."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué debo llevar en mi equipaje de mano para un viaje largo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los imprescindibles son: adaptador universal, power bank de 20.000 mAh, auriculares con cancelación de ruido, almohada de viaje, botella reutilizable, organizador de cables, tapones para oídos, antifaz, y una muda de ropa de repuesto. Todo debe caber en una mochila de 40L máximo."
                }
              },
              {
                "@type": "Question",
                "name": "¿Es seguro usar Airbnb o es mejor reservar hoteles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ambos son seguros si eliges bien. Uso Booking para estancias cortas y cuando quiero cancelación flexible. Airbnb es ideal para estancias largas (una semana o más) o viajes en grupo. Siempre leo las reseñas y verifico que el anfitrión tenga buena puntuación y responda rápido."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo puedo viajar barato por Europa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para viajar barato por Europa: usa aerolíneas low-cost como Ryanair, reserva hostels o apartamentos en Airbnb, come en supermercados, usa transporte público, viaja en temporada baja (octubre-marzo excepto Navidad), y considera destinos menos turísticos como Albania, Polonia o Rumanía."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué apps necesito para viajar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las apps esenciales son: Skyscanner (vuelos baratos), Google Maps y Maps.me (navegación offline), Google Translate (traducción offline), Revolut/Wise (pagos sin comisiones), NordVPN (seguridad), XE Currency (cambio de divisas), y las apps de tu seguro de viaje y aerolíneas."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Hero />
      <ExploreDestinations />
      <OrganizedDestinations />
      <BlogSection onArticleSelect={() => {}} />
      <Recommendations />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
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
      </Helmet>

      <Hero />
      <BlogSection onArticleSelect={() => {}} />
      
      {/* Enlace a Guías */}
      <section className="py-6 bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-200">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              🗺️ ¿Buscas itinerarios completos?
            </h2>
            <p className="text-gray-600 mb-4">
              Descubre nuestras guías detalladas con itinerarios día por día, presupuestos reales y mapas para aprovechar al máximo tu viaje
            </p>
            <Link 
              to="/guias"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📖 Ver Todas las Guías
            </Link>
          </div>
        </div>
      </section>
      
      <Recommendations />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
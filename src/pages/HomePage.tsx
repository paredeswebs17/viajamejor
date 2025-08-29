import { Helmet } from 'react-helmet-async';
import { useNewsletterPopup } from '../hooks/useNewsletterPopup';
import NewsletterPopup from '../components/NewsletterPopup';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';
import About from '../components/About';
import Recommendations from '../components/Recommendations';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

const HomePage = () => {
  const { isOpen: isNewsletterOpen, closePopup: closeNewsletter } = useNewsletterPopup({
    delayMs: 25000, // 25 segundos
    scrollPercentage: 40, // 40% de scroll
    exitIntent: true,
    timeOnPage: 30000 // 30 segundos
  });

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
      <About />
      <Recommendations />
      <FAQ />
      <Newsletter />
      <Contact />
      
      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={closeNewsletter} 
      />
    </>
  );
};

export default HomePage;
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import TravelCardsArticle from '../components/TravelCardsArticle';

const TravelCardsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Mejores Tarjetas para Viajar Sin Comisiones: Revolut vs N26 | Viaja Mejor</title>
        <meta name="description" content="Comparativa completa de las mejores tarjetas para viajar sin comisiones. Revolut, N26, Wise... Ahorra cientos de euros en tu próximo viaje." />
        <meta name="keywords" content="tarjetas sin comisiones, revolut, n26, tarjetas viajar extranjero, tarjetas sin comisiones extranjero" />
        <link rel="canonical" href="https://viajamejor.net/finanzas/tarjetas-sin-comisiones" />
        
        <meta property="og:title" content="Mejores Tarjetas para Viajar Sin Comisiones: Revolut vs N26" />
        <meta property="og:description" content="Descubre qué tarjetas te ahorrarán dinero en tus viajes al extranjero. Comparativa real y enlaces directos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/finanzas/tarjetas-sin-comisiones" />
        <meta property="og:image" content="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Las mejores tarjetas para viajar al extranjero sin comisiones",
            "description": "Guía completa de las mejores tarjetas bancarias para viajar sin pagar comisiones extra",
            "author": {
              "@type": "Person",
              "name": "Viaja Mejor"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Viaja Mejor",
              "logo": {
                "@type": "ImageObject",
                "url": "https://viajamejor.net/apple-touch-icon.png"
              }
            },
            "datePublished": "2024-02-01",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/finanzas/tarjetas-sin-comisiones"
          })}
        </script>
      </Helmet>

      <TravelCardsArticle onBack={handleBack} />
    </>
  );
};

export default TravelCardsPage;
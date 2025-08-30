import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import BudapestGuideArticle from '../components/BudapestGuideArticle';

const BudapestGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto | Viaja Mejor</title>
        <meta name="description" content="Guía completa de Budapest en 4 días. Itinerario detallado, presupuestos reales, mejores balnearios, dónde alojarse y qué comer. Incluye mapa interactivo." />
        <meta name="keywords" content="budapest 4 dias, guia budapest, balnearios budapest, parlamento budapest, que ver budapest, presupuesto budapest" />
        <link rel="canonical" href="https://viajamejor.net/budapest-4-dias" />
        
        <meta property="og:title" content="Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto" />
        <meta property="og:description" content="Descubre Budapest en 4 días con nuestro itinerario optimizado. Balnearios, Parlamento, Castillo y mucho más." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/budapest-4-dias" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Budapest en 4 Días - Guía Completa",
            "description": "Guía detallada para visitar Budapest en 4 días con itinerario optimizado y presupuestos reales",
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
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "image": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
            "url": "https://viajamejor.net/budapest-4-dias",
            "about": {
              "@type": "Place",
              "name": "Budapest",
              "@id": "https://www.wikidata.org/wiki/Q1781"
            }
          })}
        </script>
      </Helmet>

      <BudapestGuideArticle onBack={handleBack} />
    </>
  );
};

export default BudapestGuidePage;
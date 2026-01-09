import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AthensGuideArticle from '../components/AthensGuideArticle';
import RelatedArticles from '../components/RelatedArticles';

const AthensGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Atenas en 3 Días: Guía Completa 2025 | Itinerario con Acrópolis y Partenón</title>
        <meta
          name="description"
          content="Guía completa para visitar Atenas en 3 días. Itinerario detallado con la Acrópolis, Partenón, Ágora, barrio de Plaka y los mejores consejos para tu viaje a Grecia."
        />
        <meta
          name="keywords"
          content="atenas 3 dias, guia atenas, acropolis atenas, partenon, grecia, itinerario atenas, que ver atenas, viaje atenas"
        />
        <link rel="canonical" href="https://www.consejosviaje.com/atenas-3-dias" />

        <meta property="og:title" content="Atenas en 3 Días: Guía Completa 2025 | Acrópolis y Partenón" />
        <meta property="og:description" content="Descubre Atenas con nuestro itinerario optimizado de 3 días. Incluye Acrópolis, Partenón, mejores barrios y consejos prácticos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.consejosviaje.com/atenas-3-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atenas en 3 Días: Guía Completa 2025" />
        <meta name="twitter:description" content="Itinerario optimizado para visitar Atenas en 3 días con Acrópolis, Partenón y los mejores consejos." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Atenas en 3 Días: Guía Completa",
            "description": "Guía detallada para visitar Atenas en 3 días con itinerario optimizado",
            "image": "https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg",
            "author": {
              "@type": "Organization",
              "name": "Consejos Viaje"
            },
            "datePublished": "2025-01-09",
            "inLanguage": "es"
          })}
        </script>
      </Helmet>

      <AthensGuideArticle onBack={handleBack} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RelatedArticles currentCategory="Guías" currentArticleId="atenas" />
      </div>
    </>
  );
};

export default AthensGuidePage;

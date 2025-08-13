import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import TravelEssentialsArticle from '../components/TravelEssentialsArticle';

const TravelEssentialsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleArticleSelect = (articleId: string) => {
    const routes: Record<string, string> = {
      'cheap-flights': '/vuelos/vuelos-baratos',
      'accommodation': '/alojamiento/booking-vs-airbnb',
      'travel-cards': '/finanzas/tarjetas-sin-comisiones',
      'cheap-destinations': '/destinos/paises-baratos-2025',
      'travel-insurance': '/seguros/iati-experiencia',
      'travel-apps': '/tecnologia/apps-viaje'
    };
    
    const route = routes[articleId];
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <Helmet>
        <title>8 Objetos Imprescindibles para Viajar - Equipaje de Viaje | Viaja Mejor</title>
        <meta name="description" content="Descubre los 8 objetos que no pueden faltar en tu equipaje. Mochila cabina, adaptadores, power banks y más. Incluye dónde comprarlos baratos." />
        <meta name="keywords" content="equipaje viaje, mochila cabina, adaptador universal, objetos imprescindibles viajar, equipaje de mano" />
        <link rel="canonical" href="https://viajamejor.net/equipaje/8-objetos-imprescindibles" />
        
        <meta property="og:title" content="8 Objetos Imprescindibles para Viajar - Equipaje de Viaje" />
        <meta property="og:description" content="Los productos esenciales que llevo en cada viaje y dónde comprarlos al mejor precio." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/equipaje/8-objetos-imprescindibles" />
        <meta property="og:image" content="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "8 objetos imprescindibles para tu próximo viaje",
            "description": "Guía completa de los objetos esenciales para viajar cómodo sin gastar de más",
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
            "datePublished": "2024-01-15",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/equipaje/8-objetos-imprescindibles"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Puedo llevar power bank en equipaje de mano?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Sí, los power banks DEBEN ir en equipaje de mano, nunca en bodega. Asegúrate de que sea menor a 27.000 mAh (100Wh) para cumplir con las regulaciones de aerolíneas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué tamaño de mochila es ideal para cabina?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las dimensiones estándar son 55x40x20cm, pero recomiendo 40-45L de capacidad. Siempre verifica con tu aerolínea ya que pueden variar."
                }
              },
              {
                "@type": "Question", 
                "name": "¿El adaptador universal funciona en todos los países?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un buen adaptador universal cubre más del 95% de países. Los que recomiendo incluyen EU, UK, US, AU y otros enchufes menos comunes."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <TravelEssentialsArticle onBack={handleBack} onArticleSelect={handleArticleSelect} />
    </>
  );
};

export default TravelEssentialsPage;
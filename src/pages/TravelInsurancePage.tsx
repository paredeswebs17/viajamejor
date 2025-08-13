import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import TravelInsuranceArticle from '../components/TravelInsuranceArticle';

const TravelInsurancePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleArticleSelect = (articleId: string) => {
    const routes: Record<string, string> = {
      'travel-essentials': '/equipaje/8-objetos-imprescindibles',
      'cheap-flights': '/vuelos/vuelos-baratos',
      'accommodation': '/alojamiento/booking-vs-airbnb',
      'travel-cards': '/finanzas/tarjetas-sin-comisiones',
      'cheap-destinations': '/destinos/paises-baratos-2025',
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
        <title>Seguro de Viaje IATI: Mi Experiencia Real Usándolo | Viaja Mejor</title>
        <meta name="description" content="Mi experiencia real con IATI Seguros: emergencia médica de 3.000€ en Tailandia cubierta al 100%. Incluye descuento del 5%." />
        <meta name="keywords" content="seguro viaje iati, iati seguros, seguro viaje tailandia, mejor seguro viaje, iati descuento" />
        <link rel="canonical" href="https://viajamejor.net/seguros/iati-experiencia" />
        
        <meta property="og:title" content="Seguro de Viaje IATI: Mi Experiencia Real Usándolo" />
        <meta property="og:description" content="Cómo IATI me cubrió una emergencia médica de 3.000€ en Tailandia. Experiencia real y descuento exclusivo." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/seguros/iati-experiencia" />
        <meta property="og:image" content="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Seguro de viaje: por qué uso IATI y mi experiencia real usándolo",
            "description": "Experiencia real usando IATI Seguros en una emergencia médica en el extranjero",
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
            "datePublished": "2024-02-15",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/seguros/iati-experiencia"
          })}
        </script>
      </Helmet>

      <TravelInsuranceArticle onBack={handleBack} />
    </>
  );
};

export default TravelInsurancePage;
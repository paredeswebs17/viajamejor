import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import AccommodationArticle from '../components/AccommodationArticle';

const AccommodationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleArticleSelect = (articleId: string) => {
    const routes: Record<string, string> = {
      'travel-essentials': '/equipaje/8-objetos-imprescindibles',
      'cheap-flights': '/vuelos/vuelos-baratos',
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
        <title>Booking vs Airbnb vs Hostelworld: Dónde Reservar Alojamiento | Viaja Mejor</title>
        <meta name="description" content="Comparativa real de las mejores plataformas de alojamiento. Cuándo usar Booking, Airbnb o Hostelworld según tu tipo de viaje." />
        <meta name="keywords" content="booking vs airbnb, hostelworld, donde reservar hoteles, alojamiento barato, comparativa booking airbnb" />
        <link rel="canonical" href="https://viajamejor.net/alojamiento/booking-vs-airbnb" />
        
        <meta property="og:title" content="Booking vs Airbnb vs Hostelworld: Dónde Reservar Alojamiento" />
        <meta property="og:description" content="Comparativa real de las tres plataformas que uso para reservar alojamiento según el tipo de viaje." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/alojamiento/booking-vs-airbnb" />
        <meta property="og:image" content="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld",
            "description": "Comparativa completa de las mejores plataformas para reservar alojamiento según tu estilo de viaje",
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
            "datePublished": "2024-01-25",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/alojamiento/booking-vs-airbnb"
          })}
        </script>
      </Helmet>

      <AccommodationArticle onBack={handleBack} onArticleSelect={handleArticleSelect} />
    </>
  );
};

export default AccommodationPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheapDestinationsArticle from '../components/CheapDestinationsArticle';

const CheapDestinationsPage = () => {
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
        <title>Destinos Baratos 2025: 15 Países Donde Gasté Menos de 30€/día | Viaja Mejor</title>
        <meta name="description" content="Descubre los 15 destinos más baratos para 2025. Albania, Vietnam, Georgia... Países increíbles con presupuestos detallados y consejos reales." />
        <meta name="keywords" content="destinos baratos 2025, países baratos, viajar barato, destinos económicos, albania barata, vietnam barato" />
        <link rel="canonical" href="https://viajamejor.net/destinos/paises-baratos-2025" />
        
        <meta property="og:title" content="Destinos Baratos 2025: 15 Países Donde Gasté Menos de 30€/día" />
        <meta property="og:description" content="Los destinos más económicos para 2025 con presupuestos reales y consejos probados." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/destinos/paises-baratos-2025" />
        <meta property="og:image" content="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Destinos baratos para 2025: mis 15 favoritos donde gasté menos de 30€/día",
            "description": "Guía completa de los destinos más económicos para viajar en 2025 con presupuestos detallados",
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
            "datePublished": "2024-02-10",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/destinos/paises-baratos-2025"
          })}
        </script>
      </Helmet>

      <CheapDestinationsArticle onBack={handleBack} onArticleSelect={handleArticleSelect} />
    </>
  );
};

export default CheapDestinationsPage;
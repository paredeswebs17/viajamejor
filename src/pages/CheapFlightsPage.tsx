import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheapFlightsArticle from '../components/CheapFlightsArticle';

const CheapFlightsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleArticleSelect = (articleId: string) => {
    const routes: Record<string, string> = {
      'travel-essentials': '/equipaje/8-objetos-imprescindibles',
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
        <title>Cómo Encontrar Vuelos Baratos: 10 Trucos Infalibles | Viaja Mejor</title>
        <meta name="description" content="Aprende mis 10 trucos para encontrar vuelos hasta 70% más baratos. Skyscanner, fechas flexibles, VPN y más secretos probados." />
        <meta name="keywords" content="vuelos baratos, skyscanner, kiwi.com, trucos vuelos, como encontrar vuelos baratos" />
        <link rel="canonical" href="https://viajamejor.net/vuelos/vuelos-baratos" />
        
        <meta property="og:title" content="Cómo Encontrar Vuelos Baratos: 10 Trucos Infalibles" />
        <meta property="og:description" content="Mis trucos secretos para conseguir vuelos hasta 70% más baratos. Método paso a paso." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/vuelos/vuelos-baratos" />
        <meta property="og:image" content="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cómo encontrar vuelos baratos: mis 10 trucos infalibles",
            "description": "Guía completa para conseguir vuelos hasta 70% más baratos usando herramientas y trucos probados",
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
            "datePublished": "2024-01-20",
            "dateModified": "2024-12-01",
            "image": "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "url": "https://viajamejor.net/vuelos/vuelos-baratos"
          })}
        </script>
      </Helmet>

      <CheapFlightsArticle onBack={handleBack} onArticleSelect={handleArticleSelect} />
    </>
  );
};

export default CheapFlightsPage;
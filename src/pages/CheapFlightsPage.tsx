import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheapFlightsArticle from '../components/CheapFlightsArticle';

const CheapFlightsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cómo encontrar vuelos baratos",
            "description": "Guía paso a paso para encontrar vuelos hasta 70% más baratos",
            "image": "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg",
            "totalTime": "PT15M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "EUR",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Usar fechas flexibles",
                "text": "Busca vuelos con ±3 días de flexibilidad para encontrar mejores precios",
                "image": "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg"
              },
              {
                "@type": "HowToStep", 
                "name": "Usar VPN para cambiar ubicación",
                "text": "Busca desde diferentes países para aprovechar diferencias de precio geográficas",
                "image": "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg"
              },
              {
                "@type": "HowToStep",
                "name": "Comparar en múltiples buscadores",
                "text": "Usa Skyscanner, Kiwi y buscadores de aerolíneas directamente",
                "image": "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
              }
            ]
          })}
        </script>
      </Helmet>

      <CheapFlightsArticle onBack={handleBack} />
    </>
  );
};

export default CheapFlightsPage;
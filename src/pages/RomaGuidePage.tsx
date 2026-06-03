import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RomaGuideArticle from '../components/RomaGuideArticle';
import RelatedArticles from '../components/RelatedArticles';

const RomaGuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Roma en 3 Días: Guía Completa 2026 con Coliseo y Vaticano | Viaja Mejor</title>
        <meta name="description" content="Guía completa para visitar Roma en 3 días: Coliseo, Vaticano, Fontana di Trevi, Trastevere. Itinerario optimizado, precios actualizados 2026 y consejos probados." />
        <meta name="keywords" content="Roma 3 días, guía Roma, Coliseo entradas, Museos Vaticanos, Capilla Sixtina, qué ver en Roma, itinerario Roma, Trastevere, Fontana di Trevi, transporte Roma" />
        <link rel="canonical" href="https://viajamejor.net/roma-3-dias" />

        <meta property="og:title" content="Roma en 3 Días: Coliseo, Vaticano, Trastevere y más" />
        <meta property="og:description" content="Descubre Roma con nuestro itinerario de 3 días: Coliseo + Foro + Vaticano + mejores barrios. Precios, horarios y consejos actualizados 2026." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/roma-3-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roma en 3 Días: Guía Completa con Coliseo y Vaticano" />
        <meta name="twitter:description" content="Itinerario optimizado para visitar Roma en 3 días con todos los imprescindibles: Coliseo, Vaticano, Trastevere y más." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Roma en 3 Días - Guía Completa",
            "description": "Guía completa para visitar Roma en 3 días con itinerario optimizado: Coliseo, Vaticano, Fontana di Trevi y Trastevere",
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
            "dateModified": "2026-06-01",
            "image": "https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg",
            "url": "https://viajamejor.net/roma-3-dias",
            "inLanguage": "es",
            "about": {
              "@type": "Place",
              "name": "Roma",
              "@id": "https://www.wikidata.org/wiki/Q220"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Roma Antigua",
                "description": "Coliseo, Foro Romano, Palatino y Centro Histórico"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 2: Vaticano y Trastevere",
                "description": "Museos Vaticanos, Capilla Sixtina, Basílica de San Pedro y Trastevere"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Roma Barroca y Despedida",
                "description": "Fontana di Trevi, Piazza Navona, Panteón y últimos rincones"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://viajamejor.net/" },
              { "@type": "ListItem", "position": 2, "name": "Guías", "item": "https://viajamejor.net/guias" },
              { "@type": "ListItem", "position": 3, "name": "Roma en 3 Días" }
            ]
          })}
        </script>
      </Helmet>

      <RomaGuideArticle onBack={() => navigate('/guias')} />
      <RelatedArticles currentCategory="guias" currentArticleId="roma" />
    </>
  );
};

export default RomaGuidePage;

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
        <title>Roma en 3 Días: Guía Completa 2025 con Coliseo y Vaticano | Consejos de Viaje</title>
        <meta name="description" content="Guía completa para visitar Roma en 3 días: Coliseo, Vaticano, Fontana di Trevi, Trastevere. Itinerario optimizado, precios actualizados 2025 y consejos probados." />
        <meta name="keywords" content="Roma 3 días, guía Roma, Coliseo entradas, Museos Vaticanos, Capilla Sixtina, qué ver en Roma, itinerario Roma, Trastevere, Fontana di Trevi, transporte Roma" />
        <link rel="canonical" href="https://consejosdeviaje.com/guias/roma" />

        <meta property="og:title" content="Roma en 3 Días: Coliseo, Vaticano, Trastevere y más" />
        <meta property="og:description" content="Descubre Roma con nuestro itinerario de 3 días: Coliseo + Foro + Vaticano + mejores barrios. Precios, horarios y consejos actualizados 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://consejosdeviaje.com/guias/roma" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roma en 3 Días: Guía Completa con Coliseo y Vaticano" />
        <meta name="twitter:description" content="Itinerario optimizado para visitar Roma en 3 días con todos los imprescindibles: Coliseo, Vaticano, Trastevere y más." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Guía de Roma en 3 Días",
            "description": "Guía completa para visitar Roma en 3 días con itinerario optimizado",
            "about": {
              "@type": "City",
              "name": "Roma",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IT"
              }
            }
          })}
        </script>
      </Helmet>

      <RomaGuideArticle onBack={() => navigate('/guias')} />
      <RelatedArticles currentCategory="guias" currentArticleId="roma" />
    </>
  );
};

export default RomaGuidePage;

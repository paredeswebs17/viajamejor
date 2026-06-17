import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ViennaGuideArticle from '../components/ViennaGuideArticle';

const ViennaGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Viena en 3 Días: Guía Imperial Completa con Música Clásica | Viaja Mejor</title>
        <meta name="description" content="Guía completa de Viena en 3 días. Itinerario imperial hora por hora, palacios Schönbrunn y Hofburg, conciertos clásicos, presupuestos reales desde 75€/día." />
        <meta name="keywords" content="viena 3 dias, guia viena, palacio schonbrunn, musikverein, opera viena, que ver viena, presupuesto viena, itinerario viena, conciertos viena, cafe sacher" />
        <link rel="canonical" href="https://viajamejor.net/viena-3-dias" />
        
        <meta property="og:title" content="Viena en 3 Días: Guía Imperial Completa con Música Clásica" />
        <meta property="og:description" content="Descubre Viena en 3 días con nuestro itinerario imperial. Palacios, ópera, conciertos clásicos y presupuestos desde 75€/día." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/viena-3-dias" />
        <meta property="og:image" content="https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            "name": "Viena en 3 Días - Guía Imperial Completa",
            "description": "Guía detallada para visitar Viena en 3 días con itinerario imperial optimizado y presupuestos reales",
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
            "image": "https://images.pexels.com/photos/11932444/pexels-photo-11932444.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1",
            "url": "https://viajamejor.net/viena-3-dias",
            "about": {
              "@type": "Place",
              "name": "Viena",
              "@id": "https://www.wikidata.org/wiki/Q1741"
            },
            "itinerary": [
              {
                "@type": "TouristTrip",
                "name": "Día 1: Entrada Triunfal a la Capital Musical",
                "description": "Ópera de Viena + Centro histórico + Catedral San Esteban + Palacio Hofburg + Café Sacher"
              },
              {
                "@type": "TouristTrip", 
                "name": "Día 2: Esplendor Imperial de Schönbrunn",
                "description": "Palacio Schönbrunn + Jardines imperiales + Gloriette + Cultura cafetera vienesa"
              },
              {
                "@type": "TouristTrip",
                "name": "Día 3: Arte, Diversión y Gran Final Musical", 
                "description": "Palacio Belvedere + Klimt 'El Beso' + Prater + Musikverein + Concierto final"
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
              { "@type": "ListItem", "position": 3, "name": "Viena en 3 Días" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Merece la pena la Vienna Pass para 3 días?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, si visitas al menos 5 atracciones principales. La Vienna Pass de 3 días cuesta 89€ e incluye más de 70 atracciones + transporte público. Comprando las entradas por separado gastarías unos 133€, así que ahorras un 33%."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta viajar a Viena 3 días?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un viaje de 3 días a Viena cuesta entre 65-85€/día para mochileros (hostel + comida básica), 120-160€/día estándar (hotel 3★ + restaurantes), o 250-400€/día premium (hotel 5★ + experiencias VIP)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la mejor época para visitar Viena?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La mejor época es primavera (abril-mayo) y otoño (septiembre-octubre): clima agradable, menos turistas y precios moderados. En invierno los mercados navideños son espectaculares (noviembre-diciembre). Agosto es el más masificado y caro."
                }
              },
              {
                "@type": "Question",
                "name": "¿Se puede ver la Ópera de Viena por 3€?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. Las Stehplätze (entradas de pie) se venden 80 minutos antes de cada función por 3-4€. La acústica es de clase mundial. Se forman colas 1-2 horas antes para las funciones populares."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo llegar del aeropuerto de Viena al centro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las mejores opciones son: CAT (City Airport Train) por 14€ en 16 minutos sin paradas hasta Wien-Mitte, autobús Vienna Airport Lines por 11€ en 20-30 minutos, o transfer privado por 75€ (puerta a puerta, hasta 3 personas)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Es necesario llevar efectivo en Viena?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es recomendable. Muchos cafés tradicionales y Heurigers (tabernas de vino) no aceptan tarjeta. Una tarjeta sin comisiones como Revolut permite retirar efectivo gratis en cualquier cajero."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <ViennaGuideArticle onBack={handleBack} />
    </>
  );
};

export default ViennaGuidePage;
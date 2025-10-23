import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ChristmasGuideArticle from '../components/ChristmasGuideArticle';

const ChristmasMarketsPage = () => {
  const navigate = useNavigate();
  const [showArticle] = useState(true);

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Mercados Navideños de Europa 2025-2026: Budapest, Praga, Viena, Roma y Amsterdam | Viaja Mejor</title>
        <meta name="description" content="Guía completa de los mejores mercados navideños de Europa 2025-2026: Budapest, Praga, Viena, Roma y Amsterdam. Fechas oficiales, horarios, precios y consejos prácticos." />
        <meta name="keywords" content="mercados navideños europa, navidad budapest, navidad praga, navidad viena, navidad roma, navidad amsterdam, mercados navideños 2025" />
        <link rel="canonical" href="https://viajamejor.net/mercados-navidenos-europa" />

        <meta property="og:title" content="Mercados Navideños de Europa 2025-2026: Guía Completa" />
        <meta property="og:description" content="Descubre los mejores mercados navideños de Budapest, Praga, Viena, Roma y Amsterdam con fechas, horarios y consejos prácticos." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/mercados-navidenos-europa" />
        <meta property="og:image" content="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg" />
      </Helmet>

      {showArticle && <ChristmasGuideArticle onBack={handleBack} />}
    </>
  );
};

export default ChristmasMarketsPage;

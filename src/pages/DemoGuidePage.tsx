import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import DemoGuideArticle from '../components/DemoGuideArticle';

const DemoGuidePage = () => {
  const navigate = useNavigate();
  const [showArticle] = useState(true);

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Guía Demo - Roma en 3 Días | Viaja Mejor</title>
        <meta name="description" content="Guía demo para pruebas de formato y estructura" />
        <link rel="canonical" href="https://viajamejor.net/guia-demo" />
      </Helmet>

      {showArticle && <DemoGuideArticle onBack={handleBack} />}
    </>
  );
};

export default DemoGuidePage;

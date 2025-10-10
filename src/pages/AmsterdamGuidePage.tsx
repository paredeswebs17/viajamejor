import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import AmsterdamGuideArticle from '../components/AmsterdamGuideArticle';

const AmsterdamGuidePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/guias');
  };

  return (
    <>
      <Helmet>
        <title>Ámsterdam en 3 Días: Guía Completa con Canales, Museos y Cultura Holandesa | Viaja Mejor</title>
        <meta
          name="description"
          content="Descubre Ámsterdam en 3 días: canales UNESCO, Casa de Ana Frank, Rijksmuseum, Van Gogh, pueblos holandeses y Heineken Experience. Itinerario completo con presupuesto."
        />
        <meta
          name="keywords"
          content="amsterdam 3 dias, guia amsterdam, canales amsterdam, casa ana frank, rijksmuseum, van gogh museo, zaanse schans, presupuesto amsterdam, que ver amsterdam"
        />
        <link rel="canonical" href="https://viajamejor.net/amsterdam-3-dias" />

        <meta property="og:title" content="Ámsterdam en 3 Días: Canales, Arte y Cultura Holandesa" />
        <meta
          property="og:description"
          content="Guía completa de Ámsterdam: canales, museos imprescindibles, Casa de Ana Frank, pueblos holandeses y la mejor cerveza. Itinerario detallado y presupuesto real."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://viajamejor.net/amsterdam-3-dias" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg"
        />
      </Helmet>

      <AmsterdamGuideArticle onBack={handleBack} />
    </>
  );
};

export default AmsterdamGuidePage;

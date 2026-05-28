import StickyTableOfContents from './StickyTableOfContents';
import AthensHero from './athens/AthensHero';
import AthensIntro from './athens/AthensIntro';
import AthensDay1 from './athens/AthensDay1';
import AthensDay2 from './athens/AthensDay2';
import AthensDay3 from './athens/AthensDay3';
import AthensPractical from './athens/AthensPractical';

interface AthensGuideArticleProps {
  onBack: () => void;
}

const AthensGuideArticle: React.FC<AthensGuideArticleProps> = ({ onBack }) => {
  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Atenas?' },
    { id: 'llegada-aeropuerto', title: 'Llegada desde el Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Dormir en Atenas' },
    { id: 'itinerario', title: 'Itinerario de 3 Días' },
    { id: 'dia-1', title: 'Día 1: Acrópolis y Centro Histórico', level: 2 },
    { id: 'dia-2', title: 'Día 2: Templos, Estadios y Museos', level: 2 },
    { id: 'dia-3', title: 'Día 3: Excursiones desde Atenas', level: 2 },
    { id: 'lugares-imprescindibles', title: 'Más Lugares Imprescindibles' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Guía Gastronómica' },
    { id: 'transporte', title: 'Sistema de Transporte' },
    { id: 'consejos', title: 'Consejos Finales' },
    { id: 'presupuestos', title: 'Presupuestos Detallados' }
  ];

  return (
    <>
      <StickyTableOfContents sections={sections} />
      <AthensHero onBack={onBack} />
      <AthensIntro />
      <AthensDay1 />
      <AthensDay2 />
      <AthensDay3 />
      <AthensPractical />
    </>
  );
};

export default AthensGuideArticle;

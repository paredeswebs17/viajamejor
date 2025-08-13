import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Recommendations from './components/Recommendations';
import About from './components/About';
import Contact from './components/Contact';
import BlogSection from './components/BlogSection';
import FAQ from './components/FAQ';
import BackToTop from './components/BackToTop';
import { Suspense, lazy, useState } from 'react';
import EditorialBlock from './components/EditorialBlock';

// Lazy load articles for better performance
const TravelEssentialsArticle = lazy(() => import('./components/TravelEssentialsArticle'));
const CheapFlightsArticle = lazy(() => import('./components/CheapFlightsArticle'));
const AccommodationArticle = lazy(() => import('./components/AccommodationArticle'));
const CheapDestinationsArticle = lazy(() => import('./components/CheapDestinationsArticle'));
const PremiumDestinationsArticle = lazy(() => import('./components/PremiumDestinationsArticle'));
const TravelInsuranceArticle = lazy(() => import('./components/TravelInsuranceArticle'));
const TravelCardsArticle = lazy(() => import('./components/TravelCardsArticle'));
const TravelAppsArticle = lazy(() => import('./components/TravelAppsArticle'));

// Loading component for Suspense
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-sky-400 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-sky-400 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-sky-400 rounded"></div>
          <div className="h-4 bg-sky-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const handleNavigateHome = () => {
    setSelectedArticle(null);
    // Use setTimeout to ensure the new component is rendered before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleArticleSelect = (articleId: string) => {
    console.log('App: Selecting article:', articleId);
    setSelectedArticle(articleId);
    // Use setTimeout to ensure the new component is rendered before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Función para manejar la navegación entre artículos relacionados
  const handleRelatedArticleSelect = (articleId: string) => {
    setSelectedArticle(articleId);
    // Use setTimeout to ensure the new component is rendered before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  // Render article component based on selection
  const renderArticle = () => {
    return (
      <div className="min-h-screen bg-white">
        <Header currentView="article" onNavigateHome={handleNavigateHome} />
        <Suspense fallback={<Loading />}>
          {selectedArticle === 'travel-essentials' && <TravelEssentialsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'cheap-flights' && <CheapFlightsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'accommodation' && <AccommodationArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'cheap-destinations' && <CheapDestinationsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'premium-destinations' && <PremiumDestinationsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'travel-insurance' && <TravelInsuranceArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'travel-cards' && <TravelCardsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
          {selectedArticle === 'travel-apps' && <TravelAppsArticle onBack={handleNavigateHome} onArticleSelect={handleRelatedArticleSelect} />}
        </Suspense>
        <Footer />
      </div>
    );
  };

  // Renderizar artículo específico
  if (selectedArticle === 'travel-essentials') {
    return renderArticle();
  }

  if (selectedArticle === 'cheap-flights') {
    return renderArticle();
  }

  if (selectedArticle === 'accommodation') {
    return renderArticle();
  }

  if (selectedArticle === 'cheap-destinations') {
    return renderArticle();
  }

  if (selectedArticle === 'premium-destinations') {
    return renderArticle();
  }

  if (selectedArticle === 'travel-insurance') {
    return renderArticle();
  }

  if (selectedArticle === 'travel-cards') {
    return renderArticle();
  }

  if (selectedArticle === 'travel-apps') {
    return renderArticle();
  }

  // Vista principal (home)
  return (
    <div className="min-h-screen bg-white">
      <Header currentView="home" onNavigateHome={handleNavigateHome} />
      <BackToTop />
      <main>
        <Hero />
        <EditorialBlock />
        <BlogSection onArticleSelect={handleArticleSelect} />
        <Recommendations />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
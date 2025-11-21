import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const GuidesPage = lazy(() => import('./pages/GuidesPage'));
const TravelEssentialsPage = lazy(() => import('./pages/TravelEssentialsPage'));
const CheapFlightsPage = lazy(() => import('./pages/CheapFlightsPage'));
const AccommodationPage = lazy(() => import('./pages/AccommodationPage'));
const TravelCardsPage = lazy(() => import('./pages/TravelCardsPage'));
const CheapDestinationsPage = lazy(() => import('./pages/CheapDestinationsPage'));
const TravelInsurancePage = lazy(() => import('./pages/TravelInsurancePage'));
const BudapestGuidePage = lazy(() => import('./pages/BudapestGuidePage'));
const PragueGuidePage = lazy(() => import('./pages/PragueGuidePage'));
const ViennaGuidePage = lazy(() => import('./pages/ViennaGuidePage'));
const AmsterdamGuidePage = lazy(() => import('./pages/AmsterdamGuidePage'));
const RomaGuidePage = lazy(() => import('./pages/RomaGuidePage'));
const ChristmasMarketsPage = lazy(() => import('./pages/ChristmasMarketsPage'));
const DemoGuidePage = lazy(() => import('./pages/DemoGuidePage'));

// Loading component
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
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <BackToTop />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                {/* HOME */}
                <Route path="/" element={<HomePage />} />
                
                {/* GUÍAS */}
                <Route path="/guias" element={<GuidesPage />} />
                
                {/* ARTÍCULOS ESPECÍFICOS */}
                <Route path="/equipaje/8-objetos-imprescindibles" element={<TravelEssentialsPage />} />
                <Route path="/vuelos/vuelos-baratos" element={<CheapFlightsPage />} />
                <Route path="/alojamiento/booking-vs-airbnb" element={<AccommodationPage />} />
                <Route path="/finanzas/tarjetas-sin-comisiones" element={<TravelCardsPage />} />
                <Route path="/destinos/paises-baratos-2025" element={<CheapDestinationsPage />} />
                <Route path="/seguros/iati-experiencia" element={<TravelInsurancePage />} />
                
                {/* GUÍAS ESPECÍFICAS */}
                <Route path="/budapest-4-dias" element={<BudapestGuidePage />} />
               <Route path="/praga-3-dias" element={<PragueGuidePage />} />
                <Route path="/viena-3-dias" element={<ViennaGuidePage />} />
                <Route path="/amsterdam-3-dias" element={<AmsterdamGuidePage />} />
                <Route path="/roma-3-dias" element={<RomaGuidePage />} />
                <Route path="/mercados-navidenos-europa" element={<ChristmasMarketsPage />} />
                <Route path="/guia-demo" element={<DemoGuidePage />} />

                {/* 404 - Redirige a home */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
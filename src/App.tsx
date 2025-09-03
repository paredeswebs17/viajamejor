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

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg font-medium">Cargando...</p>
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
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/guias" element={<GuidesPage />} />
                <Route path="/equipaje/8-objetos-imprescindibles" element={<TravelEssentialsPage />} />
                <Route path="/vuelos/vuelos-baratos" element={<CheapFlightsPage />} />
                <Route path="/alojamiento/booking-vs-airbnb" element={<AccommodationPage />} />
                <Route path="/finanzas/tarjetas-sin-comisiones" element={<TravelCardsPage />} />
                <Route path="/destinos/paises-baratos-2025" element={<CheapDestinationsPage />} />
                <Route path="/seguros/iati-experiencia" element={<TravelInsurancePage />} />
                <Route path="/budapest-4-dias" element={<BudapestGuidePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
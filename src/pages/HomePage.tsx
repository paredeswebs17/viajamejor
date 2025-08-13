import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import BlogSection from '../components/BlogSection';
import Recommendations from '../components/Recommendations';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Viaja Mejor - Consejos de Viaje para Viajar Más y Gastar Menos</title>
        <meta name="description" content="Descubre cómo viajar más gastando menos. Consejos prácticos, herramientas útiles y trucos probados en más de 40 países para viajar inteligente." />
        <meta name="keywords" content="viajar barato, consejos viaje, vuelos baratos, equipaje viaje, seguro viaje" />
        <link rel="canonical" href="https://viajamejor.net/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Viaja Mejor - Consejos de Viaje para Viajar Más y Gastar Menos" />
        <meta property="og:description" content="Descubre cómo viajar más gastando menos. Consejos prácticos y herramientas probadas en 40+ países." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viajamejor.net/" />
        <meta property="og:image" content="https://viajamejor.net/og-image.jpg" />
      </Helmet>

      <Hero />
      <BlogSection onArticleSelect={() => {}} />
      <Recommendations />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-24 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative max-w-6xl mx-auto text-center px-4">
        {/* Título principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
        </h1>
        
        <p className="text-base text-sky-100 mb-6">
          Consejos y recursos para tu próxima aventura
        </p>
        
        {/* Botón de Guías */}
        <Link 
          to="/guias"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 rounded-full px-7 py-3.5 text-base font-bold shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] transition-all duration-300 transform hover:scale-105 border-2 border-orange-300 animate-pulse"
        >
          <span className="text-xl">🗺️</span>
          <span>Descubre Guías</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero;
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white pt-32 pb-20 min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/75 to-[#0d9488]/80"></div>
      </div>

      {/* Floating Circles */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 w-full">
        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
        </h1>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Consejos y recursos para tu próxima aventura
        </p>

        {/* Botón de Guías */}
        <Link
          to="/guias"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] transition-all duration-300 transform hover:scale-105 border-2 border-orange-300"
        >
          <span className="text-2xl">🗺️</span>
          <span>Descubre Guías</span>
        </Link>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero;
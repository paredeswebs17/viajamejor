import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-[#14B8A6] opacity-95"></div>
      </div>

      {/* Floating Circles */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
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
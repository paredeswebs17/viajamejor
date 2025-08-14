import { MapPin, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="relative max-w-6xl mx-auto text-center px-4">
        {/* Título principal */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
        </h1>
        
        <p className="text-base text-sky-100 mb-3">
          Consejos y recursos para tu próxima aventura
        </p>
        
        {/* Stats compactos */}
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span>40+ países</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
            <Users className="h-3 w-3 mr-1" />
            <span>+50k lectores</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>Ahorro: 400€</span>
          </div>
        </div>
      </div>
    </section>
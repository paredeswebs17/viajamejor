const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
        </h1>
        <p className="text-lg text-sky-100 mb-4">
          Consejos y recursos para tu próxima aventura
        </p>
        <div className="text-sky-200 text-sm">
          ✈️ Tu compañero de viajes
        </div>
      </div>
    </div>
  );
};

export default Hero;
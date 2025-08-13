const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-20 pb-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
        </h1>
        <p className="text-lg text-sky-100 mb-3">
          Consejos y recursos para tu próxima aventura
        </p>
        <p className="text-sm text-sky-200">
          40+ países | +50k lectores | Ahorro promedio: 400€
        </p>
      </div>
    </div>
  );
};

export default Hero;
const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#17a2b8] to-[#138496]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            📬 No te pierdas ninguna guía nueva
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Suscríbete y recibe un email cada vez que publiquemos una nueva guía de viaje
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Tu nombre"
              className="flex-1 px-5 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-5 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
            />
            <button
              type="submit"
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              ✉️ Suscribirme
            </button>
          </form>

          <p className="text-sm mt-4 opacity-80">
            📧 Solo te avisaremos de nuevas guías. Sin spam. Cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

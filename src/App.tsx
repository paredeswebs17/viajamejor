import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">VM</span>
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                  Viaja
                </span>
                <span className="text-2xl font-bold text-gray-800 ml-1">
                  Mejor
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-500 to-emerald-500 text-white pt-24 pb-12">
        <div className="relative max-w-6xl mx-auto text-center px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Viaja <span className="text-amber-300">más</span>, gasta <span className="text-emerald-300">menos</span>
          </h1>
          <p className="text-base text-sky-100 mb-4">
            Consejos y recursos para tu próxima aventura
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
              <span>🗺️</span>
              <span className="ml-1">40+ países</span>
            </div>
            <div className="flex items-center bg-orange-500/90 backdrop-blur-sm rounded-lg px-3 py-1 animate-pulse border border-orange-400">
              <span>🗺️</span>
              <span className="ml-1 font-semibold">Guías próximamente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Consejos de viaje que realmente funcionan
          </h2>
          <p className="text-gray-600 mb-8">
            Después de visitar más de 40 países, aquí tienes los mejores consejos para viajar más gastando menos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">✈️ Vuelos Baratos</h3>
              <p className="text-gray-600 text-sm">Trucos para encontrar vuelos hasta 70% más baratos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">🏨 Alojamiento</h3>
              <p className="text-gray-600 text-sm">Booking vs Airbnb: cuándo usar cada uno</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">💳 Tarjetas de Viaje</h3>
              <p className="text-gray-600 text-sm">Revolut, N26 y otras sin comisiones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">🎒 Equipaje</h3>
              <p className="text-gray-600 text-sm">8 objetos imprescindibles para cualquier viaje</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Viaja Mejor. Consejos reales para viajeros reales.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
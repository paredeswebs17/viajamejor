import React from 'react';

const GuidesBanner = () => {
  const handleNotifyClick = () => {
    // Scroll to contact form
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 text-center relative overflow-hidden shadow-lg my-8">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-50 -translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-200 to-transparent rounded-full opacity-50 translate-x-16 translate-y-16"></div>
      
      <div className="relative z-10">
        {/* Badge "Próximamente" */}
        <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
          <span className="mr-2">🚧</span>
          <span>PRÓXIMAMENTE</span>
        </div>
        
        {/* Título principal */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          🗺️ Nuestras Guías de Viaje
        </h2>
        
        {/* Descripción */}
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          Estamos preparando guías súper detalladas de <strong>nuestros viajes reales</strong>. 
          Roma, Tokio, Bangkok... Todo lo que vivimos, errores incluidos.
        </p>
        
        {/* Grid de beneficios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-opacity-90 transition-all">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900 mb-1">Lugares reales</h3>
            <p className="text-sm text-gray-600">Donde nos alojamos exactamente</p>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-opacity-90 transition-all">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-900 mb-1">Gastos exactos</h3>
            <p className="text-sm text-gray-600">Cuánto gastamos en cada lugar</p>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-opacity-90 transition-all">
            <div className="text-2xl mb-2">❌</div>
            <h3 className="font-semibold text-gray-900 mb-1">Errores incluidos</h3>
            <p className="text-sm text-gray-600">Lo que no haríamos otra vez</p>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-opacity-90 transition-all">
            <div className="text-2xl mb-2">🍜</div>
            <h3 className="font-semibold text-gray-900 mb-1">Sitios secretos</h3>
            <p className="text-sm text-gray-600">Restaurantes que descubrimos</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleNotifyClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg"
            style={{
              animation: 'glow 2s ease-in-out infinite alternate',
              boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)'
            }}
          >
            🔔 Avísame cuando estén listas
          </button>
          <p className="text-sm text-gray-600">
            Mientras tanto, explora nuestros <span className="font-semibold text-orange-600">consejos actuales</span> ↓
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(249, 115, 22, 0.5); }
          to { box-shadow: 0 0 20px rgba(249, 115, 22, 0.8); }
        }
      `}</style>
    </div>
  );
};

export default GuidesBanner;
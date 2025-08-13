import { Compass, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
        {/* Mobile compact footer */}
        <div className="block sm:hidden">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Compass className="h-6 w-6 text-sky-400 mr-2" />
              <span className="text-lg font-bold">Viaja Mejor</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Consejos reales para viajar más gastando menos
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href="https://instagram.com/viajamejor_net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              © 2024 Viaja Mejor. Hecho con ❤️ para viajeros.
            </p>
          </div>
        </div>

        {/* Desktop full footer */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-sky-400 mr-2" />
              <span className="text-xl font-bold">Viaja Mejor</span>
            </div>
            <p className="text-gray-400 mb-6">
              Tu compañero de confianza para viajar más, gastar menos y disfrutar cada momento. 
              Consejos reales de alguien que realmente viaja.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/viajamejor_net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Consejos de Viaje</a></li>
              <li><a href="#recomendaciones" className="text-gray-400 hover:text-white transition-colors">Recomendaciones</a></li>
              <li><a href="#sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Vuelos Baratos</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Alojamiento</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Equipaje</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Destinos</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Seguros</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Checklist de Viaje</a></li>
              <li><a href="#recomendaciones" className="text-gray-400 hover:text-white transition-colors">Herramientas</a></li>
              <li><a href="#recomendaciones" className="text-gray-400 hover:text-white transition-colors">Enlaces Útiles</a></li>
              <li><a href="#consejos" className="text-gray-400 hover:text-white transition-colors">Guías de Destinos</a></li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Viaja Mejor. Hecho con ❤️ para viajeros como tú.
            </p>
            <div className="flex space-x-6">
              <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                Divulgación de Afiliados
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
          <div className="hidden sm:block mt-4 text-center">
            <p className="text-gray-500 text-xs">
              <strong>Disclaimer:</strong> Este sitio contiene enlaces de afiliados a Amazon, Skyscanner, Booking, IATI, NordVPN y otros servicios. 
              Si compras algo a través de estos enlaces, puedo recibir una pequeña comisión sin costo adicional para ti. 
              Solo recomiendo productos y servicios que uso personalmente y que realmente me han funcionado bien en mis viajes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
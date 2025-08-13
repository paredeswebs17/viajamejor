import { MapPin, Camera, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Hola, somos tus compañeros de viajes
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Somos una pareja viajera apasionada que llevamos más de 8 años 
                recorriendo el mundo. Hemos visitado 40+ países con presupuestos 
                ajustados y hemos aprendido (a veces a las malas) cómo viajar de forma inteligente.
              </p>
              <p>
                Empezamos este blog porque nos cansamos de ver consejos genéricos que no 
                funcionan en la vida real. Aquí solo compartimos lo que realmente usamos, 
                las herramientas que nos funcionan y los errores que no queremos que cometas.
              </p>
              <p>
                Nuestro objetivo es simple: ayudarte a viajar más, gastar menos y disfrutar 
                cada momento sin el estrés de la mala planificación.
              </p>
            </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra experiencia en números:</h3>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">40+ países</div>
                  <div className="text-sm text-gray-600">Y contando...</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Camera className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">8 años</div>
                  <div className="text-sm text-gray-600">Viajando</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">5K+</div>
                  <div className="text-sm text-gray-600">Lectores felices</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Artículos útiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipamiento de viaje y mochila en paisaje natural"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">€15/día</div>
                <div className="text-sm text-gray-600">Nuestro récord en Tailandia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
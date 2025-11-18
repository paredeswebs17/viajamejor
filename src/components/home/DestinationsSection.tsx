import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const DestinationsSection = () => {
  const destinations = [
    {
      name: 'Budapest',
      image: 'https://images.pexels.com/photos/1545319/pexels-photo-1545319.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/budapest'
    },
    {
      name: 'Praga',
      image: 'https://images.pexels.com/photos/1130408/pexels-photo-1130408.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/praga'
    },
    {
      name: 'Viena',
      image: 'https://images.pexels.com/photos/1654258/pexels-photo-1654258.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/viena'
    },
    {
      name: 'Roma',
      image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/roma'
    },
    {
      name: 'Amsterdam',
      image: 'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/amsterdam'
    },
    {
      name: 'Mercados Navideños',
      image: 'https://images.pexels.com/photos/3801464/pexels-photo-3801464.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/guias/mercados-navidenos-europa'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Explora destinos
          </h2>
          <p className="text-lg text-gray-600">
            Descubre nuestras guías de viaje
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              image={destination.image}
              link={destination.link}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/guias"
            className="inline-flex items-center text-[#17a2b8] hover:text-[#138496] font-bold text-lg transition-colors"
          >
            📚 Ver todas las guías →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

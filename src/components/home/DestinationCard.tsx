import { Link } from 'react-router-dom';

interface DestinationCardProps {
  name: string;
  image: string;
  link: string;
}

const DestinationCard = ({ name, image, link }: DestinationCardProps) => {
  return (
    <Link
      to={link}
      className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">Guías disponibles</p>
      </div>
    </Link>
  );
};

export default DestinationCard;

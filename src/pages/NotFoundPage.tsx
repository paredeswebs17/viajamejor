import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Viaja Mejor</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-serif text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-2">Página no encontrada</p>
          <p className="text-gray-400 text-sm mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block bg-teal-600 text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-teal-700 transition-colors"
            >
              Volver al inicio
            </Link>
            <Link
              to="/guias"
              className="inline-block border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-sm hover:border-gray-400 transition-colors"
            >
              Ver guías de viaje
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

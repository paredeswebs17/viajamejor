const EditorialBlock = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo te ayudamos a viajar mejor?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Viaja Mejor es tu guía para descubrir cómo viajar más, gastar menos y disfrutar cada destino sin renunciar a la calidad.
            Después de visitar más de 40 países, compartimos contigo <strong>los mejores consejos, herramientas y trucos para ahorrar</strong> y viajar como un experto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
            Si quieres evitar errores de principiante y sacar el máximo partido a cada euro, aquí encontrarás lo que necesitas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✈️ Empieza por aquí:
          </h3>
          <ul className="list-none space-y-4 text-center text-lg leading-relaxed">
            <li>
              <a href="#consejos" className="text-sky-600 hover:underline font-medium">
                → Cómo encontrar vuelos baratos
              </a>
            </li>
            <li>
              <a href="#recomendaciones" className="text-sky-600 hover:underline font-medium">
                → Herramientas y recursos para viajar mejor
              </a>
            </li>
            <li>
              <a href="#preguntas-frecuentes" className="text-sky-600 hover:underline font-medium">
                → Preguntas frecuentes sobre viajar barato
              </a>
            </li>
            <li>
              <a href="#sobre-nosotros" className="text-sky-600 hover:underline font-medium">
                → Quiénes somos y cómo viajamos
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-sky-600 hover:underline font-medium">
                → Escríbeme si tienes dudas
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default EditorialBlock;

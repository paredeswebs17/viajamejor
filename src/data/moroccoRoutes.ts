export type Day = {
  number: number;
  title: string;
  places: string;
  description: string;
  lodging: string;
  image?: string;
  highlights?: string[];
};

export type MoroccoRoute = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  heroImage?: string;
  places: string[];
  description: string;
  longDescription?: string;
  days?: Day[];
  includes?: string[];
  excludes?: string[];
  gallery?: string[];
};

export const moroccoRoutes: MoroccoRoute[] = [
  {
    slug: 'marrakech-sahara',
    number: '01',
    title: 'De Marrakech al Desierto',
    subtitle: 'Atlas, kasbahs y dunas de Merzouga',
    duration: '7 días',
    price: '890€',
    image: 'https://images.pexels.com/photos/5541277/pexels-photo-5541277.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Marrakech', 'Aït Ben Haddou', 'Dades', 'Merzouga', 'Ouarzazate'],
    description: 'La ruta clásica reinventada. Cruzamos el Alto Atlas, dormimos en kasbahs de barro y terminamos a lomos de dromedario entre las dunas del Erg Chebbi.',
    longDescription: 'Un viaje privado de siete días que recorre la espina dorsal de Marruecos: de la bullanga de Marrakech a la calma absoluta del Sahara, pasando por las kasbahs de Aït Ben Haddou, las gargantas del Dades y del Todra, los oasis del Tafilalet y el valle de las palmeras del Draa. Con conductor-guía en español, alojamientos con carácter y una noche inolvidable en campamento de lujo bajo las estrellas.',
    days: [
      { number: 1, title: 'Llegada a Marrakech', places: 'Aeropuerto · Medina · Jemaa El Fna', description: 'Os esperamos en el aeropuerto y os trasladamos al riad. La tarde es vuestra: el primer contacto con la plaza Jemaa El Fna, el corazón de la medina. De día, domadores, encantadores de serpientes y puestos de zumo de naranja. Al caer la noche la plaza se transforma: puestos de comida, música improvisada y espectáculos.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/20700637/pexels-photo-20700637.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Recogida en aeropuerto', 'Riad en la medina', 'Atardecer en Jemaa El Fna'] },
      { number: 2, title: 'Alto Atlas y kasbahs', places: "Tizi N'Tichka · Aït Ben Haddou · Ouarzazate · Valle del Dades", description: "Cruzamos el Alto Atlas por el puerto de Tizi N'Tichka (2.260 m), la carretera más alta del norte de África. Visita de la kasbah de Aït Ben Haddou, escenario de Gladiator y Lawrence de Arabia. Seguimos por Ouarzazate y el Valle de las Rosas, con visita a una cooperativa de mujeres, y terminamos recorriendo la Garganta del Dades.", lodging: 'Hotel en el Valle del Dades · cena y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ["Puerto del Tizi N'Tichka", 'Kasbah de Aït Ben Haddou', 'Valle de las Rosas'] },
      { number: 3, title: 'Camino al Sahara', places: 'Mil Kasbahs · Tinghir · Erfoud · Dunas del Erg Chebbi', description: 'Tomamos la Ruta de las Mil Kasbahs hasta las Gargantas del Todra, uno de los cañones más espectaculares del mundo. Continuamos por Erfoud hasta Merzouga. Por la tarde, dromedarios hacia el corazón del desierto para ver la puesta de sol. Cena, música en directo junto al fuego y una noche bajo el cielo más estrellado que hayáis visto.', lodging: 'Campamento de lujo en jaimas · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Garganta del Todra', 'Dromedarios al atardecer', 'Noche bajo las estrellas'] },
      { number: 4, title: 'Amanecer en las dunas', places: 'Merzouga · Rissani · Valle del Draa · Ouarzazate', description: 'Madrugón para ver amanecer desde las dunas. Desayuno y salida hacia Rissani, antigua capital del Tafilalt con su zoco, el más importante del sur de Marruecos. Después, el Valle del Draa con sus millones de palmeras, y por la tarde llegada a Ouarzazate.', lodging: 'Hotel en Ouarzazate · cena y desayuno', image: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Amanecer entre dunas', 'Zoco nómada de Rissani', 'Palmeral del Draa'] },
      { number: 5, title: 'Vuelta a la ciudad roja', places: "Ouarzazate · Tizi N'Tichka · Marrakech", description: "Regreso a Marrakech cruzando de nuevo el puerto del Tizi N'Tichka. En el camino os sorprenderán los paisajes del Alto Atlas y las aldeas bereberes con casas construidas de forma caótica, colgando de las laderas. Llegada a Marrakech al atardecer.", lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Aldeas colgadas del Atlas', 'Paradas fotográficas', 'Atardecer en Marrakech'] },
      { number: 6, title: 'Marrakech con guía local', places: 'Koutoubia · Tumbas Saadíes · Palacio de la Bahía · Medina', description: 'Visita de la ciudad con guía local. Recorreremos el minarete de la Koutoubia, las Tumbas Saadíes, el Palacio de la Bahía, los Jardines de la Menara y la medina. Almuerzo y tarde libre para perderse por los zocos y volver a la plaza de Jemaa El Fna, que de noche es otra.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Minarete de la Koutoubia', 'Palacio de la Bahía', 'Zocos y tarde libre'] },
      { number: 7, title: 'Hasta pronto', places: 'Traslado al aeropuerto', description: 'Un último desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto de Marrakech. Gracias por confiar en nosotros. Os esperamos de vuelta.', lodging: 'Traslado incluido al aeropuerto', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Desayuno sin prisas', 'Traslado privado', 'Hasta el próximo viaje'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Traslados al aeropuerto (ida y vuelta)', '3 noches en Marrakech con alojamiento y desayuno', '1 noche en el Valle del Dades con cena y desayuno', '1 noche en Ouarzazate con cena y desayuno', '1 noche en campamento de lujo con cena y desayuno', 'Excursión en dromedario al campamento bereber', 'Guía local en Marrakech con ruta turística', 'Turbantes y sesión de fotos con vestimenta bereber', 'Sandboard en las dunas', 'Agua durante los trayectos'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Comidas en ciudades (excepto lo indicado)', 'Bebidas en las comidas y cenas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/20700637/pexels-photo-20700637.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  {
    slug: 'marrakech-sahara-5d',
    number: '02',
    title: 'Marrakech al Desierto · 5 días',
    subtitle: 'Tour privado de confort: Atlas, Dades y Merzouga',
    duration: '5 días',
    price: '690€',
    image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Marrakech', 'Aït Ben Haddou', 'Dades', 'Todra', 'Merzouga'],
    description: 'La esencia del primer viaje a Marruecos en cinco días: ciudad imperial, kasbahs del Atlas, gargantas y una noche en jaima en las dunas del Erg Chebbi.',
    longDescription: 'Una versión más concentrada de nuestra ruta clásica, pensada para quienes disponen de menos días pero no quieren renunciar a nada. Tour privado con conductor-guía en español, visita guiada de Marrakech el primer día, dos jornadas de carretera escénica por el Alto Atlas, una noche inolvidable en campamento de lujo en Merzouga y regreso por el Valle del Draa.',
    days: [
      { number: 1, title: 'Llegada y Marrakech con guía', places: 'Aeropuerto · Koutoubia · Bahía · Medina · Jemaa El Fna', description: 'Os recibimos en el aeropuerto y arrancamos con visita guiada de Marrakech: el minarete de la Koutoubia, las Tumbas Saadíes, el Palacio de la Bahía y la medina. Almuerzo y tarde libre para subir a alguna de las terrazas que rodean la plaza Jemaa El Fna.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Recogida en aeropuerto', 'Visita guiada de la medina', 'Atardecer en Jemaa El Fna'] },
      { number: 2, title: 'Alto Atlas y kasbahs', places: "Tizi N'Tichka · Aït Ben Haddou · Ouarzazate · Valle del Dades", description: "Salida a las 8:00 hacia el sur cruzando el puerto de Tizi N'Tichka hasta la kasbah de Aït Ben Haddou. Pasamos por los estudios de Ouarzazate y, tras el almuerzo, visita a una cooperativa de mujeres en el Valle de las Rosas. Noche en el Valle del Dades.", lodging: 'Hotel en el Valle del Dades · alojamiento y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Aït Ben Haddou', 'Estudios de Ouarzazate', 'Cooperativa en el Valle de las Rosas'] },
      { number: 3, title: 'Gargantas y noche en el desierto', places: 'Dades · Tinghir · Garganta del Todra · Erfoud · Merzouga', description: 'Recorremos la Garganta del Todra antes de seguir hacia los oasis del Tafilalet. En Merzouga cambiamos el coche por dromedarios para cruzar las dunas del Erg Chebbi, hacer sandboard y ver la puesta de sol. Cena bajo las estrellas y música de tambores en jaima bereber.', lodging: 'Campamento de lujo en jaimas · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Garganta del Todra', 'Dromedarios al atardecer', 'Sandboard y noche bajo las estrellas'] },
      { number: 4, title: 'Del desierto al Atlas', places: "Merzouga · Alnif · Tazarine · N'Kob · Valle del Draa · Marrakech", description: 'Amanecer en las dunas y desayuno en el campamento. Salida atravesando aldeas bereberes y almuerzo en el Valle del Draa, el palmeral más largo del país. Por la tarde, regreso a Marrakech cruzando de nuevo el Alto Atlas.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Amanecer entre dunas', 'Aldeas del Anti Atlas', 'Palmeral del Draa'] },
      { number: 5, title: 'Hasta pronto', places: 'Marrakech · Traslado al aeropuerto', description: 'Un último desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto de Marrakech. Gracias por confiar en nosotros.', lodging: 'Traslado incluido al aeropuerto', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Desayuno sin prisas', 'Tiempo libre', 'Traslado privado'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Traslados al aeropuerto (ida y vuelta)', '2 noches en Marrakech con alojamiento y desayuno', '1 noche en el Valle del Dades con alojamiento y desayuno', '1 noche en campamento de lujo con cena y desayuno', 'Excursión en dromedario al campamento bereber', 'Guía local en Marrakech con visita guiada', 'Turbantes y agua durante los trayectos', 'WiFi en el coche'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Cenas en Marrakech', 'Bebidas en las comidas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  {
    slug: 'marrakech-sahara-3d',
    number: '03',
    title: 'Marrakech al Desierto · 3 días',
    subtitle: 'Viaje boutique de confort: Atlas, Dades y Merzouga',
    duration: '3 días',
    price: '420€',
    image: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Marrakech', 'Aït Ben Haddou', 'Dades', 'Todra', 'Merzouga'],
    description: 'La ruta esencial al desierto en tres días. Cruzamos el Alto Atlas, dormimos en el Valle del Dades y pasamos una noche en jaima entre las dunas del Erg Chebbi.',
    longDescription: 'Una escapada privada de tres días para quienes tienen poco tiempo y quieren tocar lo esencial: la kasbah de Aït Ben Haddou, las gargantas del Atlas y una noche en campamento de lujo bajo las estrellas del Sahara.',
    days: [
      { number: 1, title: 'Atlas y kasbahs', places: "Marrakech · Tizi N'Tichka · Aït Ben Haddou · Ouarzazate · Valle del Dades", description: "Recogida en el riad a las 8:00. Cruzamos el puerto de Tizi N'Tichka hasta la kasbah de Aït Ben Haddou. Continuamos por los estudios de Ouarzazate y visita a una cooperativa de mujeres en el Valle de las Rosas. Noche en el Valle del Dades.", lodging: 'Hotel en el Valle del Dades · alojamiento y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Aït Ben Haddou', 'Estudios de Ouarzazate', 'Cooperativa del Valle de las Rosas'] },
      { number: 2, title: 'Gargantas y noche en jaima', places: 'Dades · Tinghir · Garganta del Todra · Erfoud · Merzouga', description: 'De camino al Sahara recorremos la Garganta del Todra. En Merzouga cambiamos el coche por dromedarios para cruzar las dunas del Erg Chebbi. Subida a la duna más alta para hacer sandboard y ver la puesta de sol. Cena bajo las estrellas.', lodging: 'Campamento de lujo en jaimas · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Garganta del Todra', 'Dromedarios al atardecer', 'Noche en jaima bereber'] },
      { number: 3, title: 'Vuelta por el Draa', places: "Merzouga · Tazarine · N'Kob · Agdz · Alto Atlas · Marrakech", description: 'Amanecer en las dunas y desayuno en el campamento. Salida hacia Marrakech atravesando aldeas bereberes y almuerzo en el Valle del Draa. Por la tarde cruzamos de nuevo el Alto Atlas, con llegada al riad sobre las 18:30.', lodging: 'Traslado al riad en Marrakech', image: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Amanecer entre dunas', 'Aldeas del Anti Atlas', 'Palmeral del Draa'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Recogida y regreso al riad de Marrakech', '1 noche en el Valle del Dades con cena y desayuno', '1 noche en campamento de lujo con cena y desayuno', 'Excursión en dromedario al campamento bereber', 'Turbantes y agua durante los trayectos', 'WiFi en el coche'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Bebidas en las comidas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  {
    slug: 'fez-marrakech-5d',
    number: '04',
    title: 'De Fez a Marrakech · 5 días',
    subtitle: 'Tour privado por el Medio Atlas, el desierto y el sur',
    duration: '5 días',
    price: '780€',
    image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Fez', 'Ifrane', 'Merzouga', 'Todra', 'Ouarzazate', 'Aït Ben Haddou', 'Marrakech'],
    description: 'De la medina más antigua del mundo árabe a la ciudad roja: cedros del Medio Atlas, dunas del Erg Chebbi y kasbahs del sur en cinco días.',
    longDescription: 'Una travesía de norte a sur que conecta las dos grandes ciudades imperiales por la diagonal más espectacular del país: el Medio Atlas con sus cedros y monos de berbería, el Valle del Ziz, una noche en jaima en Merzouga, las gargantas del Todra, la Ruta de las Mil Kasbahs y Aït Ben Haddou.',
    days: [
      { number: 1, title: 'Llegada a Fez con guía local', places: 'Aeropuerto · Palacio Real · Medina · Curtidores', description: 'Os recibimos en el aeropuerto de Fez y os trasladamos al riad. Por la tarde, visita guiada: puertas doradas del Palacio Real, mirador sobre la medina y recorrido a pie por mezquitas, medersas y caravasares hasta el barrio de los curtidores.', lodging: 'Riad en la medina de Fez · alojamiento y desayuno', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Puertas del Palacio Real', 'Mirador sobre la medina', 'Barrio de los curtidores'] },
      { number: 2, title: 'Medio Atlas y noche en jaima', places: 'Ifrane · Azrou · Valle del Ziz · Midelt · Erfoud · Merzouga', description: "Salida hacia Ifrane, 'la Suiza de Marruecos'. Atravesamos el Medio Atlas por Azrou con su cedro milenario y monos de berbería. Continuamos por el Valle del Ziz hasta Merzouga, y allí por dromedarios para entrar en las dunas al atardecer. Cena y música bereber bajo las estrellas.", lodging: 'Campamento de lujo en jaimas · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Cedros milenarios de Azrou', 'Valle del Ziz', 'Noche en jaima en el Erg Chebbi'] },
      { number: 3, title: 'Del desierto a Ouarzazate', places: 'Merzouga · Rissani · Garganta del Todra · Valle del Dades · Ouarzazate', description: 'Dejamos las dunas rumbo a Rissani con su zoco tradicional. Continuamos hacia las Gargantas del Todra y el Valle del Dades hasta enlazar con el Valle de las Rosas y llegar a Ouarzazate.', lodging: 'Riad u hotel en Ouarzazate · cena y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Zoco de Rissani', 'Garganta del Todra', 'Ruta de las Mil Kasbahs'] },
      { number: 4, title: 'Aït Ben Haddou y Marrakech', places: 'Ouarzazate · Aït Ben Haddou · Alto Atlas · Marrakech', description: 'Visita a la kasbah de Aït Ben Haddou, Patrimonio de la Humanidad. Cruzamos el Alto Atlas con paradas en aldeas bereberes. Llegada a Marrakech y visita guiada: Palacio de la Bahía, Tumbas Saadíes y Koutoubia. Noche libre en Jemaa El Fna.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Aït Ben Haddou', 'Valle de Ounila', 'Visita guiada de Marrakech'] },
      { number: 5, title: 'Hasta pronto', places: 'Marrakech · Traslado al aeropuerto', description: 'Un último desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto de Marrakech.', lodging: 'Traslado incluido al aeropuerto', image: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Desayuno sin prisas', 'Tiempo libre', 'Traslado privado'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Guías locales en Fez y Marrakech', 'Traslados al aeropuerto (ida y vuelta)', '1 noche en Fez con alojamiento y desayuno', '1 noche en campamento de lujo con cena y desayuno', '1 noche en Ouarzazate con cena y desayuno', '1 noche en Marrakech con alojamiento y desayuno', 'Excursión en dromedario al campamento bereber', 'Turbantes y tatuajes de henna', 'Agua durante los trayectos'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Cenas en Fez y Marrakech', 'Bebidas en las comidas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  {
    slug: 'marrakech-fez-8d',
    number: '05',
    title: 'De Marrakech a Fez · 8 días',
    subtitle: 'Las dos ciudades imperiales unidas por el Atlas y el Sahara',
    duration: '8 días',
    price: '1.290€',
    image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Marrakech', 'Aït Ben Haddou', 'Dades', 'Merzouga', 'Khamlia', 'Azrou', 'Fez'],
    description: 'Una travesía completa de Marrakech a Fez: Atlas, kasbahs del sur, dos noches en el desierto y la medina más antigua del mundo árabe.',
    longDescription: 'Ocho días para vivir el país de extremo a extremo, conectando las dos grandes ciudades imperiales: el Alto Atlas, Aït Ben Haddou, las gargantas del Dades y del Todra, dos noches en Merzouga con familias nómadas y música Gnawa en Khamlia, los cedros de Azrou e Ifrane, y dos jornadas en Fez con guía local.',
    days: [
      { number: 1, title: 'Llegada a Marrakech', places: 'Aeropuerto · Riad · Jemaa El Fna', description: 'Os esperamos en el aeropuerto y os trasladamos al riad. Tarde libre para un primer paseo por la medina y Jemaa El Fna.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/20700637/pexels-photo-20700637.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Recogida en aeropuerto', 'Riad en la medina', 'Primer paseo por Jemaa El Fna'] },
      { number: 2, title: 'Marrakech con guía local', places: 'Koutoubia · Tumbas Saadíes · Bahía · Menara · Medina', description: 'Visita guiada de Marrakech: Koutoubia, Tumbas Saadíes, Palacio de la Bahía, Jardines de la Menara y medina. Tarde libre para zocos y atardecer en terraza.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Minarete de la Koutoubia', 'Palacio de la Bahía', 'Atardecer en terraza'] },
      { number: 3, title: 'Alto Atlas y kasbahs', places: "Tizi N'Tichka · Aït Ben Haddou · Ouarzazate · Valle del Dades", description: "Cruzamos el Alto Atlas por el Tizi N'Tichka. Visita de Aït Ben Haddou. Seguimos por Ouarzazate, Valle de las Rosas y la Garganta del Dades.", lodging: 'Hotel en el Valle del Dades · cena y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ["Tizi N'Tichka", 'Aït Ben Haddou', 'Garganta del Dades'] },
      { number: 4, title: 'Camino al Sahara', places: 'Dades · Tinghir · Garganta del Todra · Erfoud · Merzouga', description: 'Gargantas del Todra, oasis del Tafilalet y dromedarios al atardecer hacia las dunas del Erg Chebbi. Sandboard, cena bereber y música junto al fuego.', lodging: 'Campamento de lujo en jaimas · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Garganta del Todra', 'Dromedarios al atardecer', 'Noche bajo las estrellas'] },
      { number: 5, title: 'Vivir el desierto', places: 'Merzouga · Pista del Dakar · Khamlia · Familias nómadas', description: 'Amanecer en las dunas. Recorremos una pista del Rally Dakar, té con una familia nómada y concierto de música Gnawa en Khamlia. Almuerzo con familia bereber.', lodging: 'Hotel del desierto · cena y desayuno', image: 'https://images.pexels.com/photos/36209446/pexels-photo-36209446.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Pista del Dakar en 4x4', 'Té con familia nómada', 'Concierto Gnawa en Khamlia'] },
      { number: 6, title: 'Cedros del Atlas y Fez', places: 'Merzouga · Midelt · Azrou · Ifrane · Fez', description: "Subimos al Medio Atlas por los bosques de cedros de Azrou con monos de berbería. Pasamos por Ifrane, 'la Suiza de Marruecos'. Llegada a Fez por la tarde.", lodging: 'Riad en la medina de Fez · alojamiento y desayuno', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Cedros milenarios de Azrou', 'Ifrane', 'Llegada a Fez'] },
      { number: 7, title: 'Fez con guía local', places: 'Palacio Real · Medina · Curtidores · Barrio andalusí', description: 'Día completo con guía local: puertas del Palacio Real, mirador, medina a pie, mezquitas, medersas, curtidores y barrio de los artesanos.', lodging: 'Riad en la medina de Fez · alojamiento y desayuno', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Puertas del Palacio Real', 'Barrio de los curtidores', 'Barrio de los artesanos'] },
      { number: 8, title: 'Hasta pronto', places: 'Fez · Traslado al aeropuerto', description: 'Un último desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto de Fez.', lodging: 'Traslado incluido al aeropuerto', image: 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Desayuno sin prisas', 'Tiempo libre', 'Traslado privado'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Traslados al aeropuerto (ida y vuelta)', '2 noches en Marrakech con alojamiento y desayuno', '1 noche en el Valle del Dades con cena y desayuno', '1 noche en campamento de lujo con cena y desayuno', '1 noche en hotel del desierto con cena y desayuno', '2 noches en Fez con alojamiento y desayuno', 'Excursión en dromedario al campamento bereber', 'Guías locales en Marrakech y Fez', 'Turbantes y agua durante los trayectos', 'WiFi en el coche'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Comidas en ciudades (excepto lo indicado)', 'Bebidas en las comidas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/20700637/pexels-photo-20700637.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  {
    slug: 'tanger-marrakech-8d',
    number: '06',
    title: 'De Tánger a Marrakech · 8 días',
    subtitle: 'Chaouen, Fez, el desierto y la ciudad roja',
    duration: '8 días',
    price: '1.350€',
    image: 'https://images.pexels.com/photos/34337962/pexels-photo-34337962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    heroImage: 'https://images.pexels.com/photos/34337962/pexels-photo-34337962.jpeg?auto=compress&cs=tinysrgb&w=1920',
    places: ['Tánger', 'Chefchaouen', 'Volubilis', 'Meknés', 'Fez', 'Merzouga', 'Dades', 'Aït Ben Haddou', 'Marrakech'],
    description: 'De norte a sur: el azul del Rif, ruinas romanas de Volubilis, la medina más antigua del mundo árabe y una noche en jaima en el Sahara.',
    longDescription: 'Una travesía completa que arranca en el norte mediterráneo y baja en diagonal hasta Marrakech. Dormimos en Chefchaouen, la ciudad azul del Rif; visitamos Volubilis y Meknés; pasamos dos noches en Fez con guía local; cruzamos el Medio Atlas hasta Merzouga para una noche en campamento bereber; y volvemos por Todra, Dades, Telouet y Aït Ben Haddou hasta Marrakech.',
    days: [
      { number: 1, title: 'Tánger a la ciudad azul', places: 'Tánger · Reserva de la Biosfera · Chefchaouen', description: 'Recogida en el puerto o aeropuerto de Tánger. Salida hacia Chefchaouen en las montañas del Rif. La Medina Azul con su costumbre de pintar casas de azul añil. Tarde libre para perderse por sus plazas y callejuelas.', lodging: 'Riad en Chefchaouen · alojamiento y desayuno', image: 'https://images.pexels.com/photos/34337962/pexels-photo-34337962.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Llegada a Tánger', 'Calles azules de Chaouen', 'Atardecer en el Rif'] },
      { number: 2, title: 'Volubilis, Meknés y Fez', places: 'Chefchaouen · Volubilis · Moulay Idriss · Meknés · Fez', description: 'Bajamos del Rif. Visita de Volubilis, las ruinas romanas mejor conservadas del país. Recorrido por Meknés. Llegada a Fez por la tarde.', lodging: 'Riad en la medina de Fez · alojamiento y desayuno', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Ruinas romanas de Volubilis', 'Moulay Idriss', 'Llegada a Fez'] },
      { number: 3, title: 'Fez con guía local', places: 'Palacio Real · Medina · Curtidores · Barrio andalusí', description: 'Día completo con guía por la medina más antigua del mundo árabe. Puertas del Palacio Real, mirador, mezquitas, medersas, curtidores y barrio de los artesanos.', lodging: 'Riad en la medina de Fez · alojamiento y desayuno', image: 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Puertas del Palacio Real', 'Barrio de los curtidores', 'Barrio de los artesanos'] },
      { number: 4, title: 'Cedros del Atlas y Sahara', places: 'Fez · Ifrane · Azrou · Midelt · Valle del Ziz · Merzouga', description: 'Salida hacia Merzouga por el Medio Atlas. Ifrane, cedros de Azrou, almuerzo en Midelt. Descendemos por el Valle del Ziz hasta las dunas. Dromedarios al atardecer. Cena bereber bajo las estrellas.', lodging: 'Campamento de jaimas en el Erg Chebbi · cena y desayuno', image: 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Cedros milenarios de Azrou', 'Valle del Ziz', 'Noche en jaima'] },
      { number: 5, title: 'Del desierto al Dades', places: 'Merzouga · Rissani · Garganta del Todra · Valle del Dades', description: 'Despedida del desierto, mercado de Rissani, Gargantas del Todra con paredes de 300 metros y ruta por el Valle del Dades.', lodging: 'Hotel en el Valle del Dades · cena y desayuno', image: 'https://images.pexels.com/photos/13591966/pexels-photo-13591966.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Mercado de Rissani', 'Garganta del Todra', 'Dedos de mono en el Dades'] },
      { number: 6, title: 'Kasbahs y Alto Atlas', places: 'Dades · Ouarzazate · Aït Ben Haddou · Telouet · Marrakech', description: 'Kasbah de Taourirt en Ouarzazate, Aït Ben Haddou (Patrimonio de la Humanidad), kasbah de Telouet y cruce del Alto Atlas hasta Marrakech.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Kasbah de Taourirt', 'Aït Ben Haddou', 'Kasbah de Telouet'] },
      { number: 7, title: 'Marrakech con guía local', places: 'Koutoubia · Tumbas Saadíes · Bahía · Menara · Jemaa El Fna', description: 'Visita guiada: Koutoubia, Tumbas Saadíes, Palacio de la Bahía, Jardines de la Menara. Tarde libre en la medina y Jemaa El Fna de noche.', lodging: 'Riad en la medina de Marrakech · alojamiento y desayuno', image: 'https://images.pexels.com/photos/20700637/pexels-photo-20700637.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Minarete de la Koutoubia', 'Palacio de la Bahía', 'Jemaa El Fna'] },
      { number: 8, title: 'Hasta pronto', places: 'Marrakech · Traslado al aeropuerto', description: 'Un último desayuno tranquilo y tiempo libre hasta el traslado al aeropuerto de Marrakech.', lodging: 'Traslado incluido al aeropuerto', image: 'https://images.pexels.com/photos/23551283/pexels-photo-23551283.jpeg?auto=compress&cs=tinysrgb&w=1400', highlights: ['Desayuno sin prisas', 'Tiempo libre', 'Traslado privado'] },
    ],
    includes: ['Transporte privado durante todo el viaje', 'Conductor-guía de habla española', 'Traslados al aeropuerto/puerto (ida y vuelta)', '1 noche en Chefchaouen con alojamiento y desayuno', '2 noches en Fez con alojamiento y desayuno', '1 noche en campamento de lujo con cena y desayuno', '1 noche en el Valle del Dades con cena y desayuno', '2 noches en Marrakech con alojamiento y desayuno', 'Excursión en dromedario al campamento bereber', 'Guías locales en Fez y Marrakech', 'Turbantes y agua durante los trayectos', 'WiFi en el coche'],
    excludes: ['Vuelos internacionales', 'Almuerzos durante los trayectos', 'Comidas en ciudades', 'Bebidas en las comidas', 'Entradas a monumentos', 'Propinas', 'Seguro de viaje'],
    gallery: ['https://images.pexels.com/photos/34337962/pexels-photo-34337962.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/30320422/pexels-photo-30320422.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1200', 'https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
];

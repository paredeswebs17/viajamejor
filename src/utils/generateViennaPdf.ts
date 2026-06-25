import { jsPDF } from 'jspdf';

const COLORS = {
  primary: [180, 120, 40] as [number, number, number],
  dark: [40, 40, 40] as [number, number, number],
  medium: [100, 100, 100] as [number, number, number],
  light: [160, 160, 160] as [number, number, number],
  accent: [200, 140, 50] as [number, number, number],
  bg: [250, 248, 245] as [number, number, number],
};

interface Stop {
  time: string;
  place: string;
  details?: string;
  price?: string;
}

interface DayData {
  number: number;
  title: string;
  stops: Stop[];
}

const DAYS: DayData[] = [
  {
    number: 1,
    title: 'Entrada Triunfal a la Capital Musical',
    stops: [
      { time: '9:00', place: 'Rathausplatz y Ayuntamiento', details: 'Entrada gratuita con audioguia. Estilo neogotico, torre de 98m.', price: 'Gratis' },
      { time: '10:30', place: 'Cafe Central', details: 'Patrimonio Cultural Inmaterial. Apfelstrudel y Wiener Melange.', price: '10-15 EUR' },
      { time: '11:30', place: 'Graben, Pestsaule y Reloj Anker', details: 'Columna de la Peste (1693). Reloj Anker a las 12:00 desfile completo.', price: 'Gratis' },
      { time: '13:00', place: 'Catedral de San Esteban', details: 'Catedral gotica, tejado de 230.000 azulejos. Subida torre sur 343 escalones.', price: '7 EUR torre' },
      { time: '14:30', place: 'Palacio Schonbrunn', details: '1.441 habitaciones, jardines gratuitos. Glorieta con vistas panoramicas.', price: '29 EUR Grand Tour' },
      { time: '17:30', place: 'Casa de Mozart (Mozarthaus)', details: 'Unica residencia conservada. Aqui compuso Las Bodas de Figaro.', price: '14 EUR' },
    ],
  },
  {
    number: 2,
    title: 'Arte, Diversion y Arquitectura Unica',
    stops: [
      { time: '9:30', place: 'Wiener Prater (Noria Gigante)', details: 'Riesenrad de 64,75m (1897). Vistas 360 de Viena.', price: '15 EUR noria' },
      { time: '11:30', place: 'Hundertwasserhaus', details: 'Fachada multicolor, suelos ondulantes, 52 apartamentos. Exterior gratuito.', price: 'Gratis exterior' },
      { time: '12:30', place: 'Stadtpark y Karlskirche', details: 'Estatua dorada de Johann Strauss II. Karlskirche: subida a la cupula.', price: '8 EUR Karlskirche' },
      { time: '14:00', place: 'Palacio Belvedere', details: 'El Beso de Klimt (1907-1908). Jardines barrocos gratuitos.', price: '20 EUR' },
    ],
  },
  {
    number: 3,
    title: 'Hofburg, Sacher y Gran Final Musical',
    stops: [
      { time: '9:00', place: 'Palacio Hofburg', details: 'Apartamentos Imperiales, Museo Sisi, Biblioteca Nacional (12 EUR).', price: '19 EUR combinada' },
      { time: '13:00', place: 'Cafe Sacher', details: 'Sachertorte original (receta secreta desde 1832). Frente a la Opera.', price: '8-12 EUR' },
      { time: '15:00', place: 'Karntner Strasse', details: 'Calle peatonal principal. Swarovski, musicos callejeros, terrazas.', price: 'Gratis' },
      { time: '19:30', place: 'Wiener Staatsoper', details: 'Entradas de pie 3-4 EUR. Acustica de clase mundial. Temporada sept-junio.', price: '3-300 EUR' },
    ],
  },
];

const BUDGET = [
  { category: 'Alojamiento (3 noches)', budget: '150-300 EUR', tip: 'Zona Leopoldstadt o Neubau: centricos y mas economicos' },
  { category: 'Transporte (abono 72h)', budget: '17,10 EUR', tip: 'Cubre metro, tranvia y autobus ilimitados' },
  { category: 'Entradas principales', budget: '80-120 EUR', tip: 'Vienna Pass 3 dias (89 EUR) si visitas 4+ museos' },
  { category: 'Comidas (3 dias)', budget: '60-120 EUR', tip: 'Menus del dia en Beisl: 8-12 EUR' },
  { category: 'Cafes y dulces', budget: '20-40 EUR', tip: 'Sachertorte ~7 EUR, Melange ~5 EUR' },
  { category: 'Concierto/Opera', budget: '3-50 EUR', tip: 'Stehplatz (de pie) desde 3 EUR' },
];

const TIPS = [
  'Vienna Pass 3 dias (89 EUR): rentable si visitas Schonbrunn + Belvedere + Hofburg.',
  'Abono transporte 72h (17,10 EUR): metro, tranvia y bus ilimitados.',
  'Sachertorte para llevar: en cajas elegantes, regalo perfecto.',
  'Stehplatz en la Opera: 3-4 EUR, se venden 80 min antes.',
  'Agua del grifo: potable y excelente en toda Viena.',
  'Museos gratis el primer domingo de mes (varios).',
  'Reservar Cafe Central con antelacion o ir antes de las 10:00.',
];

const MAP_POINTS = [
  { day: 1, name: 'Rathausplatz', coords: '48.2107, 16.3568' },
  { day: 1, name: 'Cafe Central', coords: '48.2108, 16.3652' },
  { day: 1, name: 'Graben & Reloj Anker', coords: '48.2086, 16.3697' },
  { day: 1, name: 'Catedral San Esteban', coords: '48.2085, 16.3731' },
  { day: 1, name: 'Palacio Schonbrunn', coords: '48.1845, 16.3122' },
  { day: 1, name: 'Mozarthaus', coords: '48.2072, 16.3748' },
  { day: 2, name: 'Wiener Prater', coords: '48.2166, 16.3964' },
  { day: 2, name: 'Hundertwasserhaus', coords: '48.2074, 16.3942' },
  { day: 2, name: 'Stadtpark', coords: '48.2040, 16.3796' },
  { day: 2, name: 'Palacio Belvedere', coords: '48.1913, 16.3808' },
  { day: 3, name: 'Palacio Hofburg', coords: '48.2066, 16.3656' },
  { day: 3, name: 'Cafe Sacher', coords: '48.2031, 16.3694' },
  { day: 3, name: 'Karntner Strasse', coords: '48.2050, 16.3722' },
  { day: 3, name: 'Wiener Staatsoper', coords: '48.2029, 16.3690' },
];

function addHeader(doc: jsPDF, _y: number): number {
  doc.setFillColor(...COLORS.primary);
  doc.rect(0, 0, 210, 45, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('VIENA', 20, 22);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Itinerario completo de 3 dias', 20, 32);
  doc.setFontSize(8);
  doc.text('consejosparaviajar.info', 20, 40);
  return 55;
}

function addSectionTitle(doc: jsPDF, title: string, y: number): number {
  if (y > 260) { doc.addPage(); y = 20; }
  doc.setFillColor(...COLORS.primary);
  doc.rect(20, y - 4, 3, 12, 'F');
  doc.setTextColor(...COLORS.dark);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 27, y + 5);
  return y + 18;
}

function checkPageBreak(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > 280) { doc.addPage(); return 20; }
  return y;
}

export function generateViennaPdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  let y = addHeader(doc, 0);

  // Intro
  doc.setTextColor(...COLORS.medium);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const intro = 'Guia completa hora a hora para visitar Viena en 3 dias. Incluye horarios, precios actualizados, coordenadas de cada punto y trucos para ahorrar.';
  const lines = doc.splitTextToSize(intro, 170);
  doc.text(lines, 20, y);
  y += lines.length * 5 + 10;

  // Day sections
  for (const day of DAYS) {
    y = checkPageBreak(doc, y, 40);
    y = addSectionTitle(doc, `DIA ${day.number}: ${day.title}`, y);

    for (const stop of day.stops) {
      y = checkPageBreak(doc, y, 22);

      // Time badge
      doc.setFillColor(245, 240, 230);
      doc.roundedRect(20, y - 3, 16, 7, 1, 1, 'F');
      doc.setTextColor(...COLORS.primary);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text(stop.time, 22, y + 2);

      // Place name
      doc.setTextColor(...COLORS.dark);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(stop.place, 40, y + 2);

      // Price
      if (stop.price) {
        doc.setTextColor(...COLORS.primary);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        const priceW = doc.getTextWidth(stop.price);
        doc.text(stop.price, 190 - priceW, y + 2);
      }

      y += 8;

      // Details
      if (stop.details) {
        doc.setTextColor(...COLORS.medium);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        const detLines = doc.splitTextToSize(stop.details, 150);
        doc.text(detLines, 40, y);
        y += detLines.length * 4 + 6;
      }
    }

    y += 8;
  }

  // Map section
  doc.addPage();
  y = 20;
  y = addSectionTitle(doc, 'MAPA - COORDENADAS DE CADA PUNTO', y);

  doc.setTextColor(...COLORS.medium);
  doc.setFontSize(8);
  doc.text('Busca estas coordenadas en Google Maps para navegar a cada punto:', 20, y);
  y += 10;

  for (let day = 1; day <= 3; day++) {
    y = checkPageBreak(doc, y, 20);
    doc.setTextColor(...COLORS.dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(`Dia ${day}`, 20, y);
    y += 6;

    const dayPoints = MAP_POINTS.filter(p => p.day === day);
    for (const point of dayPoints) {
      y = checkPageBreak(doc, y, 8);
      doc.setTextColor(...COLORS.dark);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text(`• ${point.name}`, 25, y);
      doc.setTextColor(...COLORS.light);
      doc.text(point.coords, 100, y);
      y += 5;
    }
    y += 5;
  }

  // Google Maps link
  y += 5;
  doc.setTextColor(...COLORS.primary);
  doc.setFontSize(8);
  doc.text('Abre Google Maps con: maps.google.com y busca las coordenadas directamente.', 20, y);

  // Budget section
  doc.addPage();
  y = 20;
  y = addSectionTitle(doc, 'PRESUPUESTO DETALLADO', y);

  // Table header
  doc.setFillColor(245, 240, 230);
  doc.rect(20, y - 3, 170, 8, 'F');
  doc.setTextColor(...COLORS.dark);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('Categoria', 22, y + 2);
  doc.text('Presupuesto', 95, y + 2);
  doc.text('Consejo', 130, y + 2);
  y += 10;

  for (const item of BUDGET) {
    y = checkPageBreak(doc, y, 14);
    doc.setTextColor(...COLORS.dark);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(item.category, 22, y);
    doc.setFont('helvetica', 'bold');
    doc.text(item.budget, 95, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...COLORS.medium);
    const tipLines = doc.splitTextToSize(item.tip, 58);
    doc.text(tipLines, 130, y);
    y += Math.max(tipLines.length * 4, 5) + 4;
  }

  // Total
  y += 5;
  doc.setDrawColor(...COLORS.primary);
  doc.line(20, y, 190, y);
  y += 7;
  doc.setTextColor(...COLORS.dark);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('TOTAL ESTIMADO (3 dias, por persona):', 22, y);
  doc.setTextColor(...COLORS.primary);
  doc.text('330 - 650 EUR', 130, y);

  // Tips section
  y += 20;
  y = checkPageBreak(doc, y, 60);
  y = addSectionTitle(doc, 'TRUCOS DE AHORRO', y);

  for (const tip of TIPS) {
    y = checkPageBreak(doc, y, 10);
    doc.setTextColor(...COLORS.dark);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const tipLines = doc.splitTextToSize(`• ${tip}`, 165);
    doc.text(tipLines, 22, y);
    y += tipLines.length * 4 + 3;
  }

  // Footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setTextColor(...COLORS.light);
    doc.setFontSize(7);
    doc.text(`consejosparaviajar.info — Guia Viena 3 dias — Pagina ${i}/${totalPages}`, 20, 290);
  }

  doc.save('Viena-Itinerario-3-Dias.pdf');
}

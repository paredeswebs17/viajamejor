/**
 * Prerender sin navegador para viajamejor.net
 *
 * Genera un HTML estatico por ruta con sus metadatos SEO (title, description,
 * canonical, Open Graph y Twitter) para que Google y las redes sociales
 * (WhatsApp, Facebook, Instagram) vean los datos correctos de cada pagina
 * sin ejecutar JavaScript. Lee los <Helmet> de src/pages/*.tsx, asi que no
 * necesita Puppeteer ni Chromium y funciona al publicar desde Bolt.
 *
 * Uso:  node prerender.js        -> escribe dist/<ruta>/index.html y dist/sitemap.xml
 *       node prerender.js --dry  -> solo muestra lo que generaria
 *
 * Las rutas de Marruecos NO se generan ni van al sitemap: replican el
 * contenido de secretosdemarruecos.com y llevan noindex.
 * Para que una pagina nueva entre aqui basta con que su <Helmet> tenga
 * <link rel="canonical" href="https://viajamejor.net/..." />.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://viajamejor.net';
const DIST = resolve(__dirname, 'dist');
const PAGES = resolve(__dirname, 'src/pages');
const DRY = process.argv.includes('--dry');

// Rutas de Marruecos: replican secretosdemarruecos.com, no se indexan
const isNoindex = (p) =>
  p.startsWith('/viajes-organizados') || p.startsWith('/marruecos') || p.startsWith('/marrakech');

const esc = (s) =>
  String(s)
    .replace(/&(?!amp;|quot;|lt;|gt;|#)/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const first = (src, re) => {
  const m = src.match(re);
  return m ? m[1].replace(/\s+/g, ' ').trim() : null;
};

const meta = (h, attr, key) =>
  first(h, new RegExp('<meta\\s+' + attr + '="' + key + '"\\s+content="([^"]*)"'));

function readPage(file) {
  const src = readFileSync(join(PAGES, file), 'utf8');
  const start = src.indexOf('<Helmet');
  const end = src.indexOf('</Helmet>');
  if (start === -1 || end === -1) return null;
  const h = src.slice(start, end);
  const canonical = first(h, /<link\s+rel="canonical"\s+href="([^"]+)"/);
  if (!canonical || !canonical.startsWith(SITE)) return null;
  return {
    file,
    path: canonical.slice(SITE.length).replace(/\/$/, '') || '/',
    title: first(h, /<title>([^<{]+)<\/title>/),
    description: meta(h, 'name', 'description'),
    ogTitle: meta(h, 'property', 'og:title'),
    ogDescription: meta(h, 'property', 'og:description'),
    ogImage: meta(h, 'property', 'og:image') || meta(h, 'name', 'twitter:image'),
  };
}

function headTags(r, defaults) {
  const url = SITE + r.path;
  const title = r.title || defaults.title;
  const description = r.description || defaults.description;
  const ogTitle = r.ogTitle || title;
  const ogDescription = r.ogDescription || description;
  const image = r.ogImage || SITE + '/og-image.jpg';
  const tag = (el, attrs) =>
    '<' + el + ' ' +
    Object.entries(attrs).map(([k, val]) => k + '="' + esc(val) + '"').join(' ') +
    ' data-rh="true" />';
  return [
    tag('link', { rel: 'canonical', href: url }),
    tag('meta', { name: 'description', content: description }),
    tag('meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }),
    tag('meta', { property: 'og:title', content: ogTitle }),
    tag('meta', { property: 'og:description', content: ogDescription }),
    tag('meta', { property: 'og:url', content: url }),
    tag('meta', { property: 'og:image', content: image }),
    tag('meta', { name: 'twitter:title', content: ogTitle }),
    tag('meta', { name: 'twitter:description', content: ogDescription }),
    tag('meta', { name: 'twitter:image', content: image }),
  ].join('\n    ');
}

const indexPath = join(DIST, 'index.html');
if (!existsSync(indexPath)) {
  console.error('prerender: no existe dist/index.html. Ejecuta antes "vite build".');
  process.exit(1);
}

const base = readFileSync(indexPath, 'utf8');
const defaults = {
  title: first(base, /<title>([^<]*)<\/title>/) || 'Viaja Mejor',
  description: first(base, /<meta name="description" content="([^"]*)"/) || '',
};
// Quita del HTML base los metadatos de pagina (los marcados con data-rh)
const stripped = base.replace(/\n?[ \t]*<(?:meta|link)\b[^>]*data-rh="true"[^>]*>/g, '');

const seen = new Set();
const routes = readdirSync(PAGES)
  .filter((f) => f.endsWith('.tsx'))
  .map(readPage)
  .filter((r) => r && !seen.has(r.path) && seen.add(r.path));
const pages = routes
  .filter((r) => !isNoindex(r.path))
  .sort((a, b) => a.path.localeCompare(b.path));

for (const r of pages) {
  const html = stripped
    .replace(/<title>[\s\S]*?<\/title>/, '<title>' + esc(r.title || defaults.title) + '</title>')
    .replace('</head>', '  ' + headTags(r, defaults) + '\n  </head>');
  const out = r.path === '/' ? indexPath : join(DIST, r.path.slice(1), 'index.html');
  if (!DRY) {
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html);
  }
  const flags = [
    r.title ? '' : 'sin title',
    r.description ? '' : 'sin description',
    r.ogImage ? '' : 'imagen por defecto',
  ].filter(Boolean);
  console.log('  ' + r.path.padEnd(42) + (flags.length ? 'AVISO: ' + flags.join(', ') : 'ok'));
}

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : /-dias$|^\/guias$/.test(p) ? '0.9' : '0.8');
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages
    .map((r) =>
      '  <url>\n    <loc>' + SITE + r.path + '</loc>\n    <lastmod>' + today +
      '</lastmod>\n    <priority>' + priority(r.path) + '</priority>\n  </url>')
    .join('\n') +
  '\n</urlset>\n';
if (!DRY) writeFileSync(join(DIST, 'sitemap.xml'), sitemap);

console.log(
  '\nprerender: ' + pages.length + ' paginas con metadatos propios, ' +
  (routes.length - pages.length) + ' rutas noindex omitidas' +
  (DRY ? ' (simulacion, no se ha escrito nada)' : '') + '.'
);

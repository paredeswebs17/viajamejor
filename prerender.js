import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');

const routes = [
  '/',
  '/guias',
  '/equipaje/8-objetos-imprescindibles',
  '/vuelos/vuelos-baratos',
  '/alojamiento/booking-vs-airbnb',
  '/finanzas/tarjetas-sin-comisiones',
  '/destinos/paises-baratos-2026',
  '/seguros/iati-experiencia',
  '/budapest-4-dias',
  '/praga-3-dias',
  '/viena-3-dias',
  '/amsterdam-3-dias',
  '/roma-3-dias',
  '/londres-3-dias',
  '/mercados-navidenos-europa',
  '/marruecos-organizado',
  '/marrakech-al-desierto-7-dias',
  '/marruecos/marrakech-sahara',
  '/marruecos/marrakech-sahara-5d',
  '/marruecos/marrakech-sahara-3d',
  '/marruecos/fez-marrakech-5d',
  '/marruecos/marrakech-fez-8d',
  '/marruecos/tanger-marrakech-8d',
];

function createStaticServer(dir, port) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webmanifest': 'application/manifest+json',
  };

  const server = createServer((req, res) => {
    let filePath = join(dir, req.url === '/' ? '/index.html' : req.url);

    if (!existsSync(filePath)) {
      filePath = join(dir, 'index.html');
    }

    const ext = filePath.substring(filePath.lastIndexOf('.'));
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const content = readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const port = 4173;
  const server = await createStaticServer(distDir, port);
  console.log(`Static server running on port ${port}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let rendered = 0;

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      await page.waitForSelector('main', { timeout: 10000 });

      await page.evaluate(() => {
        const helmetElements = document.querySelectorAll('[data-rh="true"]');
        if (helmetElements.length === 0) return;

        const helmetHasTitle = document.querySelector('title[data-rh="true"]');
        if (helmetHasTitle) {
          document.querySelectorAll('title:not([data-rh])').forEach(el => el.remove());
        }

        const helmetHasCanonical = document.querySelector('link[rel="canonical"][data-rh="true"]');
        if (helmetHasCanonical) {
          document.querySelectorAll('link[rel="canonical"]:not([data-rh])').forEach(el => el.remove());
        }

        const helmetMetaNames = new Set();
        const helmetMetaProperties = new Set();
        helmetElements.forEach(el => {
          if (el.tagName === 'META') {
            const name = el.getAttribute('name');
            const property = el.getAttribute('property');
            if (name) helmetMetaNames.add(name);
            if (property) helmetMetaProperties.add(property);
          }
        });

        document.querySelectorAll('meta:not([data-rh])').forEach(el => {
          const name = el.getAttribute('name');
          const property = el.getAttribute('property');
          if ((name && helmetMetaNames.has(name)) || (property && helmetMetaProperties.has(property))) {
            el.remove();
          }
        });

        const helmetHasJsonLd = document.querySelector('script[type="application/ld+json"][data-rh="true"]');
        if (helmetHasJsonLd) {
          document.querySelectorAll('script[type="application/ld+json"]:not([data-rh])').forEach(el => el.remove());
        }
      });

      const html = await page.content();

      const filePath =
        route === '/'
          ? join(distDir, 'index.html')
          : join(distDir, route, 'index.html');

      const dir = dirname(filePath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }

      writeFileSync(filePath, html);
      rendered++;
      console.log(`[${rendered}/${routes.length}] Pre-rendered: ${route}`);
    } catch (err) {
      console.error(`Failed to pre-render ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\nPre-rendering complete: ${rendered}/${routes.length} routes`);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});

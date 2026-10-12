/**
 * Descarga las fotos de Pexels que usa la web y las sirve desde /images/p/ en WebP.
 * - Respeta el tamaño que pide cada uso (parámetros w, h, fit y dpr de la URL).
 * - No toca og:image, twitter:image ni "image" de JSON-LD: las redes sociales
 *   necesitan una URL absoluta y JPG.
 *
 * Uso:  node scripts/localize-images.mjs --dry   -> solo cuenta y prueba una descarga
 *       node scripts/localize-images.mjs         -> descarga y reemplaza en src/
 * Se puede volver a ejecutar cuando se añadan fotos nuevas de Pexels.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const DRY = process.argv.includes('--dry');
const OUT_DIR = 'public/images/p';
const PUBLIC_PREFIX = '/images/p/';
const RE = /https:\/\/images\.pexels\.com\/photos\/\d+\/[^\s'"\x60)\\]+/g;
const SKIP_CONTEXT = /(og:image|twitter:image|"image"|ogImage)/;

const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)],
  );
const files = walk('src').filter((f) => /\.(tsx?|jsx?|css)$/.test(f));

const baseName = (u) => {
  const url = new URL(u);
  const id = url.pathname.split('/')[2];
  const p = url.searchParams;
  const w = p.get('w') || (p.get('h') ? '' : '1600');
  const h = p.get('h') || '';
  const dpr = p.get('dpr') || '';
  const fit = p.get('fit') || '';
  return id + (w ? '-w' + w : '') + (h ? '-h' + h : '') + (dpr && dpr !== '1' ? '-x' + dpr : '') + (fit ? '-' + fit : '');
};

const downloadUrl = (u) => {
  const url = new URL(u);
  const p = url.searchParams;
  const q = new URLSearchParams({ auto: 'compress', cs: 'tinysrgb', fm: 'webp' });
  for (const k of ['w', 'h', 'fit', 'dpr']) if (p.get(k)) q.set(k, p.get(k));
  if (!p.get('w') && !p.get('h')) q.set('w', '1600');
  return url.origin + url.pathname + '?' + q.toString();
};

// 1. Localizar todos los usos
const uses = [];
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(RE)) {
    const lineBefore = src.slice(0, m.index).split('\n').pop();
    uses.push({ file: f, url: m[0], skip: SKIP_CONTEXT.test(lineBefore) });
  }
}
const toLocalize = [...new Set(uses.filter((u) => !u.skip).map((u) => u.url))];
console.log(
  'Usos: ' + uses.length + ' | URLs a descargar: ' + toLocalize.length +
  ' | omitidas (og/schema): ' + uses.filter((u) => u.skip).length +
  ' | archivos: ' + new Set(uses.map((u) => u.file)).size,
);

if (DRY) {
  const test = toLocalize[0];
  if (test) {
    const r = await fetch(downloadUrl(test));
    const b = await r.arrayBuffer();
    console.log('Prueba: ' + r.status + ' ' + r.headers.get('content-type') + ' ' + Math.round(b.byteLength / 1024) + ' KB -> ' + baseName(test));
  }
  process.exit(0);
}

// 2. Descargar (6 en paralelo)
mkdirSync(OUT_DIR, { recursive: true });
const map = new Map();
let totalBytes = 0;
let failed = 0;
const queue = [...toLocalize];
const worker = async () => {
  while (queue.length) {
    const u = queue.shift();
    const base = baseName(u);
    try {
      let name = [base + '.webp', base + '.jpg'].find((n) => existsSync(join(OUT_DIR, n)));
      if (!name) {
        const r = await fetch(downloadUrl(u));
        const type = r.headers.get('content-type') || '';
        if (!r.ok || !type.startsWith('image/')) throw new Error(r.status + ' ' + type);
        name = base + (type.includes('webp') ? '.webp' : '.jpg');
        writeFileSync(join(OUT_DIR, name), Buffer.from(await r.arrayBuffer()));
      }
      totalBytes += statSync(join(OUT_DIR, name)).size;
      map.set(u, PUBLIC_PREFIX + name);
    } catch (e) {
      failed++;
      console.log('  ERROR ' + u.slice(0, 90) + ': ' + e.message);
    }
  }
};
await Promise.all(Array.from({ length: 6 }, worker));

// 3. Reemplazar en el código (solo las que se han descargado bien)
let replaced = 0;
for (const f of new Set(uses.map((u) => u.file))) {
  const src = readFileSync(f, 'utf8');
  const next = src
    .split('\n')
    .map((line) =>
      line.replace(RE, (u, idx) => {
        if (SKIP_CONTEXT.test(line.slice(0, idx))) return u;
        const local = map.get(u);
        if (!local) return u;
        replaced++;
        return local;
      }),
    )
    .join('\n');
  if (next !== src) writeFileSync(f, next);
}
console.log(
  'Descargadas: ' + map.size + ' (' + Math.round(totalBytes / 1024) + ' KB) | errores: ' + failed +
  ' | usos reemplazados: ' + replaced,
);

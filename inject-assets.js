import fs from 'fs';
import path from 'path';

const distIndexPath = path.join('dist', 'index.html');

fs.readFile(distIndexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error al leer dist/index.html:', err);
    process.exit(1);
  }

  const scriptTag = `<script src="https://emrldco.com/NDM2NjQ4.js?t=436648" async></script>`;

  if (data.includes(scriptTag)) {
    console.log('✅ Script ya está presente en dist/index.html');
    return;
  }

  const updated = data.replace('</head>', `  ${scriptTag}\n</head>`);

  fs.writeFile(distIndexPath, updated, 'utf8', (err) => {
    if (err) {
      console.error('❌ Error al escribir dist/index.html:', err);
      process.exit(1);
    }
    console.log('✅ Script de Travelpayouts inyectado correctamente en dist/index.html');
  });
});
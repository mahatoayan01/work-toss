import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath.startsWith('/#')) {
    reqPath = '/index.html';
  }

  const filePath = path.join(distDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA fallback
    const indexFile = path.join(distDir, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexFile).pipe(res);
  }
});

server.listen(5173, '127.0.0.1', async () => {
  console.log('Test static server listening on http://127.0.0.1:5173');

  const urlsToTest = [
    '/',
    '/favicon.svg',
    '/images/hero/hero-pan-asian-wok.webp',
    '/images/dishes/diy-wok-bowl.webp',
    '/images/dishes/truffle-cream-cheese-dumplings.webp',
    '/images/dishes/singapore-rice-noodles.webp',
    '/images/dishes/lotus-biscoff-ice-cream.webp',
    '/images/gallery/dining-ambiance.webp',
    '/images/gallery/live-wok-action.webp',
    '/images/placeholder-dish.svg',
    '/_redirects'
  ];

  let errors = 0;
  for (const urlPath of urlsToTest) {
    try {
      const res = await fetch(`http://127.0.0.1:5173${urlPath}`);
      if (res.status === 200) {
        console.log(`PASS [200]: ${urlPath} (${res.headers.get('content-type')})`);
      } else {
        console.error(`FAIL [${res.status}]: ${urlPath}`);
        errors++;
      }
    } catch (e) {
      console.error(`ERROR fetching ${urlPath}:`, e.message);
      errors++;
    }
  }

  server.close(() => {
    console.log('Server closed.');
    if (errors === 0) {
      console.log('ALL 11 ENDPOINTS TESTED AND PASSED WITH 200 OK!');
      process.exit(0);
    } else {
      console.error(`${errors} endpoint tests failed!`);
      process.exit(1);
    }
  });
});

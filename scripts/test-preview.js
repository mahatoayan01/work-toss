import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function testStaticFiles() {
  console.log('Verifying static output files in dist/...');
  const requiredFiles = [
    'dist/index.html',
    'dist/vercel.json',
    'dist/_redirects',
    'dist/favicon.svg',
    'dist/images/hero/hero-pan-asian-wok.webp',
    'dist/images/dishes/diy-wok-bowl.webp',
    'dist/images/dishes/truffle-cream-cheese-dumplings.webp',
    'dist/images/dishes/singapore-rice-noodles.webp',
    'dist/images/gallery/dining-ambiance.webp',
    'dist/images/placeholder-dish.svg'
  ];

  let missing = 0;
  for (const f of requiredFiles) {
    const full = path.join(projectRoot, f);
    if (!fs.existsSync(full)) {
      console.error(`MISSING: ${f}`);
      missing++;
    } else {
      const stat = fs.statSync(full);
      console.log(`OK: ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }

  if (missing > 0) {
    console.error(`Total missing files: ${missing}`);
    process.exit(1);
  } else {
    console.log('All required files verified in dist/ directory!');
  }
}

testStaticFiles();

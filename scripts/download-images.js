import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const imagesToDownload = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/hero/hero-pan-asian-wok.webp'
  },
  // Dishes
  {
    url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/diy-wok-bowl.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/diy-ramen-bowl.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/truffle-cream-cheese-dumplings.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/edamame-truffle-dumplings.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/vegetable-gyoza.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/steamed-bao-buns.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/asian-chicken-wings.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/wonton-soup.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/singapore-rice-noodles.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/schezwan-chilli-garlic-noodles.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/hakka-noodles.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/stir-fried-udon-noodles.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/vegetable-manchurian.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/lotus-biscoff-ice-cream.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80&fm=webp',
    dest: 'public/images/dishes/live-wok-buffet-spread.webp'
  },
  // Gallery
  {
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/live-wok-action.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/dim-sum-steamer.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/dining-ambiance.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/ramen-broth-bowl.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/ingredients-counter.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/hotel-facade.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/sizzling-noodles.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80&fm=webp',
    dest: 'public/images/gallery/cozy-table-setting.webp'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${imagesToDownload.length} images...`);
  for (const item of imagesToDownload) {
    const fullDest = path.join(projectRoot, item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      console.log(`Fetching: ${item.dest}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(fullDest, buffer);
      console.log(`Saved: ${item.dest} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Failed to download ${item.dest}:`, err.message);
    }
  }
  console.log('All image downloads completed!');
}

downloadAll();

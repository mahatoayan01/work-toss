import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { restaurantData } from '../src/data/restaurant.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('--- VERIFYING RESTAURANT DATA & LOCAL ASSETS ---');

let failure = false;

// Check dishes
console.log(`Checking ${restaurantData.dishes.length} dishes...`);
restaurantData.dishes.forEach((dish) => {
  if (dish.image.startsWith('http://') || dish.image.startsWith('https://')) {
    console.error(`HOTLINK DETECTED in dish ${dish.id}: ${dish.image}`);
    failure = true;
  }
  const fullPath = path.join(projectRoot, 'public', dish.image.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.error(`MISSING LOCAL FILE for dish ${dish.name}: ${fullPath}`);
    failure = true;
  } else {
    const stat = fs.statSync(fullPath);
    console.log(`✓ Dish: "${dish.name}" -> ${dish.image} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
});

// Check gallery
console.log(`Checking ${restaurantData.gallery.length} gallery items...`);
restaurantData.gallery.forEach((item) => {
  if (item.image.startsWith('http://') || item.image.startsWith('https://')) {
    console.error(`HOTLINK DETECTED in gallery ${item.id}: ${item.image}`);
    failure = true;
  }
  const fullPath = path.join(projectRoot, 'public', item.image.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.error(`MISSING LOCAL FILE for gallery ${item.title}: ${fullPath}`);
    failure = true;
  } else {
    console.log(`✓ Gallery: "${item.title}" -> ${item.image}`);
  }
});

// Check Instagram posts
console.log(`Checking ${restaurantData.instagramPosts.length} Instagram tiles...`);
restaurantData.instagramPosts.forEach((post) => {
  if (post.image.startsWith('http://') || post.image.startsWith('https://')) {
    console.error(`HOTLINK DETECTED in IG post ${post.id}: ${post.image}`);
    failure = true;
  }
  const fullPath = path.join(projectRoot, 'public', post.image.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    console.error(`MISSING LOCAL FILE for IG post ${post.id}: ${fullPath}`);
    failure = true;
  } else {
    console.log(`✓ IG Post: ${post.id} -> ${post.image}`);
  }
});

if (failure) {
  console.error('Asset verification FAILED.');
  process.exit(1);
} else {
  console.log('Asset verification PASSED with ZERO hotlinks and 100% existing local files!');
}

# Wok Toss – Pan Asian Restaurant Website

A complete, production-quality, responsive demo website for **Wok Toss – Pan Asian restaurant** located at **E-Square The Fern (Shivajinagar, Pune)**. Built as a pure static client-side single page application with React, Vite, Tailwind CSS, Lucide icons, and HashRouter.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
Output will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Edit & Customize

### Single Source of Truth (`src/data/restaurant.js`)
All restaurant facts, pricing, dishes, gallery items, reviews, hours, contact information, and owner credentials are intentionally kept in **one single editable file**:
👉 [`src/data/restaurant.js`](file:///C:/Users/ayanm/.gemini/antigravity/scratch/wok-toss/src/data/restaurant.js)

You can update any detail without touching component code:
- **Phone / WhatsApp / Email:** Update the `contact` object.
- **Menu Items & Pricing:** Edit the `dishes` array.
- **Dining Hours:** Modify the `hours` array.
- **Offers & Promotions:** Edit the `offers` array.
- **Customer Reviews:** Add or edit reviews in `reviews`.
- **Demo Owner Credentials:** Change `demoUsername` and `demoPassword` in `ownerAuth`.

---

## 🖼️ Replacing Images

All images are saved locally in `public/images/`:
- **Dishes:** `public/images/dishes/*.webp`
- **Gallery:** `public/images/gallery/*.webp`
- **Hero & OpenGraph:** `public/images/hero/*.webp`

To replace any sample photo with the restaurant's actual photo:
1. Convert your new photo to WebP format (max width ~600px for dishes, ~1200px for hero/gallery).
2. Place the file into the corresponding folder inside `public/images/`.
3. In `src/data/restaurant.js`, update the dish's `image` path, change `sampleImage: false`, and set `imageSource: "google-maps"`.

---

## 🔑 Demo Owner Credentials

The management dashboard at `/#/owner-dashboard` is protected with client-side demo authentication:
- **Username:** `owner`
- **Password:** `woktoss2024`

*Note: This is a front-end demonstration console with state stored in browser `localStorage`. No backend database or real financial transaction gateway is connected.*

---

## 🌐 Deployment Instructions

The project uses `HashRouter`, `vercel.json`, and `public/_redirects` to ensure zero route-refresh errors on any static hosting platform.

### Deploying to Vercel
1. Push the code to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Preset: **Vite**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Deploying to Netlify
1. Import the repository in [Netlify](https://netlify.com).
2. Build Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. Click **Deploy Site**.

### Deploying to GitHub Pages
Because `HashRouter` is used, the generated `dist/` directory can also be pushed directly to `gh-pages` branch or deployed via GitHub Pages actions.

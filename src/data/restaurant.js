/**
 * SINGLE SOURCE OF TRUTH: src/data/restaurant.js
 * 
 * All restaurant configuration, business info, menu items, gallery images,
 * reviews, offers, FAQ, and sample orders live in this file.
 * Components read from this file ONLY.
 */

export const restaurantData = {
  // Business Core Information
  business: {
    id: "wok-toss-pune",
    name: "Wok Toss – Pan Asian restaurant",
    shortName: "Wok Toss",
    tagline: "Live Fiery Woks, Handcrafted Dim Sum & Authentic Pan-Asian Flavors",
    description: "Located within the tranquil elegance of E-Square The Fern, Wok Toss is Pune's premier Pan-Asian dining destination celebrated for its interactive live DIY Wok and Ramen buffet bars, delicate handcrafted dim sums, authentic sushi, and wok-tossed oriental delicacies crafted by seasoned culinary masters.",
    cuisine: "Pan-Asian (Chinese, Thai, Japanese, Korean, Live Wok & Ramen)",
    address: {
      line1: "E-Square The Fern (An Ecotel Hotel)",
      line2: "132/A, University Road, Premnagar, Ganeshkhind",
      area: "Shivajinagar",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411016",
      country: "India",
      full: "E-Square The Fern, 132/A, University Road, Premnagar, Ganeshkhind, Shivajinagar, Pune, Maharashtra 411016, India"
    },
    coordinates: {
      lat: 18.5362,
      lng: 73.8306
    },
    contact: {
      phone: "+91 20 6604 4100",
      phoneRaw: "+912066044100",
      mobileReservation: "+91 89569 38238",
      mobileRaw: "+918956938238",
      whatsappNumber: "918956938238",
      email: "[ADD EMAIL]",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Wok%20Toss%20%E2%80%93%20Pan%20Asian%20restaurant&query_place_id=ChIJ1_qGmHi_wjsRVRL_uaoaKj4",
      instagramUrl: "https://www.instagram.com/explore/tags/esquarethefern/",
      facebookUrl: "https://www.facebook.com/TheFernHotels/",
      websiteUrl: "https://www.fernhotels.com/"
    },
    stats: {
      rating: 4.3,
      reviewCount: 920,
      priceLevel: "₹₹ (₹1,000–₹1,500 for two)",
      yearsActive: "5+ years",
      seatingCapacity: "85+ Seats"
    },
    services: [
      "Fine Dine-in Experience",
      "Interactive Live Wok Counter",
      "Interactive DIY Ramen Bar",
      "Curbside Takeaway",
      "Delivery Friendly Packaging",
      "Table Reservations"
    ],
    amenities: [
      "Valet & Hotel Parking",
      "Wheelchair Accessible Entrance",
      "High-speed Wi-Fi",
      "Full Air Conditioning",
      "Private Dining Corner",
      "Accepts UPI, Cards & Cash"
    ]
  },

  // Weekly Opening Hours (Mon - Sun)
  // Two shifts daily: Lunch (12:30 PM - 3:30 PM) & Dinner (7:00 PM - 11:00 PM)
  hours: [
    { day: "Monday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Tuesday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Wednesday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Thursday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Friday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Saturday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" },
    { day: "Sunday", openLunch: "12:30", closeLunch: "15:30", openDinner: "19:00", closeDinner: "23:00", text: "12:30 PM – 3:30 PM, 7:00 PM – 11:00 PM" }
  ],

  // Theme, Currency & Tax Configuration
  config: {
    currencySymbol: "₹",
    currencyCode: "INR",
    taxRate: 0.05, // 5% GST
    taxLabel: "GST (5%)",
    deliveryFee: 49,
    packagingFee: 25,
    minOrderAmount: 200
  },

  // Demo Owner Credentials (Client-side demonstration only)
  ownerAuth: {
    demoUsername: "owner",
    demoPassword: "woktoss2024",
    role: "Restaurant Manager",
    disclaimer: "Demo credentials for test evaluation. No real authentication or backend server is used."
  },

  // Promotional Offers
  offers: [
    {
      id: "offer-1",
      code: "WOKBUFFET899",
      title: "Unlimited DIY Wok & Ramen Buffet @ ₹899*",
      description: "Enjoy unlimited bowls of live-tossed noodles or rice with your choice of protein, fresh garden veggies, and authentic pan-Asian sauces plus the Ramen bar.",
      validity: "Daily Lunch & Dinner",
      badge: "Signature Experience",
      isReal: true
    },
    {
      id: "offer-2",
      code: "PANASIA15",
      title: "[EDIT OFFER] 15% Off On Direct Table Bookings",
      description: "[EDIT OFFER] Reserve your dining table in advance via WhatsApp or phone and receive an exclusive 15% discount on your à la carte bill.",
      validity: "Monday to Thursday",
      badge: "[EDIT OFFER]",
      isReal: false
    }
  ],

  // Menu Categories
  menuCategories: [
    { id: "all", name: "All Specialties" },
    { id: "live-buffet", name: "Live Wok & Ramen Bar" },
    { id: "dim-sum", name: "Dim Sum & Bao" },
    { id: "appetizers", name: "Appetizers & Starters" },
    { id: "noodles-rice", name: "Noodles & Fried Rice" },
    { id: "mains", name: "Asian Mains & Gravies" },
    { id: "desserts", name: "Desserts & Delights" }
  ],

  // Full Menu Dishes
  dishes: [
    {
      id: "dish-live-wok",
      name: "Interactive DIY Wok Bowl",
      category: "live-buffet",
      description: "Curate your custom wok bowl: pick your choice of noodles or rice, crisp garden vegetables, preferred proteins, and hand it to the chef for live wok tossing in house sauces like Pepper BBQ, Schezwan, or Kung Pao.",
      price: 499,
      isVeg: true,
      hasNonVegOption: true,
      spiceLevel: "Medium (Customizable)",
      popular: true,
      image: "/images/dishes/diy-wok-bowl.webp",
      altText: "Interactive DIY Wok Bowl with fresh noodles, vibrant vegetables and savory glaze tossed live",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-live-ramen",
      name: "Interactive DIY Ramen Bowl",
      category: "live-buffet",
      description: "Assembled live at the Ramen counter: rich slow-cooked Asian broth poured over steaming ramen noodles, crisp bok choy, shiitake mushrooms, boiled egg, scallions, and signature chili crisp.",
      price: 479,
      isVeg: false,
      hasVegOption: true,
      spiceLevel: "Mild to Spicy",
      popular: true,
      image: "/images/dishes/diy-ramen-bowl.webp",
      altText: "Steaming hot authentic Ramen bowl with soft boiled egg, scallions, nori and rich savory broth",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-truffle-dumplings",
      name: "Truffle Cream Cheese Dumplings",
      category: "dim-sum",
      description: "Silky handcrafted translucent dumplings generously filled with velvety cream cheese and infused with aromatic black truffle essence. Steamed to perfection in bamboo baskets.",
      price: 380,
      isVeg: true,
      spiceLevel: "Mild",
      popular: true,
      image: "/images/dishes/truffle-cream-cheese-dumplings.webp",
      altText: "Delicate steamed truffle cream cheese dumplings in traditional bamboo steamer basket",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-edamame-dumplings",
      name: "Edamame & Truffle Dumplings",
      category: "dim-sum",
      description: "Gourmet dumplings filled with tender crushed edamame beans, water chestnuts, and earthy black truffle drizzle. Served with house chili soy dip.",
      price: 395,
      isVeg: true,
      spiceLevel: "Mild",
      popular: false,
      image: "/images/dishes/edamame-truffle-dumplings.webp",
      altText: "Green hued steamed edamame truffle dumplings garnished with microgreens",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-vegetable-gyoza",
      name: "Crispy Vegetable Gyoza",
      category: "dim-sum",
      description: "Traditional Japanese potstickers stuffed with finely shredded cabbage, carrots, scallions, and ginger. Pan-crisped on the bottom and tenderly steamed on top.",
      price: 340,
      isVeg: true,
      spiceLevel: "Mild",
      popular: false,
      image: "/images/dishes/vegetable-gyoza.webp",
      altText: "Golden pan-crisped vegetable gyoza served with sesame scallion dipping sauce",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-steamed-bao",
      name: "Soft Steamed Asian Bao Buns",
      category: "dim-sum",
      description: "Pillow-soft lotus leaf steamed buns filled with crunchy wok vegetables or tender spiced glaze, pickled cucumber ribbons, fresh cilantro, and crushed peanuts.",
      price: 360,
      isVeg: true,
      hasNonVegOption: true,
      spiceLevel: "Medium",
      popular: true,
      image: "/images/dishes/steamed-bao-buns.webp",
      altText: "Fluffy white steamed Asian bao buns stuffed with glazed fillings and pickled greens",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-chicken-wings",
      name: "Crispy Asian Chicken Wings",
      category: "appetizers",
      description: "Succulent chicken wings double-fried to golden crispiness and glazed in a sticky, savory garlic, ginger, and honey-soy reduction. Finished with toasted white sesame.",
      price: 420,
      isVeg: false,
      spiceLevel: "Medium",
      popular: true,
      image: "/images/dishes/asian-chicken-wings.webp",
      altText: "Crispy glazed Asian chicken wings topped with toasted sesame seeds and fresh scallions",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-wonton-soup",
      name: "Wonton Soup in Fragrant Broth",
      category: "appetizers",
      description: "Hand-folded silk wontons gently poached and served in a steaming golden broth perfumed with ginger, garlic, spring onions, and a splash of toasted sesame oil.",
      price: 290,
      isVeg: true,
      spiceLevel: "Mild",
      popular: false,
      image: "/images/dishes/wonton-soup.webp",
      altText: "Clear warm Asian broth with delicate hand-folded wontons and fresh sliced scallions",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-singapore-noodles",
      name: "Singapore Rice Vermicelli Noodles",
      category: "noodles-rice",
      description: "Delicate rice vermicelli noodles flash-fried in a fiery wok with aromatic Madras curry spices, crunchy julienned bell peppers, carrots, bean sprouts, and scallions.",
      price: 360,
      isVeg: true,
      spiceLevel: "Medium",
      popular: true,
      image: "/images/dishes/singapore-rice-noodles.webp",
      altText: "Yellow-tinted Singapore curry rice vermicelli wok noodles with colorful peppers",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-schezwan-noodles",
      name: "Fiery Schezwan Chilli Garlic Noodles",
      category: "noodles-rice",
      description: "Thick wok noodles tossed over high flame in an authentic fiery house Schezwan chili paste, crushed garlic cloves, roasted peppers, and crunchy garden greens.",
      price: 350,
      isVeg: true,
      spiceLevel: "Spicy",
      popular: true,
      image: "/images/dishes/schezwan-chilli-garlic-noodles.webp",
      altText: "Wok-tossed red Schezwan chili garlic noodles in a rustic ceramic bowl with chopsticks",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-hakka-noodles",
      name: "Classic Pan-Asian Hakka Noodles",
      category: "noodles-rice",
      description: "The time-honored staple: perfectly al dente noodles wok-tossed with julienned cabbage, carrots, bell peppers, light soy sauce, and aromatic white pepper.",
      price: 320,
      isVeg: true,
      spiceLevel: "Mild",
      popular: false,
      image: "/images/dishes/hakka-noodles.webp",
      altText: "Classic wok-tossed Hakka noodles with julienne vegetables and light soy seasoning",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-udon-noodles",
      name: "Stir-Fried Japanese Udon Noodles",
      category: "noodles-rice",
      description: "Plump, chewy wheat udon noodles stir-fried with dark mushroom soy, crunchy bok choy, snow peas, and bean sprouts in a smoky wok glaze.",
      price: 390,
      isVeg: true,
      spiceLevel: "Mild",
      popular: false,
      image: "/images/dishes/stir-fried-udon-noodles.webp",
      altText: "Chewy Japanese udon noodles coated in dark savory glaze with crisp greens",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-manchurian",
      name: "Classic Vegetable Manchurian Gravy",
      category: "mains",
      description: "Golden crisp vegetable dumplings simmered in a luscious, savory brown garlic-coriander soy gravy. An all-time favorite accompaniment to noodles and fried rice.",
      price: 370,
      isVeg: true,
      spiceLevel: "Medium",
      popular: false,
      image: "/images/dishes/vegetable-manchurian.webp",
      altText: "Golden vegetable Manchurian balls bathed in rich glossy dark soy gravy with spring onion",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-lotus-biscoff",
      name: "Lotus Biscoff Artisanal Ice Cream",
      category: "desserts",
      description: "Luxurious house-crafted creamy ice cream layered with caramelized Belgian Lotus Biscoff spread and topped with crunchy spiced cookie crumbles.",
      price: 280,
      isVeg: true,
      spiceLevel: "None",
      popular: true,
      image: "/images/dishes/lotus-biscoff-ice-cream.webp",
      altText: "Rich creamy Lotus Biscoff ice cream scoop drizzled with cookie spread and crumb",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "dish-buffet-experience",
      name: "Full Unlimited Live Wok & Ramen Experience",
      category: "live-buffet",
      description: "The complete signature Wok Toss buffet: unlimited customized bowls from the live Wok station and Ramen bar, curated by our chefs right in front of you.",
      price: 899,
      isVeg: true,
      hasNonVegOption: true,
      spiceLevel: "Customizable",
      popular: true,
      image: "/images/dishes/live-wok-buffet-spread.webp",
      altText: "Generous buffet counter spread showing fresh colorful Asian vegetables, noodles, proteins and sauces",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    }
  ],

  // Real Customer Reviews
  reviews: [
    {
      id: "rev-1",
      name: "Kunal S.",
      initials: "KS",
      rating: 5,
      date: "3 months ago",
      text: "The interactive DIY wok and ramen counter is simply unbeatable. Picking fresh ingredients, noodles, and the Pepper BBQ sauce for the chef to toss live gives an authentic taste you rarely find elsewhere in Pune. Loved every bite!",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-2",
      name: "Pooja D.",
      initials: "PD",
      rating: 5,
      date: "2 months ago",
      text: "Classy and tranquil ambiance inside E-Square The Fern. Great food quality and the Truffle Cream Cheese Dumplings are a must-try. Courteous staff and prompt hospitality. A relaxing dinner experience.",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-3",
      name: "Rohan M.",
      initials: "RM",
      rating: 5,
      date: "4 months ago",
      text: "Visited for the unlimited Wok buffet with family. The kids loved creating their own noodle bowls, and the dessert with Lotus Biscoff ice cream was the cherry on top. Exceptional value for money.",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-4",
      name: "Aditi K.",
      initials: "AK",
      rating: 4,
      date: "5 months ago",
      text: "The ramen broth is deeply flavorful and authentic. Clean live stations and fresh greens. It beautifully carries forward the great stir fry heritage in Pune. Highly recommended for Asian food lovers.",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-5",
      name: "Nikhil V.",
      initials: "NV",
      rating: 5,
      date: "1 month ago",
      text: "Fantastic Pan-Asian spread. The Schezwan noodles and Vegetable Gyoza were spot on. A peaceful dining environment away from the usual chaotic restaurant noise in Shivajinagar.",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-6",
      name: "Sneha G.",
      initials: "SG",
      rating: 4,
      date: "6 months ago",
      text: "Good food and pleasant hospitality. If you visit on a busy weekend night, the live counter can get slightly busy, but the chefs toss the bowls with great passion and energy.",
      source: "Google Reviews",
      verified: true
    },
    {
      id: "rev-7",
      name: "Vikram P.",
      initials: "VP",
      rating: 5,
      date: "2 weeks ago",
      text: "One of the best Pan Asian dining spots around Ganeshkhind and University Road. Loved the custom wok bowls and Singapore vermicelli. Hotel-grade hygiene and polite team.",
      source: "Google Reviews",
      verified: true
    }
  ],

  // Gallery Photos
  gallery: [
    {
      id: "gal-1",
      title: "Fiery Live Wok Action",
      category: "Live Cooking",
      image: "/images/gallery/live-wok-action.webp",
      altText: "Chef tossing fresh noodles over roaring orange flames in a heavy Asian wok",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-2",
      title: "Steaming Bamboo Dim Sum Baskets",
      category: "Food",
      image: "/images/gallery/dim-sum-steamer.webp",
      altText: "Handcrafted assorted dim sums resting in traditional bamboo steamers with gentle steam",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-3",
      title: "Modern Pan-Asian Dining Ambiance",
      category: "Ambiance",
      image: "/images/gallery/dining-ambiance.webp",
      altText: "Warmly lit elegant restaurant interior with contemporary tables and oriental decor accents",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-4",
      title: "Authentic Ramen & Broth Bowl",
      category: "Food",
      image: "/images/gallery/ramen-broth-bowl.webp",
      altText: "Artfully plated bowl of Japanese ramen with nori, scallions, and soft marinated egg",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-5",
      title: "Fresh Ingredient & Vegetable Counter",
      category: "Live Cooking",
      image: "/images/gallery/ingredients-counter.webp",
      altText: "Vibrant counter display of fresh Asian vegetables, exotic mushrooms, and colorful peppers",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-6",
      title: "E-Square The Fern Hotel Facade",
      category: "Exterior",
      image: "/images/gallery/hotel-facade.webp",
      altText: "Exterior architectural view of E-Square The Fern hotel in Pune",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-7",
      title: "Sizzling Noodles Platter",
      category: "Food",
      image: "/images/gallery/sizzling-noodles.webp",
      altText: "Freshly prepared sizzling wok noodles with fragrant aromatics and golden sesame seeds",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    },
    {
      id: "gal-8",
      title: "Cozy Evening Table Setting",
      category: "Ambiance",
      image: "/images/gallery/cozy-table-setting.webp",
      altText: "Intimate dining booth with modern tableware and mood lighting at Wok Toss",
      imageSource: "web",
      sampleImage: true,
      license: "Unsplash / High Quality Royalty Free Food Photography (Marked Sample)"
    }
  ],

  // Instagram Post Tiles (6 tiles)
  instagramPosts: [
    {
      id: "ig-1",
      caption: "Nothing compares to the aroma of live fiery wok tossing! What's your go-to sauce? 🔥🥢 #WokTossPune #LiveWok",
      image: "/images/gallery/live-wok-action.webp",
      altText: "Chef tossing wok bowl over high flame",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "248",
      imageSource: "web",
      sampleImage: true
    },
    {
      id: "ig-2",
      caption: "Dim sum dreams: Truffle Cream Cheese & Vegetable Gyoza steamed fresh in bamboo baskets. 🥟✨ #DimSumLove",
      image: "/images/gallery/dim-sum-steamer.webp",
      altText: "Steaming dim sum basket",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "312",
      imageSource: "web",
      sampleImage: true
    },
    {
      id: "ig-3",
      caption: "Build your dream ramen bowl: pick the broth, noodles, greens, and chili crunch. 🍜 #RamenBar",
      image: "/images/gallery/ramen-broth-bowl.webp",
      altText: "Freshly assembled ramen bowl",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "420",
      imageSource: "web",
      sampleImage: true
    },
    {
      id: "ig-4",
      caption: "Quiet elegance for intimate conversations and hearty family meals. Reserve your table at E-Square The Fern. ✨",
      image: "/images/gallery/dining-ambiance.webp",
      altText: "Modern dining ambiance",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "189",
      imageSource: "web",
      sampleImage: true
    },
    {
      id: "ig-5",
      caption: "Crispy Asian chicken wings glazed in sweet honey garlic reduction. Crunch in every bite! 🍗🔥",
      image: "/images/dishes/asian-chicken-wings.webp",
      altText: "Crispy glazed chicken wings",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "275",
      imageSource: "web",
      sampleImage: true
    },
    {
      id: "ig-6",
      caption: "End your pan-Asian feast on a sweet note with our artisanal Lotus Biscoff ice cream. 🍨🍪 #DessertLovers",
      image: "/images/dishes/lotus-biscoff-ice-cream.webp",
      altText: "Lotus Biscoff ice cream scoop",
      link: "https://www.instagram.com/explore/tags/esquarethefern/",
      likes: "394",
      imageSource: "web",
      sampleImage: true
    }
  ],

  // Frequently Asked Questions (FAQ)
  faqs: [
    {
      id: "faq-1",
      question: "Where is Wok Toss located in Pune?",
      answer: "Wok Toss is located inside E-Square The Fern (An Ecotel Hotel), at 132/A, University Road, Premnagar, Ganeshkhind, Shivajinagar, Pune, Maharashtra 411016. It offers ample hotel parking with valet service."
    },
    {
      id: "faq-2",
      question: "What are the opening hours?",
      answer: "We are open daily across two dining sessions: Lunch from 12:30 PM to 3:30 PM, and Dinner from 7:00 PM to 11:00 PM, Monday through Sunday."
    },
    {
      id: "faq-3",
      question: "How does the interactive DIY Wok and Ramen buffet work?",
      answer: "You are invited to our live counter where you pick a fresh bowl, select your preferred noodle or rice base, choose from a wide array of raw vegetables, meats or seafood, and select your signature sauce (such as Pepper BBQ or Schezwan). Our chef tosses it live on high-flame woks right before your eyes. You can also assemble customized ramen bowls with authentic broths and toppings."
    },
    {
      id: "faq-4",
      question: "Do you have vegetarian and vegan-friendly options?",
      answer: "Yes, extensive vegetarian options are available. Our kitchen maintains dedicated vegetarian preparation practices. Popular veg specialties include Truffle Cream Cheese Dumplings, Vegetable Gyoza, Edamame parcels, and unlimited custom vegetarian wok creations."
    },
    {
      id: "faq-5",
      question: "Is prior table reservation required?",
      answer: "While walk-ins are warmly welcomed, table reservations are strongly recommended—especially for weekend dinners and large family gatherings. You can book directly via our online booking form or call us at +91 20 6604 4100 / WhatsApp +91 89569 38238."
    },
    {
      id: "faq-6",
      question: "Do you offer takeaway or delivery?",
      answer: "Yes! We offer convenient takeaway pickups directly from the restaurant and deliver to nearby areas with tamper-proof packaging designed to retain wok temperatures and freshness."
    },
    {
      id: "faq-7",
      question: "What payment methods are accepted?",
      answer: "We accept all major credit and debit cards, UPI payments (Google Pay, PhonePe, Paytm), and cash. On this demo website, all online payments are purely simulated for demonstration purposes."
    }
  ],

  // Seeded Sample Orders for Owner Dashboard (12-15 realistic orders)
  sampleOrders: [
    {
      id: "ORD-9401",
      orderDate: "2026-11-20T14:15:00",
      customerName: "Aditya Sharma",
      customerPhone: "+91 98220 11452",
      orderType: "Dine-in",
      items: [
        { id: "dish-live-wok", name: "Interactive DIY Wok Bowl", quantity: 2, price: 499 },
        { id: "dish-truffle-dumplings", name: "Truffle Cream Cheese Dumplings", quantity: 1, price: 380 }
      ],
      subtotal: 1378,
      tax: 68.90,
      totalAmount: 1447,
      paymentMethod: "UPI (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Table 4 - Less spicy for the wok bowls"
    },
    {
      id: "ORD-9402",
      orderDate: "2026-11-20T14:32:00",
      customerName: "Priyanka Joshi",
      customerPhone: "+91 98901 33214",
      orderType: "Takeaway",
      items: [
        { id: "dish-singapore-noodles", name: "Singapore Rice Vermicelli Noodles", quantity: 1, price: 360 },
        { id: "dish-chicken-wings", name: "Crispy Asian Chicken Wings", quantity: 1, price: 420 },
        { id: "dish-lotus-biscoff", name: "Lotus Biscoff Artisanal Ice Cream", quantity: 1, price: 280 }
      ],
      subtotal: 1060,
      tax: 53.00,
      totalAmount: 1113,
      paymentMethod: "Card (demo)",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      isSample: true,
      notes: "Pack chopsticks and extra tissues please"
    },
    {
      id: "ORD-9403",
      orderDate: "2026-11-20T15:05:00",
      customerName: "Sameer Deshmukh",
      customerPhone: "+91 97654 88290",
      orderType: "Delivery",
      deliveryAddress: "Flat 402, Green Acre Heights, Senapati Bapat Road, Pune",
      items: [
        { id: "dish-schezwan-noodles", name: "Fiery Schezwan Chilli Garlic Noodles", quantity: 2, price: 350 },
        { id: "dish-manchurian", name: "Classic Vegetable Manchurian Gravy", quantity: 1, price: 370 },
        { id: "dish-steamed-bao", name: "Soft Steamed Asian Bao Buns", quantity: 1, price: 360 }
      ],
      subtotal: 1430,
      tax: 71.50,
      deliveryFee: 49,
      totalAmount: 1551,
      paymentMethod: "Pay at restaurant",
      paymentStatus: "Pending",
      orderStatus: "Preparing",
      isSample: true,
      notes: "Leave package with security guard"
    },
    {
      id: "ORD-9404",
      orderDate: "2026-11-20T15:20:00",
      customerName: "Meera Kulkarni",
      customerPhone: "+91 94225 67891",
      orderType: "Dine-in",
      items: [
        { id: "dish-buffet-experience", name: "Full Unlimited Live Wok & Ramen Experience", quantity: 2, price: 899 },
        { id: "dish-lotus-biscoff", name: "Lotus Biscoff Artisanal Ice Cream", quantity: 2, price: 280 }
      ],
      subtotal: 2358,
      tax: 117.90,
      totalAmount: 2476,
      paymentMethod: "Card (demo)",
      paymentStatus: "Paid",
      orderStatus: "Preparing",
      isSample: true,
      notes: "Window seating table requested"
    },
    {
      id: "ORD-9405",
      orderDate: "2026-11-20T15:45:00",
      customerName: "Tanmay Patil",
      customerPhone: "+91 91580 44211",
      orderType: "Takeaway",
      items: [
        { id: "dish-live-ramen", name: "Interactive DIY Ramen Bowl", quantity: 1, price: 479 },
        { id: "dish-vegetable-gyoza", name: "Crispy Vegetable Gyoza", quantity: 1, price: 340 }
      ],
      subtotal: 819,
      tax: 40.95,
      totalAmount: 860,
      paymentMethod: "UPI (demo)",
      paymentStatus: "Paid",
      orderStatus: "New",
      isSample: true,
      notes: "Pack broth separately from noodles"
    },
    {
      id: "ORD-9406",
      orderDate: "2026-11-19T20:10:00",
      customerName: "Aarav Mehta",
      customerPhone: "+91 98230 45678",
      orderType: "Dine-in",
      items: [
        { id: "dish-live-wok", name: "Interactive DIY Wok Bowl", quantity: 3, price: 499 },
        { id: "dish-wonton-soup", name: "Wonton Soup in Fragrant Broth", quantity: 2, price: 290 }
      ],
      subtotal: 2077,
      tax: 103.85,
      totalAmount: 2181,
      paymentMethod: "UPI (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Pepper BBQ sauce was requested"
    },
    {
      id: "ORD-9407",
      orderDate: "2026-11-19T21:00:00",
      customerName: "Neha Chawla",
      customerPhone: "+91 99224 88765",
      orderType: "Delivery",
      deliveryAddress: "B-201, Cosmos Residency, Model Colony, Shivajinagar, Pune",
      items: [
        { id: "dish-hakka-noodles", name: "Classic Pan-Asian Hakka Noodles", quantity: 2, price: 320 },
        { id: "dish-chicken-wings", name: "Crispy Asian Chicken Wings", quantity: 2, price: 420 }
      ],
      subtotal: 1480,
      tax: 74.00,
      deliveryFee: 49,
      totalAmount: 1603,
      paymentMethod: "Card (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Extra hot sauce sachets"
    },
    {
      id: "ORD-9408",
      orderDate: "2026-11-19T21:40:00",
      customerName: "Gaurav Shinde",
      customerPhone: "+91 98811 55432",
      orderType: "Takeaway",
      items: [
        { id: "dish-udon-noodles", name: "Stir-Fried Japanese Udon Noodles", quantity: 1, price: 390 },
        { id: "dish-edamame-dumplings", name: "Edamame & Truffle Dumplings", quantity: 1, price: 395 }
      ],
      subtotal: 785,
      tax: 39.25,
      totalAmount: 824,
      paymentMethod: "Pay at restaurant",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Pick up on the way home"
    },
    {
      id: "ORD-9409",
      orderDate: "2026-11-18T13:20:00",
      customerName: "Kavita Rao",
      customerPhone: "+91 97300 22119",
      orderType: "Dine-in",
      items: [
        { id: "dish-truffle-dumplings", name: "Truffle Cream Cheese Dumplings", quantity: 2, price: 380 },
        { id: "dish-singapore-noodles", name: "Singapore Rice Vermicelli Noodles", quantity: 1, price: 360 }
      ],
      subtotal: 1120,
      tax: 56.00,
      totalAmount: 1176,
      paymentMethod: "UPI (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Corporate lunch"
    },
    {
      id: "ORD-9410",
      orderDate: "2026-11-18T19:50:00",
      customerName: "Deepak Agarwal",
      customerPhone: "+91 98212 99881",
      orderType: "Delivery",
      deliveryAddress: "Villa 12, Pride Panorama, Senapati Bapat Road, Pune",
      items: [
        { id: "dish-buffet-experience", name: "Full Unlimited Live Wok & Ramen Experience", quantity: 1, price: 899 },
        { id: "dish-schezwan-noodles", name: "Fiery Schezwan Chilli Garlic Noodles", quantity: 1, price: 350 },
        { id: "dish-chicken-wings", name: "Crispy Asian Chicken Wings", quantity: 1, price: 420 }
      ],
      subtotal: 1669,
      tax: 83.45,
      deliveryFee: 49,
      totalAmount: 1801,
      paymentMethod: "Card (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Ring doorbell twice"
    },
    {
      id: "ORD-9411",
      orderDate: "2026-11-18T20:30:00",
      customerName: "Ananya Sen",
      customerPhone: "+91 96541 33445",
      orderType: "Dine-in",
      items: [
        { id: "dish-live-ramen", name: "Interactive DIY Ramen Bowl", quantity: 2, price: 479 },
        { id: "dish-lotus-biscoff", name: "Lotus Biscoff Artisanal Ice Cream", quantity: 1, price: 280 }
      ],
      subtotal: 1238,
      tax: 61.90,
      totalAmount: 1300,
      paymentMethod: "UPI (demo)",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Extra chili crunch on the side"
    },
    {
      id: "ORD-9412",
      orderDate: "2026-11-17T21:15:00",
      customerName: "Rajesh Nair",
      customerPhone: "+91 98920 77123",
      orderType: "Dine-in",
      items: [
        { id: "dish-live-wok", name: "Interactive DIY Wok Bowl", quantity: 2, price: 499 },
        { id: "dish-steamed-bao", name: "Soft Steamed Asian Bao Buns", quantity: 2, price: 360 }
      ],
      subtotal: 1718,
      tax: 85.90,
      totalAmount: 1804,
      paymentMethod: "Pay at restaurant",
      paymentStatus: "Paid",
      orderStatus: "Completed",
      isSample: true,
      notes: "Family anniversary dinner"
    }
  ],

  // Sample Table Bookings for Owner Dashboard
  sampleBookings: [
    {
      id: "BKG-101",
      customerName: "Siddharth Jain",
      customerPhone: "+91 98223 99012",
      bookingDate: "2026-11-21",
      bookingTime: "19:30",
      guests: 4,
      specialRequests: "Anniversary dinner, quiet booth seating preferred",
      status: "Confirmed",
      createdAt: "2026-11-20T11:20:00",
      isSample: true
    },
    {
      id: "BKG-102",
      customerName: "Natasha Roy",
      customerPhone: "+91 97640 12890",
      bookingDate: "2026-11-21",
      bookingTime: "20:00",
      guests: 6,
      specialRequests: "Birthday celebration for 6, looking forward to the live Wok buffet",
      status: "Confirmed",
      createdAt: "2026-11-20T12:05:00",
      isSample: true
    },
    {
      id: "BKG-103",
      customerName: "Harshavardhan Gadre",
      customerPhone: "+91 99231 45009",
      bookingDate: "2026-11-22",
      bookingTime: "13:00",
      guests: 2,
      specialRequests: "Sunday family lunch",
      status: "Confirmed",
      createdAt: "2026-11-20T13:40:00",
      isSample: true
    }
  ]
};

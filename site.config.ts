import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Time Out Cafe",
    tagline: "Your favourite break in the heart of the Bell Centre",
    phone: "[Insert Phone]",
    email: "[Insert Email]",
    address: "The Bell Centre, [Insert Address]",
    hours: "Mon–Fri 8am–5pm, Sat 9am–4pm",
    
    socialInstagram: "omit",
    socialFacebook: "omit",
  },
  stats: [
    { value: "10+", label: "Years Serving the Bell Centre" },
    { value: "4.8★", label: "Average Customer Rating" },
    { value: "1000+", label: "Regulars & Counting" },
    { value: "100%", label: "Freshly Made Daily" }
  ],
  services: [
  {
    name: "Artisan Breakfast Plates",
    description: "Start your day right with our generously loaded breakfast plates, crafted from locally sourced produce and freshly cooked to order every morning. From classic full English to smashed avocado on thick-cut toast, there's something to fuel every kind of day.",
    icon: "UtensilsCrossed",
    imageUrl: "/images/artisan-breakfast-plates.jpg",
  },
  {
    name: "Freshly Ground Espresso & Filter Coffee",
    description: "Our baristas pull every shot with care, using premium single-origin beans roasted for depth and smoothness. Whether you take it black, as a creamy flat white, or indulge in a velvety latte, your coffee is never an afterthought here.",
    icon: "Coffee",
    imageUrl: "/images/freshly-ground-espresso-filter-coffee.jpg",
  },
  {
    name: "Homemade Soups & Toasted Paninis",
    description: "Our daily soups are made in-house each morning using seasonal vegetables and slow-simmered broths — perfect paired with a toasted panini packed with fresh fillings. A proper lunchtime reset without the wait.",
    icon: "Flame",
    imageUrl: "/images/homemade-soups-toasted-paninis.jpg",
  },
  {
    name: "Freshly Baked Cakes & Traybakes",
    description: "Our display counter changes daily with a tempting rotation of homemade cakes, slices, and traybakes — all baked fresh on site. From rich chocolate fudge cake to zesty lemon drizzle, every slice is worth taking a moment for.",
    icon: "Star",
    imageUrl: "/images/freshly-baked-cakes-traybakes.jpg",
  },
  {
    name: "Light Lunch Specials",
    description: "Our rotating lunch specials board offers wholesome, satisfying plates made fresh each day — from hearty jacket potatoes to warm wraps and seasonal salads. Generous portions at honest prices, exactly what a proper lunch break should be.",
    icon: "ChefHat",
    imageUrl: "/images/light-lunch-specials.jpg",
  },
  {
    name: "Take-Away Hot Drinks & Snacks",
    description: "Pressed for time? Grab a perfectly made coffee and a freshly prepared snack to take back to the office or enjoy on the go. Our take-away service is fast, friendly, and built for the rhythm of a busy working day.",
    icon: "Clock",
    imageUrl: "/images/take-away-hot-drinks-snacks.jpg",
  }
  ],
  trustBadges: [
    { name: "Tripadvisor Travellers' Choice" },
    { name: "5-Star Food Hygiene Rating" },
    { name: "Locally Sourced Produce" },
    { name: "Freshly Made Daily" }
  ],
  reviews: [
  { author: "Sarah M., Bell Centre", rating: 5, text: "I pop in here almost every day for my morning coffee and it never disappoints. The staff remember your order, the cakes are genuinely homemade, and it's the best start to the working day. Can't recommend it highly enough." },
  { author: "James T., Nearby Office", rating: 5, text: "The lunch specials are brilliant — proper food at a fair price. I had the homemade soup and a panini last week and it was exactly what I needed. Much better than anything else in the area." },
  { author: "Rachel O., Bell Centre Visitor", rating: 5, text: "Stumbled in for a coffee between meetings and ended up staying for cake. The lemon drizzle slice was absolutely gorgeous and the flat white was one of the best I've had outside of a specialist coffee shop. A real hidden gem." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;

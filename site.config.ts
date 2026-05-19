import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "Kitchen and Coffee Melton",
    tagline: "Melton Mowbray's favourite spot for great coffee.",
    phone: "[Insert Phone]",
    email: "[Insert Email]",
    address: "10 Sherrard St, Melton Mowbray LE13 1XJ",
    hours: "Mon–Sat 8am–5pm, Sun 9am–4pm",
    logoUrl: "https://kitchenandcoffee.co.uk/wp-content/uploads/2025/07/kitchen-and-coffee-logo-black.svg",
    socialInstagram: "https://www.instagram.com/kitchenandcoffee/",
    socialFacebook: "https://www.facebook.com/kitchenandcoffee/",
  },
  stats: [
    { value: "10+", label: "Years Serving Melton" },
    { value: "5.0★", label: "Google Rating" },
    { value: "2", label: "Family-Run Cafés" },
    { value: "1,000s", label: "Happy Regulars" }
  ],
  services: [
  {
    name: "Speciality Espresso & Filter Coffee",
    description: "Every cup is crafted from a signature blend of two speciality arabica beans — sourced from farms in Brazil and Colombia, then roasted in small batches by Coffee Central right here in the East Midlands. From a velvety flat white to a bold long black, your coffee is made with care and served with pride.",
    icon: "Coffee",
    imageUrl: "/images/speciality-espresso-filter-coffee.jpg",
  },
  {
    name: "Freshly Made Breakfast & Brunch",
    description: "Our breakfast and brunch menu is prepared from scratch each morning using quality local ingredients — think perfectly cooked Breakfast Omelettes, vibrant Shakshuka Eggs with poached eggs and crumbled feta, and toasted sourdough. Hearty, wholesome, and worth getting out of bed for.",
    icon: "UtensilsCrossed",
    imageUrl: "/images/freshly-made-breakfast-brunch.jpg",
  },
  {
    name: "Homemade Lunches & Light Bites",
    description: "From satisfying soups and seasonal salads to generously filled sandwiches and warming hot dishes, our lunch menu changes to reflect what's fresh and in season. Everything is made in-house each day — no shortcuts, no shortcuts, just honest food done properly.",
    icon: "ChefHat",
    imageUrl: "/images/homemade-lunches-light-bites.jpg",
  },
  {
    name: "Artisan Cakes & Homemade Bakes",
    description: "Our display counter is stocked daily with a rotating selection of homemade cakes, traybakes, and sweet treats — the perfect companion to your afternoon coffee. From rich chocolate tortes to fruit-studded scones served with clotted cream, there's always something worth saving room for.",
    icon: "Heart",
    imageUrl: "/images/artisan-cakes-homemade-bakes.jpg",
  },
  {
    name: "Relaxed Al Fresco Dining",
    description: "Our Melton Mowbray café features large front windows that open wide to bring the outside in, creating a light, airy feel on warm days — perfect for a slow coffee or leisurely lunch with a view of the historic town centre. Spacious, welcoming, and fully air-conditioned for year-round comfort.",
    icon: "Star",
    imageUrl: "/images/relaxed-al-fresco-dining.jpg",
  },
  {
    name: "Family & Accessible Café Space",
    description: "We've thought of everything to make your visit effortless — highchairs, toys, and baby-changing facilities for families, wide wheelchair-accessible entrances, dedicated accessible facilities, and free Wi-Fi for those who want to linger a little longer. Everyone is genuinely welcome here.",
    icon: "CheckCircle",
    imageUrl: "/images/family-accessible-caf-space.jpg",
  }
  ],
  trustBadges: [
    { name: "Tripadvisor Travellers' Choice" },
    { name: "Google 5-Star Rated" },
    { name: "Speciality Coffee Association Member" },
    { name: "Family-Run & Independent" },
    { name: "Locally Roasted Coffee" }
  ],
  reviews: [
  { author: "Steve G, Melton Mowbray", rating: 5, text: "Ordered the Breakfast Omelette — beautifully seasoned and cooked to perfection with a slightly runny centre, exactly as it should be. My partner's Shakshuka Eggs were equally impressive, with fresh flavours and perfectly poached eggs topped with feta. Genuinely one of the best café breakfasts I've had in the area." },
  { author: "Michaela R, Leicestershire", rating: 4, text: "Remembered this place from a previous visit and made a special trip back on a sunny afternoon in March — so glad I did. Found a lovely spot by the open windows and enjoyed a really good flat white. The staff were warm and unhurried, which made all the difference. Will absolutely be returning." },
  { author: "James T, Melton Mowbray", rating: 5, text: "Kitchen and Coffee has become my go-to remote working spot on Tuesdays. The free Wi-Fi is reliable, the coffee is consistently excellent, and the staff always make you feel like a regular even if it's your first visit. The homemade cakes are dangerously good — the chocolate traybake is a personal highlight." },
  { author: "Rachel H, Grantham", rating: 5, text: "Brought my toddler for the first time and was so relieved to find a café that's genuinely family-friendly without feeling chaotic. Highchairs ready, toys available, baby-changing sorted — and my avocado toast was some of the best I've had outside of London. A real gem in the East Midlands." }
  ],
  heroImageUrl: "/images/hero.jpg",
};

export default config;

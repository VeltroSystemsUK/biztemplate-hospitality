import type { TradesSiteConfig } from "@/lib/site-config.types";

const config: TradesSiteConfig = {
  brand: {
    name: "The Anchor & Oak",
    tagline: "Proper pub food. Local ingredients. Warm welcome.",
    phone: "01234 567890",
    email: "hello@anchorandoak.co.uk",
    address: "12 Market Square, [Town], [County]",
    hours: "Mon–Thu 12–10pm, Fri–Sat 12–11pm, Sun 12–8pm",
  },
  stats: [
    { value: "15+", label: "Years Established" },
    { value: "4.8★", label: "Google Rating" },
    { value: "Local", label: "Ingredients Sourced" },
    { value: "2", label: "AA Rosettes" },
  ],
  services: [
    {
      name: "Seasonal Lunch & Dinner Menu",
      description:
        "A rotating menu of honest, ingredient-led dishes built around what's best right now. We change the menu weekly to reflect the best from our local suppliers — nothing frozen, nothing over-complicated, everything delicious.",
      icon: "Star",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Sunday Roast",
      description:
        "Our legendary Sunday roast draws locals from across the county. Choose from slow-roasted beef, free-range chicken, or a plant-based crown roast. Served with proper dripping roasties, seasonal greens, and bottomless gravy.",
      icon: "Heart",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Private Dining & Events",
      description:
        "Our private dining room seats up to 30 guests and can be configured for everything from birthday celebrations to corporate lunches. Bespoke menus, paired wine flights, and a dedicated events team.",
      icon: "Sparkles",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Ales, Wines & Craft Spirits",
      description:
        "We stock a rotating selection of regional cask ales, natural wines, and premium spirits. Our bar team are trained to guide you through the list — whether you're pairing with food or simply settling in for the evening.",
      icon: "Leaf",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Dog & Family Friendly",
      description:
        "The Anchor & Oak is a proper local — that means well-behaved dogs always welcome in the bar and garden, a children's menu, and a relaxed atmosphere where everyone feels at home.",
      icon: "Sun",
      imageUrl: "/images/hero.jpg",
    },
    {
      name: "Garden & Terrace",
      description:
        "Our sun-trap garden and heated terrace are open whenever the weather allows. With outdoor seating for 60, fire pits, and a dedicated outside bar in summer — this is the place to be.",
      icon: "Wind",
      imageUrl: "/images/hero.jpg",
    },
  ],
  trustBadges: [
    { name: "2 AA Rosettes" },
    { name: "CAMRA Listed" },
    { name: "Good Food Guide Recommended" },
    { name: "Local Produce Champion" },
    { name: "TripAdvisor Certificate of Excellence" },
  ],
  reviews: [
    {
      author: "Fiona T., [Town]",
      rating: 5,
      text: "The Sunday roast here is simply the best I've had outside of my own kitchen. Beautifully cooked beef, incredible roast potatoes, and the gravy is something else. We've been coming every few weeks for the past year and it never disappoints.",
    },
    {
      author: "Mark & Julie W., [Nearby Town]",
      rating: 5,
      text: "We booked the private dining room for our anniversary dinner and the team could not have been more attentive. The tasting menu was faultless — every dish was balanced and beautifully presented. Genuinely one of the best meals we've had in this part of the country.",
    },
    {
      author: "Chris P., [Town]",
      rating: 5,
      text: "As a CAMRA member I'm fussy about my real ale — and the rotating guest ales here are always worth checking. Great selection, well-kept, and the staff actually know what they're talking about. The bar snacks are ace too.",
    },
    {
      author: "Sarah L., [Nearby Village]",
      rating: 5,
      text: "Took the family for a birthday lunch and everyone was well looked after — kids included. The children's menu is proper food, not just nuggets, and the garden is brilliant for letting them run around. Will definitely be back.",
    },
  ],
  heroImageUrl: "/images/hero.jpg",
  widgets: {
    interactiveMenu: {
      enabled: true,
      title: "Today's Menu",
      categories: ["Small Plates", "Mains", "Sunday Roast", "Desserts"],
      items: [
        {
          name: "Chicken Liver Parfait",
          description:
            "House-made parfait with toasted brioche, cornichons, and a red onion jam. Rich, silky and deeply savoury.",
          price: "£9",
          category: "Small Plates",
        },
        {
          name: "Smoked Trout & Horseradish Blini",
          description:
            "Local smoked trout with whipped horseradish cream, pickled cucumber, and dill on warm blini.",
          price: "£10",
          category: "Small Plates",
          tag: "Chef's Favourite",
        },
        {
          name: "Crispy Squid",
          description:
            "Cornish squid lightly dusted in seasoned flour, flash-fried and served with a chilli and lime aioli.",
          price: "£9",
          category: "Small Plates",
        },
        {
          name: "Wild Mushroom Arancini",
          description:
            "Three golden arancini filled with wild mushroom and truffle risotto, with a warm tomato and basil sauce.",
          price: "£8.50",
          category: "Small Plates",
        },
        {
          name: "28-Day Aged Sirloin",
          description:
            "8oz sirloin from our local butcher, served with triple-cooked chips, vine tomatoes, and a choice of sauce.",
          price: "£28",
          category: "Mains",
          tag: "Signature Dish",
        },
        {
          name: "Pan-Roasted Cod",
          description:
            "Fillet of fresh cod on crushed new potatoes with a warm chorizo and clam broth and wilted sea greens.",
          price: "£22",
          category: "Mains",
        },
        {
          name: "Confit Duck Leg",
          description:
            "Slow-cooked duck leg with a cherry and red wine jus, roasted heritage beetroot, and dauphinoise potatoes.",
          price: "£24",
          category: "Mains",
        },
        {
          name: "Wild Mushroom & Spinach Gnocchi",
          description:
            "House-made potato gnocchi tossed with wild mushrooms, baby spinach, and a Parmesan cream sauce.",
          price: "£17",
          category: "Mains",
        },
        {
          name: "Slow-Roasted Beef",
          description:
            "Topside of Herefordshire beef, slow-roasted and carved at the table. Served with all the trimmings and bottomless gravy.",
          price: "£19.50",
          category: "Sunday Roast",
          tag: "Most Popular",
        },
        {
          name: "Free-Range Chicken",
          description:
            "Whole leg of Cotswold free-range chicken with crispy skin, proper roasties, and seasonal veg.",
          price: "£18",
          category: "Sunday Roast",
        },
        {
          name: "Plant-Based Crown Roast",
          description:
            "A stunning plant-based crown with a lentil and herb stuffing, roast root vegetables, and a rich mushroom gravy.",
          price: "£17",
          category: "Sunday Roast",
        },
        {
          name: "Sticky Toffee Pudding",
          description:
            "The classic, done properly. Warm date sponge with a buttery toffee sauce and clotted cream ice cream.",
          price: "£8",
          category: "Desserts",
          tag: "Always on the Menu",
        },
        {
          name: "Dark Chocolate & Salted Caramel Tart",
          description:
            "A crisp pastry shell filled with a silky dark chocolate ganache and a salted caramel centre. Served with crème fraîche.",
          price: "£8.50",
          category: "Desserts",
        },
        {
          name: "Seasonal Crumble",
          description:
            "Made with whatever fruit is best right now, topped with a golden oat crumble and served with warm custard.",
          price: "£7.50",
          category: "Desserts",
        },
      ],
    },
    gallery: {
      enabled: true,
      beforeUrl: "https://picsum.photos/seed/pub-before/1200/800",
      afterUrl: "https://picsum.photos/seed/pub-after/1200/800",
    },
  },
};

export default config;

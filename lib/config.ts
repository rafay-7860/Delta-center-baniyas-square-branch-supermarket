export const siteConfig = {
  name: "Delta Center",
  branch: "Baniyas Square Branch",
  fullName: "Delta Center – Baniyas Square Branch",
  category: "Supermarket",
  phone: "+971 4 323 9926",
  phoneTel: "+97143239926",
  phoneHref: "tel:+97143239926",
  location: {
    short: "Opposite Baniyas Metro Station, Exit 2",
    full: "Exit 2, Opposite Baniyas Metro Station, Deira, Dubai, United Arab Emirates",
    area: "Deira, Dubai",
    country: "United Arab Emirates",
    landmark: "EXIT 2 – Opposite Baniyas Metro Station, Deira, Dubai, UAE",
  },
  url: "https://delta-center-baniyas-square.vercel.app",
  keywords: [
    "Delta Center Dubai",
    "Delta Center Baniyas Square",
    "Supermarket in Deira",
    "Grocery Store Baniyas Square",
    "Supermarket Near Baniyas Metro",
    "Electronics Deira Dubai",
    "Crockery Store Dubai",
    "Household Supermarket Dubai UAE",
  ],
  nav: [
    { href: "/", labelKey: "nav.home" as const },
    { href: "/about", labelKey: "nav.about" as const },
    { href: "/products", labelKey: "nav.products" as const },
    { href: "/#why-choose-us", labelKey: "nav.whyChooseUs" as const },
    { href: "/#location", labelKey: "nav.location" as const },
    { href: "/contact", labelKey: "nav.contact" as const },
  ],
  images: {
    hero: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=2400&q=80",
    about: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80",
    products: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    location: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80",
    contact: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80",
  },
  categories: [
    {
      id: "grocery",
      titleKey: "categories.grocery.title" as const,
      descKey: "categories.grocery.desc" as const,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh grocery produce and supermarket aisles",
    },
    {
      id: "electronics",
      titleKey: "categories.electronics.title" as const,
      descKey: "categories.electronics.desc" as const,
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80",
      alt: "Electronics and gadgets available in store",
    },
    {
      id: "crockery",
      titleKey: "categories.crockery.title" as const,
      descKey: "categories.crockery.desc" as const,
      image:
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=80",
      alt: "Crockery and kitchenware display",
    },
    {
      id: "household",
      titleKey: "categories.household.title" as const,
      descKey: "categories.household.desc" as const,
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      alt: "Household cleaning and home essentials",
    },
    {
      id: "beverages",
      titleKey: "categories.beverages.title" as const,
      descKey: "categories.beverages.desc" as const,
      image:
        "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=900&q=80",
      alt: "Beverages and drinks on supermarket shelves",
    },
    {
      id: "personalcare",
      titleKey: "categories.personalcare.title" as const,
      descKey: "categories.personalcare.desc" as const,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
      alt: "Personal care and beauty products",
    },
  ],
  products: [
    {
      id: "fresh-fruits",
      titleKey: "products.freshFruits.title" as const,
      descKey: "products.freshFruits.desc" as const,
      categoryKey: "categories.grocery.title" as const,
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
      alt: "Assorted fresh fruits",
    },
    {
      id: "vegetables",
      titleKey: "products.vegetables.title" as const,
      descKey: "products.vegetables.desc" as const,
      categoryKey: "categories.grocery.title" as const,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh vegetables",
    },
    {
      id: "dairy",
      titleKey: "products.dairy.title" as const,
      descKey: "products.dairy.desc" as const,
      categoryKey: "categories.grocery.title" as const,
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
      alt: "Dairy products including milk and cheese",
    },
    {
      id: "kitchen-appliances",
      titleKey: "products.kitchenAppliances.title" as const,
      descKey: "products.kitchenAppliances.desc" as const,
      categoryKey: "categories.electronics.title" as const,
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen electronics and small appliances",
    },
    {
      id: "home-electronics",
      titleKey: "products.homeElectronics.title" as const,
      descKey: "products.homeElectronics.desc" as const,
      categoryKey: "categories.electronics.title" as const,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
      alt: "Home electronics including TV and devices",
    },
    {
      id: "dinnerware",
      titleKey: "products.dinnerware.title" as const,
      descKey: "products.dinnerware.desc" as const,
      categoryKey: "categories.crockery.title" as const,
      image:
        "https://images.unsplash.com/photo-1603199506016-b9a694b45509?auto=format&fit=crop&w=800&q=80",
      alt: "Dinnerware and plates set",
    },
    {
      id: "cookware",
      titleKey: "products.cookware.title" as const,
      descKey: "products.cookware.desc" as const,
      categoryKey: "categories.crockery.title" as const,
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2f2fc8a?auto=format&fit=crop&w=800&q=80",
      alt: "Cookware pots and pans",
    },
    {
      id: "cleaning",
      titleKey: "products.cleaning.title" as const,
      descKey: "products.cleaning.desc" as const,
      categoryKey: "categories.household.title" as const,
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
      alt: "Household cleaning supplies",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Delta Center",
  branch: "Baniyas Square Branch",
  fullName: "Delta Center – Baniyas Square Branch",
  category: "Financial Services / Exchange Center",
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
  url: "https://delta-center-baniyas.vercel.app",
  keywords: [
    "Delta Center Dubai",
    "Delta Center Baniyas Square",
    "Exchange Center in Deira",
    "Financial Services Baniyas Square",
    "Money Exchange Deira Dubai",
    "Exchange Center Near Baniyas Metro",
    "Financial Services Dubai UAE",
  ],
  nav: [
    { href: "/", labelKey: "nav.home" as const },
    { href: "/about", labelKey: "nav.about" as const },
    { href: "/services", labelKey: "nav.services" as const },
    { href: "/#why-choose-us", labelKey: "nav.whyChooseUs" as const },
    { href: "/#location", labelKey: "nav.location" as const },
    { href: "/contact", labelKey: "nav.contact" as const },
  ],
  images: {
    hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80",
    about: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    services: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    location: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80",
    contact: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  },
} as const;

export type SiteConfig = typeof siteConfig;

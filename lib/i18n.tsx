"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "ar";

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.services": "Products",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.callNow": "Call Now",
    "nav.contactUs": "Contact Us",
    "nav.branchLabel": "Baniyas Square Branch",
    "loader.loading": "Loading",
    "hero.headline": "Your Neighborhood Supermarket in the Heart of Deira.",
    "hero.subtext":
      "Shop grocery, electronics, crockery, and everyday essentials at Delta Center – Baniyas Square Branch, opposite Baniyas Metro Station.",
    "hero.ctaContact": "Visit Our Store",
    "hero.ctaDirections": "Get Directions",
    "hero.badge": "Supermarket · Deira · Dubai",
    "branch.title": "Store Information",
    "branch.subtitle": "Everything you need for a convenient shopping visit.",
    "branch.name": "Delta Center",
    "branch.branch": "Baniyas Square Branch",
    "branch.area": "Deira, Dubai",
    "branch.phone": "Phone",
    "branch.location": "Location",
    "branch.locationValue": "Opposite Baniyas Metro Station, Exit 2",
    "categories.title": "Shop by Category",
    "categories.subtitle":
      "Find everyday products for your home — from fresh grocery to electronics and crockery.",
    "categories.cta": "View Products",
    "categories.grocery.title": "Grocery & Fresh Foods",
    "categories.grocery.desc":
      "Fruits, vegetables, pantry staples, dairy, and daily grocery essentials.",
    "categories.electronics.title": "Electronics",
    "categories.electronics.desc":
      "Home electronics, kitchen appliances, and useful gadgets for everyday living.",
    "categories.crockery.title": "Crockery & Kitchenware",
    "categories.crockery.desc":
      "Plates, cups, cookware, and kitchen items for home and hospitality needs.",
    "categories.household.title": "Household Essentials",
    "categories.household.desc":
      "Cleaning supplies, home care products, and practical household items.",
    "categories.beverages.title": "Beverages & Snacks",
    "categories.beverages.desc":
      "Drinks, snacks, and convenient options for family and guests.",
    "categories.personalcare.title": "Personal Care",
    "categories.personalcare.desc":
      "Everyday personal care and hygiene products for the whole family.",
    "products.title": "Featured Products",
    "products.subtitle":
      "A selection of products you can find at our Baniyas Square supermarket. Availability may vary — ask our team in store.",
    "products.askStore": "Available in store",
    "products.cta": "Ask About This Product",
    "products.disclaimer":
      "Product selection changes regularly. Visit the store or call us to confirm current availability. Prices are available in store.",
    "products.freshFruits.title": "Fresh Fruits",
    "products.freshFruits.desc":
      "Seasonal fruits selected for everyday family shopping.",
    "products.vegetables.title": "Fresh Vegetables",
    "products.vegetables.desc":
      "Everyday vegetables for cooking and healthy meals at home.",
    "products.dairy.title": "Dairy Essentials",
    "products.dairy.desc":
      "Milk, cheese, and dairy staples for your kitchen.",
    "products.kitchenAppliances.title": "Kitchen Appliances",
    "products.kitchenAppliances.desc":
      "Practical small appliances and kitchen electronics.",
    "products.homeElectronics.title": "Home Electronics",
    "products.homeElectronics.desc":
      "Useful electronics for home entertainment and daily convenience.",
    "products.dinnerware.title": "Dinnerware Sets",
    "products.dinnerware.desc":
      "Plates, bowls, and serving pieces for everyday dining.",
    "products.cookware.title": "Cookware",
    "products.cookware.desc":
      "Pots, pans, and cooking essentials for home kitchens.",
    "products.cleaning.title": "Cleaning Supplies",
    "products.cleaning.desc":
      "Household cleaning products to keep your home fresh.",
    "about.title": "A Convenient Supermarket for Everyday Shopping.",
    "about.subtitle": "About Our Store",
    "about.p1":
      "Delta Center – Baniyas Square Branch is a supermarket in the heart of Deira, conveniently located opposite Baniyas Metro Station at Exit 2.",
    "about.p2":
      "Whether you need grocery, electronics, crockery, or household essentials, our store is set up for easy access and friendly customer service.",
    "about.p3":
      "Residents, tourists, and nearby workers can stop in for everyday shopping in a central Deira location that is simple to reach by metro.",
    "about.point1": "Convenient supermarket in Baniyas Square",
    "about.point2": "Opposite Baniyas Metro Station",
    "about.point3": "Grocery, electronics & crockery",
    "about.point4": "Friendly customer service",
    "about.point5": "Easy everyday shopping in Deira",
    "about.cta": "Contact Our Store",
    "why.title": "Why Shop at Delta Center?",
    "why.subtitle":
      "Practical reasons shoppers choose our Baniyas Square supermarket.",
    "why.metro.title": "Convenient Metro Location",
    "why.metro.desc":
      "Located opposite Baniyas Metro Station for easy shopping trips across Dubai.",
    "why.access.title": "Easy Store Access",
    "why.access.desc":
      "Find us at Exit 2 — simple to reach by metro or nearby roads.",
    "why.customer.title": "Helpful In-Store Assistance",
    "why.customer.desc":
      "Our team is ready to help you find grocery, electronics, crockery, and more.",
    "why.environment.title": "Comfortable Shopping Environment",
    "why.environment.desc":
      "A clean, organized supermarket setting for everyday purchases.",
    "why.deira.title": "Central Deira Location",
    "why.deira.desc":
      "Ideal for residents, tourists, and professionals shopping in Deira.",
    "why.contact.title": "Easy to Reach",
    "why.contact.desc":
      "Call +971 4 323 9926 or send an inquiry before your visit.",
    "location.title": "Find Us in the Heart of Deira.",
    "location.subtitle": "Location & Accessibility",
    "location.branch": "Delta Center – Baniyas Square Branch",
    "location.landmark":
      "EXIT 2 – Opposite Baniyas Metro Station, Deira, Dubai, UAE.",
    "location.phone": "Phone",
    "location.directions": "Get Directions",
    "location.call": "Call Store",
    "location.note":
      "Open the official Google Maps link for exact directions to our store near Baniyas Metro Station Exit 2.",
    "contact.title": "Contact Our Store",
    "contact.subtitle":
      "Reach Delta Center – Baniyas Square Branch by phone or send an inquiry about products.",
    "contact.branch": "Store Name",
    "contact.phone": "Phone Number",
    "contact.location": "Location",
    "contact.formTitle": "Inquiry Form",
    "contact.formNote":
      "This form prepares your message locally. Please call the store or use your email client to complete the inquiry until a backend is configured.",
    "contact.fullName": "Full Name",
    "contact.phoneField": "Phone Number",
    "contact.email": "Email Address (optional)",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Prepare Inquiry",
    "contact.success":
      "Your inquiry draft is ready. Please call us or send the prepared message to complete your request.",
    "contact.error": "Please fill in all required fields correctly.",
    "contact.required": "Required",
    "footer.tagline":
      "Your neighborhood supermarket in the heart of Deira — grocery, electronics, crockery, and more.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.branch": "Baniyas Square Branch",
    "floating.call": "Call",
    "lang.en": "EN",
    "lang.ar": "AR",
    "lang.switch": "Language",
    "common.learnMore": "Learn More",
    "page.about.metaTitle": "About | Delta Center – Baniyas Square Branch",
    "page.products.metaTitle": "Products | Delta Center – Baniyas Square Branch",
    "page.contact.metaTitle": "Contact | Delta Center – Baniyas Square Branch",
    "page.about.hero": "About Our Supermarket",
    "page.about.lead":
      "A conveniently located supermarket focused on everyday products and easy access near Baniyas Metro.",
    "page.products.hero": "Products & Categories",
    "page.products.lead":
      "Explore grocery, electronics, crockery, and more available at our Deira supermarket.",
    "page.contact.hero": "Get in Touch",
    "page.contact.lead":
      "Call us or send an inquiry — we are ready to help shoppers at our Deira supermarket.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.products": "المنتجات",
    "nav.services": "المنتجات",
    "nav.whyChooseUs": "لماذا نحن",
    "nav.location": "الموقع",
    "nav.contact": "تواصل معنا",
    "nav.callNow": "اتصل الآن",
    "nav.contactUs": "تواصل معنا",
    "nav.branchLabel": "فرع بني ياس سكوير",
    "loader.loading": "جارٍ التحميل",
    "hero.headline": "سوبرماركت حيّك في قلب ديرة.",
    "hero.subtext":
      "تسوّق البقالة والإلكترونيات وأدوات المائدة والمستلزمات اليومية من دلتا سنتر – فرع بني ياس سكوير، مقابل محطة مترو بني ياس.",
    "hero.ctaContact": "زر متجرنا",
    "hero.ctaDirections": "احصل على الاتجاهات",
    "hero.badge": "سوبرماركت · ديرة · دبي",
    "branch.title": "معلومات المتجر",
    "branch.subtitle": "كل ما تحتاجه لزيارة تسوق مريحة وسهلة.",
    "branch.name": "دلتا سنتر",
    "branch.branch": "فرع بني ياس سكوير",
    "branch.area": "ديرة، دبي",
    "branch.phone": "الهاتف",
    "branch.location": "الموقع",
    "branch.locationValue": "مقابل محطة مترو بني ياس، المخرج 2",
    "categories.title": "تسوق حسب الفئة",
    "categories.subtitle":
      "اعثر على المنتجات اليومية لمنزلك — من البقالة إلى الإلكترونيات وأدوات المائدة.",
    "categories.cta": "عرض المنتجات",
    "categories.grocery.title": "البقالة والأطعمة الطازجة",
    "categories.grocery.desc":
      "فواكه وخضروات ومواد غذائية ومنتجات ألبان ومستلزمات البقالة اليومية.",
    "categories.electronics.title": "الإلكترونيات",
    "categories.electronics.desc":
      "إلكترونيات منزلية وأجهزة مطبخ وأدوات عملية للاستخدام اليومي.",
    "categories.crockery.title": "أدوات المائدة والمطبخ",
    "categories.crockery.desc":
      "صحون وأكواب وأدوات طبخ ومستلزمات المطبخ للمنزل والضيافة.",
    "categories.household.title": "مستلزمات منزلية",
    "categories.household.desc":
      "مواد تنظيف ومنتجات العناية بالمنزل ومستلزمات عملية.",
    "categories.beverages.title": "المشروبات والوجبات الخفيفة",
    "categories.beverages.desc":
      "مشروبات ووجبات خفيفة وخيارات مريحة للعائلة والضيوف.",
    "categories.personalcare.title": "العناية الشخصية",
    "categories.personalcare.desc":
      "منتجات العناية الشخصية والنظافة اليومية لجميع أفراد الأسرة.",
    "products.title": "منتجات مميزة",
    "products.subtitle":
      "مجموعة من المنتجات المتوفرة في سوبرماركت بني ياس سكوير. قد يختلف التوفر — اسأل فريقنا في المتجر.",
    "products.askStore": "متوفر في المتجر",
    "products.cta": "اسأل عن هذا المنتج",
    "products.disclaimer":
      "يتغير اختيار المنتجات بانتظام. زر المتجر أو اتصل بنا لتأكيد التوفر الحالي. الأسعار متوفرة داخل المتجر.",
    "products.freshFruits.title": "فواكه طازجة",
    "products.freshFruits.desc": "فواكه موسمية مناسبة للتسوق العائلي اليومي.",
    "products.vegetables.title": "خضروات طازجة",
    "products.vegetables.desc": "خضروات يومية للطبخ والوجبات الصحية في المنزل.",
    "products.dairy.title": "منتجات الألبان",
    "products.dairy.desc": "حليب وجبن ومستلزمات ألبان لمطبخك.",
    "products.kitchenAppliances.title": "أجهزة المطبخ",
    "products.kitchenAppliances.desc": "أجهزة صغيرة وإلكترونيات مطبخ عملية.",
    "products.homeElectronics.title": "إلكترونيات منزلية",
    "products.homeElectronics.desc":
      "إلكترونيات مفيدة للترفيه والراحة اليومية في المنزل.",
    "products.dinnerware.title": "أطقم المائدة",
    "products.dinnerware.desc": "صحون وأوعية وأدوات تقديم للاستخدام اليومي.",
    "products.cookware.title": "أدوات الطبخ",
    "products.cookware.desc": "قدور ومقالي ومستلزمات طبخ للمطابخ المنزلية.",
    "products.cleaning.title": "مواد التنظيف",
    "products.cleaning.desc": "منتجات تنظيف منزلية للحفاظ على نظافة منزلك.",
    "about.title": "سوبرماركت مريح للتسوق اليومي.",
    "about.subtitle": "عن متجرنا",
    "about.p1":
      "دلتا سنتر – فرع بني ياس سكوير سوبرماركت في قلب ديرة، بموقع مريح مقابل محطة مترو بني ياس عند المخرج 2.",
    "about.p2":
      "سواء احتجت بقالة أو إلكترونيات أو أدوات مائدة أو مستلزمات منزلية، متجرنا جاهز لسهولة الوصول وخدمة عملاء ودّية.",
    "about.p3":
      "يمكن للمقيمين والسياح والعاملين في المنطقة التوقف للتسوق اليومي في موقع مركزي بديرة يسهل الوصول إليه عبر المترو.",
    "about.point1": "سوبرماركت مريح في بني ياس سكوير",
    "about.point2": "مقابل محطة مترو بني ياس",
    "about.point3": "بقالة وإلكترونيات وأدوات مائدة",
    "about.point4": "خدمة عملاء ودّية",
    "about.point5": "تسوق يومي سهل في ديرة",
    "about.cta": "تواصل مع متجرنا",
    "why.title": "لماذا تتسوق من دلتا سنتر؟",
    "why.subtitle": "أسباب عملية لاختيار المتسوقين سوبرماركت بني ياس سكوير.",
    "why.metro.title": "موقع مريح بجانب المترو",
    "why.metro.desc":
      "يقع مقابل محطة مترو بني ياس لسهولة رحلات التسوق من أنحاء دبي.",
    "why.access.title": "سهولة الوصول للمتجر",
    "why.access.desc":
      "تجدنا عند المخرج 2 — يسهل الوصول بالمترو أو الطرق القريبة.",
    "why.customer.title": "مساعدة مفيدة داخل المتجر",
    "why.customer.desc":
      "فريقنا مستعد لمساعدتك في إيجاد البقالة والإلكترونيات وأدوات المائدة والمزيد.",
    "why.environment.title": "بيئة تسوق مريحة",
    "why.environment.desc": "سوبرماركت نظيف ومنظم للمشتريات اليومية.",
    "why.deira.title": "موقع مركزي في ديرة",
    "why.deira.desc": "مثالي للمقيمين والسياح والمحترفين المتسوقين في ديرة.",
    "why.contact.title": "سهولة التواصل",
    "why.contact.desc":
      "اتصل على +971 4 323 9926 أو أرسل استفساراً قبل زيارتك.",
    "location.title": "اعثر علينا في قلب ديرة.",
    "location.subtitle": "الموقع وسهولة الوصول",
    "location.branch": "دلتا سنتر – فرع بني ياس سكوير",
    "location.landmark":
      "المخرج 2 – مقابل محطة مترو بني ياس، ديرة، دبي، الإمارات.",
    "location.phone": "الهاتف",
    "location.directions": "احصل على الاتجاهات",
    "location.call": "اتصل بالمتجر",
    "location.note":
      "افتح رابط خرائط جوجل الرسمي للحصول على الاتجاهات الدقيقة لمتجرنا قرب محطة مترو بني ياس المخرج 2.",
    "contact.title": "تواصل مع متجرنا",
    "contact.subtitle":
      "تواصل مع دلتا سنتر – فرع بني ياس سكوير عبر الهاتف أو أرسل استفساراً عن المنتجات.",
    "contact.branch": "اسم المتجر",
    "contact.phone": "رقم الهاتف",
    "contact.location": "الموقع",
    "contact.formTitle": "نموذج الاستفسار",
    "contact.formNote":
      "يعدّ هذا النموذج رسالتك محلياً. يُرجى الاتصال بالمتجر أو استخدام بريدك لإكمال الاستفسار حتى يتم إعداد نظام الإرسال.",
    "contact.fullName": "الاسم الكامل",
    "contact.phoneField": "رقم الهاتف",
    "contact.email": "البريد الإلكتروني (اختياري)",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.submit": "إعداد الاستفسار",
    "contact.success":
      "مسودة استفسارك جاهزة. يُرجى الاتصال بنا أو إرسال الرسالة المُعدّة لإكمال طلبك.",
    "contact.error": "يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.",
    "contact.required": "مطلوب",
    "footer.tagline":
      "سوبرماركت حيّك في قلب ديرة — بقالة وإلكترونيات وأدوات مائدة والمزيد.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "التواصل",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.branch": "فرع بني ياس سكوير",
    "floating.call": "اتصال",
    "lang.en": "EN",
    "lang.ar": "AR",
    "lang.switch": "اللغة",
    "common.learnMore": "اعرف المزيد",
    "page.about.metaTitle": "من نحن | دلتا سنتر – فرع بني ياس سكوير",
    "page.products.metaTitle": "المنتجات | دلتا سنتر – فرع بني ياس سكوير",
    "page.contact.metaTitle": "تواصل معنا | دلتا سنتر – فرع بني ياس سكوير",
    "page.about.hero": "عن سوبرماركتنا",
    "page.about.lead":
      "سوبرماركت بموقع مريح يركز على المنتجات اليومية وسهولة الوصول قرب مترو بني ياس.",
    "page.products.hero": "المنتجات والفئات",
    "page.products.lead":
      "استكشف البقالة والإلكترونيات وأدوات المائدة والمزيد في سوبرماركتنا بديرة.",
    "page.contact.hero": "تواصل معنا",
    "page.contact.lead":
      "اتصل بنا أو أرسل استفساراً — نحن مستعدون لمساعدة المتسوقين في سوبرماركتنا بديرة.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: (key: TranslationKey) => string;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "delta-center-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key] ?? translations.en[key],
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      dir: locale === "ar" ? ("rtl" as const) : ("ltr" as const),
      t,
      setLocale,
      toggleLocale,
    }),
    [locale, t, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

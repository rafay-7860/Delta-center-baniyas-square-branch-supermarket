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
    "nav.services": "Services",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.callNow": "Call Now",
    "nav.contactUs": "Contact Us",
    "nav.branchLabel": "Baniyas Square Branch",
    "loader.loading": "Loading",
    "hero.headline": "Your Trusted Financial Services Partner in Dubai.",
    "hero.subtext":
      "Visit Delta Center – Baniyas Square Branch, conveniently located opposite Baniyas Metro Station in the heart of Deira.",
    "hero.ctaContact": "Contact Our Branch",
    "hero.ctaDirections": "Get Directions",
    "hero.badge": "Deira · Dubai · UAE",
    "branch.title": "Branch Information",
    "branch.subtitle": "Everything you need to visit us with confidence.",
    "branch.name": "Delta Center",
    "branch.branch": "Baniyas Square Branch",
    "branch.area": "Deira, Dubai",
    "branch.phone": "Phone",
    "branch.location": "Location",
    "branch.locationValue": "Opposite Baniyas Metro Station, Exit 2",
    "services.title": "Our Services",
    "services.subtitle":
      "Explore the service categories available at our Baniyas Square branch. Please contact the branch to confirm current offerings.",
    "services.disclaimer":
      "Service availability may vary. Contact the branch to confirm what we can assist you with today.",
    "services.learnMore": "Contact Branch",
    "services.moneyExchange.title": "Money Exchange",
    "services.moneyExchange.desc":
      "Currency exchange support for everyday and travel needs. Confirm current availability with our branch team.",
    "services.transfers.title": "International Money Transfers",
    "services.transfers.desc":
      "Assistance with international remittance inquiries. Speak with our staff for process guidance.",
    "services.currency.title": "Currency Services",
    "services.currency.desc":
      "Support related to foreign currency needs for residents, tourists, and business visitors.",
    "services.assistance.title": "Financial Assistance",
    "services.assistance.desc":
      "Customer-focused help navigating financial service requests at our Deira location.",
    "services.payment.title": "Payment Services",
    "services.payment.desc":
      "Guidance on payment-related service inquiries available through our branch.",
    "services.support.title": "Customer Support",
    "services.support.desc":
      "Friendly, professional assistance for visitors seeking clear information and next steps.",
    "about.title": "Convenience, Accessibility & Customer Service.",
    "about.subtitle": "About Our Branch",
    "about.p1":
      "Delta Center – Baniyas Square Branch is positioned for easy access in the heart of Deira, opposite Baniyas Metro Station at Exit 2.",
    "about.p2":
      "Whether you are a Dubai resident, a tourist, or a business professional, our branch focuses on convenient access and attentive customer service in a professional environment.",
    "about.p3":
      "We welcome visitors looking for reliable financial services support in a central Deira location that is simple to reach by metro and nearby transport.",
    "about.point1": "Convenient location in Baniyas Square",
    "about.point2": "Opposite Baniyas Metro Station",
    "about.point3": "Easy access for Deira visitors",
    "about.point4": "Customer-focused service",
    "about.point5": "Professional business environment",
    "about.cta": "Visit Our Contact Page",
    "why.title": "Why Choose Delta Center?",
    "why.subtitle":
      "Practical reasons visitors choose our Baniyas Square branch for financial services support.",
    "why.metro.title": "Convenient Metro Location",
    "why.metro.desc":
      "Located opposite Baniyas Metro Station for straightforward access across Dubai.",
    "why.access.title": "Easy Branch Access",
    "why.access.desc":
      "Find us at Exit 2, making your visit simple whether you arrive by metro or nearby roads.",
    "why.customer.title": "Customer-Focused Assistance",
    "why.customer.desc":
      "Our team prioritizes clear guidance and attentive support for every visitor.",
    "why.environment.title": "Professional Environment",
    "why.environment.desc":
      "A polished branch setting designed for trust, clarity, and comfortable service.",
    "why.deira.title": "Central Deira Location",
    "why.deira.desc":
      "Situated in the heart of Deira — practical for residents, tourists, and professionals.",
    "why.contact.title": "Convenient Contact Options",
    "why.contact.desc":
      "Call +971 4 323 9926 or use our inquiry form to reach the branch team.",
    "location.title": "Find Us in the Heart of Deira.",
    "location.subtitle": "Location & Accessibility",
    "location.branch": "Delta Center – Baniyas Square Branch",
    "location.landmark":
      "EXIT 2 – Opposite Baniyas Metro Station, Deira, Dubai, UAE.",
    "location.phone": "Phone",
    "location.directions": "Get Directions",
    "location.call": "Call Branch",
    "location.note":
      "Use Google Maps search for our branch landmark near Baniyas Metro Station Exit 2.",
    "contact.title": "Contact Our Branch",
    "contact.subtitle":
      "Reach Delta Center – Baniyas Square Branch by phone or send an inquiry.",
    "contact.branch": "Branch Name",
    "contact.phone": "Phone Number",
    "contact.location": "Location",
    "contact.formTitle": "Inquiry Form",
    "contact.formNote":
      "This form prepares your message locally. Please call the branch or use your email client to complete the inquiry until a backend is configured.",
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
      "Financial services branch support in the heart of Deira, opposite Baniyas Metro Station.",
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
    "page.services.metaTitle": "Services | Delta Center – Baniyas Square Branch",
    "page.contact.metaTitle": "Contact | Delta Center – Baniyas Square Branch",
    "page.about.hero": "About Our Branch",
    "page.about.lead":
      "A conveniently located financial services branch focused on accessibility and customer care.",
    "page.services.hero": "Branch Services",
    "page.services.lead":
      "Browse proposed service categories and confirm current offerings with our team.",
    "page.contact.hero": "Get in Touch",
    "page.contact.lead":
      "Call us or send an inquiry — we are ready to assist visitors to our Deira branch.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.whyChooseUs": "لماذا نحن",
    "nav.location": "الموقع",
    "nav.contact": "تواصل معنا",
    "nav.callNow": "اتصل الآن",
    "nav.contactUs": "تواصل معنا",
    "nav.branchLabel": "فرع بني ياس سكوير",
    "loader.loading": "جارٍ التحميل",
    "hero.headline": "شريكك الموثوق للخدمات المالية في دبي.",
    "hero.subtext":
      "زوروا دلتا سنتر – فرع بني ياس سكوير، مقابل محطة مترو بني ياس في قلب ديرة.",
    "hero.ctaContact": "تواصل مع الفرع",
    "hero.ctaDirections": "احصل على الاتجاهات",
    "hero.badge": "ديرة · دبي · الإمارات",
    "branch.title": "معلومات الفرع",
    "branch.subtitle": "كل ما تحتاجه لزيارتنا بثقة وسهولة.",
    "branch.name": "دلتا سنتر",
    "branch.branch": "فرع بني ياس سكوير",
    "branch.area": "ديرة، دبي",
    "branch.phone": "الهاتف",
    "branch.location": "الموقع",
    "branch.locationValue": "مقابل محطة مترو بني ياس، المخرج 2",
    "services.title": "خدماتنا",
    "services.subtitle":
      "تعرّف على فئات الخدمات المتاحة في فرع بني ياس سكوير. يُرجى التواصل مع الفرع لتأكيد العروض الحالية.",
    "services.disclaimer":
      "قد تختلف توفر الخدمات. تواصل مع الفرع لتأكيد ما يمكننا مساعدتك به اليوم.",
    "services.learnMore": "تواصل مع الفرع",
    "services.moneyExchange.title": "صرف العملات",
    "services.moneyExchange.desc":
      "دعم صرف العملات للاحتياجات اليومية والسفر. أكّد التوفر الحالي مع فريق الفرع.",
    "services.transfers.title": "تحويلات مالية دولية",
    "services.transfers.desc":
      "المساعدة في استفسارات التحويلات الدولية. تحدّث مع موظفينا للإرشاد حول الإجراءات.",
    "services.currency.title": "خدمات العملات",
    "services.currency.desc":
      "دعم متعلق باحتياجات العملات الأجنبية للمقيمين والسياح وزوار الأعمال.",
    "services.assistance.title": "المساعدة المالية",
    "services.assistance.desc":
      "مساعدة تركز على العميل في طلبات الخدمات المالية في موقعنا بديرة.",
    "services.payment.title": "خدمات الدفع",
    "services.payment.desc":
      "إرشاد حول استفسارات خدمات الدفع المتاحة عبر فرعنا.",
    "services.support.title": "دعم العملاء",
    "services.support.desc":
      "مساعدة ودّية واحترافية للزوار الباحثين عن معلومات واضحة والخطوات التالية.",
    "about.title": "الراحة وسهولة الوصول وخدمة العملاء.",
    "about.subtitle": "عن فرعنا",
    "about.p1":
      "يقع دلتا سنتر – فرع بني ياس سكوير في موقع يسهل الوصول إليه في قلب ديرة، مقابل محطة مترو بني ياس عند المخرج 2.",
    "about.p2":
      "سواء كنت مقيماً في دبي أو سائحاً أو محترفاً في الأعمال، يركز فرعنا على سهولة الوصول وخدمة العملاء باهتمام في بيئة مهنية.",
    "about.p3":
      "نرحب بالزوار الباحثين عن دعم موثوق للخدمات المالية في موقع مركزي بديرة يسهل الوصول إليه عبر المترو ووسائل النقل القريبة.",
    "about.point1": "موقع مريح في بني ياس سكوير",
    "about.point2": "مقابل محطة مترو بني ياس",
    "about.point3": "سهولة وصول لزوار ديرة",
    "about.point4": "خدمة تركز على العميل",
    "about.point5": "بيئة عمل مهنية",
    "about.cta": "انتقل إلى صفحة التواصل",
    "why.title": "لماذا تختار دلتا سنتر؟",
    "why.subtitle":
      "أسباب عملية لاختيار زوارنا فرع بني ياس سكوير لدعم الخدمات المالية.",
    "why.metro.title": "موقع مريح بجانب المترو",
    "why.metro.desc":
      "يقع مقابل محطة مترو بني ياس لسهولة الوصول من أنحاء دبي.",
    "why.access.title": "سهولة الوصول للفرع",
    "why.access.desc":
      "تجدنا عند المخرج 2، ما يجعل زيارتك بسيطة سواء وصلت بالمترو أو الطرق القريبة.",
    "why.customer.title": "مساعدة تركز على العميل",
    "why.customer.desc":
      "يعطي فريقنا الأولوية للتوجيه الواضح والدعم الودي لكل زائر.",
    "why.environment.title": "بيئة مهنية",
    "why.environment.desc":
      "مقر فرع أنيق مصمم للثقة والوضوح وخدمة مريحة.",
    "why.deira.title": "موقع مركزي في ديرة",
    "why.deira.desc":
      "في قلب ديرة — عملي للمقيمين والسياح والمحترفين.",
    "why.contact.title": "خيارات تواصل مريحة",
    "why.contact.desc":
      "اتصل على +971 4 323 9926 أو استخدم نموذج الاستفسار للتواصل مع فريق الفرع.",
    "location.title": "اعثر علينا في قلب ديرة.",
    "location.subtitle": "الموقع وسهولة الوصول",
    "location.branch": "دلتا سنتر – فرع بني ياس سكوير",
    "location.landmark":
      "المخرج 2 – مقابل محطة مترو بني ياس، ديرة، دبي، الإمارات.",
    "location.phone": "الهاتف",
    "location.directions": "احصل على الاتجاهات",
    "location.call": "اتصل بالفرع",
    "location.note":
      "استخدم بحث خرائط جوجل عن معلم فرعنا قرب محطة مترو بني ياس المخرج 2.",
    "contact.title": "تواصل مع فرعنا",
    "contact.subtitle":
      "تواصل مع دلتا سنتر – فرع بني ياس سكوير عبر الهاتف أو أرسل استفساراً.",
    "contact.branch": "اسم الفرع",
    "contact.phone": "رقم الهاتف",
    "contact.location": "الموقع",
    "contact.formTitle": "نموذج الاستفسار",
    "contact.formNote":
      "يعدّ هذا النموذج رسالتك محلياً. يُرجى الاتصال بالفرع أو استخدام بريدك لإكمال الاستفسار حتى يتم إعداد نظام الإرسال.",
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
      "دعم فرع الخدمات المالية في قلب ديرة، مقابل محطة مترو بني ياس.",
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
    "page.services.metaTitle": "الخدمات | دلتا سنتر – فرع بني ياس سكوير",
    "page.contact.metaTitle": "تواصل معنا | دلتا سنتر – فرع بني ياس سكوير",
    "page.about.hero": "عن فرعنا",
    "page.about.lead":
      "فرع خدمات مالية بموقع مريح يركز على سهولة الوصول ورعاية العملاء.",
    "page.services.hero": "خدمات الفرع",
    "page.services.lead":
      "تصفح فئات الخدمات المقترحة وأكد العروض الحالية مع فريقنا.",
    "page.contact.hero": "تواصل معنا",
    "page.contact.lead":
      "اتصل بنا أو أرسل استفساراً — نحن مستعدون لمساعدة زوار فرعنا في ديرة.",
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

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  toggle: () => void;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "nav.quote": "Get a Quote",
    "nav.brand": "NABEL",
    "nav.brandSub": "Industrial Windows",

    // Hero
    "hero.badge": "Premium Industrial Windows & Facades",
    "hero.h1a": "Advanced UPVC Windows",
    "hero.h1b": "& Glass Facades",
    "hero.h1c": "Solutions",
    "hero.desc": "Providing high-quality windows, doors, and facade systems for residential, commercial, and government projects across Saudi Arabia.",
    "hero.btnProjects": "View Projects",
    "hero.btnContact": "Contact Us",
    "hero.scroll": "Scroll",
    "hero.stat.projects": "Projects",
    "hero.stat.partners": "Partners",
    "hero.stat.cities": "Cities",
    "hero.stat.windows": "Windows",

    // Stats
    "stats.badge": "Our Achievements",
    "stats.h2a": "Numbers That",
    "stats.h2b": "Speak",
    "stats.desc": "A track record of excellence across Saudi Arabia's leading projects",
    "stats.projects": "Projects Completed",
    "stats.companies": "Contracting Companies",
    "stats.cities": "Cities in Saudi Arabia",
    "stats.windows": "Windows Installed",

    // Services
    "services.badge": "What We Offer",
    "services.h2a": "Our",
    "services.h2b": "Services",
    "services.desc": "Comprehensive window, door, and facade solutions for every type of project",
    "services.upvcWindows": "UPVC Windows",
    "services.upvcWindows.desc": "Premium double-glazed UPVC windows offering superior thermal insulation and noise reduction for all project types.",
    "services.upvcDoors": "UPVC Doors",
    "services.upvcDoors.desc": "Durable, weather-resistant UPVC door systems with modern hardware for residential and commercial applications.",
    "services.glassFacades": "Glass Facades",
    "services.glassFacades.desc": "Spectacular glass curtain wall systems that combine aesthetics with structural performance for modern buildings.",
    "services.aluminum": "Aluminum Systems",
    "services.aluminum.desc": "High-performance aluminum framing systems engineered for large commercial and governmental structures.",
    "services.cladding": "Cladding",
    "services.cladding.desc": "Exterior cladding solutions that provide protection, insulation, and a premium architectural finish.",
    "services.structural": "Structural Glass",
    "services.structural.desc": "Load-bearing structural glass installations creating open, transparent spaces with maximum natural light.",
    "services.learnMore": "Learn more",

    // Projects
    "projects.badge": "Our Portfolio",
    "projects.h2a": "Featured",
    "projects.h2b": "Projects",
    "projects.desc": "Trusted by leading contractors across Saudi Arabia's major cities",
    "projects.contractor": "Contractor",
    "projects.work": "Work",
    "projects.viewAll": "View All Projects",
    "projects.tag.residential": "Residential",
    "projects.tag.government": "Government",
    "projects.tag.commercial": "Commercial",

    // Project names
    "project.1.name": "Yasmin Villas – 64 Villas",
    "project.1.contractor": "Maskan Arabia",
    "project.1.work": "UPVC Windows & Doors",
    "project.1.city": "Riyadh",
    "project.2.name": "Government Housing Complex",
    "project.2.contractor": "Ministry of Interior",
    "project.2.work": "Glass Facades & Aluminum Systems",
    "project.2.city": "Jeddah",
    "project.3.name": "Commercial Tower – Al Kharj",
    "project.3.contractor": "Afak Al Omran",
    "project.3.work": "Structural Glass & Cladding",
    "project.3.city": "Al-Kharj",
    "project.4.name": "Luxury Residential Complex",
    "project.4.contractor": "Dar Al Ibkar Contracting",
    "project.4.work": "UPVC Windows & Glass Facades",
    "project.4.city": "Dammam",
    "project.5.name": "Planning Ministry HQ",
    "project.5.contractor": "Ministry of Planning",
    "project.5.work": "Aluminum Systems & Cladding",
    "project.5.city": "Riyadh",
    "project.6.name": "Hail Residential Towers",
    "project.6.contractor": "Abdulrahman Al Rashid",
    "project.6.work": "UPVC Windows & Doors",
    "project.6.city": "Hail",

    // Cities
    "cities.badge": "Coverage",
    "cities.h2a": "Projects Across",
    "cities.h2b": "Saudi Arabia",
    "cities.desc": "A growing presence in major cities and regions of the Kingdom",
    "cities.projects": "Projects",

    // Clients
    "clients.badge": "Trust & Partnership",
    "clients.h2a": "Our",
    "clients.h2b": "Clients",
    "clients.desc": "Trusted by leading construction companies, government entities, and developers",

    // Gallery
    "gallery.badge": "Visual Portfolio",
    "gallery.h2a": "Project",
    "gallery.h2b": "Gallery",
    "gallery.desc": "A glimpse of our craftsmanship and quality installations",

    // Why Us
    "whyus.badge": "Why NABEL",
    "whyus.h2a": "Why Choose",
    "whyus.h2b": "NABEL",
    "whyus.desc": "We combine technical expertise, premium materials, and a commitment to excellence to deliver window and facade solutions that exceed expectations on every project.",
    "whyus.years": "Years of Excellence",
    "whyus.r1": "High quality imported materials and certified products",
    "whyus.r2": "Experienced engineering team with 10+ years",
    "whyus.r3": "Government and commercial project expertise",
    "whyus.r4": "Fast execution with strict timeline compliance",
    "whyus.r5": "Reliable after-sales support and warranty",
    "whyus.r6": "Competitive pricing with premium quality",

    // CTA
    "cta.badge": "Ready to Start?",
    "cta.h2a": "Start Your Next Project",
    "cta.h2b": "With Us",
    "cta.desc": "Get professional solutions for windows, doors, and glass facades. Our team is ready to bring your vision to life.",
    "cta.quote": "Request a Quote",
    "cta.call": "Call Us Now",

    // Contact
    "contact.badge": "Reach Out",
    "contact.h2a": "Contact",
    "contact.h2b": "Us",
    "contact.desc": "Reach out to discuss your project requirements and get a tailored quote",
    "contact.phone": "Phone",
    "contact.phoneSub": "Available Sun–Thu, 8am–6pm",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsappSub": "Chat with us directly",
    "contact.address": "Address",
    "contact.addressVal": "Riyadh – Al Fahd Industrial Area",
    "contact.addressSub": "Harun Al Rashid Road",

    // Footer
    "footer.desc": "Leading provider of UPVC windows, glass facades, and aluminum systems for residential, commercial, and government projects across Saudi Arabia.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.contact": "Contact Info",
    "footer.copyright": "© 2024 NABEL Industrial Windows Factory. All rights reserved.",
    "footer.location": "Saudi Arabia · Riyadh · Al Fahd Industrial Area",
    "footer.email": "info@nabel-windows.sa",
    "footer.brandSub": "Industrial Windows Factory",
  },

  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.projects": "المشاريع",
    "nav.gallery": "المعرض",
    "nav.clients": "العملاء",
    "nav.contact": "اتصل بنا",
    "nav.quote": "احصل على عرض سعر",
    "nav.brand": "نابل",
    "nav.brandSub": "مصنع النوافذ الصناعية",

    // Hero
    "hero.badge": "نوافذ وواجهات صناعية متميزة",
    "hero.h1a": "نوافذ UPVC المتطورة",
    "hero.h1b": "وواجهات الزجاج",
    "hero.h1c": "حلول متكاملة",
    "hero.desc": "نقدم نوافذ وأبواب وأنظمة واجهات عالية الجودة للمشاريع السكنية والتجارية والحكومية في جميع أنحاء المملكة العربية السعودية.",
    "hero.btnProjects": "عرض المشاريع",
    "hero.btnContact": "اتصل بنا",
    "hero.scroll": "انتقل",
    "hero.stat.projects": "مشروع",
    "hero.stat.partners": "شريك",
    "hero.stat.cities": "مدن",
    "hero.stat.windows": "نافذة",

    // Stats
    "stats.badge": "إنجازاتنا",
    "stats.h2a": "أرقام",
    "stats.h2b": "تتحدث",
    "stats.desc": "سجل حافل من التميز عبر أبرز مشاريع المملكة العربية السعودية",
    "stats.projects": "مشروع منجز",
    "stats.companies": "شركة مقاولات",
    "stats.cities": "مدن في المملكة",
    "stats.windows": "نافذة مركبة",

    // Services
    "services.badge": "ما نقدمه",
    "services.h2a": "خدماتنا",
    "services.h2b": "",
    "services.desc": "حلول شاملة للنوافذ والأبواب والواجهات لكل أنواع المشاريع",
    "services.upvcWindows": "نوافذ UPVC",
    "services.upvcWindows.desc": "نوافذ UPVC مزدوجة التزجيج توفر عزلاً حرارياً وصوتياً فائقاً لجميع أنواع المشاريع.",
    "services.upvcDoors": "أبواب UPVC",
    "services.upvcDoors.desc": "أنظمة أبواب UPVC متينة ومقاومة للعوامل الجوية بأجهزة حديثة للتطبيقات السكنية والتجارية.",
    "services.glassFacades": "واجهات زجاجية",
    "services.glassFacades.desc": "أنظمة جدران الستارة الزجاجية المذهلة التي تجمع بين الجماليات والأداء الإنشائي للمباني الحديثة.",
    "services.aluminum": "أنظمة الألمنيوم",
    "services.aluminum.desc": "أنظمة تأطير ألمنيوم عالية الأداء مصممة للهياكل التجارية والحكومية الكبيرة.",
    "services.cladding": "الكلادينج",
    "services.cladding.desc": "حلول الكسوة الخارجية التي توفر الحماية والعزل واللمسة المعمارية المتميزة.",
    "services.structural": "الزجاج الإنشائي",
    "services.structural.desc": "تركيبات الزجاج الإنشائي الحاملة للأحمال تخلق مساحات مفتوحة وشفافة مع أقصى قدر من الضوء الطبيعي.",
    "services.learnMore": "اعرف المزيد",

    // Projects
    "projects.badge": "أعمالنا",
    "projects.h2a": "المشاريع",
    "projects.h2b": "المميزة",
    "projects.desc": "موثوق به من قِبل كبار المقاولين في أبرز مدن المملكة العربية السعودية",
    "projects.contractor": "المقاول",
    "projects.work": "نوع العمل",
    "projects.viewAll": "عرض جميع المشاريع",
    "projects.tag.residential": "سكني",
    "projects.tag.government": "حكومي",
    "projects.tag.commercial": "تجاري",

    "project.1.name": "مشروع فلل الياسمين – 64 فيلا",
    "project.1.contractor": "مسكن العربية",
    "project.1.work": "نوافذ وأبواب UPVC",
    "project.1.city": "الرياض",
    "project.2.name": "مجمع الإسكان الحكومي",
    "project.2.contractor": "وزارة الداخلية",
    "project.2.work": "واجهات زجاجية وأنظمة ألمنيوم",
    "project.2.city": "جدة",
    "project.3.name": "برج تجاري – الخرج",
    "project.3.contractor": "آفاق العمران",
    "project.3.work": "زجاج إنشائي وكلادينج",
    "project.3.city": "الخرج",
    "project.4.name": "مجمع سكني فاخر",
    "project.4.contractor": "دار الإبكار للمقاولات",
    "project.4.work": "نوافذ UPVC وواجهات زجاجية",
    "project.4.city": "الدمام",
    "project.5.name": "مقر وزارة التخطيط",
    "project.5.contractor": "وزارة التخطيط",
    "project.5.work": "أنظمة ألمنيوم وكلادينج",
    "project.5.city": "الرياض",
    "project.6.name": "أبراج سكنية حائل",
    "project.6.contractor": "شركة عبدالرحمن الراشد",
    "project.6.work": "نوافذ وأبواب UPVC",
    "project.6.city": "حائل",

    // Cities
    "cities.badge": "التغطية الجغرافية",
    "cities.h2a": "مشاريعنا في",
    "cities.h2b": "المملكة العربية السعودية",
    "cities.desc": "حضور متنامٍ في المدن والمناطق الرئيسية بالمملكة",
    "cities.projects": "مشروع",

    // Clients
    "clients.badge": "الثقة والشراكة",
    "clients.h2a": "عملاؤنا",
    "clients.h2b": "",
    "clients.desc": "يثق بنا كبار شركات البناء والجهات الحكومية والمطورين العقاريين",

    // Gallery
    "gallery.badge": "معرض الأعمال",
    "gallery.h2a": "معرض",
    "gallery.h2b": "المشاريع",
    "gallery.desc": "لمحة عن جودة تنفيذنا وحرفيتنا في التركيب",

    // Why Us
    "whyus.badge": "لماذا نابل",
    "whyus.h2a": "لماذا تختار",
    "whyus.h2b": "نابل؟",
    "whyus.desc": "نجمع بين الخبرة التقنية والمواد المتميزة والالتزام بالتميز لتقديم حلول النوافذ والواجهات التي تتجاوز التوقعات في كل مشروع.",
    "whyus.years": "سنوات من التميز",
    "whyus.r1": "مواد مستوردة عالية الجودة ومنتجات معتمدة",
    "whyus.r2": "فريق هندسي متمرس بخبرة تزيد عن 10 سنوات",
    "whyus.r3": "خبرة في المشاريع الحكومية والتجارية",
    "whyus.r4": "تنفيذ سريع مع الالتزام الصارم بالجداول الزمنية",
    "whyus.r5": "دعم موثوق لما بعد البيع وضمان شامل",
    "whyus.r6": "أسعار تنافسية مع جودة متميزة",

    // CTA
    "cta.badge": "مستعد للبدء؟",
    "cta.h2a": "ابدأ مشروعك القادم",
    "cta.h2b": "معنا",
    "cta.desc": "احصل على حلول احترافية للنوافذ والأبواب وواجهات الزجاج. فريقنا جاهز لتحويل رؤيتك إلى واقع.",
    "cta.quote": "طلب عرض سعر",
    "cta.call": "اتصل بنا الآن",

    // Contact
    "contact.badge": "تواصل معنا",
    "contact.h2a": "اتصل",
    "contact.h2b": "بنا",
    "contact.desc": "تواصل معنا لمناقشة متطلبات مشروعك والحصول على عرض سعر مخصص",
    "contact.phone": "الهاتف",
    "contact.phoneSub": "متاح من الأحد إلى الخميس، 8ص–6م",
    "contact.whatsapp": "واتساب",
    "contact.whatsappSub": "راسلنا مباشرة",
    "contact.address": "العنوان",
    "contact.addressVal": "الرياض – المنطقة الصناعية الفهد",
    "contact.addressSub": "طريق هارون الرشيد",

    // Footer
    "footer.desc": "مزود رائد لنوافذ UPVC والواجهات الزجاجية وأنظمة الألمنيوم للمشاريع السكنية والتجارية والحكومية في جميع أنحاء المملكة العربية السعودية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "خدماتنا",
    "footer.contact": "معلومات التواصل",
    "footer.copyright": "© 2024 مصنع نابل للنوافذ الصناعية. جميع الحقوق محفوظة.",
    "footer.location": "المملكة العربية السعودية · الرياض · المنطقة الصناعية الفهد",
    "footer.email": "info@nabel-windows.sa",
    "footer.brandSub": "مصنع النوافذ الصناعية",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  dir: "ltr",
  t: (k) => k,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const t = (key: string): string =>
    translations[lang][key] ?? translations["en"][key] ?? key;

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.documentElement.style.fontFamily =
      lang === "ar"
        ? "'Cairo', 'Noto Sans Arabic', sans-serif"
        : "'Inter', sans-serif";
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

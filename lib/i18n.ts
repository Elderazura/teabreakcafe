export type Locale = 'en' | 'ar'

export const locales: Locale[] = ['en', 'ar']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      locations: 'Locations',
      franchise: 'Franchise',
      blog: 'Blog',
      contact: 'Contact',
      orderNow: 'Order Now',
    },
    // Homepage
    home: {
      hero: {
        title: "We serve 100% fresh Wagyu, homemade buns, and regrets? Never heard of them.",
        subtitle: "Welcome to Tea Break.",
        cta1: "I'm Hungry (Order Now)",
        cta2: "Where Are You? (Find Us)",
      },
      featured: "Featured Favorites",
      blog: "Latest from Our Blog",
      social: "See what's happening at Tea Break",
      viewMenu: "View Full Menu",
    },
    // Common
    common: {
      readMore: 'Read More',
      viewAll: 'View All',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      findLocation: 'Find Location',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      followUs: 'Follow Us',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      menu: 'القائمة',
      locations: 'المواقع',
      franchise: 'الامتياز التجاري',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      orderNow: 'اطلب الآن',
    },
    // Homepage
    home: {
      hero: {
        title: "نقدم واغيو طازج 100%، وكعك محلي الصنع، والندم؟ لم نسمع به أبداً.",
        subtitle: "مرحباً بكم في تي بريك.",
        cta1: "أنا جائع (اطلب الآن)",
        cta2: "أين أنت؟ (اعثر علينا)",
      },
      featured: "المفضلة المميزة",
      blog: "آخر من مدونتنا",
      social: "شاهد ما يحدث في تي بريك",
      viewMenu: "عرض القائمة الكاملة",
    },
    // Common
    common: {
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ',
      contactUs: 'اتصل بنا',
      findLocation: 'ابحث عن موقع',
      callUs: 'اتصل بنا',
      emailUs: 'راسلنا',
      followUs: 'تابعنا',
    },
  },
}

export type TranslationKey = keyof typeof translations.en

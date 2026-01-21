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
        sponsor: 'Official Sponsor',
        cheatDay: 'of Your Cheat Day',
        title: "We serve 100% fresh Wagyu, homemade buns, and regrets? Never heard of them.",
        subtitle: "Welcome to Tea Break.",
        cta1: "I'm Hungry (Order Now)",
        cta2: "Where Are You? (Find Us)",
      },
      featured: "Featured Favorites",
      featuredDesc: "Our most loved items",
      viewMenu: "View Full Menu",
      blog: "Latest from Our Blog",
      blogDesc: "Food stories, tips, and more",
      social: "Follow Our Journey",
      socialDesc: "See what's happening at Tea Break",
      stats: {
        locations: "Locations Across UAE",
        serving: "Serving Since",
        fresh: "Fresh Daily",
      },
      reviews: "People Love Us. (And We Love Them Back)",
    },
    // About Page
    about: {
      hero: {
        title: "From a Single Teapot in Shahama",
        title2: "to a UAE Empire",
      },
      origin: {
        title: "Our Origin Story",
        text1: "Let's rewind to 2013. The place: Shahama, Abu Dhabi. The mission: To save the world from bad tea and boring burgers. Our founder, Mr. Shahaban, looked around and saw a sea of sameness. He didn't want to open just another cafeteria; he wanted to create a 'Tea Break'—a literal pause button in the chaotic soundtrack of UAE life.",
        text2: "We started small. But word travels fast when your Karak hits different and your Wagyu doesn't cost a kidney. We obsessed over the details. We decided to bake our own bread because we have trust issues with store-bought buns. We developed the 'Semi' cooking method—searing flavor in minutes—because nobody likes waiting for fast food.",
      },
      today: {
        title: "Fast Forward to Today",
        desc: "From one teapot to an empire across the UAE",
        text1: "Fast forward to today, and we're kind of a big deal. We were named the 'Home Grown Franchise of the Year' by the Arab Franchise Expo. We have over 20 outlets across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah.",
        text2: "But despite the awards and the fancy 'franchise' title, we're still the same folks who believe that a cup of tea can fix almost anything.",
      },
      values: {
        title: "Our Values",
        fresh: {
          title: "Fresh. Always.",
          desc: "We don't do frozen. We don't do pre-cooked. We do fresh, daily, and delicious.",
        },
        semi: {
          title: "The Semi Method",
          desc: "Fast, fresh, flavorful. The cooking technique that changed the game.",
        },
        community: {
          title: "Community First",
          desc: "We're not just a cafe; we're a gathering place. A pause button in your day.",
        },
      },
      cta: "Ready to Experience Tea Break?",
    },
    // Menu Page
    menu: {
      hero: {
        title: "A Gastronomic Journey",
        subtitle: "Grouped by vibe, not just category. Because food is an experience.",
        viewPdf: "View PDF Menu",
        downloadPdf: "Download PDF",
      },
      tea: {
        title: "Our Tea Collection",
        hotTea: "Hot Tea",
        icedTea: "Iced Tea",
        teaFlasks: "Tea Flasks",
      },
      sections: {
        breakfast: {
          title: "The Wake-Up Call",
          subtitle: "Available when you are. Because time is a construct.",
        },
        burgers: {
          title: "The Burger Lab",
          subtitle: "Homemade buns. Serious Beef. No nonsense.",
        },
        sandwiches: {
          title: "The \"Semi\" Legends",
          subtitle: "The 'Semi' method: Fast, Fresh, Flavorful.",
        },
        pasta: {
          title: "Carb-Loading",
          subtitle: "Because salad is a side dish.",
        },
      },
      cta: {
        title: "Ready to Order?",
        desc: "Order now on Talabat, Deliveroo, or Noon Food. Or visit us at one of our 20+ locations.",
        button: "Find Us Near You",
      },
    },
    // Locations Page
    locations: {
      hero: {
        title: "The Tea Break Map",
        subtitle: "20+ locations across the UAE. Find your nearest Tea Break.",
        locations: "Locations",
        cities: "Cities",
        stores: "Some Stores",
      },
      search: {
        placeholder: "Search by location name or address...",
        allCities: "All Cities",
      },
      map: {
        title: "View All Locations on Map",
        desc: "Click on the map to open in Google Maps",
        clickToView: "Click to view all locations in Google Maps",
      },
      banner: {
        title: "Find Your Nearest Tea Break",
        desc: "With 20+ locations across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah, there is always a Tea Break near you. Fresh food and Karak, just around the corner.",
        cta: "View Menu",
      },
      cityLabels: {
        abuDhabi: "The Heartland",
        dubai: "The Expansion",
        northern: "The Frontier",
      },
      noResults: "No locations found matching your search.",
      clearFilters: "Clear Filters",
      cta: {
        title: "Can't Find Your Location?",
        desc: "Give us a call and we'll help you find the nearest Tea Break.",
        call: "Call HQ",
        contact: "Contact Us",
      },
      card: {
        directions: "Directions",
        callStore: "Call Store",
      },
    },
    // Franchise Page
    franchise: {
      hero: {
        title: "World Domination Plans",
        title2: "(With Burgers)",
        subtitle: "We Conquered the UAE. Next Stop? The Planet.",
        subtitle2: "(Okay, maybe just Europe, Africa, and Asia for now. We're humble like that.)",
      },
      growth: {
        title: "We Started in a Parking Lot. Now We're Here.",
        subtitle: "From Shahama to Everywhere",
        text1: "Look, we didn't start with a boardroom full of suits. We started in 2014 in Shahama, Abu Dhabi, with a simple idea: \"What if fast food didn't taste like cardboard?\" and \"What if Karak was actually made with love, not just sugar?\"",
        text2: "The result? Absolute chaos. The good kind.",
        stats: {
          outlets: "Outlets (and counting)",
          outletsDesc: "We went from 1 humble shop to over 50 outlets across the UAE. That's not just growth; that's a caffeine-fueled sprint.",
          award: "Home Grown Franchise of the Year",
          awardDesc: "We didn't just win hearts; we won metal. Official award from the Arab Franchise Expo. That's right, we have a trophy. It's shiny.",
          years: "Years of Success",
          yearsDesc: "Our registers have been ringing non-stop for a decade. We bridged the gap between fancy coffee chains and corner cafeterias.",
        },
      },
      uae: {
        title: "We Are Basically a Cultural Landmark Now",
        subtitle: "Why People Are Obsessed",
        semi: {
          title: "The \"Semi\" Cult",
          desc: "We introduced the UAE to the \"Semi\" cooking method. People didn't know they needed a Semi Hot Dog or Semi Pulled Chicken until we gave it to them. Now? They can't live without it.",
        },
        talabat: {
          title: "The Talabat Truth",
          desc: "Check the receipts. With thousands of 5-star reviews, we aren't just feeding people; we are saving them from \"Hangry\" meltdowns. From students in Ajman needing a brain boost to families in Khalifa City needing a weekend feast, we are the first call.",
        },
        verdict: {
          title: "The Verdict",
          desc: "We proved that a homegrown UAE brand could stand toe-to-toe with the big American giants. And honestly? We think our Wagyu Burger wins that fight every time.",
        },
        landmark: "In the UAE, you have the Burj Khalifa, the Sheikh Zayed Mosque, and then you have a Tea Break Yellow Cup.",
        habit: "We didn't just sell tea; we became a habit. A really tasty, slightly addictive habit.",
      },
      future: {
        title: "Europe, Africa, Asia... You Look Hungry",
        subtitle: "Pack Your Bags, We're Going Global",
        desc: "We've hugged the UAE tight enough. It's time to spread the love. Our passport is ready, and our grill is hot.",
        europe: {
          emoji: "🇪🇺",
          name: "Europe",
          mission: "To save Europe from boring sandwiches.",
          vibe: "Imagine sipping a Double Saffron Karak in the rain in London, or eating a Cheetos Chicken Burger while walking through Paris. We are bringing the warmth of the desert to the cool streets of Europe.",
          cities: "London, Paris, Berlin, and more",
        },
        africa: {
          emoji: "🌍",
          name: "North Africa",
          mission: "Returning to the roots of flavor.",
          vibe: "North Africa knows tea. But they haven't tried our tea. We are expanding into the bustling markets of Cairo, Casablanca, and beyond. We are bringing our Fusion Breakfasts and legendary Shakshouka Croissants.",
          cities: "Cairo, Casablanca, and beyond",
        },
        asia: {
          emoji: "🌏",
          name: "East Asia",
          mission: "The ultimate flavor exchange.",
          vibe: "East Asia gave the world Boba. We are giving East Asia the Omani Chip Sandwich. Fair trade, right? We are targeting the high-energy cities where innovation meets flavor.",
          cities: "Tokyo, Seoul, Shanghai, and more",
        },
      },
      partner: {
        title: "Do You Like Money? Do You Like Burgers? Keep Reading.",
        subtitle: "Let's Make Money & Memories",
        offers: {
          title: "What We Offer",
          proven: {
            title: "A Proven Model",
            desc: "We've made the mistakes so you don't have to.",
          },
          menu: {
            title: "The Menu",
            desc: "Access to our secret recipes (yes, even the secret sauce).",
          },
          hype: {
            title: "The Hype",
            desc: "A brand that comes with a built-in fan base.",
          },
          support: {
            title: "The Support",
            desc: "We train your staff to pour tea from a height without making a mess. (Mostly).",
          },
        },
        details: {
          title: "The Details",
          investment: {
            title: "Initial Investment",
            desc: "Starting from approximately AED 200,000 (varies by location/planet).",
          },
          support: {
            title: "Support",
            desc: "Complete training, ongoing operational support, and marketing assistance.",
          },
          looking: "We are looking for partners who are just as crazy as we are. If you want to bring the Tea Break magic to your city (whether that's Manchester or Marrakech), we want to talk.",
        },
        cta: {
          title: "Ready to Break the Internet (and Some Eggs)?",
          desc: "Tea Break Cafe: Taking over the world, one yellow cup at a time.",
          call: "Call the Boss. We answer. (Usually during business hours.)",
        },
      },
    },
    // Blog Page
    blog: {
      hero: {
        title: "The Tea Break Blog",
        subtitle: "Where food science meets food love.",
      },
      latest: "Latest Stories",
      desc: "Food philosophy, science, and everything delicious",
      readFull: "Read Full Story",
      follow: "Follow Our Adventures",
      followDesc: "See what's happening at Tea Break",
      newsletter: {
        title: "Stay Updated with Tea Break",
        desc: "Follow us on social media for daily food inspiration, behind-the-scenes content, and exclusive updates.",
        instagram: "Follow on Instagram",
        tiktok: "Follow on TikTok",
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: "Talk to Us. We Don't Bite",
        subtitle: "(Unlike Our Burgers)",
      },
      customer: {
        title: "Customer Service",
        desc: "Did we make your day? Did we forget your extra sauce? Let us know. We are obsessed with feedback.",
      },
      delivery: {
        title: "Delivery",
        desc: "Too cozy to leave the couch? We are on all the apps.",
      },
      social: {
        title: "Social Media",
        desc: "Follow us for thirst traps (of tea).",
      },
      visit: {
        title: "Visit Us In Person",
        desc: "We have 20+ locations across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah.",
        button: "Find Your Nearest Location",
      },
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
      viewMenu: 'View Menu',
      tryNow: 'Try It Now',
      orderNow: 'Order Now',
      seeMenu: 'See Our Menu',
      exploreMenu: 'Explore Our Menu',
    },
    // Order Modal
    order: {
      title: "Order from Tea Break",
      subtitle: "Choose your preferred delivery platform",
      callTitle: "Call to Order",
      callDesc: "Call the Cafe Directly",
      visit: "Or visit us at one of our 20+ locations",
      findLocation: "Find a Location",
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
        sponsor: 'الراعي الرسمي',
        cheatDay: 'ليوم الغش الخاص بك',
        title: "نقدم واغيو طازج 100%، وكعك محلي الصنع، والندم؟ لم نسمع به أبداً.",
        subtitle: "مرحباً بكم في تي بريك.",
        cta1: "أنا جائع (اطلب الآن)",
        cta2: "أين أنت؟ (اعثر علينا)",
      },
      featured: "المفضلة المميزة",
      featuredDesc: "أكثر الأصناف المحبوبة لدينا",
      viewMenu: "عرض القائمة الكاملة",
      blog: "آخر من مدونتنا",
      blogDesc: "قصص الطعام، نصائح، والمزيد",
      social: "تابع رحلتنا",
      socialDesc: "شاهد ما يحدث في تي بريك",
      stats: {
        locations: "مواقع في الإمارات",
        serving: "نخدم منذ",
        fresh: "طازج يومياً",
      },
      reviews: "الناس يحبوننا. (ونحن نحبهم أيضاً)",
    },
    // About Page
    about: {
      hero: {
        title: "من إبريق شاي واحد في الشهامة",
        title2: "إلى إمبراطورية في الإمارات",
      },
      origin: {
        title: "قصة أصلنا",
        text1: "دعونا نعود إلى عام 2013. المكان: الشهامة، أبوظبي. المهمة: إنقاذ العالم من الشاي السيء والبرجر الممل. مؤسسنا، السيد شهابان، نظر حوله ورأى بحراً من التشابه. لم يرد فتح مقهى آخر؛ أراد إنشاء 'تي بريك'—زر إيقاف مؤقت حرفي في الموسيقى الصاخبة لحياة الإمارات.",
        text2: "بدأنا صغاراً. لكن الكلمة تنتشر بسرعة عندما يكون الكرك مختلفاً والواغيو لا يكلف كليتك. هوسنا بالتفاصيل. قررنا خبز خبزنا لأن لدينا مشاكل ثقة مع الكعك الجاهز. طورنا طريقة الطهي 'السيمي'—تحمير النكهة في دقائق—لأن لا أحد يحب الانتظار للوجبات السريعة.",
      },
      today: {
        title: "التقدم السريع إلى اليوم",
        desc: "من إبريق شاي واحد إلى إمبراطورية عبر الإمارات",
        text1: "التقدم السريع إلى اليوم، ونحن نوعاً ما شخصيات مهمة. حصلنا على لقب 'امتياز محلي العام' من معرض الامتياز العربي. لدينا أكثر من 20 فرعاً عبر أبوظبي، دبي، عجمان، رأس الخيمة، والفجيرة.",
        text2: "لكن رغم الجوائز وعنوان 'الامتياز' الفاخر، ما زلنا نفس الأشخاص الذين يؤمنون أن كوب شاي يمكنه إصلاح كل شيء تقريباً.",
      },
      values: {
        title: "قيمنا",
        fresh: {
          title: "طازج. دائماً.",
          desc: "لا نستخدم المجمد. لا نستخدم المطبوخ مسبقاً. نستخدم الطازج، اليومي، واللذيذ.",
        },
        semi: {
          title: "طريقة السيمي",
          desc: "سريع، طازج، مليء بالنكهة. تقنية الطهي التي غيرت اللعبة.",
        },
        community: {
          title: "المجتمع أولاً",
          desc: "لسنا مجرد مقهى؛ نحن مكان للاجتماع. زر إيقاف مؤقت في يومك.",
        },
      },
      cta: "جاهز لتجربة تي بريك؟",
    },
    // Menu Page
    menu: {
      hero: {
        title: "رحلة ذواقة",
        subtitle: "مجمعة حسب الشعور، وليس فقط الفئة. لأن الطعام تجربة.",
        viewPdf: "عرض قائمة PDF",
        downloadPdf: "تحميل PDF",
      },
      tea: {
        title: "مجموعة الشاي لدينا",
        hotTea: "شاي ساخن",
        icedTea: "شاي مثلج",
        teaFlasks: "قوارير الشاي",
      },
      sections: {
        breakfast: {
          title: "نداء الاستيقاظ",
          subtitle: "متاح عندما تكون أنت. لأن الوقت بناء.",
        },
        burgers: {
          title: "مختبر البرجر",
          subtitle: "كعك محلي الصنع. لحم جدي. بدون هراء.",
        },
        sandwiches: {
          title: "أساطير 'السيمي'",
          subtitle: "طريقة 'السيمي': سريع، طازج، مليء بالنكهة.",
        },
        pasta: {
          title: "تحميل الكربوهيدرات",
          subtitle: "لأن السلطة طبق جانبي.",
        },
      },
      cta: {
        title: "جاهز للطلب؟",
        desc: "اطلب الآن على طلبات، دليفرو، أو نون فود. أو زرنا في أحد مواقعنا الـ 20+.",
        button: "اعثر علينا بالقرب منك",
      },
    },
    // Locations Page
    locations: {
      hero: {
        title: "خريطة تي بريك",
        subtitle: "20+ موقعاً عبر الإمارات. اعثر على أقرب تي بريك لك.",
        locations: "مواقع",
        cities: "مدن",
        stores: "بعض المتاجر",
      },
      search: {
        placeholder: "ابحث باسم الموقع أو العنوان...",
        allCities: "جميع المدن",
      },
      map: {
        title: "عرض جميع المواقع على الخريطة",
        desc: "انقر على الخريطة لفتحها في خرائط جوجل",
        clickToView: "انقر لعرض جميع المواقع في خرائط جوجل",
      },
      banner: {
        title: "اعثر على أقرب تي بريك لك",
        desc: "مع 20+ موقعاً عبر أبوظبي، دبي، عجمان، رأس الخيمة، والفجيرة، هناك دائماً تي بريك بالقرب منك. طعام طازج وكرك، على بعد خطوات.",
        cta: "عرض القائمة",
      },
      cityLabels: {
        abuDhabi: "القلب",
        dubai: "التوسع",
        northern: "الحدود",
      },
      noResults: "لم يتم العثور على مواقع تطابق بحثك.",
      clearFilters: "مسح المرشحات",
      cta: {
        title: "لا تجد موقعك؟",
        desc: "اتصل بنا وسنساعدك في العثور على أقرب تي بريك.",
        call: "اتصل بالمقر الرئيسي",
        contact: "اتصل بنا",
      },
      card: {
        directions: "الاتجاهات",
        callStore: "اتصل بالمتجر",
      },
    },
    // Franchise Page
    franchise: {
      hero: {
        title: "خطط السيطرة على العالم",
        title2: "(مع البرجر)",
        subtitle: "غزونا الإمارات. المحطة التالية؟ الكوكب.",
        subtitle2: "(حسناً، ربما فقط أوروبا، أفريقيا، وآسيا في الوقت الحالي. نحن متواضعون هكذا.)",
      },
      growth: {
        title: "بدأنا في موقف سيارات. الآن نحن هنا.",
        subtitle: "من الشهامة إلى كل مكان",
        text1: "انظر، لم نبدأ بمجلس إدارة مليء بالبدلات. بدأنا في 2014 في الشهامة، أبوظبي، بفكرة بسيطة: \"ماذا لو لم يكن الطعام السريع طعمه مثل الكرتون؟\" و\"ماذا لو كان الكرك مصنوعاً بالحب فعلاً، وليس فقط بالسكر؟\"",
        text2: "النتيجة؟ فوضى مطلقة. النوع الجيد.",
        stats: {
          outlets: "فروع (والعدد في ازدياد)",
          outletsDesc: "انتقلنا من متجر متواضع واحد إلى أكثر من 50 فرعاً عبر الإمارات. هذا ليس مجرد نمو؛ هذا سباق مدفوع بالكافيين.",
          award: "امتياز محلي العام",
          awardDesc: "لم نفز فقط بالقلوب؛ فزنا بالمعدن. جائزة رسمية من معرض الامتياز العربي. هذا صحيح، لدينا كأس. إنه لامع.",
          years: "سنوات من النجاح",
          yearsDesc: "سجلاتنا كانت ترن بلا توقف لعقد من الزمن. ربطنا الفجوة بين سلاسل القهوة الفاخرة ومقاهي الزاوية.",
        },
      },
      uae: {
        title: "نحن الآن معلم ثقافي أساساً",
        subtitle: "لماذا الناس مهووسون",
        semi: {
          title: "عبادة 'السيمي'",
          desc: "قدمنا للإمارات طريقة الطهي 'السيمي'. الناس لم يعرفوا أنهم يحتاجون هوت دوغ سيمي أو دجاج سيمي مقطّع حتى أعطيناهم إياه. الآن؟ لا يستطيعون العيش بدونه.",
        },
        talabat: {
          title: "حقيقة طلبات",
          desc: "تحقق من الإيصالات. مع آلاف التقييمات 5 نجوم، نحن لا نطعم الناس فقط؛ نحن ننقذهم من انهيارات 'الجوع الغاضب'. من الطلاب في عجمان الذين يحتاجون دفعة دماغية إلى العائلات في مدينة خليفة التي تحتاج وليمة نهاية الأسبوع، نحن المكالمة الأولى.",
        },
        verdict: {
          title: "الحكم",
          desc: "أثبتنا أن علامة تجارية محلية إماراتية يمكنها الوقوف جنباً إلى جنب مع العمالقة الأمريكية الكبيرة. وبصراحة؟ نعتقد أن برجر الواغيو لدينا يفوز في تلك المعركة في كل مرة.",
        },
        landmark: "في الإمارات، لديك برج خليفة، مسجد الشيخ زايد، ثم لديك كوب تي بريك الأصفر.",
        habit: "لم نبع الشاي فقط؛ أصبحنا عادة. عادة لذيذة حقاً، مدمنة قليلاً.",
      },
      future: {
        title: "أوروبا، أفريقيا، آسيا... تبدو جائعاً",
        subtitle: "احزم حقائبك، نحن نذهب عالمياً",
        desc: "عانقنا الإمارات بقوة كافية. حان الوقت لنشر الحب. جواز سفرنا جاهز، وشوايتنا ساخنة.",
        europe: {
          emoji: "🇪🇺",
          name: "أوروبا",
          mission: "لإنقاذ أوروبا من السندويشات المملة.",
          vibe: "تخيل احتساء كرك زعفران مزدوج تحت المطر في لندن، أو أكل برجر دجاج تشيتوس أثناء المشي في باريس. نحن نجلب دفء الصحراء إلى شوارع أوروبا الباردة.",
          cities: "لندن، باريس، برلين، والمزيد",
        },
        africa: {
          emoji: "🌍",
          name: "شمال أفريقيا",
          mission: "العودة إلى جذور النكهة.",
          vibe: "شمال أفريقيا تعرف الشاي. لكنهم لم يجربوا شاينا. نحن نتوسع إلى الأسواق الصاخبة في القاهرة، الدار البيضاء، وما بعدها. نحن نجلب إفطارنا المختلط وكرواسان الشكشوكة الأسطوري.",
          cities: "القاهرة، الدار البيضاء، وما بعدها",
        },
        asia: {
          emoji: "🌏",
          name: "شرق آسيا",
          mission: "تبادل النكهة النهائي.",
          vibe: "شرق آسيا أعطت العالم البوبا. نحن نعطي شرق آسيا سندويش رقائق عماني. تجارة عادلة، أليس كذلك؟ نحن نستهدف المدن عالية الطاقة حيث يلتقي الابتكار بالنكهة.",
          cities: "طوكيو، سيول، شنغهاي، والمزيد",
        },
      },
      partner: {
        title: "هل تحب المال؟ هل تحب البرجر؟ استمر في القراءة.",
        subtitle: "دعونا نكسب المال والذكريات",
        offers: {
          title: "ما نقدمه",
          proven: {
            title: "نموذج مثبت",
            desc: "ارتكبنا الأخطاء حتى لا تضطر أنت.",
          },
          menu: {
            title: "القائمة",
            desc: "الوصول إلى وصفاتنا السرية (نعم، حتى الصلصة السرية).",
          },
          hype: {
            title: "الضجة",
            desc: "علامة تجارية تأتي مع قاعدة معجبين مدمجة.",
          },
          support: {
            title: "الدعم",
            desc: "ندرب موظفيك على صب الشاي من ارتفاع دون إحداث فوضى. (في الغالب).",
          },
        },
        details: {
          title: "التفاصيل",
          investment: {
            title: "الاستثمار الأولي",
            desc: "بدءاً من حوالي 200,000 درهم إماراتي (يختلف حسب الموقع/الكوكب).",
          },
          support: {
            title: "الدعم",
            desc: "تدريب كامل، دعم تشغيلي مستمر، ومساعدة تسويقية.",
          },
          looking: "نبحث عن شركاء مجانين مثلنا. إذا أردت إحضار سحر تي بريك إلى مدينتك (سواء كانت مانشستر أو مراكش)، نريد التحدث.",
        },
        cta: {
          title: "جاهز لكسر الإنترنت (وبعض البيض)؟",
          desc: "تي بريك كافيه: السيطرة على العالم، كوب أصفر في كل مرة.",
          call: "اتصل بالرئيس. نجيب. (عادة خلال ساعات العمل.)",
        },
      },
    },
    // Blog Page
    blog: {
      hero: {
        title: "مدونة تي بريك",
        subtitle: "حيث يلتقي علم الطعام بحب الطعام.",
      },
      latest: "آخر القصص",
      desc: "فلسفة الطعام، العلم، وكل شيء لذيذ",
      readFull: "اقرأ القصة الكاملة",
      follow: "تابع مغامراتنا",
      followDesc: "شاهد ما يحدث في تي بريك",
      newsletter: {
        title: "ابق على اطلاع مع تي بريك",
        desc: "تابعنا على وسائل التواصل الاجتماعي للحصول على إلهام يومي للطعام، محتوى خلف الكواليس، وتحديثات حصرية.",
        instagram: "تابع على إنستغرام",
        tiktok: "تابع على تيك توك",
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: "تحدث إلينا. نحن لا نعض",
        subtitle: "(على عكس برجرنا)",
      },
      customer: {
        title: "خدمة العملاء",
        desc: "هل جعلنا يومك؟ هل نسينا صلصتك الإضافية؟ أخبرنا. نحن مهووسون بالتعليقات.",
      },
      delivery: {
        title: "التوصيل",
        desc: "مريح جداً لمغادرة الأريكة؟ نحن على جميع التطبيقات.",
      },
      social: {
        title: "وسائل التواصل الاجتماعي",
        desc: "تابعنا لصور عطش (للشاي).",
      },
      visit: {
        title: "زرنا شخصياً",
        desc: "لدينا 20+ موقعاً عبر أبوظبي، دبي، عجمان، رأس الخيمة، والفجيرة.",
        button: "اعثر على أقرب موقع لك",
      },
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
      viewMenu: 'عرض القائمة',
      tryNow: 'جربه الآن',
      orderNow: 'اطلب الآن',
      seeMenu: 'شاهد قائمتنا',
      exploreMenu: 'استكشف قائمتنا',
    },
    // Order Modal
    order: {
      title: "اطلب من تي بريك",
      subtitle: "اختر منصة التوصيل المفضلة لديك",
      callTitle: "اتصل للطلب",
      callDesc: "اتصل بالمقهى مباشرة",
      visit: "أو زرنا في أحد مواقعنا الـ 20+",
      findLocation: "ابحث عن موقع",
    },
  },
}

export type TranslationKey = keyof typeof translations.en

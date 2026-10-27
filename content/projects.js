/* =========================================================================
   PROJECTS — every project on the site lives in this one list.

   • The order here is the order on the Work page.
   • featured: true  → also shown on the home page (keep it to about 6).
   • category must be one of the keys in PORTFOLIO.categories below.
   • year: leave "" if you don't want a year shown.
   • Images go in assets/work/<slug>/ — see README.md, "Replacing images".
   • The images now on the site were cut from your portfolio PDF, so they are
     lower resolution than your originals. Swap in full-size exports when you can.
   • Case-study text was drafted from the descriptions in your portfolio PDF.
     Read every project and correct anything that isn't exactly right.

   To add a project: copy the TEMPLATE at the bottom of this file, paste it
   into the list, change the slug (no spaces) and fill in the fields.
   ========================================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.categories = {
  "brand-identity": { en: "Brand Identity", ar: "هوية بصرية" },
  "real-estate": { en: "Real Estate Marketing", ar: "تسويق عقاري" },
  "advertising": { en: "Advertising Campaigns", ar: "حملات إعلانية" },
  "social-media": { en: "Social Media Design", ar: "تصميم سوشيال ميديا" },
  "motion": { en: "Motion & Video Editing", ar: "موشن ومونتاج" },
  "editorial-print": { en: "Editorial & Print", ar: "تصميم تحريري ومطبوعات" },
  "ai-video": { en: "AI Video Creation", ar: "صناعة الفيديو الإعلاني بالـ AI" },
};

PORTFOLIO.projects = [
  /* ---------------------------------------------------- ICON REAL ESTATE */
  {
    slug: "icon-real-estate",
    featured: true,
    category: "real-estate",
    year: "2026",
    title: { en: "ICON Real Estate", ar: "ايكون العقارية" },
    client: { en: "Icon Real Estate, Jeddah", ar: "ايكون العقارية، جدة" },
    summary: {
      en: "Art direction for a Saudi real estate developer: I set up the brand's social media and lead how ICON looks across every channel, from ICON 18 in Al Nuzha to ICON 19 and ICON 21 in Al Safa, Jeddah.",
      ar: "إدارة فنية لمطوّر عقاري سعودي: أسّست السوشيال ميديا للعلامة وأقود شكل ايكون في كل المنصات، من ايكون 18 في حي النزهة إلى ايكون 19 وايكون 21 في حي الصفا بجدة.",
    },
    cover: "assets/work/icon-real-estate/cover.webp",
    coverAlt: { en: "Collage of ICON Real Estate social posts with night-lit towers", ar: "مجموعة من منشورات ايكون العقارية بأبراج مضاءة ليلًا" },
    services: [{ en: "Art direction", ar: "الإدارة الفنية" }, { en: "Social media set-up", ar: "تأسيس السوشيال ميديا" }, { en: "Launch campaigns", ar: "حملات الإطلاق" }, { en: "Brand look across all media", ar: "شكل العلامة في كل الميديا" }],
    palette: [],
    sections: {
      brief: {
        en: "Launch and sustain interest in new residential projects, and give the brand one recognisable look across every post, story and reel.",
        ar: "إطلاق مشاريع سكنية جديدة والمحافظة على الاهتمام بها، ومنح العلامة شكلًا واحدًا يمكن التعرف عليه في كل منشور وستوري وريل.",
      },
      concept: {
        en: "Night-blue skies, warm window light and gold type: the projects are always shown at the moment they look most like a home worth owning.",
        ar: "سماء زرقاء ليلية، وإضاءة نوافذ دافئة، وخط ذهبي: تظهر المشاريع دائمًا في اللحظة التي تبدو فيها بيتًا يستحق الامتلاك.",
      },
      strategy: {
        en: "Content is split into four roles (promotion, education, engagement and brand awareness) so the feed sells projects without feeling like a stream of ads.",
        ar: "قسّمت المحتوى إلى أربعة أدوار (ترويج، وتوعية، وتفاعل، ووعي بالعلامة) حتى يبيع الحساب المشاريع دون أن يبدو سلسلة إعلانات.",
      },
      visual: {
        en: "A fixed grid for the logo, headline and feature icons; Arabic display type set large in gold and white; architecture photographed or generated at dusk.",
        ar: "شبكة ثابتة لمكان الشعار والعنوان وأيقونات المميزات، وخط عربي كبير بالذهبي والأبيض، وصور معمارية وقت الغروب.",
      },
      development: {
        en: "Templates were built for project features, investment messages and Q&A posts, then extended into reels and motion for each launch.",
        ar: "تم بناء قوالب لمميزات المشاريع ورسائل الاستثمار ومنشورات الأسئلة، ثم تطويرها إلى ريلز وموشن لكل إطلاق.",
      },
      audience: {
        en: "Two audiences in Jeddah: families looking for a home in a sought-after district, and investors looking for long-term value. Every post speaks to one of them.",
        ar: "جمهوران في جدة: عائلات تبحث عن بيت في حي مطلوب، ومستثمرون يبحثون عن قيمة طويلة المدى. كل منشور يخاطب واحدًا منهما.",
      },
      role: {
        en: "I work as Senior Graphic Designer and Junior Art Director for Icon Real Estate. I built the brand's social media presence from the ground up, and I own how ICON looks everywhere it appears: social channels, launch campaigns, print, sales presentations and video. Every project, from ICON 18 to ICON 21, goes through one visual system, so the brand is recognised before the logo is read.",
        ar: "أعمل مصممة جرافيك أولى وجونيور آرت دايركتور لايكون العقارية. أسّست حضور العلامة على السوشيال ميديا من الصفر، وأنا المسؤولة عن شكل ايكون في كل مكان تظهر فيه: منصات السوشيال، وحملات الإطلاق، والمطبوعات، وعروض المبيعات، والفيديو. كل مشروع من ايكون 18 إلى ايكون 21 يمر بنظام بصري واحد، حتى تُعرف العلامة قبل أن يُقرأ شعارها.",
      },
    },
    deliverables: [
      { en: "Social media set-up & visual system", ar: "تأسيس السوشيال ميديا ونظامها البصري" },
      { en: "Launch campaigns for ICON 18, 19 & 21", ar: "حملات إطلاق ايكون 18 و19 و21" },
      { en: "Posts, stories & banners", ar: "منشورات وستوريز وبانرات" },
      { en: "Reels & films (see Motion & Editing)", ar: "ريلز وأفلام (في قسم الموشن والمونتاج)" },
    ],
    gallery: [
      { src: "assets/work/icon-real-estate/al-safa-ready.webp", wide: true, caption: { en: "Our projects in Al Safa, ready now", ar: "مشاريعنا في حي الصفا، جاهزة الآن" } },
      { src: "assets/work/icon-real-estate/build-more.webp", caption: { en: "Story: we build more than buildings", ar: "ستوري: نبني أكثر من مجرد مباني" } },
      { src: "assets/work/icon-real-estate/quality-foundation.webp", caption: { en: "Story: quality starts from the foundation", ar: "ستوري: الجودة تبدأ من الأساس" } },
      { src: "assets/work/icon-real-estate/stories-1c.webp", wide: true, caption: { en: "Stories: project launches for ICON 21, ICON 18 and ICON 20", ar: "ستوريز: إطلاق مشاريع ايكون 21 وايكون 18 وايكون 20" } },
      { src: "assets/work/icon-real-estate/stories-2c.webp", wide: true, caption: { en: "Stories: project features, locations and unit types", ar: "ستوريز: مميزات المشاريع ومواقعها ونماذج الوحدات" } },
      { src: "assets/work/icon-real-estate/stories-3b.webp", wide: true, caption: { en: "Stories: engagement, real estate advice and investment messages", ar: "ستوريز: محتوى تفاعلي ونصائح عقارية ورسائل استثمارية" } },
      { src: "assets/work/icon-real-estate/stories-4c.webp", wide: true, caption: { en: "Stories: upcoming projects, construction stages, booking and site visits", ar: "ستوريز: المشاريع القادمة ومراحل البناء والحجز وزيارة المشاريع" } },
      { src: "assets/work/icon-real-estate/stories-5b.webp", wide: true, caption: { en: "Stories: brand story and lifestyle", ar: "ستوريز: قصة العلامة وأسلوب الحياة" } },
    ],
  },

  /* ------------------------------------------------------------ SAFARI */
  {
    slug: "safari",
    featured: true,
    category: "brand-identity",
    year: "2026",
    title: { en: "Safari", ar: "سفاري" },
    client: { en: "Safari Specialty Coffee", ar: "سفاري للقهوة المختصة" },
    summary: {
      en: "A contemporary Saudi specialty coffee brand that celebrates the spirit of the journey and the joy of discovery. Inspired by desert dunes and their warm sunsets, it turns every cup into a stop along the road: a taste truly worth the journey.",
      ar: "سفاري علامة قهوة مختصة سعودية، تحتفي بروح الرحلة ومتعة الاكتشاف. مستوحاة من رمال الصحراء وغروب شمسها الدافئ، تحوّل كل كوب إلى محطة في الطريق، وكل رشفة إلى ذكرى من رحلة تستحق أن تُعاش.",
    },
    cover: "assets/work/safari/cover.webp",
    coverAlt: { en: "A hand holding a navy Safari coffee cup with stickers", ar: "يد تمسك كوب قهوة سفاري الكحلي مع ملصقات" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }],
    palette: ["#122B45", "#D56230", "#F7E7CF", "#B58963"],
    sections: {
      brief: {
        en: "Build an identity for a specialty coffee brand with an Arabic name, that feels local and premium from the cup to the shopping bag.",
        ar: "بناء هوية لعلامة قهوة مختصة باسم عربي، تبدو محلية وفاخرة من الكوب إلى الشنطة.",
      },
      concept: {
        en: "The journey: every cup is the end of a long road from the farm. The tagline “a taste worth the journey” and the dune-and-sun symbol tell the same story.",
        ar: "الرحلة: كل كوب هو نهاية طريق طويل من المزرعة. عبارة «مذاق يستحق الرحلة» ورمز الكثبان والشمس يحكيان نفس القصة.",
      },
      strategy: {
        en: "One simple symbol that can live alone on small items, and a pattern of dunes that turns large surfaces into brand moments.",
        ar: "رمز واحد بسيط يعيش وحده على العناصر الصغيرة، ونقشة كثبان تحوّل المساحات الكبيرة إلى لحظات للعلامة.",
      },
      visual: {
        en: "Deep navy night, burnt-orange sun and sand cream, with a calligraphic Arabic logotype and textured dune patterns.",
        ar: "كحلي ليلي عميق، وشمس برتقالية محروقة، وكريمي رملي، مع شعار عربي بخط مرسوم ونقشات كثبان بملمس.",
      },
      development: {
        en: "The identity was presented as a brand book, then applied to cups, coffee bags, shopping bags, stickers, signage and a drive-through scene.",
        ar: "تم تقديم الهوية في كتيّب للعلامة، ثم تطبيقها على الأكواب وأكياس البن والشنط والملصقات واللوحات ومشهد الطلب من السيارة.",
      },
    },
    deliverables: [
      { en: "Brand book", ar: "كتيّب الهوية" },
      { en: "Logo system & icon", ar: "نظام الشعار والأيقونة" },
      { en: "Colour palette & patterns", ar: "لوحة الألوان والنقشات" },
      { en: "Cups, coffee bags & shopping bags", ar: "الأكواب وأكياس البن والشنط" },
    ],
    gallery: [
      { src: "assets/work/safari/book-1.webp", caption: { en: "Brand book: cover", ar: "كتيّب الهوية: الغلاف" } },
      { src: "assets/work/safari/book-4.webp", caption: { en: "Brand book: the story", ar: "كتيّب الهوية: القصة" } },
      { src: "assets/work/safari/book-2.webp", caption: { en: "Moodboard", ar: "لوحة الإلهام" } },
      { src: "assets/work/safari/book-3.webp", caption: { en: "Cup in hand", ar: "الكوب في اليد" } },
      { src: "assets/work/safari/book-5.webp", caption: { en: "Coffee bags", ar: "أكياس البن" } },
      { src: "assets/work/safari/book-6.webp", caption: { en: "Tagline: a taste worth the journey", ar: "العبارة: مذاق يستحق الرحلة" } },
      { src: "assets/work/safari/drive-through.webp", wide: true, caption: { en: "Drive-through handoff", ar: "التسليم من نافذة السيارة" } },
      { src: "assets/work/safari/pour.webp", caption: { en: "Arabic coffee pour", ar: "صب القهوة" } },
      { src: "assets/work/safari/sticker-showcase.webp", caption: { en: "Sticker showcase", ar: "عرض الملصقات" } },
      { src: "assets/work/safari/bags.webp", wide: true, caption: { en: "Specialty coffee bags on roasted beans", ar: "أكياس القهوة المختصة على حبوب محمّصة" } },
      { src: "assets/work/safari/desert-brew.webp", caption: { en: "Desert brew", ar: "قهوة الصحراء" } },
      { src: "assets/work/safari/sticker.webp", caption: { en: "Icon sticker", ar: "ملصق الأيقونة" } },
      { src: "assets/work/safari/book-7.webp", caption: { en: "Thank you: the storefront", ar: "شكرًا: واجهة المقهى" } },
    ],
  },

  /* ---------------------------------------------------------------- RASHF */
  {
    slug: "rashf",
    featured: true,
    category: "brand-identity",
    year: "2026",
    title: { en: "Rashf", ar: "رشف" },
    client: { en: "Rashf Café", ar: "رشف كافيه" },
    summary: {
      en: "Café branding for a contemporary Arabic coffee shop: a modern, warm take on the coffee experience, from logo to cups, bags, storefront and social media.",
      ar: "هوية بصرية لكافيه عربي معاصر تعكس تجربة القهوة بأسلوب حديث ودافئ، من الشعار إلى الأكواب والأكياس والواجهة والسوشيال ميديا.",
    },
    cover: "assets/work/rashf/cover.webp",
    coverAlt: { en: "Rashf wordmark in white over a dark espresso machine", ar: "شعار رشف باللون الأبيض فوق ماكينة إسبريسو داكنة" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }, { en: "Social media", ar: "السوشيال ميديا" }],
    palette: ["#43230B", "#EA7011", "#E5C49F", "#AC7236"],
    sections: {
      brief: {
        en: "Create an identity for a contemporary Arabic café that balances heritage and simplicity, and carries one experience from the logo to every touchpoint.",
        ar: "تصميم هوية لكافيه عربي معاصر تجمع بين الأصالة والبساطة، وتنقل تجربة واحدة من الشعار إلى كل نقطة تواصل مع العميل.",
      },
      concept: {
        en: "Core idea: a modern coffee experience with an authentic Arabic spirit.",
        ar: "الفكرة الأساسية: تقديم تجربة قهوة عصرية بروح عربية أصيلة.",
      },
      strategy: {
        en: "The project builds a complete experience that starts with the logo and extends to cups, bags and the storefront, to strengthen the brand's presence and build a strong visual connection with customers.",
        ar: "يركز المشروع على خلق تجربة متكاملة تبدأ من الشعار وتمتد إلى التطبيقات المختلفة مثل الأكواب والأكياس والواجهة الخارجية، بهدف تعزيز حضور العلامة وبناء ارتباط بصري قوي مع العميل.",
      },
      visual: {
        en: "Colours drawn from coffee (dark brown) with a lively orange that expresses energy and warmth. The Arabic logotype gives the mark its character, while the Latin type adds simplicity and clarity.",
        ar: "ألوان مستوحاة من القهوة (البني الداكن) مع لمسة برتقالية نابضة بالحياة تعبّر عن الطاقة والدفء. الخط العربي في الشعار يعطي طابعًا فريدًا ومميزًا، بينما يعزز الخط الإنجليزي البساطة والوضوح.",
      },
      development: {
        en: "The system was rolled out to cups in three sizes, coffee bags, paper bags, stickers, a donut box and the storefront, then into a series of social media posts.",
        ar: "تم تطبيق النظام على الأكواب بثلاثة مقاسات، وأكياس البن، والأكياس الورقية، والملصقات، وعلبة الدونات، والواجهة، ثم على سلسلة منشورات للسوشيال ميديا.",
      },
    },
    deliverables: [
      { en: "Bilingual logo", ar: "شعار ثنائي اللغة" },
      { en: "Colour palette", ar: "لوحة الألوان" },
      { en: "Cups, coffee bags & paper bags", ar: "الأكواب وأكياس البن والأكياس الورقية" },
      { en: "Stickers & donut box", ar: "الملصقات وعلبة الدونات" },
      { en: "Storefront", ar: "الواجهة الخارجية" },
      { en: "Social media posts", ar: "منشورات السوشيال ميديا" },
    ],
    gallery: [
      { src: "assets/work/rashf/cover.webp", wide: true, caption: { en: "Rashf wordmark over the espresso bar", ar: "شعار رشف فوق بار الإسبريسو" } },
      { src: "assets/work/rashf/b02.webp", caption: { en: "Takeaway bag, cup and carrier", ar: "كيس القهوة والكوب وحامل الأكواب" } },
      { src: "assets/work/rashf/b04.webp", caption: { en: "Paper bag and stick sachet", ar: "الكيس الورقي وأكياس السكر" } },
      { src: "assets/work/rashf/b12.webp", wide: true, caption: { en: "Coffee bags with the colour palette", ar: "أكياس البن مع لوحة الألوان" } },
      { src: "assets/work/rashf/b06.webp", caption: { en: "Cups in three sizes", ar: "الأكواب بثلاثة مقاسات" } },
      { src: "assets/work/rashf/b07.webp", caption: { en: "Bags in both colourways", ar: "الأكياس بالتركيبتين اللونيتين" } },
      { src: "assets/work/rashf/b09.webp", caption: { en: "Stickers and badges", ar: "الملصقات والشارات" } },
      { src: "assets/work/rashf/b10.webp", caption: { en: "Donut box", ar: "علبة الدونات" } },
      { src: "assets/work/rashf/b11.webp", wide: true, caption: { en: "In the café", ar: "داخل المقهى" } },
      { src: "assets/work/rashf/storefront.webp", caption: { en: "Storefront", ar: "الواجهة الخارجية" } },
      { src: "assets/work/rashf/s1.webp", caption: { en: "Social post: buy one, get one", ar: "منشور سوشيال: اطلب واحد وخذ الثاني" } },
      { src: "assets/work/rashf/s2.webp", caption: { en: "Social post: your day starts with a sip", ar: "منشور سوشيال: من أول رشفة" } },
      { src: "assets/work/rashf/s3.webp", caption: { en: "Social post: offer", ar: "منشور سوشيال: عرض" } },
      { src: "assets/work/rashf/s4.webp", caption: { en: "Social post: delivery", ar: "منشور سوشيال: التوصيل" } },
      { src: "assets/work/rashf/s5.webp", caption: { en: "Social post: before and after coffee", ar: "منشور سوشيال: قبل القهوة وبعد رشف" } },
      { src: "assets/work/rashf/s6.webp", caption: { en: "Social post: what is your mood today?", ar: "منشور سوشيال: إيش مزاجك اليوم؟" } },
    ],
  },

  /* --------------------------------------------------------- CAREDRIVE */
  {
    slug: "caredrive",
    featured: true,
    category: "brand-identity",
    year: "2026",
    title: { en: "CareDrive", ar: "كير درايف" },
    client: { en: "CareDrive", ar: "كير درايف" },
    summary: {
      en: "Logo design for a child transportation platform for families who value safety, trust and peace of mind.",
      ar: "تصميم شعار لمنصة نقل أطفال موجهة للعائلات التي تهتم بالأمان والثقة وراحة البال.",
    },
    cover: "assets/work/caredrive/cover.webp",
    coverAlt: { en: "CareDrive logo on a dark navy presentation slide", ar: "شعار كير درايف على شريحة عرض كحلية" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand presentation", ar: "عرض الهوية" }],
    palette: ["#2D8CFF", "#4CCB6B", "#E08F2C", "#00BFCB"],
    sections: {
      brief: {
        en: "Parents are not looking for transportation, they are looking for reassurance. The identity had to communicate care, protection and trust before movement.",
        ar: "الأهل لا يبحثون عن مواصلات، بل عن الاطمئنان. كان على الهوية أن توصل الرعاية والحماية والثقة قبل الحركة.",
      },
      concept: {
        en: "The symbol combines the initials C and D into one mark: the outer shapes form a protective enclosure and the central circle represents the child.",
        ar: "يجمع الرمز الحرفين C وD في علامة واحدة: الأشكال الخارجية تكوّن حضنًا يحمي، والدائرة في المنتصف تمثل الطفل.",
      },
      visual: {
        en: "Drive Blue, Care Green, Child Orange and Protect Teal; Poppins for headlines and Inter for text.",
        ar: "أزرق القيادة، وأخضر الرعاية، وبرتقالي الطفل، وفيروزي الحماية؛ مع خط Poppins للعناوين وInter للنصوص.",
      },
      development: {
        en: "Built from simple circles and balanced curves, with a defined clear space, then tested on business cards, an app icon, letterhead, ID badges and vehicle branding.",
        ar: "بُني الشعار من دوائر بسيطة ومنحنيات متوازنة مع مساحة أمان محددة، ثم جُرّب على الكروت وأيقونة التطبيق والأوراق الرسمية وبطاقات الموظفين وتغليف السيارات.",
      },
    },
    deliverables: [
      { en: "Logo & construction", ar: "الشعار وبناؤه" },
      { en: "Colour palette & typography", ar: "الألوان والخطوط" },
      { en: "Applications", ar: "التطبيقات" },
      { en: "Logo presentation deck", ar: "عرض تقديمي للشعار" },
    ],
    gallery: [
      { src: "assets/work/caredrive/p02.webp", wide: true, caption: { en: "About the brand", ar: "عن العلامة" } },
      { src: "assets/work/caredrive/p03.webp", wide: true, caption: { en: "The challenge", ar: "التحدي" } },
      { src: "assets/work/caredrive/p04.webp", wide: true, caption: { en: "Logo concept", ar: "فكرة الشعار" } },
      { src: "assets/work/caredrive/p05.webp", wide: true, caption: { en: "Construction", ar: "بناء الشعار" } },
      { src: "assets/work/caredrive/p06.webp", wide: true, caption: { en: "Colour palette", ar: "لوحة الألوان" } },
      { src: "assets/work/caredrive/p07.webp", wide: true, caption: { en: "Typography", ar: "الخطوط" } },
      { src: "assets/work/caredrive/p08.webp", wide: true, caption: { en: "Applications", ar: "التطبيقات" } },
      { src: "assets/work/caredrive/p09.webp", wide: true, caption: { en: "Brand feel", ar: "روح العلامة" } },
      { src: "assets/work/caredrive/p10.webp", wide: true, caption: { en: "Brand in use", ar: "العلامة في الاستخدام" } },
    ],
  },

  /* ---------------------------------------------------------------- ZEINA */
  {
    slug: "zeina",
    featured: true,
    category: "brand-identity",
    year: "",
    title: { en: "Zeina", ar: "زينة" },
    client: { en: "Zeina & More Jewellery", ar: "زينة للمجوهرات" },
    summary: {
      en: "Identity and packaging for a jewellery brand that celebrates femininity, softness and detail.",
      ar: "هوية وتغليف لعلامة مجوهرات تحتفي بالأنوثة والنعومة والتفاصيل.",
    },
    cover: "assets/work/zeina/cover.webp",
    coverAlt: { en: "Model wearing Zeina jewellery in coral light with the Zeina logo", ar: "عارضة ترتدي مجوهرات زينة بإضاءة مرجانية مع شعار زينة" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }],
    palette: ["#DF5F50", "#D87965", "#EBDDD5", "#AD897D"],
    sections: {
      brief: {
        en: "Create a brand that feels delicate and timeless, and that makes every piece feel like a gift from the moment it is unboxed.",
        ar: "بناء علامة تبدو رقيقة وخالدة، وتجعل كل قطعة تبدو هدية من لحظة فتح العلبة.",
      },
      concept: {
        en: "A soft, flower-like symbol drawn from interlocking curves, like links in a chain, paired with a light, open wordmark.",
        ar: "رمز ناعم يشبه الزهرة من منحنيات متشابكة كحلقات السلسلة، مع شعار كتابي خفيف ومفتوح.",
      },
      strategy: {
        en: "In jewellery the packaging is part of the product. The identity is built to look its best on velvet, card and foil.",
        ar: "في المجوهرات، التغليف جزء من المنتج. لذلك بُنيت الهوية لتظهر بأفضل شكل على المخمل والكرتون والفويل.",
      },
      visual: {
        en: "Coral, blush and pearl tones with a warm taupe; generous spacing; gold foil on cream for the premium line.",
        ar: "درجات المرجاني والوردي واللؤلؤي مع بيج دافئ، ومساحات واسعة، وفويل ذهبي على كريمي للخط الفاخر.",
      },
      development: {
        en: "The mark was refined for small sizes such as tags and ring boxes, then applied across boxes, cards and swing tags.",
        ar: "تم ضبط الرمز ليظهر بوضوح في المقاسات الصغيرة كالبطاقات وعلب الخواتم، ثم تطبيقه على العلب والكروت وبطاقات التعليق.",
      },
    },
    deliverables: [
      { en: "Logo & symbol", ar: "الشعار والرمز" },
      { en: "Colour palette", ar: "لوحة الألوان" },
      { en: "Jewellery boxes, cards & tags", ar: "علب المجوهرات والكروت والبطاقات" },
    ],
    gallery: [
      { src: "assets/work/zeina/logos.webp", caption: { en: "Logo on coral and pearl", ar: "الشعار على المرجاني واللؤلؤي" } },
      { src: "assets/work/zeina/packaging.webp", caption: { en: "Packaging applications", ar: "تطبيقات التغليف" } },
      { src: "assets/work/zeina/board.webp", wide: true, caption: { en: "Identity overview board", ar: "لوحة عرض الهوية كاملة" } },
    ],
  },

  /* ------------------------------------------------------------ VISORY */
  {
    slug: "visory",
    featured: false,
    category: "brand-identity",
    year: "2026",
    title: { en: "Visory", ar: "فيزوري" },
    client: { en: "Visory", ar: "فيزوري" },
    summary: {
      en: "A brand guideline for Visory, a visual production brand: “Where Vision Becomes Story”.",
      ar: "دليل هوية بصرية لعلامة فيزوري للإنتاج المرئي: «حيث تتحول الرؤية إلى قصة».",
    },
    cover: "assets/work/visory/cover.webp",
    coverAlt: { en: "Cover of the Visory brand guideline", ar: "غلاف دليل الهوية لفيزوري" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand guidelines", ar: "دليل الهوية" }],
    palette: ["#FF6B35", "#E53946", "#6B7280", "#000000"],
    sections: {
      brief: {
        en: "Give a visual production brand a clear, energetic identity and a guideline that keeps it consistent across website, social media and print.",
        ar: "منح علامة إنتاج مرئي هوية واضحة ونشيطة، ودليلًا يحافظ على اتساقها في الموقع والسوشيال ميديا والمطبوعات.",
      },
      concept: {
        en: "The mark combines a V with a play button, so the name and the act of telling stories through video are one shape.",
        ar: "يجمع الشعار حرف V مع زر التشغيل، فيصبح الاسم وفكرة رواية القصص بالفيديو شكلًا واحدًا.",
      },
      visual: {
        en: "Primary orange for the logo and key elements, dark orange for highlights, gray for secondary text, on white and black. Montserrat for Latin and Noto Kufi Arabic for Arabic.",
        ar: "برتقالي أساسي للشعار والعناصر الرئيسية، وبرتقالي داكن للتمييز، ورمادي للنصوص الثانوية، على الأبيض والأسود. خط Montserrat للاتيني وNoto Kufi Arabic للعربي.",
      },
      development: {
        en: "The guideline covers logo and symbol construction, usage, colour, typography and brand applications on equipment, backdrops and merchandise.",
        ar: "يغطي الدليل بناء الشعار والرمز، وطرق الاستخدام، والألوان، والخطوط، وتطبيقات الهوية على المعدات والخلفيات والمنتجات.",
      },
    },
    deliverables: [
      { en: "Logo & symbol", ar: "الشعار والرمز" },
      { en: "Brand guideline", ar: "دليل الهوية" },
      { en: "Brand applications", ar: "تطبيقات الهوية" },
    ],
    gallery: [
      { src: "assets/work/visory/p02.webp", wide: true, caption: { en: "Logo construction", ar: "بناء الشعار" } },
      { src: "assets/work/visory/p03.webp", wide: true, caption: { en: "Symbol construction", ar: "بناء الرمز" } },
      { src: "assets/work/visory/p04.webp", wide: true, caption: { en: "Logo usage", ar: "استخدام الشعار" } },
      { src: "assets/work/visory/p05.webp", wide: true, caption: { en: "Colour palette", ar: "لوحة الألوان" } },
      { src: "assets/work/visory/p06.webp", wide: true, caption: { en: "Typography", ar: "الخطوط" } },
      { src: "assets/work/visory/p07.webp", wide: true, caption: { en: "Arabic typography", ar: "الخط العربي" } },
      { src: "assets/work/visory/p08.webp", wide: true, caption: { en: "Brand applications", ar: "تطبيقات الهوية" } },
      { src: "assets/work/visory/p09.webp", wide: true, caption: { en: "Studio backdrop", ar: "خلفية الاستوديو" } },
      { src: "assets/work/visory/p10.webp", wide: true, caption: { en: "Backpack", ar: "الحقيبة" } },
      { src: "assets/work/visory/p11.webp", wide: true, caption: { en: "Camera", ar: "الكاميرا" } },
    ],
  },

  /* ------------------------------------------------------------- CHILLPOP */
  {
    slug: "chillpop",
    featured: true,
    category: "brand-identity",
    year: "2026",
    title: { en: "ChillPop", ar: "تشيل بوب" },
    client: { en: "ChillPop Ice Cream", ar: "تشيل بوب آيس كريم" },
    summary: {
      en: "A playful, colourful ice cream brand that brings together refreshing flavours and cheerful colours, turning every bite into a small moment of joy to share with the people you love.",
      ar: "تشيل بوب علامة آيس كريم مرحة وملوّنة، تجمع بين النكهات المنعشة والألوان المبهجة، لتحوّل كل لقمة إلى لحظة فرح صغيرة تشاركها مع من تحب.",
    },
    cover: "assets/work/chillpop/cover.webp",
    coverAlt: { en: "ChillPop logo in pink and purple with the line “Refresh with every bite”", ar: "شعار تشيل بوب بالوردي والبنفسجي مع عبارة «انتعش بكل لقمة»" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }, { en: "Social media showcase", ar: "عرض السوشيال ميديا" }],
    palette: ["#FC508C", "#8F48B8", "#FE8D52", "#FDF0E2"],
    sections: {
      brief: {
        en: "Create an ice cream brand that feels fun and generous from the first glance, and works in Arabic and English across cups, tubs, merchandise and the shop itself.",
        ar: "صناعة علامة آيس كريم تحسّها مرحة وكريمة من أول نظرة، وتعمل بالعربي والإنجليزي على الأكواب والعلب والمنتجات والمحل نفسه.",
      },
      concept: {
        en: "“Refresh with every bite.” A bubbly, glossy wordmark that looks like it is melting with colour, surrounded by drops and splashes of flavour.",
        ar: "«انتعش بكل لقمة». شعار منتفخ ولامع كأنه يذوب بالألوان، تحيط به قطرات ورشّات من النكهات.",
      },
      visual: {
        en: "Candy pink and grape purple on a soft cream base, with mint, orange and yellow drops; organic splash shapes that wrap around every surface.",
        ar: "وردي حلوى وبنفسجي عنبي على خلفية كريمية ناعمة، مع قطرات نعناعي وبرتقالي وأصفر، وأشكال رشّات عضوية تلتف على كل سطح.",
      },
      development: {
        en: "The logo was drawn in Illustrator, then applied to cups, a family tub, takeaway cups, stickers, an apron and the storefront, and presented as a 9-slide Instagram showcase built in Photoshop.",
        ar: "تم رسم الشعار على إليستريتور، ثم تطبيقه على الأكواب والعلبة العائلية وأكواب السفري والملصقات والمريلة وواجهة المحل، وعرضه في 9 شرائح على انستجرام مصممة على فوتوشوب.",
      },
    },
    deliverables: [
      { en: "Logo & tagline", ar: "الشعار والعبارة" },
      { en: "Colour palette & splash patterns", ar: "لوحة الألوان ونقوش الرشّات" },
      { en: "Cups, tub & takeaway packaging", ar: "الأكواب والعلبة وتغليف السفري" },
      { en: "Stickers, apron & storefront", ar: "الملصقات والمريلة وواجهة المحل" },
      { en: "9-slide Instagram showcase", ar: "عرض انستجرام من 9 شرائح" },
    ],
    gallery: [
      { src: "assets/work/chillpop/story.webp", caption: { en: "The brand story", ar: "قصة العلامة" } },
      { src: "assets/work/chillpop/overview.webp", caption: { en: "Identity overview", ar: "نظرة عامة على الهوية" } },
      { src: "assets/work/chillpop/cup.webp", caption: { en: "Ice cream cup", ar: "كوب الآيس كريم" } },
      { src: "assets/work/chillpop/tub.webp", caption: { en: "Family tub", ar: "العلبة العائلية" } },
      { src: "assets/work/chillpop/stickers.webp", caption: { en: "Sticker set", ar: "مجموعة الملصقات" } },
      { src: "assets/work/chillpop/apron.webp", caption: { en: "Staff apron", ar: "مريلة الفريق" } },
      { src: "assets/work/chillpop/cups.webp", caption: { en: "Takeaway cup, cone sleeve and napkin", ar: "كوب السفري وغلاف الكون والمناديل" } },
      { src: "assets/work/chillpop/thanks.webp", caption: { en: "Storefront", ar: "واجهة المحل" } },
    ],
  },

  /* ------------------------------------------------------------ iCAUR V27 */
  {
    slug: "icaur-v27",
    featured: false,
    category: "social-media",
    year: "2026",
    title: { en: "iCAUR V27", ar: "إيكار V27" },
    client: { en: "iCAUR V27", ar: "إيكار V27" },
    summary: {
      en: "A cinematic social media series for the iCAUR V27 SUV: six posts that read as one campaign, from the desert to the city.",
      ar: "سلسلة سوشيال ميديا سينمائية لسيارة إيكار V27: ستة منشورات تُقرأ كحملة واحدة، من الصحراء إلى المدينة.",
    },
    cover: "assets/work/icaur-v27/cover.webp",
    coverAlt: { en: "iCAUR V27 in the desert at sunset with the line “the adventure starts here”", ar: "إيكار V27 في الصحراء وقت الغروب مع عبارة «المغامرة تبدأ هنا»" },
    services: [{ en: "Social media design", ar: "تصميم السوشيال" }, { en: "Campaign art direction", ar: "التوجيه الفني للحملة" }, { en: "AI-assisted imagery", ar: "صور بمساعدة الذكاء الاصطناعي" }],
    palette: [],
    sections: {
      brief: {
        en: "Present the V27 as a capable, premium SUV for both the city and the desert, in a set of posts that feel like one campaign.",
        ar: "تقديم V27 كسيارة SUV قوية وفاخرة للمدينة والصحراء، في مجموعة منشورات تبدو حملة واحدة.",
      },
      concept: {
        en: "Each post is a scene: open desert, mountain road, canyon at sunset, a desert highway and Riyadh at night. Together they tell one journey with short Arabic lines like “the adventure starts here”.",
        ar: "كل منشور مشهد: صحراء مفتوحة، وطريق جبلي، ووادٍ وقت الغروب، وطريق صحراوي، والرياض ليلًا. معًا تحكي رحلة واحدة بعبارات عربية قصيرة مثل «المغامرة تبدأ هنا».",
      },
      strategy: {
        en: "The key specs (AWD, 449 hp, 995 km range) and the “book a test drive” button sit in the same place on every post, so the series reads as a system and each fact is easy to find.",
        ar: "المواصفات الأساسية (دفع رباعي، 449 حصانًا، مدى 995 كم) وزر «احجز تجربة قيادتك» في نفس المكان في كل منشور، فتُقرأ السلسلة كنظام ويسهل إيجاد كل معلومة.",
      },
      visual: {
        en: "Deep blue gradients, warm sand tones matching the car colour, and a cinematic colour grade across every scene.",
        ar: "تدرجات أزرق داكن، ودرجات رملية دافئة تتناغم مع لون السيارة، وتلوين سينمائي موحّد في كل المشاهد.",
      },
      development: {
        en: "Designed in Photoshop with AI-assisted imagery, keeping the car itself accurate in every scene.",
        ar: "صُممت على فوتوشوب بصور بمساعدة الذكاء الاصطناعي، مع الحفاظ على دقة شكل السيارة في كل مشهد.",
      },
    },
    deliverables: [{ en: "Social post series (4:5)", ar: "سلسلة منشورات (4:5)" }],
    gallery: [
      { src: "assets/work/icaur-v27/overview.webp", wide: true, caption: { en: "The full series", ar: "السلسلة كاملة" } },
      { src: "assets/work/icaur-v27/adventure.webp", caption: { en: "The adventure starts here", ar: "المغامرة تبدأ هنا" } },
      { src: "assets/work/icaur-v27/no-limits.webp", caption: { en: "Go without limits", ar: "انطلق بلا حدود" } },
      { src: "assets/work/icaur-v27/presence.webp", caption: { en: "A presence you will not forget", ar: "حضور لا يُنسى" } },
      { src: "assets/work/icaur-v27/range.webp", caption: { en: "Further than you expect: 995 km", ar: "أبعد مما تتوقع: 995 كم" } },
      { src: "assets/work/icaur-v27/power.webp", caption: { en: "Power that arrives before you", ar: "قوة تسبق حضورك" } },
      { src: "assets/work/icaur-v27/price.webp", caption: { en: "Launch price post", ar: "منشور سعر الإطلاق" } },
    ],
  },

  /* -------------------------------------------------------- DALLAH SUKKAR */
  {
    slug: "dallah-sukkar",
    featured: false,
    category: "social-media",
    year: "",
    title: { en: "Dallah Sukkar", ar: "دلة سكر" },
    client: { en: "Dallah Sukkar", ar: "دلة سكر" },
    summary: {
      en: "A warm social media campaign for a Saudi dessert brand, pairing appetising imagery with playful Arabic headlines.",
      ar: "حملة سوشيال ميديا دافئة لعلامة حلويات سعودية، تجمع صورًا شهية مع عناوين عربية مرحة.",
    },
    cover: "assets/work/dallah-sukkar/cover-2.webp",
    coverAlt: { en: "Hands serving a plate of dates and cream with Arabic coffee cups", ar: "يدان تقدّمان طبق حلى بالتمر والقشطة مع فناجين القهوة" },
    services: [{ en: "Social media design", ar: "تصميم السوشيال" }, { en: "Campaign visuals", ar: "تصاميم الحملة" }, { en: "Visual storytelling", ar: "السرد البصري" }],
    palette: [],
    sections: {
      brief: {
        en: "Make the brand's desserts look as good on a phone screen as they taste, and connect the brand with Saudi hospitality.",
        ar: "إظهار حلويات العلامة على شاشة الجوال بنفس جودة طعمها، وربط العلامة بالضيافة السعودية.",
      },
      concept: {
        en: "Short, conversational Arabic lines (“a sweet served with taste”, “one bite changes your mood”) set against honey, dates, Arabic coffee and the dallah.",
        ar: "عبارات عربية قصيرة بلغة الحديث مثل «حلى يُقدَّم بذوق» و«في لقمة تغيّر مودك»، مع العسل والتمر والقهوة العربية والدلة.",
      },
      strategy: {
        en: "Mix product hero shots with people enjoying the dessert and sharing it at gatherings, so the feed sells both the product and the moment around it.",
        ar: "المزج بين صور المنتج وصور أشخاص يستمتعون بالحلى ويتشاركونه في اللمّة، ليبيع الحساب المنتج واللحظة التي حوله.",
      },
      visual: {
        en: "Warm beige light, glossy syrup, calligraphic headline type and a small, consistent call-to-action pill on every post.",
        ar: "إضاءة بيج دافئة، وقطر لامع، وعناوين بخط مستوحى من الخط العربي، وزر طلب صغير ثابت في كل منشور.",
      },
    },
    deliverables: [{ en: "9 social media posts (4:5)", ar: "9 منشورات سوشيال ميديا (4:5)" }, { en: "Headline copy layout", ar: "إخراج العناوين" }],
    gallery: [
      { src: "assets/work/dallah-sukkar/post-1.webp", caption: { en: "A sweet served with taste", ar: "حلى يُقدَّم بذوق" } },
      { src: "assets/work/dallah-sukkar/post-2.webp", caption: { en: "One bite changes your mood", ar: "في لقمة تغيّر مودك" } },
      { src: "assets/work/dallah-sukkar/post-3.webp", caption: { en: "From the first look you know it's right", ar: "من أوّل نظرة تعرف إنها بتضبط" } },
      { src: "assets/work/dallah-sukkar/post-4.webp", caption: { en: "Gone fast, because it's that good", ar: "ينتهي بسرعة من لذّته" } },
      { src: "assets/work/dallah-sukkar/post-5.webp", caption: { en: "Balanced sugar, guaranteed taste", ar: "سُكر موزون وطعم مضمون" } },
      { src: "assets/work/dallah-sukkar/post-6.webp", caption: { en: "Our story starts with a bite and ends with a reorder", ar: "حكايتنا تبدأ بلقمة وتنتهي بإعادة الطلب" } },
      { src: "assets/work/dallah-sukkar/post-7.webp", caption: { en: "Sweets served the way you like", ar: "حلى تنقدّم على مزاج" } },
      { src: "assets/work/dallah-sukkar/post-8.webp", caption: { en: "Sweets made for gatherings", ar: "حلى يليق باللمة" } },
      { src: "assets/work/dallah-sukkar/post-9.webp", caption: { en: "The break tells it all", ar: "الكسرة تحكي كل شيء" } },
    ],
  },

  /* --------------------------------------------------- AI · NATIONAL DAY */
  {
    slug: "ai-national-day",
    featured: false,
    category: "ai-video",
    year: "2026",
    title: { en: "AI Creator · Saudi National Day Film", ar: "AI Creator · فيلم اليوم الوطني" },
    client: { en: "Icon Real Estate", ar: "ايكون العقارية" },
    summary: {
      en: "A 46-second Saudi National Day ad film for Icon Real Estate, created entirely with AI on Higgsfield: from a written concept and storyboard to generated scenes, animation and the final edit.",
      ar: "فيلم إعلاني لليوم الوطني السعودي مدته 46 ثانية لايكون العقارية، مصنوع بالكامل بالذكاء الاصطناعي على Higgsfield: من الفكرة المكتوبة والستوري بورد إلى توليد المشاهد وتحريكها والمونتاج النهائي.",
    },
    cover: "assets/work/ai-national-day/scene-12.webp",
    coverAlt: { en: "A boy in a green Sadu cloak with the Saudi emblem, facing the sunset", ar: "طفل بعباءة سدو خضراء عليها شعار المملكة يواجه الغروب" },
    services: [{ en: "AI video creation (Higgsfield AI)", ar: "صناعة الفيديو بالذكاء الاصطناعي (Higgsfield AI)" }, { en: "Concept & storyboard", ar: "الفكرة والستوري بورد" }, { en: "Video editing", ar: "المونتاج" }],
    palette: ["#0F5B3A", "#E9C58A", "#B5652F", "#F3EADF"],
    sections: {
      brief: {
        en: "Create a National Day film for Icon Real Estate that feels like a celebration of Saudi heritage rather than an advert, and produce it without a film crew, locations or actors.",
        ar: "صناعة فيلم لليوم الوطني لايكون العقارية يحسّه المشاهد احتفالًا بالتراث السعودي وليس إعلانًا، وإنتاجه بدون فريق تصوير أو مواقع أو ممثلين.",
      },
      concept: {
        en: "From roots to skyline. Under the National Day theme “Izzna Bi Tabe’na”, the film follows the values Saudis grow up with (coffee and hospitality, Sadu weaving, the Arabian horse) as they pass from an elder to a boy, then ends with the same boy looking over a modern city: the land ICON builds on today.",
        ar: "من الجذور إلى الأفق. تحت شعار اليوم الوطني «عزنا بطبعنا»، يتتبع الفيلم القيم التي يكبر عليها السعوديون (القهوة والضيافة، ونسج السدو، والخيل العربية) وهي تنتقل من الكبير إلى الطفل، ثم ينتهي بنفس الطفل يطل على مدينة حديثة: الأرض التي تبني عليها ايكون اليوم.",
      },
      strategy: {
        en: "A developer’s message on National Day is about home and belonging. The brand stays light (a small logo and a final card) so people share the film as a greeting, and ICON is remembered as part of the occasion.",
        ar: "رسالة المطوّر العقاري في اليوم الوطني هي البيت والانتماء. لذلك بقيت العلامة خفيفة (شعار صغير وكادر ختامي) حتى يشارك الناس الفيلم كتهنئة، وتُذكر ايكون كجزء من المناسبة.",
      },
      visual: {
        en: "Golden-hour light, mud-brick architecture and palm trees; green-and-white Sadu patterns that echo the flag; the same wardrobe and characters held consistent from scene to scene.",
        ar: "إضاءة الساعة الذهبية، وعمارة طينية ونخيل، ونقوش سدو بالأخضر والأبيض تتناغم مع العلم، مع الحفاظ على نفس الملابس والشخصيات من مشهد لمشهد.",
      },
      development: {
        en: "Script and shot list, then a 14-scene storyboard. Production ran on Higgsfield AI: each scene was generated as a still with fixed style and character references, then brought to life with image-to-video, cinematic camera presets (push-ins, pans, tracking shots) and motion control to keep the people and the horse moving naturally. The clips were then edited in Premiere Pro with pacing, music and brand overlays for 9:16.",
        ar: "سكريبت وقائمة لقطات، ثم ستوري بورد من 14 مشهدًا. الإنتاج تم على منصة Higgsfield AI: كل مشهد اتولّد كصورة بمرجع ثابت للأسلوب والشخصيات، ثم اتحرّك بتحويل الصورة إلى فيديو، مع حركات كاميرا سينمائية جاهزة (اقتراب، وتحريك أفقي، وتتبّع) وأداة التحكم في الحركة عشان تبان حركة الأشخاص والخيل طبيعية. وبعدها المونتاج على بريمير مع الإيقاع والموسيقى وعناصر العلامة بمقاس 9:16.",
      },
      role: {
        en: "I wrote the concept, built the storyboard, generated and directed every shot on Higgsfield AI, and edited the final film.",
        ar: "كتبت الفكرة، وبنيت الستوري بورد، وولّدت وأخرجت كل لقطة على منصة Higgsfield AI، وعملت المونتاج النهائي للفيلم.",
      },
    },
    deliverables: [
      { en: "46-second National Day film (9:16)", ar: "فيلم اليوم الوطني 46 ثانية (9:16)" },
      { en: "14-scene storyboard", ar: "ستوري بورد من 14 مشهدًا" },
      { en: "Branded end card", ar: "كادر ختامي بهوية العلامة" },
    ],
    gallery: [
      { type: "video", src: "assets/work/ai-national-day/film.mp4", poster: "assets/work/ai-national-day/film-poster.webp", caption: { en: "The final film (46 s, 9:16)", ar: "الفيلم النهائي (46 ثانية، 9:16)" } },
      { src: "assets/work/ai-national-day/storyboard-1.webp", wide: true, caption: { en: "Storyboard 1/2 (heritage): 01 Flag over the old mud-brick town at sunrise · 02 Getting ready: adjusting the shemagh · 03 Roasting coffee beans · 04 Pouring Saudi coffee from the dallah · 05 Weaving Sadu in green and white · 06 Walking the old lanes in a Sadu cloak · 07 Greeting the Arabian horse", ar: "الستوري بورد 1/2 (التراث): 01 العلم فوق البلدة الطينية مع الشروق · 02 الاستعداد: تعديل الشماغ · 03 تحميص حبوب القهوة · 04 صبّ القهوة السعودية من الدلة · 05 نسج السدو بالأخضر والأبيض · 06 المشي في الأزقة القديمة بعباءة السدو · 07 تحية الخيل العربية" } },
      { src: "assets/work/ai-national-day/storyboard-2.webp", wide: true, caption: { en: "Storyboard 2/2 (the next generation): 08 Close-up: trust between rider and horse · 09 The horse runs free across the desert · 10 The cloak passes to the next generation · 11 A boy walks through the heritage town · 12 The national emblem on his back · 13 Today: the same boy overlooks a modern skyline · 14 End card: “Dam Izzak Ya Watan · Izzna Bi Tabe’na” with the ICON logo", ar: "الستوري بورد 2/2 (الجيل الجديد): 08 لقطة قريبة: الثقة بين الفارس والخيل · 09 الخيل تنطلق في الصحراء · 10 العباءة تنتقل للجيل الجديد · 11 طفل يمشي في البلدة التراثية · 12 شعار المملكة على ظهره · 13 اليوم: نفس الطفل يطل على مدينة حديثة · 14 الختام: «دام عزك يا وطن · عزنا بطبعنا» مع شعار ايكون" } },
    ],
  },

  /* ------------------------------------------------------ MOTION & EDITING */
  {
    slug: "motion-editing",
    featured: false,
    category: "motion",
    year: "2026",
    title: { en: "Motion & Editing", ar: "موشن ومونتاج" },
    client: { en: "Icon Real Estate", ar: "ايكون العقارية" },
    summary: {
      en: "All my motion and video work in one place: reels, montages and ads for Icon Real Estate, from ICON 18 in Al Nuzha to ICON 19 and new launches.",
      ar: "كل أعمال الموشن والمونتاج في مكان واحد: ريلز ومونتاج وإعلانات لايكون العقارية، من ايكون 18 في حي النزهة إلى ايكون 19 والإطلاقات الجديدة.",
    },
    cover: "assets/work/icon18-reels/reel-poster.webp",
    coverAlt: { en: "Frame from the ICON 18 reel", ar: "لقطة من ريل ايكون 18" },
    services: [{ en: "Video editing", ar: "مونتاج" }, { en: "Motion graphics", ar: "موشن جرافيك" }],
    palette: [],
    sections: {
      brief: { en: "Short vertical videos that show buyers the projects, the unit types and the brand, and keep ICON's channels moving between launches.", ar: "فيديوهات طولية قصيرة تعرض المشاريع ونماذج الوحدات والعلامة للمشترين، وتحافظ على نشاط منصات ايكون بين الإطلاقات." },
      concept: { en: "From render to reality: real footage of the buildings cut together with animated plans, sizes and features in the brand's navy and gold, plus short ads and occasion reels.", ar: "من التصميم إلى الواقع: لقطات حقيقية للمباني مع مخططات ومقاسات ومميزات متحركة بألوان العلامة الكحلي والذهبي، بالإضافة لإعلانات قصيرة وريلز للمناسبات." },
      development: { en: "Edited in Premiere Pro and animated in After Effects, delivered in 9:16 for reels and stories.", ar: "تم المونتاج على بريمير والتحريك على أفتر إفكتس، بمقاس 9:16 للريلز والستوري." },
    },
    deliverables: [{ en: "Project montages & reels", ar: "مونتاج وريلز المشاريع" }, { en: "Ads", ar: "إعلانات" }, { en: "Occasion reels", ar: "ريلز المناسبات" }],
    gallery: [
      { type: "video", src: "assets/work/icon18-reels/montage.mp4", poster: "assets/work/icon18-reels/montage-poster.webp", caption: { en: "ICON 18 montage: from render to reality", ar: "مونتاج ايكون 18: إلى الواقع" } },
      { type: "video", src: "assets/work/icon18-reels/reel.mp4", poster: "assets/work/icon18-reels/reel-poster.webp", caption: { en: "ICON 18 project reel", ar: "ريل مشروع ايكون 18" } },
      { type: "video", src: "assets/work/icon18-reels/seven-reasons.mp4", poster: "assets/work/icon18-reels/seven-reasons-poster.webp", caption: { en: "7 reasons to choose ICON 18", ar: "7 أسباب تخليك تختار ايكون 18" } },
      { type: "video", src: "assets/work/icon-films/ad-30s.mp4", poster: "assets/work/icon-films/ad-30s-poster.webp", caption: { en: "30-second ad", ar: "إعلان 30 ثانية" } },
      { type: "video", src: "assets/work/icon-films/icon19.mp4", poster: "assets/work/icon-films/icon19-poster.webp", caption: { en: "ICON 19 unit types", ar: "نماذج وحدات ايكون 19" } },
      { type: "video", src: "assets/work/icon-films/every-home.mp4", poster: "assets/work/icon-films/every-home-poster.webp", caption: { en: "Not every home is a choice", ar: "مو كل بيت اختيار" } },
      { type: "video", src: "assets/work/icon-films/national-day.mp4", poster: "assets/work/icon-films/national-day-poster.webp", caption: { en: "Saudi National Day", ar: "اليوم الوطني السعودي" } },
      { type: "video", src: "assets/work/icon-films/new-project.mp4", poster: "assets/work/icon-films/new-project-poster.webp", caption: { en: "New project teaser", ar: "مشروع جديد في انتظارك" } },
    ],
  },

  /* --------------------------------------------------------------- WASABI */
  {
    slug: "wasabi",
    featured: false,
    category: "editorial-print",
    year: "",
    title: { en: "Wasabi", ar: "وسابي" },
    client: { en: "Wasabi Sushi Restaurant", ar: "مطعم وسابي للسوشي" },
    summary: {
      en: "Identity and menu design for a sushi restaurant that brings authentic Japanese flavours into a modern dining experience.",
      ar: "هوية وتصميم منيو لمطعم سوشي يقدّم النكهات اليابانية الأصيلة في تجربة عصرية.",
    },
    cover: "assets/work/wasabi/w3.webp",
    coverAlt: { en: "Wasabi restaurant storefront at night", ar: "واجهة مطعم وسابي ليلًا" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Menu design", ar: "تصميم المنيو" }],
    palette: ["#161C18", "#809632", "#CC1F25", "#E6DED1"],
    sections: {
      brief: {
        en: "Give a sushi restaurant a bold identity that works in Arabic and English, from the menu to takeaway packaging.",
        ar: "منح مطعم سوشي هوية جريئة تعمل بالعربي والإنجليزي، من المنيو إلى تغليف الطلبات الخارجية.",
      },
      concept: {
        en: "Chopsticks lifting a red sun: one symbol that says Japan, food and freshness at once.",
        ar: "عيدان أكل ترفع شمسًا حمراء: رمز واحد يقول اليابان والطعام والانتعاش في نفس الوقت.",
      },
      strategy: {
        en: "A restaurant identity is read in the hand. The menu is treated as the main brand object, with clear sections and generous spacing.",
        ar: "هوية المطعم تُقرأ في اليد، لذلك عوملت المنيو كأهم عنصر في العلامة، بأقسام واضحة ومساحات مريحة.",
      },
      visual: {
        en: "Deep green, wasabi green and a single red dot; a brush-style Latin wordmark with DIN Next Arabic for the Arabic name.",
        ar: "أخضر داكن وأخضر الوسابي ونقطة حمراء واحدة، وشعار لاتيني بأسلوب الفرشاة مع DIN Next Arabic للاسم العربي.",
      },
      development: {
        en: "Applied to the menu, business cards, chopstick sleeves, cups, bags and takeaway boxes, with a wave pattern for backgrounds.",
        ar: "تم التطبيق على المنيو، والكروت، وأغلفة العيدان، والأكواب، والأكياس، وعلب الطلبات، مع نقشة أمواج للخلفيات.",
      },
    },
    deliverables: [
      { en: "Logo & bilingual lock-up", ar: "الشعار والتوقيع ثنائي اللغة" },
      { en: "Menu design", ar: "تصميم المنيو" },
      { en: "Stationery & packaging", ar: "المطبوعات والتغليف" },
    ],
    gallery: [
      { src: "assets/work/wasabi/logos.webp", caption: { en: "Logo variations", ar: "تنويعات الشعار" } },
      { src: "assets/work/wasabi/applications.webp", caption: { en: "Menu, packaging and stationery", ar: "المنيو والتغليف والمطبوعات" } },
      { src: "assets/work/wasabi/w1.webp", caption: { en: "Identity applications", ar: "تطبيقات الهوية" } },
      { src: "assets/work/wasabi/w3.webp", caption: { en: "Restaurant storefront", ar: "واجهة المطعم" } },
      { src: "assets/work/wasabi/w2.webp", caption: { en: "Instagram on mobile", ar: "حساب انستجرام على الجوال" } },
      { src: "assets/work/wasabi/w4.webp", caption: { en: "Takeaway packaging and stationery", ar: "تغليف الطلبات والمطبوعات" } },
      { src: "assets/work/wasabi/w5.webp", caption: { en: "Table setting", ar: "تجهيز الطاولة" } },
      { src: "assets/work/wasabi/board.webp", wide: true, caption: { en: "Identity overview board", ar: "لوحة عرض الهوية كاملة" } },
    ],
  },

  /* ---------------------------------------------------------- 925 CLUB */
  {
    slug: "club-925",
    featured: false,
    category: "brand-identity",
    year: "2026",
    title: { en: "925 Club", ar: "925 كلوب" },
    client: { en: "925 Club", ar: "925 كلوب" },
    summary: {
      en: "A sporty identity for 925 Club, applied to apparel, bags, bottles and gym content under the line “Together, we thrive from 9 to 5”.",
      ar: "هوية رياضية لـ 925 كلوب مطبقة على الملابس والشنط والزجاجات ومحتوى الجيم، تحت عبارة «Together, we thrive from 9 to 5».",
    },
    cover: "assets/work/club-925/cover.webp",
    coverAlt: { en: "925 Club logo and applications on sportswear", ar: "شعار 925 كلوب وتطبيقاته على الملابس الرياضية" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Merchandise", ar: "المنتجات الترويجية" }],
    palette: ["#0C56B3", "#B0CC3E", "#183E7A", "#FFFFFF"],
    sections: {
      concept: {
        en: "The numbers 9, 2 and 5 are interlocked into one mark, with a hand-written “Club” for a friendly, human touch.",
        ar: "الأرقام 9 و2 و5 متداخلة في علامة واحدة، مع كلمة «Club» بخط يدوي لإحساس ودود وإنساني.",
      },
      visual: {
        en: "Royal blue and lime green with a blue-to-green gradient: energetic, sporty and easy to recognise on fabric.",
        ar: "أزرق ملكي وأخضر ليموني مع تدرج من الأزرق للأخضر: طاقة وروح رياضية وسهولة تمييز على القماش.",
      },
      development: {
        en: "Applied to t-shirts, jackets, drawstring and duffel bags, bottles, cups, caps and gym imagery.",
        ar: "تم التطبيق على التيشيرتات والجاكيتات والشنط والزجاجات والأكواب والكابات وصور الجيم.",
      },
    },
    deliverables: [
      { en: "Logo", ar: "الشعار" },
      { en: "Apparel & merchandise", ar: "الملابس والمنتجات" },
      { en: "Social visuals", ar: "تصاميم السوشيال" },
    ],
    gallery: [
      { src: "assets/work/club-925/p2.webp", caption: { en: "Logo", ar: "الشعار" } },
      { src: "assets/work/club-925/p3.webp", caption: { en: "Cups and cap", ar: "الأكواب والكاب" } },
      { src: "assets/work/club-925/p4.webp", caption: { en: "Cups and t-shirt", ar: "الأكواب والتيشيرت" } },
      { src: "assets/work/club-925/p5.webp", caption: { en: "In the gym", ar: "في الجيم" } },
    ],
  },

  /* ------------------------------------------------------------- PIATTINO */
  {
    slug: "piattino",
    featured: false,
    category: "brand-identity",
    year: "",
    title: { en: "Piattino Café", ar: "بياتينو كافيه" },
    client: { en: "Piattino Café", ar: "بياتينو كافيه" },
    summary: {
      en: "A friendly character-led identity and packaging for a café serving hot and cold drinks and cold food.",
      ar: "هوية ودودة قائمة على شخصية مرسومة، مع تغليف لمقهى يقدّم المشروبات الساخنة والباردة والأطعمة الباردة.",
    },
    cover: "assets/work/piattino/cover.webp",
    coverAlt: { en: "Piattino Café illustrated logo in a warm café interior", ar: "شعار بياتينو كافيه المرسوم داخل مقهى دافئ" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }],
    palette: ["#E2701A", "#162021", "#ADC2A3", "#592913"],
    sections: {
      brief: {
        en: "Create a warm, approachable café brand that customers recognise instantly on cups and bags.",
        ar: "بناء علامة مقهى دافئة وقريبة من الناس، يتعرف عليها العميل فورًا على الأكواب والأكياس.",
      },
      concept: {
        en: "Piattino is Italian for the small plate a coffee cup sits on. The mascot, a smiling waiter, offers that cup to you.",
        ar: "بياتينو كلمة إيطالية تعني الصحن الصغير الذي يوضع عليه فنجان القهوة. والشخصية، نادل مبتسم، يقدّم لك هذا الفنجان.",
      },
      strategy: {
        en: "A character gives a small café a personality that is easy to remember and easy to extend across packaging and social.",
        ar: "الشخصية تمنح المقهى الصغير طابعًا سهل التذكر وسهل التوسع على التغليف والسوشيال.",
      },
      visual: {
        en: "Orange brush ring, teal and mint, chocolate brown, and a hand-lettered script wordmark; a playful swirl pattern for packaging.",
        ar: "حلقة فرشاة برتقالية، وتيل ونعناعي، وبني شوكولاتة، وشعار بخط يدوي، مع نقشة دوامات مرحة للتغليف.",
      },
      development: {
        en: "The logo was tested on dark, cream and mint grounds, then applied to cups, bags and carriers.",
        ar: "تم اختبار الشعار على خلفيات داكنة وكريمية ونعناعية، ثم تطبيقه على الأكواب والأكياس وحاملات الأكواب.",
      },
    },
    deliverables: [{ en: "Character logo & variations", ar: "الشعار بالشخصية وتنويعاته" }, { en: "Packaging pattern", ar: "نقشة التغليف" }, { en: "Cups, bags & carriers", ar: "الأكواب والأكياس والحاملات" }],
    gallery: [
      { src: "assets/work/piattino/logos.webp", caption: { en: "Logo variations", ar: "تنويعات الشعار" } },
      { src: "assets/work/piattino/packaging.webp", caption: { en: "Packaging applications", ar: "تطبيقات التغليف" } },
      { src: "assets/work/piattino/board.webp", wide: true, caption: { en: "Identity overview board", ar: "لوحة عرض الهوية كاملة" } },
    ],
  },

  /* ---------------------------------------------------- PRODUCT CAMPAIGNS */
  {
    slug: "product-campaigns",
    featured: false,
    category: "advertising",
    year: "",
    title: { en: "Product Campaigns", ar: "حملات المنتجات" },
    client: { en: "Consumer electronics retail", ar: "تجزئة إلكترونيات" },
    summary: {
      en: "Commercial social designs for headphones, laptops and smartphones, built around one benefit and one clear call to action each.",
      ar: "تصاميم تجارية لسماعات ولابتوبات وهواتف ذكية، كل تصميم مبني على ميزة واحدة وزر واحد واضح.",
    },
    cover: "assets/work/product-campaigns/cover.webp",
    coverAlt: { en: "Three ice-blue product ads for headphones, laptop and foldable phone", ar: "ثلاثة إعلانات بالأزرق الثلجي لسماعة ولابتوب وهاتف قابل للطي" },
    services: [{ en: "Visual design", ar: "التصميم البصري" }, { en: "Campaign design", ar: "تصميم الحملات" }, { en: "Art direction", ar: "الإدارة الفنية" }],
    palette: [],
    sections: {
      brief: { en: "Sell three product categories in one consistent look, with features that read at a glance.", ar: "بيع ثلاث فئات منتجات بشكل موحّد، مع مميزات تُقرأ من نظرة." },
      concept: { en: "Products float in a cool, liquid light, with short Arabic headlines: \"sound that surrounds you\", \"power wherever you are\".", ar: "المنتجات تطفو في ضوء سائل بارد، مع عناوين عربية قصيرة مثل «صوت يغمرك بالكامل» و«قوة الأداء أينما كنت»." },
      strategy: { en: "One benefit per headline, four feature icons, one button: a structure customers can scan in two seconds.", ar: "ميزة واحدة لكل عنوان، وأربع أيقونات، وزر واحد: بنية يقرؤها العميل في ثانيتين." },
      visual: { en: "Ice blue and royal blue, clean product renders, and a shared icon set across all three products.", ar: "أزرق ثلجي وأزرق ملكي، وصور منتجات نظيفة، ومجموعة أيقونات موحّدة للمنتجات الثلاثة." },
      development: { en: "Designed as a modular template so new products can be dropped in without redesigning the layout.", ar: "صُممت كقالب مرن تُضاف إليه منتجات جديدة دون إعادة تصميم." },
    },
    deliverables: [{ en: "3 product key visuals", ar: "3 تصاميم رئيسية للمنتجات" }, { en: "Feature icon set", ar: "مجموعة أيقونات المميزات" }],
    gallery: [{ src: "assets/work/product-campaigns/board.webp", wide: true, caption: { en: "Campaign overview", ar: "عرض الحملة" } }],
  },

  /* --------------------------------------------------------- INFOGRAPHICS */
  {
    slug: "infographics",
    featured: false,
    category: "editorial-print",
    year: "",
    title: { en: "Government Infographics", ar: "إنفوجرافيك حكومي" },
    client: { en: "Information design", ar: "تصميم معلومات" },
    summary: {
      en: "Infographics on digital transformation, the entertainment sector, NEOM and the Saudi Green Initiative that turn dense figures into a clear visual story.",
      ar: "إنفوجرافيك عن التحول الرقمي وقطاع الترفيه ونيوم والسعودية الخضراء، يحوّل الأرقام الكثيفة إلى قصة بصرية واضحة.",
    },
    cover: "assets/work/infographics/cover.webp",
    coverAlt: { en: "Two dark infographic posters with green headlines and city skylines", ar: "ملصقا إنفوجرافيك داكنان بعناوين خضراء وأفق مدن" },
    services: [{ en: "Information design", ar: "تصميم المعلومات" }, { en: "Data visualisation", ar: "عرض البيانات" }, { en: "Icon design", ar: "تصميم الأيقونات" }],
    palette: [],
    sections: {
      brief: { en: "Explain public-sector achievements and figures in a format people will actually read and share.", ar: "شرح إنجازات وأرقام القطاع الحكومي بشكل يقرؤه الناس ويشاركونه فعلًا." },
      concept: { en: "Each poster leads with one big idea, then breaks the numbers into short, scannable blocks above a skyline that sets the scene.", ar: "كل ملصق يبدأ بفكرة كبيرة واحدة، ثم يقسّم الأرقام إلى كتل قصيرة سهلة المسح فوق أفق مدينة يرسم السياق." },
      strategy: { en: "Clear hierarchy first: headline, key numbers, impact. Decoration comes last and never competes with the data.", ar: "التسلسل الواضح أولًا: العنوان، ثم الأرقام الرئيسية، ثم الأثر. والزخرفة في الآخر ولا تنافس البيانات أبدًا." },
      visual: { en: "Dark navy backgrounds, signal green and violet accents, large tabular numbers and simple line icons.", ar: "خلفيات كحلية داكنة، ولمسات أخضر وبنفسجي، وأرقام كبيرة، وأيقونات خطية بسيطة." },
      development: { en: "Content was structured into sections before layout, then each figure was checked against its source text.", ar: "تم تنظيم المحتوى في أقسام قبل الإخراج، ثم مراجعة كل رقم مع نصه الأصلي." },
    },
    deliverables: [{ en: "4 long-form infographics", ar: "4 إنفوجرافيك طويل" }, { en: "Custom icon set", ar: "مجموعة أيقونات خاصة" }],
    gallery: [
      { src: "assets/work/infographics/digital.webp", caption: { en: "Digital transformation", ar: "التحول الرقمي" } },
      { src: "assets/work/infographics/entertainment.webp", caption: { en: "Entertainment sector", ar: "قطاع الترفيه" } },
      { src: "assets/work/infographics/neom.webp", caption: { en: "NEOM", ar: "نيوم" } },
      { src: "assets/work/infographics/green-saudi.webp", caption: { en: "Saudi Green Initiative", ar: "السعودية الخضراء" } },
    ],
  },

  /* ------------------------------------------------------ LOGO COLLECTION */
  {
    slug: "logo-collection",
    featured: false,
    category: "brand-identity",
    year: "",
    title: { en: "Logo Collection", ar: "مجموعة شعارات" },
    client: { en: "Various clients", ar: "عملاء متعددون" },
    summary: {
      en: "A selection of logos for different industries: hospitality, beauty, mobility, marketing and more.",
      ar: "مختارات من شعارات لقطاعات مختلفة: الضيافة، والتجميل، والتنقل، والتسويق، وغيرها.",
    },
    cover: "assets/work/logo-collection/cover.webp",
    coverAlt: { en: "Grid of twelve logos in cream on black", ar: "شبكة من اثني عشر شعارًا بالكريمي على الأسود" },
    services: [{ en: "Logo design", ar: "تصميم الشعارات" }],
    palette: [],
    sections: {
      brief: { en: "Each logo answers a different brief, from a hotel to a dog shelter.", ar: "كل شعار يجيب على بريف مختلف، من فندق إلى ملجأ للكلاب." },
      concept: { en: "One idea per mark: a symbol or letterform that captures the brand's purpose and still works at small sizes.", ar: "فكرة واحدة لكل شعار: رمز أو حرف يلخّص هدف العلامة ويعمل في المقاسات الصغيرة." },
      strategy: { en: "", ar: "" },
      visual: { en: "Shown here in one colour on black, so the drawing of each mark speaks for itself.", ar: "معروضة هنا بلون واحد على الأسود، لتتكلم رسمة كل شعار عن نفسها." },
      development: { en: "", ar: "" },
    },
    deliverables: [{ en: "12 logos", ar: "12 شعارًا" }],
    gallery: [],
  },
];

/* =========================================================================
   TEMPLATE — copy everything between the dashed lines into the list above.
   -------------------------------------------------------------------------
  {
    slug: "project-name",            // used in the link: #/work/project-name
    featured: false,
    category: "brand-identity",      // a key from PORTFOLIO.categories
    year: "2026",
    title: { en: "Project Name", ar: "اسم المشروع" },
    client: { en: "Client name", ar: "اسم العميل" },
    summary: { en: "One or two sentences.", ar: "جملة أو جملتان." },
    cover: "assets/work/project-name/cover.webp",
    coverAlt: { en: "What the image shows", ar: "وصف الصورة" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }],
    palette: ["#000000", "#FFFFFF"],  // optional brand colours
    sections: {
      brief: { en: "", ar: "" },       // empty sections are hidden
      concept: { en: "", ar: "" },
      strategy: { en: "", ar: "" },
      visual: { en: "", ar: "" },
      development: { en: "", ar: "" },
    },
    deliverables: [{ en: "Deliverable", ar: "مخرج" }],
    gallery: [
      { src: "assets/work/project-name/01.webp", caption: { en: "", ar: "" } },
      { src: "assets/work/project-name/02.webp", wide: true, caption: { en: "", ar: "" } },
      { type: "video", src: "assets/work/project-name/film.mp4", poster: "assets/work/project-name/cover.webp", caption: { en: "", ar: "" } },
    ],
  },
   -------------------------------------------------------------------------
   ========================================================================= */

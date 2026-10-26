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
        en: "I work as Art Director for Icon Real Estate. I built the brand's social media presence from the ground up, and I own how ICON looks everywhere it appears: social channels, launch campaigns, print, sales presentations and video. Every project, from ICON 18 to ICON 21, goes through one visual system, so the brand is recognised before the logo is read.",
        ar: "أعمل آرت دايركتور لايكون العقارية. أسّست حضور العلامة على السوشيال ميديا من الصفر، وأنا المسؤولة عن شكل ايكون في كل مكان تظهر فيه: منصات السوشيال، وحملات الإطلاق، والمطبوعات، وعروض المبيعات، والفيديو. كل مشروع من ايكون 18 إلى ايكون 21 يمر بنظام بصري واحد، حتى تُعرف العلامة قبل أن يُقرأ شعارها.",
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

  /* -------------------------------------------------------- DALLAH SUKKAR */
  {
    slug: "dallah-sukkar",
    featured: true,
    category: "social-media",
    year: "",
    title: { en: "Dallah Sukkar", ar: "دلة سكر" },
    client: { en: "Dallah Sukkar", ar: "دلة سكر" },
    summary: {
      en: "A warm social media campaign for a Saudi dessert brand, pairing appetising imagery with playful Arabic headlines.",
      ar: "حملة سوشيال ميديا دافئة لعلامة حلويات سعودية، تجمع صورًا شهية مع عناوين عربية مرحة.",
    },
    cover: "assets/work/dallah-sukkar/p2.webp",
    coverAlt: { en: "Dallah Sukkar post: a man enjoying a pastry", ar: "منشور دلة سكر: رجل يستمتع بقطعة حلى" },
    services: [{ en: "Campaign visuals", ar: "تصاميم الحملة" }, { en: "Content design", ar: "تصميم المحتوى" }, { en: "Visual storytelling", ar: "السرد البصري" }],
    palette: [],
    sections: {
      brief: {
        en: "Make the brand's desserts look as good on a phone screen as they taste, and connect the brand with Saudi hospitality.",
        ar: "إظهار حلويات العلامة على شاشة الجوال بنفس جودة طعمها، وربط العلامة بالضيافة السعودية.",
      },
      concept: {
        en: "Short, conversational Arabic lines (\"a sweet served with taste\", \"one bite changes your mood\") set against honey, dates and the dallah.",
        ar: "عبارات عربية قصيرة بلغة الحديث مثل «حلى يُقدَّم بذوق» و«في لقمة تغيّر مودك»، مع العسل والتمر والدلة.",
      },
      strategy: {
        en: "Mix product hero shots with people enjoying the dessert, so the feed sells both the product and the moment around it.",
        ar: "المزج بين صور المنتج وصور أشخاص يستمتعون بالحلى، ليبيع الحساب المنتج واللحظة التي حوله.",
      },
      visual: {
        en: "Warm beige light, glossy syrup, calligraphic headline type and a small, consistent call-to-action pill on every post.",
        ar: "إضاءة بيج دافئة، وقطر لامع، وعناوين بخط مستوحى من الخط العربي، وزر طلب صغير ثابت في كل منشور.",
      },
      development: {
        en: "A set of nine posts was produced as one campaign grid, each with its own line and call to action.",
        ar: "تم إنتاج تسعة منشورات كجريد واحد للحملة، لكل منشور عبارته وزر الطلب الخاص به.",
      },
    },
    deliverables: [{ en: "9 campaign posts", ar: "9 منشورات للحملة" }, { en: "Headline copy layout", ar: "إخراج العناوين" }],
    gallery: [
      { src: "assets/work/dallah-sukkar/board.webp", wide: true, caption: { en: "Campaign overview", ar: "عرض الحملة" } },
      { src: "assets/work/dallah-sukkar/p1.webp", caption: { en: "Post 1", ar: "منشور 1" } },
      { src: "assets/work/dallah-sukkar/p2.webp", caption: { en: "Post 2", ar: "منشور 2" } },
      { src: "assets/work/dallah-sukkar/p3.webp", caption: { en: "Post 3", ar: "منشور 3" } },
      { src: "assets/work/dallah-sukkar/p4.webp", caption: { en: "Post 4", ar: "منشور 4" } },
      { src: "assets/work/dallah-sukkar/p5.webp", caption: { en: "Post 5", ar: "منشور 5" } },
      { src: "assets/work/dallah-sukkar/p6.webp", caption: { en: "Post 6", ar: "منشور 6" } },
      { src: "assets/work/dallah-sukkar/p7.webp", caption: { en: "Post 7", ar: "منشور 7" } },
      { src: "assets/work/dallah-sukkar/p8.webp", caption: { en: "Post 8", ar: "منشور 8" } },
      { src: "assets/work/dallah-sukkar/p9.webp", caption: { en: "Post 9", ar: "منشور 9" } },
    ],
  },

  /* --------------------------------------------------------- ICON 18 REELS */
  {
    slug: "icon18-reels",
    featured: false,
    category: "motion",
    year: "2026",
    title: { en: "ICON 18 Reels & Montage", ar: "ريلز ومونتاج ايكون 18" },
    client: { en: "Icon Real Estate", ar: "ايكون العقارية" },
    summary: {
      en: "Edited reels for ICON 18 in Al Nuzha, Jeddah: real footage of the building cut together with animated unit plans, room sizes and features.",
      ar: "ريلز مونتاج لمشروع ايكون 18 في حي النزهة بجدة: لقطات حقيقية للمبنى مع مخططات الوحدات ومقاساتها ومميزاتها بشكل متحرك.",
    },
    cover: "assets/work/icon18-reels/reel-poster.webp",
    coverAlt: { en: "Frame from the ICON 18 reel", ar: "لقطة من ريل ايكون 18" },
    services: [{ en: "Video editing", ar: "مونتاج" }, { en: "Motion graphics", ar: "موشن جرافيك" }],
    palette: [],
    sections: {
      brief: { en: "Show buyers the finished ICON 18 building and its six unit types in short, vertical videos.", ar: "عرض مبنى ايكون 18 المكتمل ونماذج وحداته الستة للمشترين في فيديوهات قصيرة طولية." },
      concept: { en: "From render to reality: the real building and interiors, with plans, sizes and features layered on top in the brand's navy and gold.", ar: "من التصميم إلى الواقع: المبنى والتشطيبات الحقيقية، مع المخططات والمقاسات والمميزات فوقها بألوان العلامة الكحلي والذهبي." },
      development: { en: "Footage was cut in Premiere Pro and the graphics animated in After Effects, delivered in 9:16 for reels and stories.", ar: "تم المونتاج على بريمير والتحريك على أفتر إفكتس، بمقاس 9:16 للريلز والستوري." },
    },
    deliverables: [{ en: "Project montage", ar: "مونتاج المشروع" }, { en: "Project reel", ar: "ريل المشروع" }, { en: "7 reasons reel", ar: "ريل 7 أسباب" }],
    gallery: [
      { type: "video", src: "assets/work/icon18-reels/montage.mp4", poster: "assets/work/icon18-reels/montage-poster.webp", caption: { en: "ICON 18 montage: from render to reality", ar: "مونتاج ايكون 18: إلى الواقع" } },
      { type: "video", src: "assets/work/icon18-reels/reel.mp4", poster: "assets/work/icon18-reels/reel-poster.webp", caption: { en: "ICON 18 project reel", ar: "ريل مشروع ايكون 18" } },
      { type: "video", src: "assets/work/icon18-reels/seven-reasons.mp4", poster: "assets/work/icon18-reels/seven-reasons-poster.webp", caption: { en: "7 reasons to choose ICON 18", ar: "7 أسباب تخليك تختار ايكون 18" } },
    ],
  },

  /* -------------------------------------------------------- ICON FILMS */
  {
    slug: "icon-films",
    featured: false,
    category: "motion",
    year: "2026",
    title: { en: "ICON Real Estate Films", ar: "أفلام ايكون العقارية" },
    client: { en: "Icon Real Estate", ar: "ايكون العقارية" },
    summary: {
      en: "Motion pieces for Icon Real Estate: a 30-second ad that answers a buyer’s questions, and an animated walkthrough of the ICON 19 unit types.",
      ar: "أعمال موشن لايكون العقارية: إعلان 30 ثانية يجاوب على أسئلة المشتري، وعرض متحرك لنماذج وحدات ايكون 19.",
    },
    cover: "assets/work/icon-films/ad-30s-poster.webp",
    coverAlt: { en: "Frame from the ICON ad with icons for location and costs", ar: "لقطة من إعلان ايكون بأيقونات الموقع والتكاليف" },
    services: [{ en: "Motion graphics", ar: "موشن جرافيك" }, { en: "Editing", ar: "مونتاج" }],
    palette: [],
    sections: {
      concept: {
        en: "“Want to buy property?” The ad walks through what buyers worry about (location, price, total costs) and lands on ICON as the answer.",
        ar: "«تبي تشتري عقار؟» الإعلان يمر على ما يقلق المشتري (الموقع، السعر، التكاليف كلها) وينتهي بايكون كإجابة.",
      },
      development: {
        en: "Designed and animated in After Effects in 9:16 for reels and stories. The ICON 19 film presents unit plans, areas and prices one by one.",
        ar: "تم التصميم والتحريك على أفتر إفكتس بمقاس 9:16 للريلز والستوري. فيلم ايكون 19 يعرض مخططات الوحدات ومساحاتها وأسعارها واحدة تلو الأخرى.",
      },
    },
    deliverables: [
      { en: "30-second ad", ar: "إعلان 30 ثانية" },
      { en: "ICON 19 unit film", ar: "فيلم وحدات ايكون 19" },
    ],
    gallery: [
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

  /* -------------------------------------------------------- ZIONHEALTH */
  {
    slug: "zionhealth",
    featured: false,
    category: "social-media",
    year: "2025",
    title: { en: "ZionHealth", ar: "زايون هيلث" },
    client: { en: "ZionHealth", ar: "زايون هيلث" },
    summary: {
      en: "Arabic social media posts for a natural skincare and haircare brand, each built around one product and its benefits.",
      ar: "منشورات سوشيال ميديا عربية لعلامة عناية طبيعية بالبشرة والشعر، كل منشور مبني على منتج واحد وفوائده.",
    },
    cover: "assets/work/zionhealth/cover.webp",
    coverAlt: { en: "ZionHealth face scrub post with sunflowers and coconut", ar: "منشور مقشر الوجه من زايون هيلث مع دوار الشمس وجوز الهند" },
    services: [{ en: "Social media design", ar: "تصميم السوشيال" }, { en: "Product posts", ar: "منشورات المنتجات" }],
    palette: [],
    sections: {
      concept: {
        en: "Every post pairs the product with the natural ingredient it comes from, so the benefit is understood before the text is read.",
        ar: "كل منشور يضع المنتج بجانب المكوّن الطبيعي المأخوذ منه، فتُفهم الفائدة قبل قراءة النص.",
      },
      visual: {
        en: "Fresh greens, white space and ingredient photography, with benefit icons and short Arabic headlines.",
        ar: "أخضر منعش ومساحات بيضاء وتصوير للمكونات، مع أيقونات للفوائد وعناوين عربية قصيرة.",
      },
    },
    deliverables: [
      { en: "Product posts", ar: "منشورات المنتجات" },
      { en: "Carousel", ar: "كاروسيل" },
    ],
    gallery: [
      { src: "assets/work/zionhealth/hair-mask.webp", caption: { en: "Hair mask", ar: "ماسك الشعر" } },
      { src: "assets/work/zionhealth/moisturiser.webp", caption: { en: "Deodorant", ar: "مزيل العرق" } },
      { src: "assets/work/zionhealth/sunscreen.webp", caption: { en: "Sunscreen", ar: "واقي الشمس" } },
      { src: "assets/work/zionhealth/carousel.webp", caption: { en: "Carousel on Instagram", ar: "كاروسيل على انستجرام" } },
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

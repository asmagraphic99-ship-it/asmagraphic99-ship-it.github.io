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
  /* ---------------------------------------------------------------- RASHF */
  {
    slug: "rashf",
    featured: true,
    category: "brand-identity",
    year: "",
    title: { en: "Rashf", ar: "رشف" },
    client: { en: "Rashf Specialty Coffee", ar: "رشف للقهوة المختصة" },
    summary: {
      en: "A bilingual identity and packaging system for a specialty coffee brand, built on craft, warmth and an earthy palette.",
      ar: "هوية ثنائية اللغة ونظام تغليف لعلامة قهوة مختصة، مبني على الحرفة والدفء ولوحة ألوان ترابية.",
    },
    cover: "assets/work/rashf/cover.webp",
    coverAlt: { en: "Rashf coffee bag, cups and mug on a dark café counter", ar: "كيس قهوة رشف وأكواب على طاولة مقهى داكنة" },
    services: [{ en: "Logo design", ar: "تصميم الشعار" }, { en: "Brand identity", ar: "الهوية البصرية" }, { en: "Packaging", ar: "التغليف" }],
    palette: ["#973E21", "#D0B799", "#2B1C15", "#6C5543"],
    sections: {
      brief: {
        en: "Rashf needed an identity that could stand on a specialty-coffee shelf next to international brands while still reading as a local, Arabic-first name.",
        ar: "احتاجت رشف هوية تقف على رف القهوة المختصة بجانب العلامات العالمية، وتبقى في نفس الوقت اسمًا محليًا عربيًا أولًا.",
      },
      concept: {
        en: "The name means a slow, deliberate sip. The wordmark pairs a calm Arabic logotype with spaced Latin capitals, so both scripts carry the same quiet confidence.",
        ar: "الاسم يعني الرشفة الهادئة المتأنية. الشعار يجمع شعارًا عربيًا هادئًا مع حروف لاتينية كبيرة متباعدة، بحيث تحمل اللغتان نفس الثقة الهادئة.",
      },
      strategy: {
        en: "Specialty coffee is bought on trust in craft. The system keeps the logo minimal and lets material, texture and colour do the talking about quality.",
        ar: "القهوة المختصة تُشترى بالثقة في الحرفة. لذلك يبقى الشعار بسيطًا، وتتكلم الخامات والملمس والألوان عن الجودة.",
      },
      visual: {
        en: "Roasted rust, crema beige and espresso brown, with a contour-line texture drawn from coffee origins and topographic maps.",
        ar: "صدئي محمّص وبيج الكريما وبني الإسبريسو، مع ملمس خطوط كنتورية مستوحى من مناطق زراعة البن والخرائط الطبوغرافية.",
      },
      development: {
        en: "The logotype was tested across three colourways, then applied to bags, cups, stamps, labels and shipping boxes to check it holds at every size.",
        ar: "تم اختبار الشعار في ثلاث تركيبات لونية، ثم تطبيقه على الأكياس والأكواب والأختام والملصقات وصناديق الشحن للتأكد من وضوحه في كل المقاسات.",
      },
    },
    deliverables: [
      { en: "Primary logo & colour variations", ar: "الشعار الأساسي وتركيباته اللونية" },
      { en: "Colour palette & texture", ar: "لوحة الألوان والملمس" },
      { en: "Coffee bags, cups & sleeves", ar: "أكياس القهوة والأكواب" },
      { en: "Labels, stamp & shipping box", ar: "الملصقات والختم وصندوق الشحن" },
    ],
    gallery: [
      { src: "assets/work/rashf/logos.webp", caption: { en: "Logo in three colourways", ar: "الشعار في ثلاث تركيبات لونية" } },
      { src: "assets/work/rashf/packaging.webp", caption: { en: "Packaging applications", ar: "تطبيقات التغليف" } },
      { src: "assets/work/rashf/board.webp", wide: true, caption: { en: "Identity overview board", ar: "لوحة عرض الهوية كاملة" } },
    ],
  },

  /* ---------------------------------------------------- ICON REAL ESTATE */
  {
    slug: "icon-real-estate",
    featured: true,
    category: "real-estate",
    year: "2026",
    title: { en: "ICON Real Estate", ar: "ايكون العقارية" },
    client: { en: "Icon Real Estate, Jeddah", ar: "ايكون العقارية، جدة" },
    summary: {
      en: "A social media visual system and project-launch campaigns for a Saudi developer, including ICON 19 and ICON 21 in Al Safa, Jeddah.",
      ar: "نظام بصري للسوشيال ميديا وحملات إطلاق مشاريع لمطوّر عقاري سعودي، منها ايكون 19 وايكون 21 في حي الصفا بجدة.",
    },
    cover: "assets/work/icon-real-estate/cover.webp",
    coverAlt: { en: "Collage of ICON Real Estate social posts with night-lit towers", ar: "مجموعة من منشورات ايكون العقارية بأبراج مضاءة ليلًا" },
    services: [{ en: "Visual direction", ar: "الاتجاه البصري" }, { en: "Social campaigns", ar: "حملات السوشيال" }, { en: "Posts, stories & reels", ar: "منشورات وستوريز وريلز" }],
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
    },
    deliverables: [
      { en: "Social media visual system", ar: "النظام البصري للسوشيال ميديا" },
      { en: "Launch campaigns for ICON 19 & ICON 21", ar: "حملات إطلاق ايكون 19 وايكون 21" },
      { en: "Feed posts, stories & carousels", ar: "منشورات وستوريز وكاروسيل" },
      { en: "Reels & motion highlights", ar: "ريلز ومقاطع موشن" },
    ],
    gallery: [
      { src: "assets/work/icon-real-estate/system.webp", wide: true, caption: { en: "Social media system: promotional, educational and engagement posts", ar: "النظام البصري: منشورات ترويجية وتوعوية وتفاعلية" } },
      { src: "assets/work/icon-reels/cover.webp", wide: true, caption: { en: "Reels for the ICON 21 launch", ar: "ريلز إطلاق ايكون 21" } },
    ],
  },

  /* ---------------------------------------------------- MINISTRY OF SPORT */
  {
    slug: "ministry-of-sport",
    featured: true,
    category: "advertising",
    year: "2024",
    title: { en: "Tennis Campaign", ar: "حملة التنس" },
    client: { en: "Ministry of Sport", ar: "وزارة الرياضة" },
    summary: {
      en: "An awareness campaign promoting tennis and active lifestyles across Instagram, X and Facebook, under the line #همة_للقمة.",
      ar: "حملة توعوية للترويج للتنس ونمط الحياة النشط على انستجرام وإكس وفيسبوك، تحت شعار #همة_للقمة.",
    },
    cover: "assets/work/ministry-of-sport/cover.webp",
    coverAlt: { en: "Three campaign posters of a tennis player mid-shot on a clay court", ar: "ثلاثة ملصقات لحملة التنس للاعب على ملعب ترابي" },
    services: [{ en: "Campaign visuals", ar: "تصاميم الحملة" }, { en: "Art direction", ar: "الإدارة الفنية" }, { en: "Copy layout", ar: "إخراج النصوص" }],
    palette: [],
    sections: {
      brief: {
        en: "Encourage young people to take up tennis, and keep every visual aligned with the Ministry of Sport identity.",
        ar: "تشجيع الشباب على ممارسة التنس، مع الحفاظ على توافق كل التصاميم مع هوية وزارة الرياضة.",
      },
      concept: {
        en: "Each poster freezes one decisive moment of a rally and pairs it with a short line about ambition: every leap is a bigger step toward achievement.",
        ar: "كل ملصق يجمّد لحظة حاسمة من الضربة ويقرنها بعبارة قصيرة عن الطموح: كل قفزة خطوة أكبر للإنجاز.",
      },
      strategy: {
        en: "Awareness campaigns live in a fast feed, so each post carries one idea, one athlete and one line that reads in a second.",
        ar: "حملات التوعية تعيش في محتوى سريع، لذلك يحمل كل منشور فكرة واحدة ورياضيًا واحدًا وعبارة تُقرأ في ثانية.",
      },
      visual: {
        en: "Overcast skies, red clay and white kit; headlines in the Ministry green; dust and motion kept in the frame to carry energy.",
        ar: "سماء غائمة وتراب أحمر وزي أبيض، وعناوين بأخضر الوزارة، مع الإبقاء على الغبار والحركة داخل الكادر لنقل الطاقة.",
      },
      development: {
        en: "Three key visuals were developed as a set so they work alone and together in a grid, with a shared hashtag lock-up.",
        ar: "تم تطوير ثلاثة تصاميم رئيسية كمجموعة تعمل منفردة ومجتمعة في الجريد، مع توقيع موحّد للهاشتاق.",
      },
    },
    deliverables: [
      { en: "3 key campaign visuals", ar: "3 تصاميم رئيسية للحملة" },
      { en: "Formats for Instagram, X & Facebook", ar: "مقاسات انستجرام وإكس وفيسبوك" },
    ],
    gallery: [
      { src: "assets/work/ministry-of-sport/board.webp", wide: true, caption: { en: "Campaign overview", ar: "عرض الحملة" } },
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
    cover: "assets/work/dallah-sukkar/cover.webp",
    coverAlt: { en: "Grid of six Dallah Sukkar posts with desserts and honey", ar: "ستة منشورات لدلة سكر بالحلويات والعسل" },
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
        en: "A set of six posts was produced as one campaign grid, each with its own line and call to action.",
        ar: "تم إنتاج ستة منشورات كجريد واحد للحملة، لكل منشور عبارته وزر الطلب الخاص به.",
      },
    },
    deliverables: [{ en: "6 campaign posts", ar: "6 منشورات للحملة" }, { en: "Headline copy layout", ar: "إخراج العناوين" }],
    gallery: [{ src: "assets/work/dallah-sukkar/board.webp", wide: true, caption: { en: "Campaign overview", ar: "عرض الحملة" } }],
  },

  /* ------------------------------------------------------------ iCAUR V27 */
  {
    slug: "icaur-v27",
    featured: true,
    category: "motion",
    year: "2026",
    title: { en: "iCAUR V27", ar: "إيكار V27" },
    client: { en: "iCAUR V27", ar: "إيكار V27" },
    summary: {
      en: "A cinematic social series for the iCAUR V27 SUV, presented as a motion showcase of the full set.",
      ar: "سلسلة سوشيال سينمائية لسيارة إيكار V27، معروضة كفيديو موشن يجمع المجموعة كاملة.",
    },
    cover: "assets/work/icaur-v27/cover.webp",
    coverAlt: { en: "Frame from the iCAUR V27 showcase video with three post cards", ar: "لقطة من فيديو عرض إيكار V27 بثلاثة تصاميم" },
    services: [{ en: "Social media design", ar: "تصميم السوشيال" }, { en: "Motion showcase", ar: "عرض موشن" }],
    palette: [],
    sections: {
      brief: {
        en: "Present the V27 as a capable, premium SUV for both the city and the desert, in a set of posts that feel like one campaign.",
        ar: "تقديم V27 كسيارة SUV قوية وفاخرة للمدينة والصحراء، في مجموعة منشورات تبدو حملة واحدة.",
      },
      concept: {
        en: "Each post is a scene: city lights, open desert road, canyon at sunset. Together they tell one journey with short Arabic lines like \"the adventure starts here\".",
        ar: "كل منشور مشهد: أضواء المدينة، وطريق صحراوي مفتوح، ووادٍ وقت الغروب. معًا تحكي رحلة واحدة بعبارات عربية قصيرة مثل «المغامرة تبدأ هنا».",
      },
      strategy: {
        en: "Specs (AWD, horsepower, range) sit in the same place on every post, so the series reads as a system and each fact is easy to find.",
        ar: "المواصفات (الدفع الرباعي، والقوة، والمدى) في نفس المكان في كل منشور، فتُقرأ السلسلة كنظام ويسهل إيجاد كل معلومة.",
      },
      visual: {
        en: "Deep blue gradients, warm sand and a cinematic colour grade; the showcase video moves the cards in a gentle 3D carousel.",
        ar: "تدرجات أزرق داكن، ورملي دافئ، وتلوين سينمائي، وفيديو العرض يحرك التصاميم في كاروسيل ثلاثي الأبعاد هادئ.",
      },
      development: {
        en: "Posts were designed in Photoshop with AI-assisted imagery, then assembled into a short showcase reel for Instagram.",
        ar: "صُممت المنشورات على فوتوشوب بصور بمساعدة الذكاء الاصطناعي، ثم جُمعت في ريل قصير للعرض على انستجرام.",
      },
    },
    deliverables: [{ en: "Social post series", ar: "سلسلة منشورات" }, { en: "Showcase reel (4:5 and 9:16)", ar: "ريل عرض (4:5 و9:16)" }],
    gallery: [{ type: "video", src: "assets/work/icaur-v27/reel.mp4", poster: "assets/work/icaur-v27/cover.webp", caption: { en: "Showcase reel", ar: "ريل العرض" } }],
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
    cover: "assets/work/wasabi/cover.webp",
    coverAlt: { en: "Dark green Wasabi menu beside sushi and chopsticks", ar: "منيو وسابي الأخضر الداكن بجانب السوشي وعيدان الأكل" },
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
      { src: "assets/work/wasabi/board.webp", wide: true, caption: { en: "Identity overview board", ar: "لوحة عرض الهوية كاملة" } },
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

  /* ----------------------------------------------------------- ICON REELS */
  {
    slug: "icon-reels",
    featured: false,
    category: "motion",
    year: "2026",
    title: { en: "ICON 21 Reels", ar: "ريلز ايكون 21" },
    client: { en: "Icon Real Estate", ar: "ايكون العقارية" },
    summary: {
      en: "Short motion pieces that introduce ICON 21, highlight its features and keep the Instagram feed visually consistent.",
      ar: "مقاطع موشن قصيرة تقدّم مشروع ايكون 21 وتبرز مميزاته وتحافظ على اتساق حساب انستجرام بصريًا.",
    },
    cover: "assets/work/icon-reels/cover.webp",
    coverAlt: { en: "Three vertical ICON 21 reels and a phone mock-up", ar: "ثلاثة ريلز عمودية لايكون 21 وموك أب جوال" },
    services: [{ en: "Motion graphics", ar: "موشن جرافيك" }, { en: "Feed planning", ar: "تخطيط الحساب" }],
    palette: [],
    sections: {
      brief: { en: "Turn the ICON 21 launch into short reels that stop the scroll and point to the project.", ar: "تحويل إطلاق ايكون 21 إلى ريلز قصيرة توقف التمرير وتوجّه للمشروع." },
      concept: { en: "Kinetic Arabic headlines over dusk architecture: \"Raising the ceiling of expectations\", \"Invest in the right place\".", ar: "عناوين عربية متحركة فوق عمارة وقت الغروب: «نرفع سقف التوقعات» و«استثمر في المكان الصح»." },
      strategy: { en: "Reels lead, static posts follow: every reel has a matching feed tile so the grid stays cohesive.", ar: "الريلز تقود والمنشورات الثابتة تتبعها: لكل ريل منشور مطابق في الجريد ليبقى الحساب متناسقًا." },
      visual: { en: "Same night-blue and gold system as the static campaign, with type animated in short, readable beats.", ar: "نفس نظام الأزرق الليلي والذهبي للحملة الثابتة، مع تحريك الخط على إيقاعات قصيرة وسهلة القراءة." },
      development: { en: "Storyboarded from the static designs, then animated in After Effects for 9:16 delivery.", ar: "تم عمل ستوري بورد من التصاميم الثابتة، ثم التحريك على أفتر إفكتس بمقاس 9:16." },
    },
    deliverables: [{ en: "Launch reels", ar: "ريلز الإطلاق" }, { en: "Feed preview & cover tiles", ar: "معاينة الجريد وأغلفة الريلز" }],
    gallery: [
      { src: "assets/work/icon-reels/feed.webp", wide: true, caption: { en: "Instagram feed preview", ar: "معاينة حساب انستجرام" } },
      { src: "assets/work/icon-reels/board.webp", wide: true, caption: { en: "Reels & motion overview", ar: "عرض الريلز والموشن" } },
    ],
  },

  /* --------------------------------------------------------- SHAHY CLINIC */
  {
    slug: "shahy-clinic",
    featured: false,
    category: "social-media",
    year: "",
    title: { en: "Shahy Clinic", ar: "عيادة شاهي" },
    client: { en: "Shahy Clinic, beauty & aesthetics", ar: "عيادة شاهي للتجميل" },
    summary: {
      en: "Social content for a beauty and aesthetics clinic that educates, promotes treatments and builds trust through a soft, feminine look.",
      ar: "محتوى سوشيال لعيادة تجميل يوعّي ويروّج للعلاجات ويبني الثقة بأسلوب ناعم وأنثوي.",
    },
    cover: "assets/work/shahy-clinic/cover.webp",
    coverAlt: { en: "Six peach-toned beauty clinic posts", ar: "ستة منشورات لعيادة تجميل بدرجات الخوخي" },
    services: [{ en: "Posts", ar: "منشورات" }, { en: "Stories", ar: "ستوريز" }, { en: "Carousels", ar: "كاروسيل" }, { en: "Campaigns", ar: "حملات" }],
    palette: [],
    sections: {
      brief: { en: "Promote treatments and offers without losing the calm, caring tone a clinic needs.", ar: "الترويج للعلاجات والعروض دون فقدان النبرة الهادئة والراعية التي تحتاجها العيادة." },
      concept: { en: "Soft peach light, flowers and close-up skin: every post feels like care before it feels like an offer.", ar: "إضاءة خوخية ناعمة وزهور وصور قريبة للبشرة: كل منشور يبدو رعاية قبل أن يبدو عرضًا." },
      strategy: { en: "Four content types (promotions, education, stories and before/after) keep the feed useful as well as commercial.", ar: "أربعة أنواع محتوى (عروض، وتوعية، وستوريز، وقبل وبعد) تجعل الحساب مفيدًا وتجاريًا معًا." },
      visual: { en: "Peach and coral palette, ribbon-style headline bars, and clear price and call-to-action blocks.", ar: "لوحة خوخي ومرجاني، وأشرطة عناوين، ومساحات واضحة للسعر وزر الحجز." },
      development: { en: "Templates were built for offers, treatment explainers and carousels, then rolled out across the feed.", ar: "تم بناء قوالب للعروض وشرح العلاجات والكاروسيل، ثم تطبيقها على الحساب كله." },
    },
    deliverables: [{ en: "Promotional & educational posts", ar: "منشورات ترويجية وتوعوية" }, { en: "Story & carousel templates", ar: "قوالب ستوري وكاروسيل" }],
    gallery: [
      { src: "assets/work/shahy-clinic/feed.webp", caption: { en: "Instagram feed", ar: "حساب انستجرام" } },
      { src: "assets/work/shahy-clinic/board.webp", wide: true, caption: { en: "Content overview", ar: "عرض المحتوى" } },
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
      en: "Infographics on digital transformation and the entertainment sector that turn dense figures into a clear visual story.",
      ar: "إنفوجرافيك عن التحول الرقمي وقطاع الترفيه، يحوّل الأرقام الكثيفة إلى قصة بصرية واضحة.",
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
    deliverables: [{ en: "2 long-form infographics", ar: "2 إنفوجرافيك طويل" }, { en: "Custom icon set", ar: "مجموعة أيقونات خاصة" }],
    gallery: [
      { src: "assets/work/infographics/digital.webp", caption: { en: "Digital transformation", ar: "التحول الرقمي" } },
      { src: "assets/work/infographics/entertainment.webp", caption: { en: "Entertainment sector", ar: "قطاع الترفيه" } },
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

/* =========================================================================
   SITE SETTINGS — your name, contact links, CV, experience, tools.
   Edit the values between quotes. Every text field has an English (en)
   and Arabic (ar) version. Leave a link as "" to hide it on the site.
   ========================================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.site = {
  name: { en: "Asma Othman", ar: "أسماء عثمان" },
  role: { en: "Art Director · Senior Graphic Designer", ar: "آرت دايركتور · مصممة جرافيك أولى" },
  location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
  since: 2019, // first year of professional work (used in the hero slug line)

  // The website address after you publish it (used for social sharing previews).
  // Example for GitHub Pages: "https://your-username.github.io"
  url: "",

  // ---- Contact --------------------------------------------------------------
  email: "asmastudio33@gmail.com",
  links: {
    behance: "https://www.behance.net/AsmaaOthman",
    instagram: "https://www.instagram.com/asmaothman.creative/",
    linkedin: "https://www.linkedin.com/in/asmaaothman/",
  },

  // ---- CV -------------------------------------------------------------------
  // Put your PDF in assets/cv/ and write its path here, e.g. "assets/cv/Asma-Othman-CV.pdf".
  // While this is "", the About page shows a "CV available on request" note instead of a broken link.
  cv: "assets/cv/Asmaa-Othman-CV.pdf",

  // ---- Home page copy -------------------------------------------------------
  headline: {
    en: "I develop ideas into clear visual directions, brand identities and campaigns—from concept through execution.",
    ar: "أطوّر الأفكار إلى اتجاهات بصرية واضحة وهويات وحملات، من الفكرة حتى التنفيذ.",
  },
  intro: {
    en: "From the idea and creative direction to execution and motion. Seven years designing for brands across Saudi Arabia, the Gulf, Egypt and Turkey.",
    ar: "من الفكرة والاتجاه الإبداعي إلى التنفيذ والموشن. سبع سنوات من التصميم لعلامات في السعودية والخليج ومصر وتركيا.",
  },

  // ---- About page -----------------------------------------------------------
  about: {
    en: [
      "I design brand identities, advertising and social campaigns, print, and motion for companies across Saudi Arabia and the Gulf. My work starts with the brief and the audience, and only then with the visuals.",
      "Over seven years I have moved from agency production to leading the visual direction of brands: building identity systems, setting campaign looks, and keeping every touchpoint consistent. I work comfortably in Arabic and English, and I use AI tools to explore ideas faster while keeping the final craft in my own hands. On Higgsfield AI I create full ad films: generating scenes, turning images into video, directing cinematic camera moves and motion, then finishing the edit myself.",
    ],
    ar: [
      "أصمّم الهويات البصرية والحملات الإعلانية وحملات السوشيال ميديا والمطبوعات والموشن لشركات في السعودية والخليج. شغلي يبدأ من البريف والجمهور، وبعدها يجي الشكل.",
      "خلال سبع سنوات انتقلت من التنفيذ داخل الوكالات إلى قيادة الاتجاه البصري للعلامات: بناء أنظمة الهوية، وتحديد شكل الحملات، والحفاظ على اتساق كل نقطة تواصل. أشتغل بالعربي والإنجليزي بنفس الراحة، وأستخدم أدوات الذكاء الاصطناعي لاستكشاف الأفكار أسرع، مع إبقاء الحرفة النهائية بين يديّ. وعلى منصة Higgsfield AI أصنع أفلامًا إعلانية كاملة: أولّد المشاهد، وأحوّل الصور إلى فيديو، وأوجّه حركة الكاميرا السينمائية وحركة العناصر، ثم أنهي المونتاج بنفسي.",
    ],
  },
  quote: {
    en: "Good design is not just seen. It is felt.",
    ar: "التصميم الجيد لا يُرى فقط، بل يُحَسّ.",
  },

  // Core services shown first on the home page.
  services: [
    { en: "Art Direction", ar: "الإدارة الفنية" },
    { en: "Brand Identity & Visual Systems", ar: "الهوية البصرية وأنظمتها" },
    { en: "Advertising & Marketing Campaigns", ar: "الحملات الإعلانية والتسويقية" },
    { en: "Cross-platform Design: social, print, digital & packaging", ar: "التصميم عبر المنصات: سوشيال، مطبوعات، رقمي وتغليف" },
  ],

  // Smaller "additional skills" box under the services.
  skills: [
    { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" },
    { en: "AI-Assisted Design", ar: "التصميم بمساعدة الذكاء الاصطناعي" },
    { en: "Motion & Video Editing", ar: "الموشن والمونتاج" },
  ],


  // Brand names shown in the moving strip on the home page (all from projects in this portfolio).
  brands: ["ICON Real Estate", "Safari", "Rashf", "CareDrive", "Zeina", "Visory", "ChillPop", "iCAUR", "Dallah Sukkar", "Wasabi", "925 Club", "Piattino Café", "Synexcell", "YZDAD", "Gate A", "Koki's Beauty", "Bassem El-Bahkery", "Dating Boat", "Awen", "Brown House", "Khawalid", "Venue Hotel"],


  // Most recent first. Dates and cities from your CV.
  experience: [
    { years: "Mar 2025 — Now", company: "Icon Real Estate", place: { en: "Jeddah, Saudi Arabia", ar: "جدة، السعودية" }, role: { en: "Senior Graphic Designer · Junior Art Director", ar: "مصممة جرافيك أولى · جونيور آرت دايركتور" } },
    { years: "Jun 2023 — Jun 2025", company: "Happenize", place: { en: "Dubai, UAE", ar: "دبي، الإمارات" }, role: { en: "Senior Graphic Designer · UI/UX Designer", ar: "مصممة جرافيك أولى · مصممة UI/UX" } },
    { years: "Oct 2021 — Dec 2022", company: "Montasher Sa", place: { en: "Riyadh, Saudi Arabia", ar: "الرياض، السعودية" }, role: { en: "Branding Designer", ar: "مصممة هويات" } },
    { years: "Oct 2020 — Jan 2021", company: "Ektsap", place: { en: "Istanbul, Turkey", ar: "إسطنبول، تركيا" }, role: { en: "Graphic Designer", ar: "مصممة جرافيك" } },
    { years: "Jul 2020 — Nov 2020", company: "Emedia", place: { en: "Al Ain, UAE", ar: "العين، الإمارات" }, role: { en: "Graphic Designer", ar: "مصممة جرافيك" } },
    { years: "Apr 2020 — Sep 2021", company: "Joury Media", place: { en: "Mansoura, Egypt", ar: "المنصورة، مصر" }, role: { en: "Graphic Designer", ar: "مصممة جرافيك" } },
    { years: "Nov 2019 — Mar 2020", company: "Hunter", place: { en: "Mansoura, Egypt", ar: "المنصورة، مصر" }, role: { en: "Graphic Designer", ar: "مصممة جرافيك" } },
  ],

  education: {
    years: "2017 — 2022",
    title: { en: "Bachelor of Applied Arts", ar: "بكالوريوس الفنون التطبيقية" },
    detail: { en: "Graphic & Advertising Department", ar: "قسم الجرافيك والإعلان" },
  },

  tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe After Effects", "Adobe Premiere Pro", "Figma", "ChatGPT", "Adobe Firefly", "Midjourney", "Microsoft Copilot", "Canva AI", "Higgsfield AI"],

  portrait: "assets/work/about/portrait-2.webp",
  heroPhoto: "assets/work/about/portrait-2.webp", // large photo on the home page
};

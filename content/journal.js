/* =========================================================================
   JOURNAL — blog articles.

   To publish a new article:
   1. Copy one article object below and paste it at the TOP of the list
      (newest first).
   2. Change the slug (lowercase, hyphens, no spaces) — it becomes the link:
      #/journal/your-slug
   3. Write the body between the backticks ` ` using simple Markdown:
        ## Heading            → section heading
        **bold**  *italic*    → emphasis
        - item                → bullet list
        > quote               → pull quote
        [text](https://…)     → link
        ![caption](assets/journal/your-image.webp) → image
      Leave a blank line between paragraphs.
   4. Optional cover image: put it in assets/journal/ and set cover: "assets/journal/name.webp".
      Without a cover, the site draws a typographic cover for you.
   5. Reading time is calculated automatically.
   6. draft: true shows a "Sample draft" label. Set it to false when the
      article is yours and ready.

   The three articles below are SAMPLE DRAFTS written to show the layout.
   Rewrite them in your own words or delete them before you launch.
   ========================================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.journal = [
  {
    slug: "a-logo-is-not-an-identity",
    draft: true,
    date: "2026-10-20",
    category: { en: "Visual identity", ar: "الهوية البصرية" },
    title: { en: "A logo is not an identity", ar: "الشعار ليس هوية" },
    excerpt: {
      en: "Why the system around a mark matters more than the mark itself.",
      ar: "لماذا النظام المحيط بالشعار أهم من الشعار نفسه.",
    },
    cover: "",
    coverGlyph: "ه",
    body: {
      en: `Clients often ask for "a logo". What they usually need is a way to look like themselves everywhere they appear.

## The mark is the smallest part

A logo is one decision. An identity is hundreds: which colour leads, how type behaves in Arabic and English, how photos are lit, where the logo sits on a story, what a sale post looks like next to an educational one.

- Colour with clear roles, not just a palette
- Typography that works in both scripts
- A grid that makes templates fast to produce
- Rules for imagery and tone

> If the system is right, a stranger should recognise the brand with the logo covered.

## How I test it

Before presenting, I place the identity on the least glamorous touchpoints first: a price list, a sticker, an Instagram story with too much text. If it survives there, it will survive everywhere.`,
      ar: `كثير من العملاء يطلبون «شعار». لكن اللي يحتاجونه غالبًا هو طريقة يظهرون بها بنفس الشخصية في كل مكان.

## الشعار أصغر جزء

الشعار قرار واحد. الهوية مئات القرارات: أي لون يقود، وكيف يتصرف الخط بالعربي والإنجليزي، وكيف تُضاء الصور، وأين يوضع الشعار في الستوري، وكيف يبدو منشور العرض بجانب منشور التوعية.

- ألوان لها أدوار واضحة، مش مجرد لوحة ألوان
- خطوط تعمل باللغتين
- شبكة تجعل إنتاج القوالب سريعًا
- قواعد للصور والنبرة

> لو النظام صحيح، المفروض أي شخص يتعرف على العلامة حتى لو غطّينا الشعار.

## كيف أختبرها

قبل العرض، أطبّق الهوية على أقل نقاط التواصل بريقًا: قائمة أسعار، ملصق، ستوري فيها نص كثير. لو نجحت هناك، ستنجح في كل مكان.`,
    },
  },
  {
    slug: "designing-arabic-and-latin-together",
    draft: true,
    date: "2026-10-12",
    category: { en: "Typography", ar: "التايبوجرافي" },
    title: { en: "Designing Arabic and Latin side by side", ar: "تصميم العربي واللاتيني جنبًا إلى جنب" },
    excerpt: {
      en: "Bilingual brands need two scripts that feel like one voice.",
      ar: "العلامات ثنائية اللغة تحتاج خطين يبدوان صوتًا واحدًا.",
    },
    cover: "",
    coverGlyph: "Aa",
    body: {
      en: `Most brands in the Gulf speak two languages. The mistake is choosing an English typeface first and finding an Arabic one that "matches" later.

## Start from shared qualities

Instead of matching shapes, match qualities: contrast, weight, width and rhythm. A high-contrast Latin serif and a high-contrast Naskh can feel related even though no letter looks alike.

## Practical rules

- Set Arabic slightly larger; its x-height reads smaller
- Give Arabic more line height for descenders and dots
- Never stretch Arabic with fake kashida; use the font's own
- Check numbers: Arabic-Indic or Western, and be consistent

> Two scripts, one voice.`,
      ar: `معظم العلامات في الخليج تتكلم لغتين. والخطأ هو اختيار الخط الإنجليزي أولًا ثم البحث عن خط عربي «يشبهه» بعد ذلك.

## ابدأ من الصفات المشتركة

بدل مطابقة الأشكال، طابق الصفات: التباين، والوزن، والعرض، والإيقاع. خط لاتيني عالي التباين وخط نسخ عالي التباين ممكن يبدوان من عائلة واحدة رغم أن أي حرف لا يشبه الآخر.

## قواعد عملية

- كبّر العربي قليلًا لأن ارتفاعه يبدو أصغر
- أعطِ العربي مسافة سطور أكبر للنقاط والنزول
- لا تمطّ العربي بكشيدة مزيفة، استخدم كشيدة الخط نفسه
- راجع الأرقام: هندية أو عربية، والتزم بنوع واحد

> خطان، وصوت واحد.`,
    },
  },
  {
    slug: "ai-in-my-creative-process",
    draft: true,
    date: "2026-10-02",
    category: { en: "Creative process", ar: "العملية الإبداعية" },
    title: { en: "Where AI fits in my creative process", ar: "أين يدخل الذكاء الاصطناعي في عمليتي الإبداعية" },
    excerpt: {
      en: "Faster exploration, same responsibility for the final idea.",
      ar: "استكشاف أسرع، ونفس المسؤولية عن الفكرة النهائية.",
    },
    cover: "",
    coverGlyph: "◐",
    body: {
      en: `AI tools have changed how fast I can see an idea. They haven't changed who is responsible for it.

## Where it helps

- Exploring moods and lighting before a shoot or render
- Generating background plates for campaign concepts
- Producing quick variations to test with a client

## Where it doesn't

The brief, the concept, the typography and the final judgement stay with the designer. A generated image is a sketch until someone decides it is right for the brand.

> The tool is fast. The taste has to be yours.`,
      ar: `أدوات الذكاء الاصطناعي غيّرت سرعة رؤيتي للفكرة. لكنها لم تغيّر من المسؤول عنها.

## أين تساعد

- استكشاف الأجواء والإضاءة قبل التصوير أو الريندر
- توليد خلفيات لأفكار الحملات
- إنتاج تنويعات سريعة لاختبارها مع العميل

## أين لا تساعد

البريف، والفكرة، والتايبوجرافي، والحكم النهائي تبقى مع المصمم. الصورة المولّدة مجرد اسكتش حتى يقرر أحد أنها مناسبة للعلامة.

> الأداة سريعة، لكن الذوق لازم يكون ذوقك.`,
    },
  },
];

export type Locale = "en" | "ar";

export type Listing = {
  id: string;
  area: string;
  areaAr: string;
  title: string;
  titleAr: string;
  beds: number;
  baths: number;
  size: number;
  image: string;
  tag: string;
  tagAr: string;
};

// Demonstration-only content; replace with verified properties before launch.
export const listings: Listing[] = [
  {
    id: "01",
    area: "Salmiya",
    areaAr: "السالمية",
    title: "A quieter kind of city living",
    titleAr: "حياة هادئة في قلب المدينة",
    beds: 2,
    baths: 2,
    size: 112,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    tag: "Sample home",
    tagAr: "عقار تجريبي",
  },
  {
    id: "02",
    area: "Abu Al Hasaniya",
    areaAr: "أبو الحصانية",
    title: "Room to settle in",
    titleAr: "مساحة لتشعر بالراحة",
    beds: 3,
    baths: 3,
    size: 185,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    tag: "Sample home",
    tagAr: "عقار تجريبي",
  },
  {
    id: "03",
    area: "Kuwait City",
    areaAr: "مدينة الكويت",
    title: "An easy city address",
    titleAr: "عنوان مميز في المدينة",
    beds: 1,
    baths: 1,
    size: 78,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    tag: "Sample home",
    tagAr: "عقار تجريبي",
  },
];

export const copy = {
  en: {
    nav: { home: "Home", showings: "Showings", management: "Property management", contact: "Contact", menu: "Open menu", close: "Close menu", language: "العربية" },
    common: { sample: "Illustrative sample listing", bedrooms: "beds", bathrooms: "baths", sqm: "sqm", request: "Request a showing", ownerCta: "Talk about your property", demo: "Demo form — nothing will be sent or stored.", name: "Your name", email: "Email address", phone: "Phone (optional)", message: "Tell us a little about what you need", send: "Send inquiry", success: "Thank you. Your demo inquiry is ready — no information was sent or saved.", required: "Please complete the required fields.", emailInvalid: "Enter a valid email address.", back: "Back to home", learn: "Explore property management", meet: "Find your next place", arrow: "Explore" },
    home: { title: "Find a place that feels like yours.", body: "Thoughtful showings for people looking for home, and dependable care for the people who own it.", renter: "Explore available homes", owner: "Property management", note: "Two ways we help you feel at home.", showTitle: "See it in person.", showBody: "Find a home that fits your everyday, then request a time to experience it for yourself.", manageTitle: "Care that feels personal.", manageBody: "A considered approach to looking after your property, with clear communication at every step.", cta: "How can we help?", ctaBody: "Whether you’re looking for a place or someone to care for yours, we’re here to make the next step feel simple." },
    showings: { eyebrow: "Showings in Kuwait", title: "A good place feels even better in person.", body: "Explore these illustrative homes and tell us which one you’d like to see. We’ll make the next step feel simple.", badge: "DEMO LISTINGS", disclaimer: "These example homes are for demonstration only and are not verified available properties.", formTitle: "Request a showing", formBody: "Share a few details and a good time to visit.", timing: "Preferred day or time (optional)" },
    management: { eyebrow: "Property management", title: "Your property, cared for with intention.", body: "A clear, personal approach to looking after your property in Kuwait — with attention to the details that matter to you.", approach: "The right care makes all the difference.", detail: "Good property management starts with listening. We take time to understand your property and priorities, then bring care and consistency to the details.", steps: ["A thoughtful first conversation", "Care shaped around your property", "Clear communication as things move forward"], formTitle: "Let’s talk about your property", formBody: "Tell us a little about your property and what you’re looking for." },
    contact: { eyebrow: "Get in touch", title: "Let’s make the next step a little easier.", body: "Tell us what you’re looking for and we’ll help you find the right next step.", showTitle: "Looking for a home?", showBody: "Explore our sample listings and request a showing.", ownerTitle: "Have a property to care for?", ownerBody: "Learn about our property management approach." },
    footer: { line: "Thoughtful showings. Considered property care.", location: "Kuwait", rights: "All rights reserved." },
  },
  ar: {
    nav: { home: "الرئيسية", showings: "المعاينات", management: "إدارة العقارات", contact: "تواصل معنا", menu: "فتح القائمة", close: "إغلاق القائمة", language: "English" },
    common: { sample: "عقار تجريبي للتوضيح", bedrooms: "غرف نوم", bathrooms: "حمامات", sqm: "م²", request: "اطلب معاينة", ownerCta: "تحدث عن عقارك", demo: "نموذج تجريبي — لن يتم إرسال أو حفظ أي بيانات.", name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف (اختياري)", message: "أخبرنا باختصار عمّا تحتاجه", send: "إرسال الاستفسار", success: "شكراً لك. تم إعداد استفسارك التجريبي — لم يتم إرسال أو حفظ أي معلومات.", required: "يرجى تعبئة الحقول المطلوبة.", emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.", back: "العودة إلى الرئيسية", learn: "اكتشف إدارة العقارات", meet: "اعثر على منزلك القادم", arrow: "اكتشف" },
    home: { title: "اعثر على مكان يشبهك.", body: "معاينات مدروسة لمن يبحث عن منزل، وعناية موثوقة لمن يملكه.", renter: "استكشف العقارات المتاحة", owner: "إدارة العقارات", note: "طريقتان لمساعدتك على الشعور بالراحة.", showTitle: "اكتشفه بنفسك.", showBody: "اعثر على منزل يناسب تفاصيل يومك، ثم اطلب موعداً لتراه بنفسك.", manageTitle: "عناية بطابع شخصي.", manageBody: "نهتم بعقارك باهتمام ووضوح في التواصل في كل خطوة.", cta: "كيف يمكننا مساعدتك؟", ctaBody: "سواء كنت تبحث عن منزل أو عن من يعتني بعقارك، نحن هنا لنجعل خطوتك القادمة أسهل." },
    showings: { eyebrow: "معاينات في الكويت", title: "المكان الجميل يصبح أجمل حين تراه بنفسك.", body: "استكشف هذه العقارات التوضيحية وأخبرنا أيّها ترغب في معاينته. سنجعل خطوتك القادمة سهلة.", badge: "عقارات تجريبية", disclaimer: "هذه العقارات المعروضة للتوضيح فقط، ولم يتم التحقق من توفرها.", formTitle: "اطلب معاينة", formBody: "شاركنا بعض التفاصيل والوقت المناسب للزيارة.", timing: "اليوم أو الوقت المفضل (اختياري)" },
    management: { eyebrow: "إدارة العقارات", title: "عقارك، بعناية واهتمام.", body: "نهج واضح وشخصي للعناية بعقارك في الكويت، مع اهتمام بالتفاصيل التي تهمك.", approach: "العناية المناسبة تصنع الفرق.", detail: "تبدأ الإدارة الجيدة بالاستماع. نأخذ الوقت لفهم عقارك وأولوياتك، ثم نهتم بالتفاصيل بثبات وعناية.", steps: ["حوار أولي مدروس", "عناية تناسب عقارك", "تواصل واضح في كل خطوة"], formTitle: "لنتحدث عن عقارك", formBody: "أخبرنا قليلاً عن عقارك وما تبحث عنه." },
    contact: { eyebrow: "تواصل معنا", title: "لنجعل خطوتك القادمة أسهل.", body: "أخبرنا عمّا تبحث عنه وسنساعدك في تحديد الخطوة المناسبة.", showTitle: "تبحث عن منزل؟", showBody: "استكشف العقارات التجريبية واطلب معاينة.", ownerTitle: "لديك عقار يحتاج إلى عناية؟", ownerBody: "اكتشف نهجنا في إدارة العقارات." },
    footer: { line: "معاينات مدروسة. عناية متأنية بالعقارات.", location: "الكويت", rights: "جميع الحقوق محفوظة." },
  },
} as const;

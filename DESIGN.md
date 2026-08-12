# Mot7km (متحكم) - Design System & UI/UX Guidelines 🎨

هذه الوثيقة تحدد الهوية البصرية والنظام التصميمي (Design System) الخاص بموقع **منصة متحكم (Mot7km)** لضمان مظهر SaaS قياسي، احترافي، ومريح للعين في الوضعين الفاتح والداكن (Light & Dark Modes).

---

## 🏛️ Design Philosophy
نتبع في هذا المشروع **`Modern B2B SaaS Design System`** (المستوحى من معايير Linear & Vercel Aesthetic مع لمسات Soft Glassmorphism):
1. **راحة العين (Eye-Comfort First):** عدم استخدام خلفيات بيضاء ساطعة صارخة في الوضع الفاتح لتقليل التوهج الإشعاعي (Screen Glare).
2. **العمق عبر الطبقات والحدود الناعمة (Depth & Micro-Borders):** الاعتماد على حدود رقيقة 1px (`border-slate-200/60` في الفاتح و `border-white/10` في الداكن) بدلاً من الظلال الثقيلة.
3. **هيكلية Bento Grid:** تنظيم كروت المميزات والإحصائيات في شبكات أنيقة ذات زوايا منحنية رقيقة (`rounded-3xl`).
4. **التدرجات الموجهة (Purposeful Gradients):** استخدام تدرج البراند (`#1683C7` ➔ `#06B6D4` ➔ `#2DD4BF`) في العناوين الرئيسية، الشارات (Badges)، والأزرار التفاعلية فقط.

---

## 🎨 Color Palette & Design Tokens

### 1. الألوان الأساسية (Brand Colors)
- **Primary (الأزرق التحكمي):** `#1683C7` (الداكن: `#0B5A8A` / الفاتح: `#38BDF8`)
- **Secondary (الزمردي الداعم):** `#0F766E` (الداكن: `#115E59` / الفاتح: `#2DD4BF`)
- **Accent (السيان المبتكر):** `#06B6D4` (الداكن: `#0891B2` / الفاتح: `#67E8F9`)

### 2. الوضع الفاتح (Light Mode - Eye Friendly)
- **الخلفية الرئيسية (`--background`):** `#F4F6FB` (Soft Cool Slate - هادئ ومريح للعين)
- **الأسطح والبطاقات (`--surface` & `--card`):** `#FFFFFF`
- **العناصر المرتفعة (`--elevated`):** `#EBF0F7`
- **حدود البطاقات (`--card-border`):** `rgba(203, 213, 225, 0.6)`
- **النصوص الأساسية (`--text-primary`):** `#0F172A`
- **النصوص الثانوية (`--text-secondary`):** `#475569`

### 3. الوضع الداكن (Dark Mode)
- **الخلفية الرئيسية (`--background`):** `#030712` (Deep Obsidian)
- **الأسطح والبطاقات (`--surface` & `--card`):** `#0B1329` & `#0F172A`
- **الخلفية الزجاجية (`--glass-bg`):** `rgba(15, 23, 42, 0.75)`
- **حدود الزجاج (`--glass-border`):** `rgba(255, 255, 255, 0.1)`
- **النصوص الأساسية (`--text-primary`):** `#F8FAFC`
- **النصوص الثانوية (`--text-secondary`):** `#CBD5E1`

---

## ✍️ Typography & Fonts
- **الخط العربي الرئيسي:** Cairo (`var(--font-cairo)`) بالأوزان: 400, 600, 700, 800, 900.
- **الخط اللاتيني والأرقام:** Roboto (`var(--font-roboto)`).
- **العناوين الرئيسية (H1):** `text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.12]`.
- **العناوين الفرعية (H2):** `text-3xl sm:text-4xl md:text-5xl font-black tracking-tight`.

---

## 🧩 UI Components & Patterns
1. **أيقونات متناسقة فقط (Strict Vector SVG Icons Only):**
   - **يمنع بتاتاً** استخدام الإيموجيات العادية (Emojis مثل 📈, ⚡, ★) في الواجهات والأزرار والبطاقات والشارات.
   - يتم استخدام أيقونات `lucide-react` المتجهية الرسمية الصريحة فقط (مثل `<TrendingUp />`, `<Zap />`, `<Star />`) لضمان مظهر برمجيات متكامل وعالي الجودة.
2. **العناصر وتأثيرات الـ 3D (3D Perspective & Spatial Depth):**
   - اعتماد تأثيرات البعد الثالث CSS 3D (`perspective-1000 rotateX rotateY transform-gpu`) في استعراض الشاشات وواجهات المنتجات.
   - استخدام طبقات 3D متعددة في Hero Sections والكروت المصغرة العائمة لحث حركة الفأرة (Mouse Parallax Depth).
3. **الأزرار (Buttons):**
   - Primary: خلفية التدرج البراند، مع ظلال مضيئة خفيفة وتأثير hover سلس (`hover:scale-105 transition-all`).
   - Secondary: خلفية زجاجية شفافة أو حدود رقيقة متناسقة.
4. **القوائم التفاعلية (Floating Navbars & Segmented Tab Bars):**
   - استخدام مكون `SegmentedTabbar` للتبويب السلس عبر Framer Motion.
5. **تدرجات النصوص:**
   - استخدام كلاس `.text-gradient` لإبراز الكلمات المفتاحية في العناوين.

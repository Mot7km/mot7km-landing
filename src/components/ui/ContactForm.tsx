"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactFormProps {
  type?: "contact" | "demo";
  className?: string;
}

export default function ContactForm({ type = "contact", className = "" }: ContactFormProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "cafe",
    branches: "1",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "cafe",
        branches: "1",
        message: "",
      });
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl space-y-6 ${className}`}
    >
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-bold"
        >
          <CheckCircle2 size={20} className="shrink-0" />
          <span>
            {type === "demo"
              ? isRtl
                ? "تم استلام طلب التجربة بنجاح! سيتواصل معك فريقنا خلال ساعتين."
                : "Demo request received! Our team will contact you within 2 hours."
              : isRtl
              ? "تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت."
              : "Your message was sent successfully! We'll reply shortly."}
          </span>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-center gap-3 text-sm font-bold"
        >
          <AlertCircle size={20} className="shrink-0" />
          <span>{isRtl ? "حدث خطأ ما، يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again."}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {isRtl ? "الاسم بالكامل" : "Full Name"} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={isRtl ? "مثال: إبراهيم ناصر" : "e.g. John Doe"}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all text-sm font-medium"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {isRtl ? "البريد الإلكتروني" : "Email Address"} *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all text-sm font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone Field */}
        <div>
          <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {isRtl ? "رقم الجوال / الواتساب" : "Phone / WhatsApp"} *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+966 50 123 4567"
            className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all text-sm font-medium"
          />
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {isRtl ? "نوع النشاط التجاري" : "Business Type"}
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-[#0f192e] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
          >
            <option value="cafe">{isRtl ? "كافيه / مقهى" : "Café / Coffee Shop"}</option>
            <option value="restaurant">{isRtl ? "مطعم" : "Restaurant"}</option>
            <option value="juice">{isRtl ? "محل عصائر / حلا" : "Juice / Desserts"}</option>
            <option value="gaming">{isRtl ? "مركز ألعاب / بلايستيشن" : "Gaming Center"}</option>
            <option value="other">{isRtl ? "نشاط آخر" : "Other Business"}</option>
          </select>
        </div>
      </div>

      {type === "demo" && (
        <div>
          <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            {isRtl ? "عدد الفروع / نقاط البيع" : "Number of Branches / POS"}
          </label>
          <select
            value={formData.branches}
            onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-[#0f192e] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
          >
            <option value="1">{isRtl ? "فرع واحد" : "1 Branch"}</option>
            <option value="2-5">{isRtl ? "من 2 إلى 5 فروع" : "2 - 5 Branches"}</option>
            <option value="6-15">{isRtl ? "من 6 إلى 15 فرع" : "6 - 15 Branches"}</option>
            <option value="15+">{isRtl ? "أكثر من 15 فرع (Enterprise)" : "15+ Branches (Enterprise)"}</option>
          </select>
        </div>
      )}

      {/* Message Field */}
      <div>
        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          {type === "demo"
            ? isRtl
              ? "ملاحظات إضافية (اختياري)"
              : "Additional Notes (Optional)"
            : isRtl
            ? "الرسالة"
            : "Message"}{" "}
          {type === "contact" && "*"}
        </label>
        <textarea
          rows={4}
          required={type === "contact"}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={
            type === "demo"
              ? isRtl
                ? "اذكر تفاصيل محددة ترغب في رؤيتها أثناء العرض..."
                : "Mention specific requirements you want to see..."
              : isRtl
              ? "كيف يمكننا مساعدتك؟"
              : "How can we help you?"
          }
          className="w-full px-4 py-3.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all text-sm font-medium resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-200% animate-gradient text-white font-extrabold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>{isRtl ? "جاري الإرسال..." : "Sending..."}</span>
          </>
        ) : (
          <>
            <span>
              {type === "demo"
                ? isRtl
                  ? "احجز العرض التجريبي المجاني"
                  : "Book Free Live Demo"
                : isRtl
                ? "إرسال الرسالة"
                : "Send Message"}
            </span>
            <Send size={16} className="rtl:rotate-180" />
          </>
        )}
      </button>
    </form>
  );
}

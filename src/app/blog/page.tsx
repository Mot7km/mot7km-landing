"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  TrendingUp,
  Zap,
  ShieldCheck
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import SubpageHeader from "@/components/layout/SubpageHeader";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const articles: Article[] = (t("blogPage.articles", { returnObjects: true }) as Article[]) || [];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: "all", label: t("blogPage.allCategories") },
    { id: "marketing", label: t("blogPage.categories.marketing") },
    { id: "pos", label: t("blogPage.categories.pos") },
    { id: "updates", label: t("blogPage.categories.updates") },
    { id: "guides", label: t("blogPage.categories.guides") }
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary overflow-hidden flex flex-col relative">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top_center,rgba(var(--primary-rgb),0.12),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-[15%] -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-[25%] -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] opacity-30 pointer-events-none -z-10 animate-pulse animation-delay-2000" />

      <div className="flex-1 pt-4 pb-24 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Navigation */}
        <SubpageHeader backHref="/" backLabel={t("notFound.goHome")} />

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16 mt-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-primary/20 text-primary text-xs font-extrabold mb-6 backdrop-blur-xl shadow-sm uppercase tracking-wider">
              <Sparkles size={15} className="animate-pulse" />
              <span>{t("blogPage.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-primary tracking-tight mb-6 leading-tight">
              {t("blogPage.title")}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
              {t("blogPage.desc")}
            </p>

            {/* Search & Filter Bar */}
            <div className="w-full max-w-2xl flex flex-col gap-4">
              <div className="relative p-2 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-2xl shadow-xl flex items-center focus-within:border-primary transition-all">
                <Search size={20} className="ml-3 rtl:ml-0 rtl:mr-3 text-text-muted flex-shrink-0" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("blogPage.searchPlaceholder")}
                  className="w-full bg-transparent border-none outline-none text-sm text-text-primary px-3 py-2 placeholder:text-text-muted"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-md scale-105"
                        : "bg-surface/60 border border-white/10 text-text-secondary hover:text-white hover:bg-surface/90"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <section className="mb-20 max-w-7xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-2xl transition-all group duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none" />

                  <div>
                    {/* Category Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary font-extrabold uppercase tracking-wider">
                        <Tag size={12} />
                        {t(`blogPage.categories.${article.category}`) || article.category}
                      </span>
                      <div className="flex items-center gap-1 text-text-muted">
                        <Clock size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-text-secondary font-medium">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-primary" />
                      <span>{article.author}</span>
                    </div>

                    <div className="flex items-center gap-1 text-primary font-bold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                      <span>{t("blogPage.readMore")}</span>
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-text-secondary font-medium bg-surface/30 rounded-3xl border border-white/10">
              <BookOpen size={48} className="mx-auto mb-4 text-text-muted opacity-50" />
              <p>{isRtl ? "لا توجد مقالات تطابق بحثك حالياً." : "No articles match your search criteria."}</p>
            </div>
          )}
        </section>

      </div>

      <Footer />
    </main>
  );
}

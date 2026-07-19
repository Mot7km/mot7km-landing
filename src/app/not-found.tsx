"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Subtle animated background glow */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          {/* Large 404 with gradient and animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent select-none"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-2xl sm:text-3xl font-bold text-white"
          >
            {t("notFound.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-3 text-white/60 text-base sm:text-lg max-w-md mx-auto"
          >
            {t("notFound.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light hover:to-accent text-white font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(22,131,199,0.3)] hover:shadow-[0_0_25px_rgba(22,131,199,0.5)] hover:-translate-y-0.5"
            >
              <Home size={18} />
              {t("notFound.goHome")}
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <ArrowLeft size={18} />
              {t("notFound.contactSupport")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Small footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-white/30 text-sm"
        >
          &copy; {new Date().getFullYear()} Mot7km. {t("notFound.rights")}
        </motion.p>
      </div>
    </div>
  );
}
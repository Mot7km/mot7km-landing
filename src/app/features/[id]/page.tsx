import { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuresData, FeatureId } from "@/data/featurePages";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureCapabilities from "@/components/features/FeatureCapabilities";
import FeatureDeepDive from "@/components/features/FeatureDeepDive";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Generate static parameters for the dynamic routes
export function generateStaticParams() {
  return Object.keys(featuresData).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const feature = featuresData[id as FeatureId];
  
  if (!feature) {
    return { title: 'Not Found | Mot7km' };
  }

  // SEO Titles targeting local search intent
  const titles: Record<string, string> = {
    web: "لوحة تحكم الويب لإدارة المطاعم | Mot7km Web Dashboard",
    pos: "نظام كاشير ونقاط بيع سحابية للمطاعم | Mot7km Cloud POS",
    mobile: "تطبيق إدارة المطاعم ومتابعة المبيعات | Mot7km Manager App",
    qr: "منيو رقمي بالباركود للمطاعم والكافيهات | Mot7km QR Menu"
  };

  const descriptions: Record<string, string> = {
    web: "تحكم كامل في فروع مطعمك، تقارير تحليلية دقيقة، وإدارة المنيو وفريق العمل من لوحة تحكم واحدة متكاملة من متحكم.",
    pos: "برنامج كاشير ذكي للمطاعم والكافيهات يعمل بدون إنترنت (Offline-first)، مخصص للسرعة الفائقة وإدارة الورديات بسهولة.",
    mobile: "تابع مبيعات مطعمك لحظة بلحظة، واستقبل تنبيهات حية، وراقب أداء فروعك من جوالك أينما كنت مع تطبيق إدارة المطاعم.",
    qr: "عزز مبيعاتك بمنيو إلكتروني (QR Code) تفاعلي وجذاب. تصفح سريع بدون تطبيق، مع إمكانية التقييم وإدارة التوفر اللحظي."
  };

  return {
    title: titles[id] || "Mot7km Features",
    description: descriptions[id] || "Discover the powerful features of Mot7km.",
    openGraph: {
      title: titles[id],
      description: descriptions[id],
      url: `https://mot7km.store/features/${id}`,
      type: "website",
      images: [
        {
          url: feature.hero.image, // Dynamically use the mockup image for social sharing
          width: 1200,
          height: 630,
          alt: titles[id],
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: titles[id],
      description: descriptions[id],
      images: [feature.hero.image],
    }
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (!featuresData[id as FeatureId]) {
    notFound();
  }

  const data = featuresData[id as FeatureId];

  return (
    <>
      <main className="min-h-screen">
        <FeatureHero data={data} />
        <FeatureCapabilities data={data} />
        <FeatureDeepDive data={data} />
      </main>
      <Footer />
    </>
  );
}

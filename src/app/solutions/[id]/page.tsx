import { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutionsData, SolutionId } from "@/data/solutionPages";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionContent from "@/components/solutions/SolutionContent";

export function generateStaticParams() {
  return Object.keys(solutionsData).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const solution = solutionsData[id as SolutionId];
  
  if (!solution) {
    return { title: 'Not Found | Mot7km' };
  }

  const titles: Record<string, string> = {
    cafe: "نظام إدارة الكافيهات والمقاهي والكاشير السريع | Mot7km Café POS",
    restaurant: "برنامج إدارة المطاعم والمطابخ والكاشير السحابي | Mot7km Restaurant POS",
    juice: "نظام كاشير محلات العصائر والآيسكريم | Mot7km Juice POS",
    gaming: "نظام إدارة صالات البلايستيشن والقيمنق والمنيو الرقمي | Mot7km Gaming Lounge"
  };

  const descriptions: Record<string, string> = {
    cafe: "حلول متكاملة لإدارة الكافيهات، سرعة تسجيل طلبات الباريستا، المنيو الرقمي السريع، وتتبع استهلاك البن والمكونات لحظياً.",
    restaurant: "إدارة كاملة للطاولات والمطبخ (KDS)، ربط لحظي بين الصالة والكاشير وشاشات المطبخ لتفادي خطأ الطلبات.",
    juice: "واجهة سريعة لتخصيص العصائر، الأحجام والنكهات، مع دعم طباعة الملصقات وتتبع المبيعات لحظة بلحظة.",
    gaming: "منيو رقمي مباشر من طاولة اللعب لزيادة مبيعات المشروبات والوجبات الخفيفة دون إيقاف اللعبة."
  };

  return {
    title: titles[id] || "Mot7km Solutions",
    description: descriptions[id] || "Discover tailored solutions for your business with Mot7km.",
    openGraph: {
      title: titles[id],
      description: descriptions[id],
      url: `https://mot7km.store/solutions/${id}`,
      type: "website",
      images: [
        {
          url: solution.hero.image,
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
      images: [solution.hero.image],
    }
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (!solutionsData[id as SolutionId]) {
    notFound();
  }

  const data = solutionsData[id as SolutionId];

  return (
    <>
      <main className="min-h-screen">
        <SolutionContent data={data} />
      </main>
      <Footer />
    </>
  );
}

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

export default async function FeaturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (!featuresData[id as FeatureId]) {
    notFound();
  }

  const data = featuresData[id as FeatureId];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FeatureHero data={data} />
        <FeatureCapabilities data={data} />
        <FeatureDeepDive data={data} />
      </main>
      <Footer />
    </>
  );
}

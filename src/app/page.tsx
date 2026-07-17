import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import ValueProp from "@/components/sections/ValueProp";
import Roadmap from "@/components/sections/Roadmap";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <ValueProp />
      <Roadmap />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

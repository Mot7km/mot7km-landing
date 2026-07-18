  import Navbar from "@/components/layout/Navbar";
  import Hero from "@/components/sections/Hero";
  import Features from "@/components/sections/Features";
  import UseCases from "@/components/sections/UseCases";
  import ValueProp from "@/components/sections/ValueProp";
  import Roadmap from "@/components/sections/Roadmap";
  import Pricing from "@/components/sections/Pricing";
  import FAQ from "@/components/sections/FAQ";
  import Footer from "@/components/layout/Footer";
  import SectionDivider from "@/components/ui/SectionDivider";

  export default function Home() {
    return (
      <main className="min-h-screen bg-background text-text-primary relative overflow-hidden">
        <Navbar />
        <Hero />
        <SectionDivider titleKey="nav.features" />
        <Features />
        <SectionDivider titleKey="nav.useCases" />
        <UseCases />
        <SectionDivider titleKey="nav.howItWorks" />
        <ValueProp />
        <SectionDivider titleKey="nav.roadmap" />
        <Roadmap />
        <SectionDivider titleKey="nav.pricing" />
        <Pricing />
        <SectionDivider titleKey="nav.faq" />
        <FAQ />
        <Footer />
      </main>
    );
  }

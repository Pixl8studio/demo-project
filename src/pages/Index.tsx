import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MarketingEngine from "@/components/MarketingEngine";
import OfferOptimizer from "@/components/OfferOptimizer";
import PresentationBuilder from "@/components/PresentationBuilder";
import FollowUpEngine from "@/components/FollowUpEngine";
import Dashboard from "@/components/Dashboard";
import FounderLetter from "@/components/FounderLetter";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <MarketingEngine />
      <OfferOptimizer />
      <PresentationBuilder />
      <FollowUpEngine />
      <Dashboard />
      <FounderLetter />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;

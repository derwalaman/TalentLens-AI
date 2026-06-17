import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <CTASection />

      <Footer />

    </main>

  );
}
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Comparison from "../components/landing/Comparison";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <div className="bg-[#0b0f1a] text-white overflow-x-hidden">

      <Hero />

      <Stats />   {/* ← add here */}

      <Features />
      <HowItWorks />
      <Comparison />
      <CTA />
      <Footer />

    </div>
  );
};

export default Landing;

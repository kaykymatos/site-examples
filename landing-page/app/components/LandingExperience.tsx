import Benefits from "./sections/Benefits";
import CtaSection from "./sections/CtaSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoStrip from "./sections/LogoStrip";
import StorySection from "./sections/StorySection";

export default function LandingExperience() {
  return (
    <main className="landing-page">
      <Header />
      <Hero />
      <LogoStrip />
      <Benefits />
      <StorySection />
      <CtaSection />
      <Footer />
    </main>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import RoadmapSection from "@/components/roadmap-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
        <RoadmapSection/>
      </main>
      <Footer/>
    </div>
  );
}

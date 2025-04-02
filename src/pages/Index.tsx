
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

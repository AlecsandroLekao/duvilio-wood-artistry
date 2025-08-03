import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ExhibitionsSection from "@/components/ExhibitionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ExhibitionsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;

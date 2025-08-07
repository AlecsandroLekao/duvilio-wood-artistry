import { Button } from "@/components/ui/button";
import carlosDuvilioPortrait from "@/assets/carlos-duvilio-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-elegant relative overflow-hidden">
      {/* Wood grain background texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-wood"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Artist photo */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <img
                src={carlosDuvilioPortrait}
                alt="Carlos Duvilio trabalhando em sua escultura"
                className="relative w-full h-[600px] object-cover rounded-2xl shadow-elegant transform group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Right side - Artist name and description */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-wood bg-clip-text text-transparent leading-tight">
                Carlos
                <br />
                Duvilio
                <br />
                Squarcini
              </h1>
              <div className="w-24 h-1 bg-gradient-accent mx-auto lg:mx-0"></div>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Esculturas Exclusivas em Madeira
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Artista renomado de Campinas-SP, especializado em criar obras únicas que transformam madeira em arte.
              Reconhecido internacionalmente por suas exposições em diversos países.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="elegant" size="xl" className="group">
                Ver Obras
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="outline" size="xl" className="border-wood-grain text-wood-grain hover:bg-wood-grain hover:text-cream">
                Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-accent rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;
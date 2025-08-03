import { Button } from "@/components/ui/button";
import internationalExhibition from "@/assets/international-exhibition.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-wood-grain">
                Sobre o Artista
              </h2>
              <div className="w-24 h-1 bg-gradient-accent"></div>
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Carlos Duvilio é um escultor renomado de Campinas, São Paulo, que há décadas dedica sua vida à arte de transformar madeira em obras de beleza extraordinária. Sua paixão pela escultura começou ainda jovem e evoluiu para uma carreira internacional de prestígio.
              </p>
              
              <p>
                Com técnicas refinadas e um olhar único para as possibilidades da madeira, Carlos criou um estilo próprio que combina tradição artesanal com contemporaneidade. Suas obras já foram expostas em galerias e museus de diversos países, incluindo França, Itália, Estados Unidos e Argentina.
              </p>
              
              <p>
                O reconhecimento internacional de seu trabalho o estabeleceu como uma das principais referências em escultura em madeira no Brasil. Cada peça é única, refletindo não apenas sua maestria técnica, mas também sua profunda conexão espiritual com a matéria-prima.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-grain">25+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-grain">8</div>
                <div className="text-sm text-muted-foreground">Países Visitados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-grain">150+</div>
                <div className="text-sm text-muted-foreground">Obras Criadas</div>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" className="group">
              Conhecer Trajetória
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
          
          {/* Right side - International exhibition photo */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-wood rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <img
                src={internationalExhibition}
                alt="Carlos Duvilio em exposição internacional"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-elegant transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-grain/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium">Exposição Internacional - Paris, França</p>
                <p className="text-xs opacity-80">Galeria d'Art Contemporain, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
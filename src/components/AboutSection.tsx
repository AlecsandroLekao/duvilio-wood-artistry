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
               Carlos Duvilio Squarcini é um escultor renomado de Campinas, São Paulo, que desde 1967 dedica sua vida à arte de transformar a madeira em obras de beleza extraordinária. Sua paixão pela escultura se manifesta em um trabalho profundamente influenciado pela arte sacra brasileira e pela mestria de nomes como Aleijadinho.
              </p>
              
              <p>
               Com técnicas refinadas e um olhar único para as possibilidades da madeira, Carlos criou um estilo próprio que combina a riqueza da tradição artesanal com a sua identidade. Suas obras já foram expostas em diversos eventos culturais, incluindo exposições no SESC Campinas e São Paulo.
              </p>
              
              <p>
                O reconhecimento de seu trabalho o levou a representar o Brasil no World Wood Day, um evento internacional realizado na China e na Turquia, onde teve a oportunidade de compartilhar sua arte com escultores do mundo todo, assim se consolidando como uma das principais referências em escultura em madeira no Brasil. Cada peça que produz é única, refletindo não apenas sua maestria técnica, mas também sua profunda conexão espiritual com a matéria-prima.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-grain">50+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-grain">500+</div>
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
                <p className="text-sm font-medium">World Wood Day - Turquia</p>
                <p className="text-xs opacity-80">Eskişehir, TR - 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
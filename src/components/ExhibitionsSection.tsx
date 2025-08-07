import { MapPin, Calendar } from "lucide-react";

const exhibitions = [
  {
    country: "França",
    city: "Paris",
    venue: "Galerie d'Art Contemporain",
    year: "2023",
    description: "Exposição individual com 15 obras em madeira brasileira"
  },
  {
    country: "Itália",
    city: "Florença",
    venue: "Palazzo delle Esposizioni",
    year: "2022",
    description: "Participação na Bienal Internacional de Escultura"
  },
  {
    country: "Estados Unidos",
    city: "Nova York",
    venue: "Contemporary Wood Gallery",
    year: "2021",
    description: "Mostra coletiva 'Masters of Wood'"
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    venue: "Museo de Arte Moderno",
    year: "2020",
    description: "Exposição 'Arte Brasileira Contemporânea'"
  },
  {
    country: "Espanha",
    city: "Madrid",
    venue: "Centro de Arte Reina Sofía",
    year: "2019",
    description: "Feira Internacional de Arte Contemporânea"
  },
  {
    country: "Portugal",
    city: "Lisboa",
    venue: "Museu Nacional de Arte Antiga",
    year: "2018",
    description: "Mostra 'Tradição e Inovação em Madeira'"
  }
];

const ExhibitionsSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant relative">
      <div className="absolute inset-0 opacity-10 bg-gradient-wood"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-wood-grain">
            Exposições pelo Mundo
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A arte de Carlos Duvilio transcendeu fronteiras, sendo reconhecida e prestigiadas ao redor do mundo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elegant transform hover:-translate-y-2 transition-all duration-500 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-wood-grain group-hover:text-primary transition-colors">
                      {exhibition.country}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exhibition.city}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exhibition.year}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="font-medium text-foreground">{exhibition.venue}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exhibition.description}</p>
                </div>
                
                <div className="pt-2">
                  <div className="w-full h-1 bg-gradient-accent/20 rounded-full">
                    <div className="h-1 bg-gradient-accent rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* World map visualization hint */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center space-x-4 bg-wood-grain/10 backdrop-blur-sm rounded-2xl px-8 py-4">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-wood-grain font-medium">5 países • 3 continentes • Reconhecimento internacional</span>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
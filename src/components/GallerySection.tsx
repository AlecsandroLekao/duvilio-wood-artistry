import { useState } from "react";
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";

const sculptures = [
  {
    id: 1,
    image: sculpture1,
    title: "Essência Abstrata",
    material: "Mogno Polido",
    year: "2023",
    description: "Uma exploração das formas orgânicas através do mogno brasileiro"
  },
  {
    id: 2,
    image: sculpture2,
    title: "Voo Livre",
    material: "Nogueira Escura",
    year: "2023",
    description: "Inspirada na liberdade dos pássaros, capturando movimento em madeira"
  },
  {
    id: 3,
    image: sculpture3,
    title: "Torso Contemporâneo",
    material: "Cerejeira",
    year: "2022",
    description: "Interpretação moderna da forma humana em cerejeira polida"
  },
  {
    id: 4,
    image: sculpture4,
    title: "Fluidez Natural",
    material: "Carvalho",
    year: "2022",
    description: "Formas fluidas que celebram a beleza natural da madeira"
  }
];

const GallerySection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-gradient-wood"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-wood-grain">
            Galeria de Obras
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada escultura conta uma história única, moldada pela maestria artesanal e pela paixão pela arte em madeira. 
            Explore algumas das obras mais representativas do artista.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sculptures.map((sculpture, index) => (
            <div
              key={sculpture.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredId(sculpture.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-warm group-hover:shadow-elegant transition-all duration-500">
                <img
                  src={sculpture.image}
                  alt={sculpture.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-wood-grain via-wood-grain/50 to-transparent transition-opacity duration-500 ${
                    hoveredId === sculpture.id ? 'opacity-90' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{sculpture.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{sculpture.material} • {sculpture.year}</p>
                    <p className="text-xs opacity-80 leading-relaxed">{sculpture.description}</p>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
              
              {/* Title visible by default */}
              <div className="pt-4 text-center">
                <h3 className="text-lg font-semibold text-wood-grain">{sculpture.title}</h3>
                <p className="text-sm text-muted-foreground">{sculpture.material}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-wood text-cream px-8 py-3 rounded-lg shadow-warm hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
            Ver Coleção Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
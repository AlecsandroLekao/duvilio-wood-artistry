import { useState } from "react";
import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";

const sculptures = [
  {
    id: 1,
    image: sculpture1,
    title: "Dragão Chinês",
    material: "Madeira Nobre",
    year: "2024",
    description: "A peça se destaca pela riqueza de detalhes, desde as escamas minuciosamente entalhadas até a expressividade do rosto. A textura e o movimento transmitem a energia mítica da criatura, celebrando a cultura asiática com um toque artesanal brasileiro."
  },
  {
    id: 2,
    image: sculpture2,
    title: "Griffo",
    material: "Madeira Nobre",
    year: "2021",
    description: "Com um estilo que remete à arte sacra e à heráldica, esta escultura de um grifo em madeira nobre impressiona pelo seu volume e pelo acabamento detalhado. A peça destaca-se pela robustez do corpo e pela suavidade das penas, unindo a majestade da águia com a força do leão. É uma obra que evoca a mitologia e a tradição."
  },
  {
    id: 3,
    image: sculpture3,
    title: "Ponte",
    material: "Madeira Nobre",
    year: "2015",
    description: "A escultura Ponte é uma peça de grande expressividade e simbolismo. Ela representa um abraço, com as mãos unindo-se acima de uma cabeça curvada, sugerindo a conexão humana, o apoio mútuo e a superação. O acabamento rústico da madeira nobre e a forma abstrata e fluida da peça criam uma obra de profunda reflexão sobre as relações humanas."
  },
  {
    id: 4,
    image: sculpture4,
    title: "Africana",
    material: "Madeira Nobre",
    year: "2013",
    description: "Esculpida em madeira nobre, a peça é uma celebração da beleza e da dignidade da figura feminina. A escultura retrata uma mulher nua em um porte ereto e majestoso, equilibrando um cesto na cabeça. O realismo anatômico e o polimento da madeira destacam a força, a graça e a serenidade, transformando a peça em um tributo à cultura africana."
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
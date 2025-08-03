import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Curadora, Galerie d'Art Contemporain - Paris",
    content: "As esculturas de Carlos Duvilio possuem uma qualidade rara: elas conseguem capturar a alma da madeira e transformá-la em poesia tridimensional. Seu trabalho é uma celebração da maestria artesanal brasileira.",
    rating: 5,
    country: "França"
  },
  {
    name: "Alessandro Rossi",
    role: "Crítico de Arte, La Republica",
    content: "Poucos artistas conseguem dominar a madeira com a sensibilidade e técnica de Duvilio. Suas obras são um diálogo perfeito entre tradição e modernidade, estabelecendo novos padrões na escultura contemporânea.",
    rating: 5,
    country: "Itália"
  },
  {
    name: "Helena Nascimento",
    role: "Colecionadora de Arte",
    content: "Tenho obras de Carlos há mais de 10 anos. Cada peça carrega uma energia única e se torna o centro de qualquer ambiente. É um investimento em arte e beleza que só se valoriza com o tempo.",
    rating: 5,
    country: "Brasil"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-wood"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-wood-grain">
            Reconhecimento
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que dizem críticos de arte, curadores e colecionadores sobre o trabalho de Carlos Duvilio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-warm hover:shadow-elegant transform hover:-translate-y-2 transition-all duration-500 animate-fade-in relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-accent p-3 rounded-full shadow-glow">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="space-y-6 pt-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <p className="font-semibold text-wood-grain">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-3 bg-gradient-accent rounded-sm"></div>
                    <span className="text-xs font-medium text-accent">{testimonial.country}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-6 bg-wood-grain/10 backdrop-blur-sm rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-wood-grain">98%</div>
              <div className="text-xs text-muted-foreground">Satisfação</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-wood-grain">50+</div>
              <div className="text-xs text-muted-foreground">Colecionadores</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-wood-grain">15+</div>
              <div className="text-xs text-muted-foreground">Críticas Positivas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
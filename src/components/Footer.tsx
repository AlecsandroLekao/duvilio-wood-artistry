import { Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-wood text-cream relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-accent"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-accent">Carlos Duvilio</h3>
              <p className="text-cream/80 leading-relaxed">
                Escultor renomado especializado em arte em madeira, 
                criando obras exclusivas que transcendem fronteiras e 
                conectam tradição artesanal com contemporaneidade.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-cream/60">Conecte-se</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-cream/30 text-cream hover:bg-cream hover:text-wood-grain">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-cream/30 text-cream hover:bg-cream hover:text-wood-grain">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-cream/30 text-cream hover:bg-cream hover:text-wood-grain">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold text-accent">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-wood-grain" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a 
                    href="tel:+5519981211217" 
                    className="text-cream/80 hover:text-accent transition-colors"
                  >
                    (19) 98121-1217
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent transition-colors">
                  <MapPin className="w-5 h-5 text-accent group-hover:text-wood-grain" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-cream/80">Campinas - SP - Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-wood-grain" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:contato@carlosduvilio.com.br" 
                    className="text-cream/80 hover:text-accent transition-colors"
                  >
                    contato@carlosduvilio.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold text-accent">Navegação</h4>
            
            <div className="space-y-3">
              {[
                'Sobre o Artista',
                'Galeria de Obras',
                'Exposições',
                'Encomendas',
                'Contato'
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-cream/80 hover:text-accent transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link}
                </a>
              ))}
            </div>
            
            <div className="pt-6">
              <Button variant="accent" size="lg" className="w-full group">
                Solicitar Orçamento
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © 2024 Carlos Duvilio. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-cream/60">
              <span>Artista renomado de Campinas-SP</span>
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              <span>Reconhecimento internacional</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-copper/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
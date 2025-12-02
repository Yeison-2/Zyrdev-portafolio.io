
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Zyrdev. Casi todos los derechos reservados
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <span>Hecho con</span>
            <Heart size={14} className="text-red-500 animate-pulse-slow" fill="currentColor" />
            <span>por Zyrdev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

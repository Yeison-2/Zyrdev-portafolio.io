
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={cn(
            "flex items-center gap-3 mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <Mail className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Contacto</h2>
        </div>

        <div className={cn(
          "max-w-3xl mx-auto glass-strong p-8 rounded-3xl shadow-material-xl",
          isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"
        )}>
          <h3 className="text-2xl font-bold mb-6 text-center">¿Hablamos?</h3>
          
          <p className="text-muted-foreground text-center mb-8">
            Si quieres contactar conmigo, puedes hacerlo a través de mis redes sociales o enviándome un correo.
          </p>
          
          <div className="flex justify-center gap-6 mb-10">
            <a 
              href="https://github.com/Yeison-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/zyrdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <a
            href="mailto:ysromero@jdc.edu.co"
            className={cn(
              "group flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-white font-medium transition-all duration-300 relative overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/80 before:to-blue-400 before:translate-x-[-100%] before:hover:translate-x-0 before:transition-transform before:duration-300"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Enviar email</span>
            <ArrowRight 
              size={18} 
              className={cn(
                "relative z-10 transition-transform duration-300",
                isHovered ? "transform translate-x-1" : ""
              )} 
            />
          </a>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>📧 ysromero@jdc.edu.co</p>
            <p className="mt-1">📍 Bogotá D.C., Colombia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

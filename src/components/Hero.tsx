
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative w-100 h-48 rounded-full overflow-hidden border-0 border-primary shadow-lg">
              <img 
                src="https://avatars.githubusercontent.com/u/88981717?v=4" 
                alt="Profile" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="glass px-4 py-2 rounded-full inline-flex items-center text-sm font-medium animate-pulse-slow">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Disponible para trabajar
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hey, soy <span className="text-gradient">Zyrdev</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-muted-foreground animate-fade-in-up animation-delay-100">
            <span className="font-semibold">+4 años de experiencia. Estudiante de</span> <span className="font-bold text-foreground">Ingenieria de Sistemas</span> de Tunja, Colombia ES. Especializado en el desarrollo backend con java.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              Contáctame
            </a>
            <a
              href="https://www.linkedin.com/in/yeison-stiven-romero-salinas-60b410223/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

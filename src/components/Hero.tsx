
import { ArrowRight, Mail, Linkedin, Github, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-primary shadow-lg">
              <img 
                src="https://github.com/Yeison-2.png"
                alt="Yeison Romero" 
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
            Hola, soy <span className="text-gradient">Yeison Romero</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-muted-foreground animate-fade-in-up animation-delay-100">
            <span className="font-semibold">Android Developer</span> apasionado por crear experiencias móviles fluidas y eficientes. Especializado en <span className="font-bold text-foreground">Kotlin</span>, <span className="font-bold text-foreground">Jetpack Compose</span> y <span className="font-bold text-foreground">MVVM</span>. Actualmente estudiando <span className="font-semibold">Ingeniería de Sistemas</span> (7mo semestre) en Tunja, Colombia.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 mb-8 animate-fade-in-up animation-delay-150">
            <div className="glass px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
              <Smartphone size={16} className="text-primary" />
              <span>Android Native</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-full text-sm">
              <span>Kotlin</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-full text-sm">
              <span>Jetpack Compose</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-full text-sm">
              <span>MVVM Architecture</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail size={18} />
              Contáctame
            </a>
            <a
              href="https://www.linkedin.com/in/zyrdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Yeison-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Mail, Linkedin, Github, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex flex-col justify-center"
    >
      {/* Fondo sutil con microgradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/2 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 animate-fade-in-up">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-border shadow-material">
              <img 
                src="https://github.com/Yeison-2.png"
                alt="Yeison Romero" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="glass-strong px-4 py-2 rounded-full inline-flex items-center text-sm font-medium animate-pulse-slow shadow-material">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Disponible para trabajar
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            Hola, soy <span className="text-gradient">Yeison Romero</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
            <span className="font-semibold">Android Developer</span> apasionado por crear experiencias móviles fluidas y eficientes. Especializado en <span className="font-semibold text-primary">Kotlin</span>, <span className="font-semibold text-primary">Jetpack Compose</span> y <span className="font-semibold text-primary">MVVM</span>. Actualmente estudiando <span className="font-semibold">Ingeniería de Sistemas</span> (7mo semestre). Ubicado en Bogotá D.C., Colombia.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 mb-8 animate-fade-in-up animation-delay-300">
            {[
              { icon: Smartphone, label: "Android Native" },
              { icon: null, label: "Kotlin" },
              { icon: null, label: "Jetpack Compose" },
              { icon: null, label: "MVVM" },
            ].map((tech, index) => (
              <div
                key={index}
                className={cn(
                  "glass px-3 py-1.5 rounded-full text-sm flex items-center gap-2",
                  "text-muted-foreground font-medium",
                  "transition-material hover:text-foreground"
                )}
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                {tech.icon && <tech.icon size={16} className="text-primary" />}
                <span>{tech.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                "bg-primary text-white font-medium",
                "transition-material hover:bg-primary/90",
                "shadow-material"
              )}
            >
              <Mail size={18} />
              <span>Contáctame</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zyrdev"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                "glass-strong hover:bg-primary/10 transition-material",
                "hover:scale-105 hover:shadow-material"
              )}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Yeison-2"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                "glass-strong hover:bg-primary/10 transition-material",
                "hover:scale-105 hover:shadow-material"
              )}
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

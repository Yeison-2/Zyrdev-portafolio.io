
import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function About() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  return (
    <section id="about" className="py-24 relative">
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
          <User className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Sobre mí</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6 text-lg">
    <p className="text-balance animate-fade-in-up leading-relaxed">
        ¡Hola! Soy <span className="font-semibold text-primary">Yeison Romero (Zyrdev)</span>, un apasionado <span className="font-semibold text-primary">desarrollador Android</span> enfocado en crear experiencias móviles fluidas y eficientes. Transformo ideas en aplicaciones nativas funcionales utilizando <span className="font-semibold text-primary">Kotlin</span> y el ecosistema moderno de Android (<span className="font-semibold text-primary">Jetpack Compose</span>, Material Design 3).
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-100 leading-relaxed">
        Me especializo en todo el <span className="font-semibold text-foreground">ciclo de vida del desarrollo</span>, desde la arquitectura hasta el despliegue. Actualmente participo como <span className="font-semibold text-primary">Android Developer & Investigador</span> en el Semillero TECSI de la Fundación Universitaria Juan de Castellanos, donde desarrollo soluciones móviles para el sector agroindustrial.
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-200 leading-relaxed">
        Cuento con <span className="font-semibold text-primary">certificación Scrum</span>, lo que me permite integrarme rápidamente en equipos ágiles y mantener una comunicación transparente. Mi objetivo es encontrar oportunidades como <span className="font-semibold text-primary">Android Developer</span> o proyectos freelance donde pueda aportar valor inmediato con código limpio y mantenible.
    </p>
</div>
          
          <div className="lg:col-span-2 h-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-material bg-white">
              <img 
                src="/mi_avatar.webp"
                alt="Android Developer Avatar - Yeison Romero" 
                className="w-full h-full object-contain p-6"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

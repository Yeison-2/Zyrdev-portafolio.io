
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function Education() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  return (
    <section id="education" className="py-24 bg-muted/30 relative">
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
          <GraduationCap className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Educación</h2>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="relative pl-8 border-l-2 border-secondary py-6 animate-fade-in-up before:absolute before:content-[''] before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[9px] before:top-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">Ingeniería de Sistemas</h3>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-lg text-primary font-medium">Fundación Universitaria Juan de Castellanos</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">2022 - 2027 • Tunja, Colombia</p>
            <p className="text-sm text-primary font-semibold mb-4">7mo Semestre (En curso)</p>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Formación integral en:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li><span className="font-semibold">Fundamentos de Ingeniería:</span> Lógica de Programación, Estructuras de Datos y Análisis de Algoritmos (Clave para escribir código eficiente en Android).</li>
                <li><span className="font-semibold">Desarrollo de Software:</span> Programación Orientada a Objetos (POO) avanzada y Patrones de Diseño (MVC) aplicados principalmente en Java.</li>
                <li><span className="font-semibold">Infraestructura y Sistemas:</span> Administración de Sistemas Operativos (Linux/Windows), configuración de servidores (Moodle sobre Linux) y protocolos de red local.</li>
                <li><span className="font-semibold">Hardware e IoT:</span> Experiencia práctica con FPGAs, microprocesadores y Arduino (Lógica digital y electrónica básica).</li>
                <li><span className="font-semibold">Análisis de Datos:</span> Uso de Python para limpieza de datos y modelado estadístico.</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-secondary py-6 animate-fade-in-up animation-delay-100 before:absolute before:content-[''] before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[9px] before:top-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">Misión TIC 2022</h3>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-lg text-primary font-medium">Universidad Tecnológica de Pereira</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">Octubre 2021 - Diciembre 2021 • Colombia</p>
            
            <div className="space-y-2 text-muted-foreground">
              <p>• <span className="font-semibold">Ciclo 1:</span> Fundamentos de programación (Python)</p>
              <p>• <span className="font-semibold">Ciclo 2:</span> Programación básica (Java)</p>
              <p>• <span className="font-semibold">Ciclo 3:</span> Desarrollo de software (Web: HTML, JSON, CSS, JavaScript)</p>
              <p>• <span className="font-semibold">Ciclo 4:</span> Desarrollo de aplicaciones móviles (Android Java)</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-secondary py-6 animate-fade-in-up animation-delay-200 before:absolute before:content-[''] before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[9px] before:top-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">Metodología de la Programación de Sistemas Informáticos</h3>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-lg text-primary font-medium">SENA</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">Marzo 2021 • Colombia</p>
          </div>

          <div className="relative pl-8 border-l-2 border-secondary py-6 animate-fade-in-up animation-delay-300 before:absolute before:content-[''] before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[9px] before:top-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">Scrum Fundamentals Certified</h3>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-lg text-primary font-medium">SCRUM Study</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">Agosto 2025 • Certificación Profesional en Metodología Ágil Scrum</p>
          </div>
        </div>
      </div>
    </section>
  );
}


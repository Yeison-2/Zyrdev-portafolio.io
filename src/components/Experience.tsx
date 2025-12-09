
import { Briefcase } from "lucide-react";
import ExperienceItem from "./ExperienceItem";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  return (
    <section id="experience" className="py-24 relative" aria-labelledby="experience-heading">
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
          <Briefcase className="text-primary" size={32} aria-hidden="true" />
          <h2 id="experience-heading" className="text-3xl font-bold">Experiencia Profesional - Desarrollo Android</h2>
        </div>

        <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
          Más de <strong>3 años de experiencia</strong> desarrollando <strong>aplicaciones Android nativas con Kotlin</strong>, implementando arquitecturas modernas y liderando proyectos de digitalización tecnológica.
        </p>

        <div className="space-y-2">
          <ExperienceItem
            title="Android Developer & Investigador"
            company="Fundación Universitaria Juan de Castellanos - Semillero TECSI"
            period="Febrero 2025 - Noviembre 2025"
            location="Tunja, Boyacá, Colombia"
            description="Desempeño un rol dual combinando el desarrollo técnico de software con el liderazgo social en programas de tecnología. Desarrollo de aplicación nativa para el sector agroindustrial (Gestión de Recolección de Café) utilizando Kotlin y Jetpack Compose bajo arquitectura MVVM."
            achievements={[
              "Arquitectura Moderna: Diseño y desarrollo de aplicación nativa utilizando Kotlin y Jetpack Compose bajo arquitectura MVVM",
              "Funcionalidad Offline: Implementación de Room Database para garantizar operatividad en zonas rurales sin conexión",
              "Ciclo de Desarrollo: Participación activa desde el análisis de requerimientos hasta la validación de prototipos con usuarios finales",
              "Digitalización de Procesos: Transformación de procesos manuales a soluciones digitales para el sector agroindustrial"
            ]}
            delay={100}
          />
          <ExperienceItem
            title="Tutor Tecnológico - Programa Revolución 4.0"
            company="Fundación Universitaria Juan de Castellanos"
            period="Agosto 2025 - Noviembre 2025"
            location="Tunja, Boyacá, Colombia"
            description="Tutor principal en el programa de alfabetización digital para adultos mayores. Responsable de la planificación de clases, gestión de asistencia y evaluación del progreso."
            achievements={[
              "Liderazgo de Grupos: Tutor principal responsable de la planificación de clases, gestión de asistencia y evaluación del progreso",
              "Comunicación Asertiva: Desarrollo de habilidades avanzadas de comunicación al traducir conceptos tecnológicos complejos a un lenguaje accesible",
              "Impacto Social: Facilitación de la eliminación de brechas digitales en adultos mayores"
            ]}
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}

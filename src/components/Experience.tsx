
import { Briefcase } from "lucide-react";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Experiencia laboral</h2>
        </div>

        <div className="space-y-2">
          <ExperienceItem
            title="Android Developer & Investigador"
            company="Fundación Universitaria Juan de Castellanos - Semillero TECSI"
            period="Febrero 2025 - Noviembre 2025"
            description="Desempeño un rol dual combinando el desarrollo técnico de software con el liderazgo social en programas de tecnología. Desarrollo de aplicación nativa para el sector agroindustrial (Gestión de Recolección de Café) utilizando Kotlin y Jetpack Compose bajo arquitectura MVVM. Implementación de Room Database para garantizar operatividad offline en zonas rurales sin conexión, digitalizando procesos que antes eran manuales. Participación activa desde el análisis de requerimientos hasta la validación de prototipos con usuarios finales."
            delay={100}
          />
          <ExperienceItem
            title="Tutor Tecnológico - Programa Revolución 4.0"
            company="Fundación Universitaria Juan de Castellanos"
            period="Agosto 2025 - Noviembre 2025"
            description="Tutor principal en el programa de alfabetización digital para adultos mayores. Responsable de la planificación de clases, gestión de asistencia y evaluación del progreso. Desarrollo de habilidades avanzadas de comunicación al traducir conceptos tecnológicos complejos a un lenguaje accesible, facilitando la eliminación de brechas digitales."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}


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
            title="Semillerista investigador TECSI"
            company="Fundación Universitaria Juan de Castellanos"
            period="Actualmente..."
            description="Participo activamente en el semillero de investigación TECSI, donde mejoro mis habilidades en Inteligencia Artificial. Mis responsabilidades incluyen investigar sobre el uso de la inteligencia artificial en el contexto de la instituciones educativas su viabilidad y como se puede implementar un sistema usando este valioso recurso."
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}

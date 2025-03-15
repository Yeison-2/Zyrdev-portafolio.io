
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
            title="Creador de Contenido"
            company="Twitch"
            period="Actualmente..."
            description="Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub."
            delay={100}
          />
          
          <ExperienceItem
            title="Lead Frontend Developer"
            company="Company XYZ"
            period="2018 - 2021"
            description="Lideré un equipo de 5 desarrolladores en la creación de aplicaciones web utilizando React, TypeScript y TailwindCSS. Implementé metodologías ágiles y mejoré el rendimiento de las aplicaciones en un 40%."
            delay={200}
          />
          
          <ExperienceItem
            title="Senior Software Engineer"
            company="Tech Startup"
            period="2015 - 2018"
            description="Desarrollé aplicaciones web de alto rendimiento utilizando las últimas tecnologías frontend. Colaboré estrechamente con equipos de diseño y backend para crear experiencias de usuario excepcionales."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

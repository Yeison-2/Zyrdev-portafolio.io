
import { Code } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Code className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Proyectos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="SVGL - A beautiful library with SVG logos"
            description="Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS."
            image="/lovable-uploads/ff644640-5865-419f-9fa8-28ca4826d121.png"
            technologies={[
              { name: "Next.js", icon: "nextjs" },
              { name: "Tailwind CSS", icon: "tailwind" }
            ]}
            codeUrl="https://github.com/username/project1"
            demoUrl="https://project1-demo.com"
            delay={100}
          />
          
          <ProjectCard
            title="AdventJS - Retos de programación con JavaScript y TypeScript"
            description="Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS."
            image="/lovable-uploads/b452c680-7ee2-4b7e-8e15-4a6169c7af74.png"
            technologies={[
              { name: "Next.js", icon: "nextjs" },
              { name: "Tailwind CSS", icon: "tailwind" }
            ]}
            demoUrl="https://project2-demo.com"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}

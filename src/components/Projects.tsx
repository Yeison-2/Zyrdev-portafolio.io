
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
            title="¡Creando Música con Estructuras de Datos! Proyecto de Reproductor de Música en Java"
            description="Este proyecto me permitió aplicar mis conocimientos en estructuras de datos, para crear una aplicación funcional y entretenida. El reproductor de música no solo reproduce archivos MP3, sino que también extrae metadatos y presenta una interfaz gráfica moderna.
"
            image="https://media.licdn.com/dms/image/v2/D4E2DAQEHrNGmG8p9xQ/profile-treasury-image-shrink_800_800/B4EZWXjZ__H0AY-/0/1742004396458?e=1742702400&v=beta&t=Fv_SsKT0E1OwSGkxzcTMbfG4-ZQasEd_0eGYWk7XPg0"
            technologies={[
              { name: "Java.", icon: "Java" },
            ]}
            codeUrl="https://github.com/Yeison-2/Reproductor-de-musica"
            
            delay={100}
          />

            <ProjectCard
            title="Análisis Estadístico"
            description="Este proyecto presenta un análisis detallado del uso de aplicaciones móviles y el comportamiento del usuario en un grupo de 700 personas. El objetivo principal es comprender los patrones de uso de aplicaciones y el comportamiento del usuario, y extraer conclusiones significativas basadas en los datos proporcionados."
            image="https://github.com/Yeison-2/Estadistica/blob/main/diagrama_dispersion.png?raw=true"
            technologies={[
              { name: "Python.", icon: "Python" },
            ]}
            codeUrl="https://github.com/Yeison-2/Estadistica"
            
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}


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
            image="https://private-user-images.githubusercontent.com/88981717/388214329-65b45761-6f41-4c50-a952-d902c80a7a66.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIwNzUwNzUsIm5iZiI6MTc0MjA3NDc3NSwicGF0aCI6Ii84ODk4MTcxNy8zODgyMTQzMjktNjViNDU3NjEtNmY0MS00YzUwLWE5NTItZDkwMmM4MGE3YTY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzE1VDIxMzkzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ4ZDViZjhlOWM5M2RhNTc5NTFjYjAyMmY3MzcwNGI4OWJjNTA2MGVhODE4NWM2N2Q1MDEzYjVhYzk3YWVlNGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.AuuDjZNjWcv4VieHIzPAYWTtkAhvhquM0lHO9QQXMa8"
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

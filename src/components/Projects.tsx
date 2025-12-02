
import { Code } from "lucide-react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Code className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Proyectos</h2>
        </div>

        <div className="space-y-2">
          <ProjectItem
            title="Sistema de Gestión de Recolección de Café"
            description="Aplicación Android nativa desarrollada para digitalizar el proceso de recolección de café en zonas rurales. Implementa arquitectura MVVM con Kotlin y Jetpack Compose, garantizando una experiencia de usuario moderna y fluida. La solución incluye persistencia de datos offline mediante Room Database, permitiendo operatividad completa sin conexión a internet, esencial para caficultores en áreas remotas."
            technologies={[
              { name: "Kotlin", icon: "Kotlin" },
              { name: "Android", icon: "Android" },
              { name: "Jetpack Compose", icon: "Compose" },
              { name: "MVVM", icon: "MVVM" },
              { name: "Room", icon: "Room" },
            ]}
            delay={100}
          />

          <ProjectItem
            title="Reproductor de Música con Estructuras de Datos"
            description="Aplicación de escritorio desarrollada en Java que demuestra el dominio de estructuras de datos avanzadas. El reproductor no solo reproduce archivos MP3, sino que también extrae y gestiona metadatos musicales, implementando algoritmos eficientes para la organización y búsqueda de contenido. Incluye una interfaz gráfica moderna construida con Swing."
            technologies={[
              { name: "Java", icon: "Java" },
            ]}
            codeUrl="https://github.com/Yeison-2/Reproductor-de-musica"
            delay={200}
          />

          <ProjectItem
            title="Análisis Estadístico de Comportamiento Móvil"
            description="Proyecto de análisis de datos que examina patrones de uso de aplicaciones móviles en una muestra de 700 usuarios. Utiliza Python para procesamiento estadístico, visualización de datos y modelado predictivo. El análisis incluye correlaciones, regresiones y visualizaciones interactivas que revelan insights sobre el comportamiento del usuario en dispositivos móviles."
            technologies={[
              { name: "Python", icon: "Python" },
            ]}
            codeUrl="https://github.com/Yeison-2/Estadistica"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

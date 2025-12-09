import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InternalLink {
  label: string;
  href: string;
  description: string;
}

const sectionLinks: InternalLink[] = [
  {
    label: "Experiencia Profesional",
    href: "#experience",
    description: "Ver mi trayectoria como desarrollador Android"
  },
  {
    label: "Proyectos Android",
    href: "#projects",
    description: "Explora mis aplicaciones con Kotlin y Jetpack Compose"
  },
  {
    label: "Sobre Mí",
    href: "#about",
    description: "Conoce más sobre mi especialización técnica"
  },
  {
    label: "Educación",
    href: "#education",
    description: "Mi formación académica y certificaciones"
  },
  {
    label: "Contacto",
    href: "#contact",
    description: "¿Tienes un proyecto? ¡Hablemos!"
  }
];

export default function InternalNavigation() {
  return (
    <nav 
      className="py-12 bg-muted/30"
      aria-label="Navegación de secciones del portafolio"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explora mi Portafolio Android
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectionLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={cn(
                "group p-4 rounded-lg glass hover:glass-strong transition-all",
                "hover:scale-105 hover:shadow-material"
              )}
              aria-label={link.description}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <ArrowRight 
                  size={16} 
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

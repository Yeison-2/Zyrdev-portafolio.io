
import { cn } from "@/lib/utils";
import { ExternalLink, Code2, Play } from "lucide-react";
import { useState } from "react";

interface Technology {
  name: string;
  icon: "Kotlin" | "Android" | "Room" | "MVVM" | "Compose" | "Java" | "Python" | "Retrofit";
}

interface ProjectItemProps {
  title: string;
  technologies: Technology[];
  description: string;
  codeUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  delay?: number;
}

export default function ProjectItem({ 
  title, 
  technologies,
  description,
  codeUrl,
  imageUrl,
  imageAlt,
  delay = 0 
}: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderTechIcon = (icon: Technology["icon"]) => {
    const baseClasses = "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-material";
    
    // Estilo unificado para todos los badges
    return (
      <span className={cn(
        baseClasses,
        "glass text-muted-foreground",
        "hover:text-foreground"
      )}>
        {icon === "Kotlin" && "Kotlin"}
        {icon === "Android" && "Android"}
        {icon === "Room" && "Room DB"}
        {icon === "MVVM" && "MVVM"}
        {icon === "Compose" && "Jetpack Compose"}
        {icon === "Java" && "Java"}
        {icon === "Python" && "Python"}
        {icon === "Retrofit" && "Retrofit"}
      </span>
    );
  };
  
  return (
    <div
      className={cn(
        "relative pl-8 border-l-2 border-secondary/50 py-6 animate-fade-in-up group",
        "before:absolute before:content-[''] before:w-5 before:h-5 before:bg-primary before:rounded-full before:-left-[11px] before:top-7",
        "before:border-2 before:border-background",
        "hover:border-primary transition-material-slow"
      )}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <h3 className="text-xl font-bold group-hover:text-primary transition-material">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            style={{ animationDelay: `${delay + index * 50}ms` }}
            className="animate-fade-in-up"
          >
            {renderTechIcon(tech.icon)}
          </div>
        ))}
      </div>
      
      {/* Contenedor Grid para descripción e imagen */}
      <div className={cn(
        "gap-6 mb-4",
        imageUrl ? "grid md:grid-cols-[1fr_200px] items-start" : ""
      )}>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Imagen/GIF de demostración */}
        {imageUrl && (
          <div className="relative group/image">
            <div className={cn(
              "relative rounded-lg overflow-hidden border-2 border-primary/20",
              "transition-all duration-300",
              "hover:border-primary hover:shadow-lg hover:shadow-primary/20",
              "hover:scale-105"
            )}>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-muted/50 animate-pulse flex items-center justify-center">
                  <Play className="text-primary animate-pulse" size={32} />
                </div>
              )}
              <img
                src={imageUrl}
                alt={imageAlt || `Demostración de ${title}`}
                className={cn(
                  "w-full h-auto object-cover transition-opacity duration-300",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                <span className="text-white text-xs font-medium">Ver demo</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {codeUrl && (
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-material",
            "glass-strong hover:bg-primary/10 hover:scale-105",
            "hover:shadow-material",
            isHovered ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Code2 size={16} />
          Ver código
          <ExternalLink 
            size={16} 
            className={cn(
              "transition-transform duration-300",
              isHovered ? "transform translate-x-1" : ""
            )} 
          />
        </a>
      )}
    </div>
  );
}


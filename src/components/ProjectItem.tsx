
import { cn } from "@/lib/utils";
import { ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";

interface Technology {
  name: string;
  icon: "Kotlin" | "Android" | "Room" | "MVVM" | "Compose" | "Java" | "Python";
}

interface ProjectItemProps {
  title: string;
  technologies: Technology[];
  description: string;
  codeUrl?: string;
  delay?: number;
}

export default function ProjectItem({ 
  title, 
  technologies,
  description,
  codeUrl,
  delay = 0 
}: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
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
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
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


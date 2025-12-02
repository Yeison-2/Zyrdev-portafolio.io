
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
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
    const baseClasses = "inline-flex items-center px-2 py-1 rounded text-xs font-semibold mr-2 mb-2";
    
    switch (icon) {
      case "Kotlin":
        return (
          <span className={`${baseClasses} bg-purple-600 text-white`}>
            Kotlin
          </span>
        );
      case "Android":
        return (
          <span className={`${baseClasses} bg-green-600 text-white`}>
            Android
          </span>
        );
      case "Room":
        return (
          <span className={`${baseClasses} bg-blue-600 text-white`}>
            Room Database
          </span>
        );
      case "MVVM":
        return (
          <span className={`${baseClasses} bg-indigo-600 text-white`}>
            MVVM
          </span>
        );
      case "Compose":
        return (
          <span className={`${baseClasses} bg-teal-500 text-white`}>
            Jetpack Compose
          </span>
        );
      case "Java":
        return (
          <span className={`${baseClasses} bg-orange-500 text-white`}>
            Java
          </span>
        );
      case "Python":
        return (
          <span className={`${baseClasses} bg-yellow-500 text-white`}>
            Python
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      className={cn(
        "relative pl-8 border-l-2 border-secondary py-6 animate-fade-in-up",
        "before:absolute before:content-[''] before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[9px] before:top-7",
        "hover:border-primary transition-colors duration-500"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <div key={index}>{renderTechIcon(tech.icon)}</div>
        ))}
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {codeUrl && (
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1 text-sm font-medium transition-all duration-300",
            isHovered ? "text-primary" : "text-muted-foreground"
          )}
        >
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


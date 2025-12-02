
import { Code, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Technology {
  name: string;
  icon: "nextjs" | "tailwind" | "Java" | "SQL" | "Python" | "Kotlin" | "Android" | "Room" | "MVVM" | "Compose" | "Flutter";
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  codeUrl?: string;
  demoUrl?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  codeUrl,
  demoUrl,
  delay = 0
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const renderTechIcon = (icon: Technology["icon"]) => {
    const baseClasses = "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all";
    
    switch (icon) {
      case "nextjs":
        return (
          <div className={`${baseClasses} bg-black text-white`}>
            <span>Next.js</span>
          </div>
        );
      case "tailwind":
        return (
          <div className={`${baseClasses} bg-cyan-500 text-white`}>
            <span>Tailwind CSS</span>
          </div>
        );
      case "Java":
        return (
          <div className={`${baseClasses} bg-orange-500 text-white`}>
            <span>Java</span>
          </div>
        );
      case "Python":
        return (
          <div className={`${baseClasses} bg-yellow-500 text-white`}>
            <span>Python</span>
          </div>
        );
      case "Kotlin":
        return (
          <div className={`${baseClasses} bg-purple-600 text-white`}>
            <span>Kotlin</span>
          </div>
        );
      case "Android":
        return (
          <div className={`${baseClasses} bg-green-600 text-white`}>
            <span>Android</span>
          </div>
        );
      case "Room":
        return (
          <div className={`${baseClasses} bg-blue-600 text-white`}>
            <span>Room DB</span>
          </div>
        );
      case "MVVM":
        return (
          <div className={`${baseClasses} bg-indigo-600 text-white`}>
            <span>MVVM</span>
          </div>
        );
      case "Compose":
        return (
          <div className={`${baseClasses} bg-teal-500 text-white`}>
            <span>Jetpack Compose</span>
          </div>
        );
      case "Flutter":
        return (
          <div className={`${baseClasses} bg-blue-400 text-white`}>
            <span>Flutter</span>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      className="group rounded-xl overflow-hidden bg-card border border-border animate-fade-in-up hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-blue-400/10 flex items-center justify-center">
        <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          📱
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <div key={index}>{renderTechIcon(tech.icon)}</div>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-3">
          {codeUrl && (
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Code size={16} />
              <span>Code</span>
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Preview</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

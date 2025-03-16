
import { Code, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Technology {
  name: string;
  icon: "nextjs" | "tailwind" | "Java" | "SQL" | "Python";
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  codeUrl?: string;
  demoUrl?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  codeUrl,
  demoUrl,
  delay = 0
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const renderTechIcon = (icon: Technology["icon"]) => {
    switch (icon) {
      case "nextjs":
        return (
          <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded text-xs font-semibold">
            <span>Next.js</span>
          </div>
        );
      case "tailwind":
        return (
          <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
            <span>Tailwind CSS</span>
          </div>
        );
        case "Java":
        return (
          <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
            <span>Java</span>
          </div>
        );

        case "Python":
        return (
          <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
            <span>Python</span>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      className="group rounded-xl overflow-hidden bg-card border border-border animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : ""
          )}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <div key={index}>{renderTechIcon(tech.icon)}</div>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6">
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

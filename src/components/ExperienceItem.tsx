
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}

export default function ExperienceItem({ 
  title, 
  company, 
  period, 
  description,
  delay = 0 
}: ExperienceItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
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
        <span className="hidden sm:inline text-muted-foreground">•</span>
        <span className="text-lg text-primary font-medium">{company}</span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3">{period}</p>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <button 
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition-all duration-300",
          isHovered ? "text-primary" : "text-muted-foreground"
        )}
      >
        Saber más 
        <ArrowRight 
          size={16} 
          className={cn(
            "transition-transform duration-300",
            isHovered ? "transform translate-x-1" : ""
          )} 
        />
      </button>
    </div>
  );
}

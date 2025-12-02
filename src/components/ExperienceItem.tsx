
import { cn } from "@/lib/utils";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
  location?: string;
  achievements?: string[];
}

export default function ExperienceItem({ 
  title, 
  company, 
  period, 
  description,
  delay = 0,
  location,
  achievements
}: ExperienceItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative pl-8 border-l-2 border-secondary/50 py-6 animate-fade-in-up",
        "before:absolute before:content-[''] before:w-5 before:h-5 before:bg-primary before:rounded-full before:-left-[11px] before:top-7",
        "before:border-2 before:border-background",
        "hover:border-primary transition-material-slow group"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <h3 className="text-xl font-bold group-hover:text-primary transition-material">{title}</h3>
        <span className="hidden sm:inline text-muted-foreground">•</span>
        <span className="text-lg text-primary font-medium">{company}</span>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{period}</span>
        </div>
        {location && (
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{description}</p>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button 
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-material",
              "glass-strong hover:bg-primary/10 hover:scale-105",
              "hover:shadow-material",
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
        </DialogTrigger>
        <DialogContent className="glass-strong max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="text-primary" size={24} />
              {title}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-medium">
                  {company}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{period}</span>
                  </div>
                  {location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{location}</span>
                    </div>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <h4 className="font-semibold mb-2">Descripción</h4>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            {achievements && achievements.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Logros y Responsabilidades</h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

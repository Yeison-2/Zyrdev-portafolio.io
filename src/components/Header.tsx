
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-4 glass shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gradient">
          Zyrdev
          </a>

          {isMobile ? (
            <>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md focus:outline-none transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center animate-fade-in">
                  <button 
                    onClick={toggleMobileMenu}
                    className="absolute top-4 right-4 p-2 rounded-md"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                  <nav className="flex flex-col items-center gap-8">
                    {navItems.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className={cn(
                          "text-2xl font-medium hover:text-primary transition-all duration-300",
                          `animation-delay-${index * 100}`
                        )}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-8">
              <div className="flex gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href}
                    className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

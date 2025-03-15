
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Monitor className="h-5 w-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 glass rounded-lg shadow-lg overflow-hidden animate-fade-in z-50">
          <div className="py-1">
            {(['light', 'dark', 'system'] as const).map((t) => (
              <button
                key={t}
                onClick={() => handleThemeChange(t)}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-sm transition-colors duration-300",
                  theme === t ? "bg-primary text-white" : "hover:bg-secondary"
                )}
              >
                {t === 'light' && <Sun className="h-4 w-4 mr-2" />}
                {t === 'dark' && <Moon className="h-4 w-4 mr-2" />}
                {t === 'system' && <Monitor className="h-4 w-4 mr-2" />}
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

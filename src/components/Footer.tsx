
import { Heart, Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/20" role="contentinfo">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zyrdev</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Desarrollador Android freelancer especializado en Kotlin, Jetpack Compose y MVVM. Bogotá, Colombia.
            </p>
            <div className="flex gap-3">
              <a 
                href="mailto:ysromero@jdc.edu.co"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email de contacto"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zyrdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Perfil de LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Yeison-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Perfil de GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-bold text-sm mb-4">Navegación</h3>
            <nav aria-label="Enlaces del sitio">
              <ul className="space-y-2">
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Experiencia Profesional
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Proyectos Android
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Educación
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Columna 3: Tecnologías */}
          <div>
            <h3 className="font-bold text-sm mb-4">Especialización</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Kotlin & Android Studio</li>
              <li>• Jetpack Compose UI</li>
              <li>• Arquitectura MVVM</li>
              <li>• Room Database</li>
              <li>• Retrofit & APIs REST</li>
            </ul>
          </div>

          {/* Columna 4: Ubicación */}
          <div>
            <h3 className="font-bold text-sm mb-4">Ubicación</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <p className="mb-2">Bogotá D.C., Colombia</p>
              <p className="mb-2">Disponible para proyectos remotos y locales</p>
              <p>
                <a href="mailto:ysromero@jdc.edu.co" className="hover:text-primary transition-colors">
                  ysromero@jdc.edu.co
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Yeison Stiven Romero Salinas (Zyrdev). Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Hecho con</span>
              <Heart size={14} className="text-red-500 animate-pulse-slow" fill="currentColor" aria-label="amor" />
              <span className="text-muted-foreground">en Bogotá, Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

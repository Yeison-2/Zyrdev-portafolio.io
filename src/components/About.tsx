
import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function About() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  
  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={cn(
            "flex items-center gap-3 mb-12",
            isVisible ? "animate-fade-in-up" : "opacity-0"
          )}
        >
          <User className="text-primary" size={32} aria-hidden="true" />
          <h2 id="about-heading" className="text-3xl font-bold">Sobre mí - Desarrollador Android en Bogotá</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 text-lg">
            <p className="text-balance animate-fade-in-up leading-relaxed">
              ¡Hola! Soy <strong className="text-primary">Yeison Romero (Zyrdev)</strong>, <strong>desarrollador Android freelancer en Bogotá, Colombia</strong> especializado en crear aplicaciones móviles nativas de alto rendimiento. Con más de 3 años de experiencia en <strong className="text-primary">desarrollo de apps Android con Kotlin</strong>, transformo ideas en soluciones móviles profesionales utilizando las tecnologías más modernas del ecosistema Android.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Especialización Técnica</h3>
            <p className="text-balance animate-fade-in-up animation-delay-100 leading-relaxed">
              Mi stack tecnológico principal incluye <strong className="text-primary">Kotlin</strong> como lenguaje nativo, <strong className="text-primary">Jetpack Compose</strong> para interfaces declarativas modernas, <strong className="text-foreground">arquitectura MVVM</strong> y <strong>Clean Architecture</strong> para código escalable y mantenible. Implemento <strong>Room Database</strong> para persistencia local, <strong>Retrofit</strong> para integración con APIs REST, y <strong>Kotlin Coroutines + Flow</strong> para programación asíncrona eficiente.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Experiencia Profesional</h3>
            <p className="text-balance animate-fade-in-up animation-delay-200 leading-relaxed">
              Actualmente trabajo como <strong className="text-primary">Android Developer & Investigador</strong> en el <strong>Semillero TECSI</strong> de la Fundación Universitaria Juan de Castellanos, donde desarrollo <strong>aplicaciones Android para el sector agroindustrial</strong>. He liderado proyectos de digitalización para caficultores en zonas rurales, implementando soluciones offline-first con sincronización en la nube.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Metodologías y Trabajo en Equipo</h3>
            <p className="text-balance animate-fade-in-up animation-delay-300 leading-relaxed">
              Cuento con <strong className="text-primary">certificación Scrum Fundamentals</strong>, permitiéndome integrarme efectivamente en equipos ágiles. Domino Git y GitHub para control de versiones, aplico principios SOLID, y mantengo código limpio siguiendo las mejores prácticas de Android. Actualmente <strong className="text-green-500">disponible para proyectos freelance</strong> y oportunidades laborales remotas o presenciales en Bogotá.
            </p>

            <div className="mt-8 p-6 glass rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Servicios Profesionales</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ <strong>Desarrollo de aplicaciones Android desde cero</strong></li>
                <li>✅ <strong>Migración de apps legadas a Jetpack Compose</strong></li>
                <li>✅ <strong>Implementación de arquitecturas modernas (MVVM, Clean)</strong></li>
                <li>✅ <strong>Integración con APIs REST, Firebase y servicios cloud</strong></li>
                <li>✅ <strong>Optimización de rendimiento y experiencia de usuario</strong></li>
                <li>✅ <strong>Consultoría técnica en proyectos Android existentes</strong></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2 h-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-material bg-white">
              <img 
                src="/mi_avatar.webp"
                alt="Yeison Romero Zyrdev - Desarrollador Android Kotlin especializado en Jetpack Compose y MVVM en Bogotá Colombia" 
                className="w-full h-full object-contain p-6"
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

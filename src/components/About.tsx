
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-primary" size={32} />
          <h2 className="text-3xl font-bold">Sobre mí</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-6 text-lg">
    <p className="text-balance animate-fade-in-up">
        ¡Hola! Soy <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Yeison Romero (Zyrdev)</span>, un apasionado <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">desarrollador Android</span> enfocado en crear experiencias móviles fluidas y eficientes. Transformo ideas en aplicaciones nativas funcionales utilizando <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Kotlin</span> y el ecosistema moderno de Android (<span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Jetpack Compose</span>, Material Design 3).
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-100">
        Me especializo en todo el <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">ciclo de vida del desarrollo</span>, desde la arquitectura hasta el despliegue. Actualmente participo como <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Android Developer & Investigador</span> en el Semillero TECSI de la Fundación Universitaria Juan de Castellanos, donde desarrollo soluciones móviles para el sector agroindustrial.
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-200">
        Cuento con <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">certificación Scrum</span>, lo que me permite integrarme rápidamente en equipos ágiles y mantener una comunicación transparente. Mi objetivo es encontrar oportunidades como <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Android Developer</span> o proyectos freelance donde pueda aportar valor inmediato con código limpio y mantenible.
    </p>
</div>
          
          <div className="lg:col-span-2 h-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-xl animate-float bg-white">
              <img 
                src="/mi_avatar.webp"
                alt="Android Developer Avatar - Yeison Romero" 
                className="w-full h-full object-contain p-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

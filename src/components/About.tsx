
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
        Me llamo Mittens pero el nombre de mi <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">marca personal es Whiskers</span> y mi <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">pasión por la programación </span>se encendió en 2020 cuando descubrí el poder de <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">Java</span>. Desde entonces, me he sumergido en el mundo del <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">backend</span>, encontrando en Java el lenguaje perfecto para construir soluciones sólidas y eficientes.
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-100">
        Este espacio es más que un repositorio de código; es una plataforma para mostrar mi <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">evolución como desarrollador</span>, conectar con otros profesionales y compartir lo que he aprendido. Mi meta es encontrar un entorno donde pueda seguir creciendo y aportando valor a través de mi trabajo.
    </p>

    <p className="text-balance animate-fade-in-up animation-delay-200">
        Mi objetivo principal con este portafolio es darme a conocer, mostrar mis <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">habilidades en el desarrollo de backend con Java</span> y conectar con oportunidades laborales. Además, busco compartir mi conocimiento y experiencia con la comunidad de desarrolladores.
    </p>
</div>
          
          <div className="lg:col-span-2 h-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                alt="Gato gris" 
                className="w-full h-full object-cover object-center" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

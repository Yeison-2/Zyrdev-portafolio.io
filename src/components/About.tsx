
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
              Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">liderando equipos de desarrollo en multinacionales</span>.
            </p>
            
            <p className="text-balance animate-fade-in-up animation-delay-100">
              Algunos de mis éxitos incluyen <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS</span>. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.
            </p>
            
            <p className="text-balance animate-fade-in-up animation-delay-200">
              Como creador de contenido, cuento con <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">el canal de habla hispana más visto del mundo en la categoría de Software & Game Development en Twitch</span>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.
            </p>
          </div>
          
          <div className="lg:col-span-2 h-full flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-xl animate-float">
              <img 
                src="/lovable-uploads/ad5440b9-bd5d-4719-85aa-7b93e56a430c.png" 
                alt="Miguel Ángel (midu)" 
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

import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Figma } from "lucide-react";

function Home() {
  return (
    <div id="inicio" className="space-y-20">
      {/*MENÚ*/}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hola, soy <span className="text-primary">Víctor</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-text-muted max-w-2xl font-light mb-8">
          Soy ingeniero de software, especializado en el desarrollo web, de
          escritorio y móvil, enfocado en generar soluciones prácticas. Tengo
          experiencia llevando proyectos desde el levantamiento de
          requerimientos hasta la implementación final. Me gusta aportar
          liderazgo técnico y encontrar la solución más eficiente para asegurar
          que la tecnología impulse los objetivos de la organización.
        </h2>
        
        {/* BOTONES DE REDES */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/vluevano2003"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium shadow-lg shadow-primary-focus flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vluevano2003"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://www.figma.com/@victorluevano"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Figma size={20} />
            Figma
          </a>
        </div>
      </section>

      {/*PROYECTOS*/}
      <section id="proyectos">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Proyectos Destacados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {projects.map((project) => (
            <Link
              to={`/proyecto/${project.id}`}
              key={project.id}
              className="w-full bg-bg-card rounded-xl overflow-hidden border border-border-subtle hover:border-primary hover:shadow-lg hover:shadow-primary-focus transition-all hover:-translate-y-1 cursor-pointer group flex flex-col"
            >
              <div className="w-full h-48 bg-black/10 dark:bg-black/30 flex items-center justify-center overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-text-muted text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs bg-bg-base border border-border-subtle text-primary-light px-2 py-1 rounded-md font-mono"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/*CONTACTO*/}
      <section
        id="contacto"
        className="py-20 border-t border-border-subtle mt-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">¿Listo para colaborar?</h3>
          <p className="text-text-muted mb-8">
            Actualmente estoy desarrollando sistemas robustos y buscando nuevas
            oportunidades. Si tienes un proyecto en mente o necesitas un
            desarrollador de software ¡no dudes
            en escribirme!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:victoradrian_2003@outlook.com"
              className="px-6 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium shadow-lg shadow-primary-focus flex items-center gap-2"
            >
              <Mail size={20} />
              Envíame un correo
            </a>
            <a
              href="https://linkedin.com/in/vluevano2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/vluevano2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
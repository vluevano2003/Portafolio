import { Link } from "react-router-dom";
import { content } from "../data/projects";

function Projects({ lang = "es" }) {
  const t = content[lang].home;
  const projects = content[lang].projects;

  return (
    <div className="py-10 animate-fade-in relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <section id="proyectos" className="relative z-10">
        <h3 className="text-3xl font-bold mb-10 text-center">
          {t.projectsTitle}
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
                <p className="text-text-muted text-sm mb-4 line-clamp-3 text-justify">
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
    </div>
  );
}

export default Projects;

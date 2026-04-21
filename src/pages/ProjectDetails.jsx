import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { content } from "../data/projects";
import {
  ArrowLeft,
  Package,
  Wrench,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Store,
} from "lucide-react";

function ProjectDetails({ lang = "es" }) {
  const { id } = useParams();

  const t = content[lang].projectDetails;
  const projects = content[lang].projects;

  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-center py-20 text-2xl">{t.notFound}</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const getImageStyle = (index) => {
    const total = project.images.length;
    if (index === currentImageIndex)
      return "translate-x-0 scale-100 opacity-100 z-20 cursor-zoom-in brightness-100 blur-none shadow-2xl shadow-primary/20";
    if (total === 2)
      return "translate-x-[30%] md:translate-x-[60%] scale-75 opacity-60 z-10 cursor-pointer brightness-50 blur-[2px] hover:brightness-75";

    const isPrev = index === (currentImageIndex - 1 + total) % total;
    const isNext = index === (currentImageIndex + 1) % total;
    if (isPrev)
      return "-translate-x-[40%] md:-translate-x-[60%] scale-75 opacity-60 z-10 cursor-pointer brightness-50 blur-[2px] hover:brightness-75";
    if (isNext)
      return "translate-x-[40%] md:translate-x-[60%] scale-75 opacity-60 z-10 cursor-pointer brightness-50 blur-[2px] hover:brightness-75";
    return "scale-50 opacity-0 z-0 pointer-events-none";
  };

  return (
    <div className="max-w-4xl mx-auto py-10 animate-fade-in relative">
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex justify-center items-center p-4 md:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-bg-card/50 hover:bg-primary text-white rounded-full transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={28} />
          </button>
          <img
            src={project.images[currentImageIndex]}
            alt={t.fullScreenAlt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-border-subtle"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/*CONTENIDO PRINCIPAL*/}
      <Link
        to="/"
        className="text-primary-light hover:text-primary mb-8 inline-block transition-colors"
      >
        {t.back}
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <h2 className="text-xl text-text-muted mb-6">{project.subtitle}</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="bg-bg-card border border-border-subtle text-text-muted px-3 py-1 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-lg text-text-main opacity-90 leading-relaxed border-l-4 border-primary pl-4">
          {project.fullDescription}
        </p>
      </header>

      {/*CARRUSEL*/}
      <section className="mb-16 relative">
        <div className="relative h-56 sm:h-72 md:h-96 w-full flex justify-center items-center overflow-hidden py-4">
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-0 z-30 p-2 bg-bg-card/80 hover:bg-primary border border-border-subtle hover:border-primary text-text-main rounded-full backdrop-blur-sm transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} view ${index + 1}`}
              onClick={() => {
                index === currentImageIndex
                  ? setIsModalOpen(true)
                  : setCurrentImageIndex(index);
              }}
              className={`absolute w-4/5 md:w-3/4 h-full object-contain bg-black/5 dark:bg-black/20 rounded-xl border border-border-subtle transition-all duration-500 ease-out ${getImageStyle(index)}`}
            />
          ))}

          <button
            onClick={nextImage}
            className="absolute right-2 md:right-0 z-30 p-2 bg-bg-card/80 hover:bg-primary border border-border-subtle hover:border-primary text-text-main rounded-full backdrop-blur-sm transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? "bg-primary scale-125" : "bg-border-subtle hover:bg-text-muted"}`}
              aria-label={`${t.goToImage} ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/*CARACTERÍSTICAS*/}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Package className="text-primary" size={24} />
          {t.featuresTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-card p-5 rounded-lg border border-border-subtle"
            >
              <h4 className="font-bold text-primary-light mb-2">
                {feature.title}
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wrench className="text-primary" size={24} />
          {t.techTitle}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-text-muted">
          {project.technologies.map((tech, index) => (
            <li key={index} className="pl-2">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4 pt-8 border-t border-border-subtle">
        {project.directDownloadLink && (
          <a
            href={project.directDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FF6600] hover:bg-[#CC5200] text-white transition-colors rounded-lg font-medium shadow-lg shadow-[#FF6600]/20 flex items-center gap-2"
          >
            {t.btnDownloadInstaller}
          </a>
        )}
        {project.downloadLink && (
          <a
            href={project.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Github size={20} /> {t.btnReleases}
          </a>
        )}

        {project.playStoreUpcoming && (
          <div className="px-6 py-3 bg-bg-card/50 text-text-muted border border-border-subtle/50 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed select-none opacity-80">
            <Store size={20} /> {t.btnPlayStore}
          </div>
        )}

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg font-medium shadow-lg shadow-primary-focus flex items-center gap-2"
          >
            <ExternalLink size={20} /> {t.btnWebsite}
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Github size={20} /> {t.btnCode}
          </a>
        )}
        {project.repoLinkFront && (
          <a
            href={project.repoLinkFront}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Github size={20} /> {t.btnFront}
          </a>
        )}
        {project.repoLinkBack && (
          <a
            href={project.repoLinkBack}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-lg font-medium border border-border-subtle flex items-center gap-2"
          >
            <Github size={20} /> {t.btnBack}
          </a>
        )}
      </section>
    </div>
  );
}

export default ProjectDetails;

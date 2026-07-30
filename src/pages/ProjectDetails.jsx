import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { content } from "../data/projects";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Store,
  Download,
  ExternalLink
} from "lucide-react";

function ProjectDetails({ lang = "es" }) {
  const { id } = useParams();

  const t = content[lang].projectDetails;
  const clients = content[lang].clients;
  const products = content[lang].products;

  const clientProject = clients.find((p) => p.id === id);
  const productProject = products.find((p) => p.id === id);

  const project = clientProject || productProject;
  const isProduct = !!productProject;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-center py-20 text-2xl text-text-main">{t.notFound}</div>;
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
      return "translate-x-0 scale-100 opacity-100 z-20 cursor-zoom-in brightness-100 blur-none";
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
    <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 md:pt-16 md:pb-8 animate-fade-in relative w-full text-center">
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex justify-center items-center p-4 md:p-10 cursor-zoom-out animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-bg-card/50 hover:bg-primary text-white rounded-full transition-colors z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={28} />
          </button>

          {project.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-10 p-3 bg-bg-card/50 hover:bg-primary text-white rounded-full transition-colors z-50"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <img
            src={project.images[currentImageIndex]}
            alt={t.fullScreenAlt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-border-subtle cursor-default"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-10 p-3 bg-bg-card/50 hover:bg-primary text-white rounded-full transition-colors z-50"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}

      {/* Botón de retroceso */}
      <div className="flex justify-start mb-8 md:mb-12">
        <Link
          to="/"
          className="text-primary-light hover:text-primary inline-flex items-center gap-2 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {t.back}
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-12 md:mb-16 flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-2 md:mb-1 text-primary italic tracking-tight">{project.title}</h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-text-main font-bold mb-6 tracking-tight">{project.subtitle}</h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto mb-10">
          {project.shortDescription}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-4 justify-center">
          {!isProduct && project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-white transition-colors rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-3 text-base md:text-lg"
            >
              <ExternalLink size={20} /> {t.btnWebsite}
            </a>
          )}
          {isProduct && project.directDownloadLink && (
            <a href={project.directDownloadLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-white transition-colors rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-3 text-base md:text-lg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3,12V6.75L9,5.43V11.91L3,12M21,3V12H10V5.04L21,3M3,17.25V12H9V18.57L3,17.25M21,21V12H10V18.96L21,21Z" /></svg>
              {t.btnDownloadInstaller}
            </a>
          )}
          {isProduct && project.playStoreLink && (
            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 md:py-4 bg-[#01875F] hover:bg-[#016A4B] text-white transition-colors rounded-full font-bold shadow-lg shadow-[#01875F]/20 flex items-center gap-3 text-base md:text-lg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
              {t.btnPlayStore}
            </a>
          )}
        </div>
      </header>

      {/* Carrusel */}
      <section className="mb-24 relative max-w-5xl mx-auto">
        <div className="relative h-64 sm:h-80 md:h-[500px] w-full flex justify-center items-center overflow-hidden py-4 bg-bg-card rounded-[2rem]">
          <button
            onClick={prevImage}
            className="absolute left-1 sm:left-2 md:left-6 z-30 p-2 md:p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all shadow-lg"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
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
              className={`absolute max-w-[80%] md:max-w-[75%] max-h-[90%] w-auto h-auto object-contain rounded-2xl md:rounded-[2rem] transition-all duration-500 ease-out ${getImageStyle(index)}`}
            />
          ))}

          <button
            onClick={nextImage}
            className="absolute right-1 sm:right-2 md:right-6 z-30 p-2 md:p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm transition-all shadow-lg"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? "bg-primary w-8" : "bg-border-subtle hover:bg-text-muted"}`}
              aria-label={`${t.goToImage} ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Qué es */}
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text-main">
          ¿Qué es <span className="text-primary italic font-serif">{project.title}</span>?
        </h3>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed">
          {project.fullDescription}
        </p>
      </section>

      {/* Características */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-left">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="bg-transparent p-6 md:p-8 rounded-2xl border border-dashed border-border-subtle hover:border-primary/50 transition-colors"
            >
              <h4 className="font-semibold text-text-main mb-3 text-base md:text-lg">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-bg-card p-8 md:p-12 rounded-[2rem] mb-8 max-w-5xl mx-auto">
        {/* Características Técnicas */}
        {project.technicalFeatures && (
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-10 text-center text-text-main">
              {t.technicalFeaturesTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-left">
              {project.technicalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-bg-base p-6 md:p-8 rounded-2xl border border-dashed border-border-subtle hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-semibold text-text-main mb-3 text-base md:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tecnologías */}
        <section className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-text-main">
            {t.techTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-bg-base border border-border-subtle rounded-xl px-5 py-3 text-sm font-medium text-text-main shadow-sm hover:border-primary/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}

export default ProjectDetails;

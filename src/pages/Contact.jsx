import { Mail, Linkedin, Github, MapPin, Phone, Figma } from "lucide-react";

function Contact({ lang = "es" }) {
  const t = {
    es: {
      role: "Ingeniero de Software",
      location: "Coatzacoalcos, Veracruz, MX",
      profileTitle: "Perfil Profesional",
      p1: "Ingeniero de Software con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio, especializado en el análisis de requerimientos complejos, diseño de software y gestión del ciclo de vida del desarrollo. Orientado a resultados, con capacidades probadas en liderazgo técnico, trabajo colaborativo y resolución de problemas complejos.",
      p2: "Busco integrarme como ingeniero de software en una organización dinámica, con el objetivo de diseñar e implementar soluciones tecnológicas escalables, innovadoras y de alta calidad que impulsen la transformación digital de la empresa."
    },
    en: {
      role: "Software Engineer",
      location: "Coatzacoalcos, Veracruz, MX",
      profileTitle: "Professional Profile",
      p1: "Software Engineer with experience in developing web, mobile, and desktop applications, specialized in analyzing complex requirements, software design, and development lifecycle management. Results-oriented, with proven capabilities in technical leadership, collaborative work, and complex problem-solving.",
      p2: "I'm looking to join a dynamic organization as a software engineer, with the goal of designing and implementing scalable, innovative, and high-quality technological solutions that drive the digital transformation of the company."
    }
  };

  const text = t[lang];

  return (
    <div className="animate-fade-in relative max-w-5xl mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="py-4 md:py-8 relative z-10 w-full flex flex-col md:flex-row gap-12 items-center md:items-start">

        {/*Columna izquierda*/}
        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#121212] shadow-[0_0_0_2px_rgba(249,115,22,0.5)] bg-white/5">
            <img src="/profile.jpg" alt="Víctor Adrián Luévano Mondragón" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tight">Víctor Adrián <br /><span className="text-gradient">Luévano Mondragón</span></h1>
          <h2 className="text-primary-light font-medium mb-6">{text.role}</h2>

          <div className="w-full space-y-4 text-sm text-text-muted mb-8 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary-light" />
              <span>{text.location}</span>
            </div>
            <div className="flex items-center gap-3 max-w-full overflow-hidden">
              <Mail size={18} className="text-primary-light flex-shrink-0" />
              <a href="mailto:victoradrian_2003@outlook.com" className="hover:text-white transition-colors truncate" title="victoradrian_2003@outlook.com">victoradrian_2003@outlook.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary-light" />
              <span>+52 921 149 1589</span>
            </div>
          </div>


        </div>

        {/*Columna derecha*/}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center h-full pt-4 md:pt-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
            <div className="w-2 h-6 bg-primary-light rounded-full" />
            {text.profileTitle}
          </h3>
          <p className="text-text-muted leading-relaxed mb-6 text-lg text-justify">
            {text.p1}
          </p>
          <p className="text-text-muted leading-relaxed text-lg mb-8 text-justify">
            {text.p2}
          </p>

          <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start mt-2 md:mt-4">
            <a href="https://linkedin.com/in/vluevano2003" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-xl font-medium border border-border-subtle flex items-center gap-2 text-sm md:text-base">
              <Linkedin className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" /> LinkedIn
            </a>
            <a href="https://github.com/vluevano2003" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-xl font-medium border border-border-subtle flex items-center gap-2 text-sm md:text-base">
              <Github className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" /> GitHub
            </a>
            <a href="https://www.figma.com/@victorluevano" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 bg-bg-card hover:bg-bg-card-hover transition-colors rounded-xl font-medium border border-border-subtle flex items-center gap-2 text-sm md:text-base">
              <Figma className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" /> Figma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

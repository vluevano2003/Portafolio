import { Github, Figma, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "../data/projects";

function Home({ lang = "es" }) {
  const t = content[lang].home;

  return (
    <div id="inicio" className="space-y-20 animate-fade-in relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <section className="flex flex-col items-center justify-center text-center py-20 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {t.greeting} <span className="text-primary">Víctor</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-text-muted max-w-2xl font-light mb-10">
          {t.description}
        </h2>

        {/*Botones de navegación*/}
        <div className="flex flex-col items-center gap-8 w-full">
          <Link
            to="/proyectos"
            className="px-8 py-4 bg-primary hover:bg-primary-dark transition-colors rounded-full font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-3 text-lg group"
          >
            {lang === "es" ? "Ver mis proyectos" : "View my projects"}
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

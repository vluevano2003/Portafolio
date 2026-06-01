import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  const navTexts = {
    es: { home: "Inicio", projects: "Proyectos", contact: "Contacto" },
    en: { home: "Home", projects: "Projects", contact: "Contact" },
  };
  const t = navTexts[lang];

  return (
    <>
      <nav className="fixed w-full top-0 z-40 bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-text-muted hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={28} />
            </button>

            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
            >
              <img
                src="/icon_white.png"
                alt="Logo"
                className="h-8 md:h-12 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-xl md:text-3xl font-bold text-primary tracking-tighter group-hover:text-primary-light transition-colors">
                &lt;VLUEVANO_2003/&gt;
              </span>
            </Link>
          </div>

          {/*Menú de escritorio*/}
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-text-muted">
            <Link to="/" className="hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link
              to="/proyectos"
              className="hover:text-primary transition-colors"
            >
              {t.projects}
            </Link>
            <Link to="/contacto" className="hover:text-primary transition-colors">
              {t.contact}
            </Link>

            {/*Botón de idioma en escritorio*/}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 ml-4 border border-border-subtle rounded-full hover:border-primary hover:text-primary transition-colors bg-bg-card"
              title="Cambiar idioma / Change language"
            >
              <Globe size={18} />
              <span className="font-bold uppercase text-sm">
                {lang === "es" ? "ES" : "EN"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/*Fondo oscuro en el menú de móvil*/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      {/*Menú lateral en móvil*/}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bg-base border-r border-border-subtle z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 gap-8 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="absolute top-5 right-5 text-text-muted hover:text-primary transition-colors"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 mt-4">
          <Link
            to="/"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            {t.home}
          </Link>
          <Link
            to="/proyectos"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            {t.projects}
          </Link>
          <Link
            to="/contacto"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            {t.contact}
          </Link>

          {/*Botón de idioma en móvil*/}
          <button
            onClick={() => {
              toggleLanguage();
              closeMenu();
            }}
            className="flex items-center justify-center gap-2 mt-4 px-4 py-3 border border-border-subtle rounded-lg hover:bg-bg-card transition-colors text-text-main"
          >
            <Globe size={20} />
            <span className="font-medium">
              {lang === "es" ? "Switch to English" : "Cambiar a Español"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

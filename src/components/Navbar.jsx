import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";

function Navbar({ lang, setLang, theme, setTheme }) {
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navTexts = {
    es: { home: "Inicio", projects: "Productos", contact: "Contacto" },
    en: { home: "Home", projects: "Products", contact: "Contact" },
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
                alt="VaLm Systems Logo"
                className={`h-8 md:h-12 w-auto group-hover:opacity-80 transition-opacity ${theme === 'light' ? 'invert' : ''}`}
              />
              <span className="text-xl md:text-3xl font-bold text-primary tracking-tighter group-hover:text-primary-light transition-colors">
                VaLm Systems
              </span>
            </Link>
          </div>

          {/*Menú de escritorio*/}
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-text-muted">
            <Link to="/" className="hover:text-primary transition-colors">
              {t.home}
            </Link>

            <div className="relative group py-2">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                {t.projects}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                <div className="bg-bg-base border border-border-subtle shadow-xl rounded-2xl p-2 w-56 flex flex-col gap-1">
                  <Link to="/proyecto/pricestocker" className="px-4 py-3 hover:bg-bg-card rounded-xl transition-colors font-semibold text-text-main hover:text-primary">
                    PriceStocker
                  </Link>
                  <Link to="/proyecto/bilt-tracker" className="px-4 py-3 hover:bg-bg-card rounded-xl transition-colors font-semibold text-text-main hover:text-primary">
                    BILT TRACKER
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contacto" className="hover:text-primary transition-colors">
              {t.contact}
            </Link>

            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 border border-border-subtle rounded-full hover:border-primary hover:text-primary transition-colors bg-bg-card flex items-center justify-center"
                title={lang === "es" ? "Cambiar tema" : "Toggle theme"}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-full hover:border-primary hover:text-primary transition-colors bg-bg-card"
                title="Cambiar idioma / Change language"
              >
                <Globe size={18} />
                <span className="font-bold uppercase text-sm">
                  {lang === "es" ? "ES" : "EN"}
                </span>
              </button>
            </div>
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
          <div className="flex flex-col gap-3">
            <span className="text-lg font-medium text-text-muted">{t.projects}</span>
            <Link
              to="/proyecto/pricestocker"
              className="text-base font-medium text-text-main hover:text-primary transition-colors pl-4 border-l-2 border-border-subtle"
              onClick={closeMenu}
            >
              PriceStocker
            </Link>
            <Link
              to="/proyecto/bilt-tracker"
              className="text-base font-medium text-text-main hover:text-primary transition-colors pl-4 border-l-2 border-border-subtle"
              onClick={closeMenu}
            >
              BILT TRACKER
            </Link>
          </div>
          <Link
            to="/contacto"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            {t.contact}
          </Link>

          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-border-subtle rounded-lg hover:bg-bg-card transition-colors text-text-main"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="font-medium">
                {lang === "es" ? (theme === "dark" ? "Modo Claro" : "Modo Oscuro") : (theme === "dark" ? "Light Mode" : "Dark Mode")}
              </span>
            </button>

            <button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-border-subtle rounded-lg hover:bg-bg-card transition-colors text-text-main"
            >
              <Globe size={20} />
              <span className="font-medium">
                {lang === "es" ? "Switch to English" : "Cambiar a Español"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
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

  return (
    <nav className="sticky top-0 z-50 bg-bg-base border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
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
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tighter group-hover:text-primary-light transition-colors">
              &lt;VLUEVANO_2003/&gt;
            </span>
          </Link>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium text-text-muted">
          <a href="/#inicio" className="hover:text-primary transition-colors">
            Inicio
          </a>
          <a
            href="/#proyectos"
            className="hover:text-primary transition-colors"
          >
            Proyectos
          </a>
          <a href="/#contacto" className="hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
      </div>

      {/* --- MENÚ LATERAL MÓVIL --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] md:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bg-base border-r border-border-subtle z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 gap-8 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
          <a
            href="/#inicio"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="/#proyectos"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            href="/#contacto"
            className="text-lg font-medium text-text-main hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

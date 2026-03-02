import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/icon_white.png"
            alt="Logo"
            className="h-8 w-auto group-hover:opacity-80 transition-opacity"
          />
          <span className="text-2xl font-bold text-primary tracking-tighter group-hover:text-primary-light transition-colors">
            &lt;VLUEVANO_2003/&gt;
          </span>
        </Link>

        <div className="flex gap-6 text-sm font-medium text-text-muted">
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
    </nav>
  );
}

export default Navbar;

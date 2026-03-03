import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-base py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-muted text-sm text-center md:text-left">
          <p className="font-medium text-text-main mb-1">
            &copy; {currentYear} Víctor Luévano.
          </p>
          <p>Sitio web diseñado y desarrollado con React y Tailwind CSS.</p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/vluevano2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/vluevano2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:victoradrian_2003@outlook.com"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Correo Electrónico"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Mail, Linkedin, Github, MapPin, Phone, Figma } from "lucide-react";

function Contact({ lang = "es" }) {
  const t = {
    es: {
      headlinePart1: "¿Tienes una",
      headlineIdea: "idea",
      headlinePart2: "?",
      headlinePart3: "Te ayudo a llevarla a la realidad.",
      contactDesc: "Dime qué procesos te gustaría automatizar, optimizar o hacer crecer, y te contactaré en menos de un día hábil para definir los próximos pasos.",
      contactVia: "Puedes contactarme a través de este formulario o enviando un correo a",
      formName: "Nombre completo",
      formEmail: "Correo electrónico",
      formCompany: "Compañía (Opcional)",
      formPhone: "Teléfono (Opcional)",
      formHelp: "¿Cómo puedo ayudarte?",
      formSubmit: "Enviar mensaje"
    },
    en: {
      headlinePart1: "Got an",
      headlineIdea: "idea",
      headlinePart2: "?",
      headlinePart3: "Let's make it a reality.",
      contactDesc: "Tell me which processes you'd like to automate, optimize, or grow, and I'll get back to you within one business day to define the next steps.",
      contactVia: "You can contact me through this form or by sending an email to",
      formName: "Full Name",
      formEmail: "Email address",
      formCompany: "Company (Optional)",
      formPhone: "Phone (Optional)",
      formHelp: "How can I help you?",
      formSubmit: "Send message"
    }
  };

  const text = t[lang];

  return (
    <div className="animate-fade-in relative max-w-6xl mx-auto px-4 py-8 w-full">

      {/* Formulario de Contacto */}
      <section className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-center w-full py-8 md:py-12 max-w-5xl mx-auto">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left pt-4">
          <h3 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
            {text.headlinePart1} <span className="text-primary italic font-serif">{text.headlineIdea}</span>{text.headlinePart2}<br className="hidden md:block" /> {text.headlinePart3}
          </h3>
          <p className="text-lg text-text-muted max-w-md mx-auto md:mx-0 pt-2">
            {text.contactDesc}
          </p>
        </div>

        <div className="flex-1 w-full bg-bg-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-border-subtle">
          <p className="text-xs md:text-sm text-text-muted mb-6">
            {text.contactVia} <a href="mailto:victoradrian_2003@outlook.com" className="text-primary hover:underline font-medium">victoradrian_2003@outlook.com</a>.
          </p>
          <form action="https://formsubmit.co/victoradrian_2003@outlook.com" method="POST" className="space-y-4 flex flex-col">
            <input type="hidden" name="_subject" value="Nuevo mensaje desde mi Portafolio" />
            <input
              type="text"
              name="name"
              required
              placeholder={text.formName}
              className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-subtle focus:border-primary focus:outline-none transition-colors text-text-main placeholder-text-muted text-sm md:text-base"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={text.formEmail}
              className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-subtle focus:border-primary focus:outline-none transition-colors text-text-main placeholder-text-muted text-sm md:text-base"
            />
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                name="company"
                placeholder={text.formCompany}
                className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-bg-base border border-border-subtle focus:border-primary focus:outline-none transition-colors text-text-main placeholder-text-muted text-sm md:text-base"
              />
              <input
                type="tel"
                name="phone"
                placeholder={text.formPhone}
                className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-bg-base border border-border-subtle focus:border-primary focus:outline-none transition-colors text-text-main placeholder-text-muted text-sm md:text-base"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder={text.formHelp}
              rows="3"
              className="w-full px-4 py-3 rounded-xl bg-bg-base border border-border-subtle focus:border-primary focus:outline-none transition-colors text-text-main resize-none placeholder-text-muted text-sm md:text-base"
            ></textarea>

            <button type="submit" className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-base transition-colors shadow-lg mt-2">
              {text.formSubmit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

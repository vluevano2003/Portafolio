import { ArrowRight, Download, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { content } from "../data/projects";

function Home({ lang = "es" }) {
  const t = content[lang].home;
  const clients = content[lang].clients;
  const products = content[lang].products;

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const maxIndex = products.length - 1;

    if (maxScroll <= 0 || maxIndex <= 0) return;

    const scrollPercentage = scrollLeft / maxScroll;
    const newIndex = Math.round(scrollPercentage * maxIndex);

    if (newIndex !== activeProductIndex) {
      setActiveProductIndex(newIndex);
    }
  };

  const scrollToProduct = (index) => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const maxIndex = products.length - 1;

    if (maxIndex <= 0) return;

    const targetScroll = (index / maxIndex) * maxScroll;
    carouselRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div id="inicio" className="animate-fade-in relative pb-8 -mt-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="Coatzacoalcos.jpg"
            alt="Coatzacoalcos"
            className="w-full h-full object-cover object-center opacity-60 md:opacity-80"
            onError={(e) => { e.target.src = "https://placehold.co/1920x1080?text=Coatzacoalcos" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bg-base from-30% md:from-20% via-bg-base/80 via-70% md:via-60% to-transparent to-100% z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-base to-transparent z-10"></div>
        </div>

        {/* Contenido */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="max-w-2xl space-y-6 md:pr-8 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-text-main leading-[1.15]">
              {t.greeting} <br className="hidden md:block" /><span className="text-primary italic font-serif">{t.companyName}</span>
            </h1>
            <p className="text-lg md:text-xl text-text-main md:text-text-muted font-medium max-w-lg leading-relaxed">
              {t.description}
            </p>
            <div className="pt-4">
              <Link to="/contacto" className="px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary-dark text-white transition-colors rounded-xl font-bold shadow-lg inline-flex items-center gap-3 text-base md:text-lg group">
                {t.emailBtn}
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 space-y-24 pt-16 pb-8">

        {/* Sección sobre mi */}
        <section id="sobre-mi" className="relative z-10 flex flex-col md:flex-row gap-12 items-center bg-bg-card p-10 md:p-16 rounded-[2.5rem] border border-border-subtle w-full">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-bg-base shadow-[0_0_0_4px_rgba(249,115,22,0.5)]">
              <img src="/profile.jpg" alt="Víctor Luévano" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full hidden md:block" />
              {t.aboutTitle}
            </h3>
            <p className="text-xl text-text-main leading-relaxed mb-6 font-medium">
              {t.aboutDesc}
            </p>
            <p className="text-lg text-text-muted">
              Mi enfoque se centra en crear arquitecturas escalables, interfaces intuitivas y código limpio que no solo resuelva el problema de hoy, sino que esté preparado para el futuro.
            </p>
          </div>
        </section>

        {/* Sección de productos */}
        <section id="productos" className="relative z-10">
          <h3 className="text-4xl font-extrabold mb-0 text-center text-text-main">
            {t.productsTitle}
          </h3>

          {/* Contenedor del carrusel */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 max-w-7xl mx-auto w-full pt-14 md:pt-16 pb-16 md:pb-20 px-4 md:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-[90vw] md:w-[calc(50%-1rem)] snap-center bg-bg-card rounded-3xl p-6 md:p-8 border border-primary transition-all relative group flex flex-col justify-end md:justify-center pt-[140px] md:pt-8 md:min-h-[260px] mb-8 md:mb-6 mt-4 md:mt-0">

                <div className="relative z-20 w-full md:w-[55%] md:pr-4 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 pb-6 md:pb-0">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-extrabold text-text-main mb-2 md:mb-3 leading-tight">{product.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/proyecto/${product.id}`}
                  className="absolute left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 bottom-0 translate-y-1/2 z-40 px-8 py-3 md:px-10 bg-primary border-2 border-primary hover:bg-primary-dark hover:border-primary-dark text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg text-sm md:text-base whitespace-nowrap"
                >
                  {lang === "es" ? "Saber más" : "Learn more"}
                </Link>

                <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-20px] md:top-1/2 md:-translate-y-1/2 z-30 w-[90%] md:w-[50%] flex justify-center items-start md:items-center opacity-100 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out">
                  {product.device === 'laptop' ? (
                    <div className="relative flex flex-col items-center scale-[0.75] md:scale-[0.85] translate-y-10 md:-translate-x-9.5 md:translate-y-0 origin-top md:origin-right">
                      <div className="relative bg-gray-800 border-[6px] border-gray-800 rounded-t-lg h-[150px] w-[240px]">
                        <div className="rounded-sm overflow-hidden h-full bg-black">
                          <img src={product.images[0]} className="h-full w-full object-cover" alt={product.title} />
                        </div>
                      </div>
                      <div className="relative bg-gray-400 dark:bg-gray-700 rounded-b-lg rounded-t-sm h-[12px] w-[280px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-[40px] h-[3px] bg-gray-500 dark:bg-gray-800"></div>
                      </div>
                    </div>
                  ) : product.device === 'mobile' ? (
                    <div className="relative flex flex-col items-center scale-[0.55] md:scale-[0.85] origin-top md:origin-center">
                      <div className="relative bg-[#363636] border-[10px] border-[#363636] rounded-[2.5rem] h-[300px] md:h-[350px] w-[145px] md:w-[170px]">
                        <div className="w-[40px] md:w-[50px] h-[14px] md:h-[16px] bg-[#363636] top-0 rounded-b-[0.5rem] md:rounded-b-[0.6rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
                        <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-black">
                          <img src={product.images[0]} className="h-full w-full object-cover" alt={product.title} />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

              </div>
            ))}
          </div>

          {/* Swipe Indicator (Solo móvil) */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-[-20px] mb-12">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToProduct(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeProductIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-border-subtle hover:bg-text-muted'
                  }`}
                aria-label={`Go to product ${i + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* Sección de clientes */}
        <section id="clientes" className="relative z-10 py-10 bg-bg-card rounded-3xl shadow-sm -mt-12">
          <h3 className="text-sm font-semibold mb-8 text-center text-text-muted uppercase tracking-widest">
            {t.clientsTitle}
          </h3>
          <div className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-24 max-w-5xl mx-auto w-full">
            {clients.map((client) => (
              <Link
                to={`/proyecto/${client.id}`}
                key={client.id}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-36 h-36 mb-3 flex items-center justify-center relative">
                  <img
                    src={client.logo}
                    alt={client.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-lg opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.target.src = `https://placehold.co/200x200?text=${client.title}` }}
                  />
                </div>
                <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                  {client.clientName || client.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}

export default Home;

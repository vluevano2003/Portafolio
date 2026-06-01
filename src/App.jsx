import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("portfolio_lang");
    return savedLang ? savedLang : "es";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col bg-bg-base text-text-main font-sans">
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="w-full max-w-6xl mx-auto px-4 py-4 md:py-8 mt-20">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/proyectos" element={<Projects lang={lang} />} />
            <Route path="/contacto" element={<Contact lang={lang} />} />
            <Route path="/proyecto/:id" element={<ProjectDetails lang={lang} />} />
          </Routes>
        </main>
        
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
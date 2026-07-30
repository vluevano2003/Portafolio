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
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("portfolio_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-bg-base text-text-main font-sans transition-colors duration-300">
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
        <main className="w-full mt-20 flex-grow flex flex-col">
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
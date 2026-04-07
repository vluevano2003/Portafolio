import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <div className="min-h-screen flex flex-col bg-bg-base text-text-main font-sans">
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/proyecto/:id" element={<ProjectDetails lang={lang} />} />
          </Routes>
        </main>
        
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;
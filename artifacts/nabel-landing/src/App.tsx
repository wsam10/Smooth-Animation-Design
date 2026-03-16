import { useEffect } from "react";
import { LanguageProvider, useLang } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Cities from "./components/Cities";
import Clients from "./components/Clients";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function LandingPage() {
  const { lang } = useLang();

  useEffect(() => {
    // Strip stale visible classes so the observer re-evaluates each element
    document
      .querySelectorAll(".reveal.visible, .reveal-left.visible, .reveal-right.visible")
      .forEach((el) => el.classList.remove("visible"));

    // Small delay lets React flush DOM updates for the new language before measuring
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Cities />
      <Clients />
      <Gallery />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;

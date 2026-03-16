import { LanguageProvider, useLang } from "./context/LanguageContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

import Navbar  from "./components/Navbar";
import Hero    from "./components/Hero";
import Stats   from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Cities  from "./components/Cities";
import Clients from "./components/Clients";
import Gallery from "./components/Gallery";
import WhyUs   from "./components/WhyUs";
import CTA     from "./components/CTA";
import Contact from "./components/Contact";
import Footer  from "./components/Footer";

function LandingPage() {
  const { lang } = useLang();
  useScrollReveal(lang);

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

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider, useLang } from "./context/LanguageContext";

// Above-fold: eager imports (needed immediately)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Below-fold: lazy imports — each becomes its own JS chunk
// The browser only downloads these as the user scrolls down
const Stats    = lazy(() => import("./components/Stats"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Cities   = lazy(() => import("./components/Cities"));
const Clients  = lazy(() => import("./components/Clients"));
const Gallery  = lazy(() => import("./components/Gallery"));
const WhyUs    = lazy(() => import("./components/WhyUs"));
const CTA      = lazy(() => import("./components/CTA"));
const Contact  = lazy(() => import("./components/Contact"));
const Footer   = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 rounded-full border-2 border-[#8E6BC4] border-t-transparent animate-spin" />
    </div>
  );
}

function LandingPage() {
  const { lang } = useLang();

  useEffect(() => {
    document
      .querySelectorAll(".reveal.visible, .reveal-left.visible, .reveal-right.visible")
      .forEach((el) => el.classList.remove("visible"));

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
      <Suspense fallback={<SectionFallback />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Cities />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
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

import { useEffect } from "react";

let observer: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );
  }
  return observer;
}

function observeAll() {
  const obs = getObserver();
  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach((el) => obs.observe(el));
}

export function useScrollReveal(lang: string) {
  useEffect(() => {
    // Tear down previous observers on language change
    if (observer) { observer.disconnect(); observer = null; }
    if (mutationObserver) { mutationObserver.disconnect(); mutationObserver = null; }

    // Strip stale visible classes so elements re-animate on language switch
    document
      .querySelectorAll(".reveal.visible, .reveal-left.visible, .reveal-right.visible")
      .forEach((el) => el.classList.remove("visible"));

    // Mark body so CSS can apply the initial hidden state
    document.body.classList.add("can-animate");

    // Brief delay lets React flush DOM updates
    const setupTimer = setTimeout(() => {
      observeAll();

      // Watch for new .reveal elements (e.g. async loads)
      mutationObserver = new MutationObserver(() => observeAll());
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }, 60);

    // Safety net: show ALL elements after 800 ms regardless of observer.
    // This ensures sections are never permanently hidden in iframes, embedded
    // previews, or environments where IntersectionObserver behaves unexpectedly.
    const safetyTimer = setTimeout(() => {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right")
        .forEach((el) => el.classList.add("visible"));
    }, 800);

    return () => {
      clearTimeout(setupTimer);
      clearTimeout(safetyTimer);
    };
  }, [lang]);
}

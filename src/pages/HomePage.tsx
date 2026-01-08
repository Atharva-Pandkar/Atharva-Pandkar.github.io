import { useEffect } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import SkillsPreview from '../components/SkillsPreview';
import ExperiencePreview from '../components/ExperiencePreview';
import ProjectsPreview from '../components/ProjectsPreview';
import Contact from '../components/Contact';
import ScrollProgress from '../components/ScrollProgress';

const HomePage = () => {
  useEffect(() => {
    // Initialize ScrollReveal after DOM is ready
    const initScrollReveal = () => {
      if (window.ScrollReveal) {
        const sr = window.ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 2000,
          reset: false,
        });

        sr.reveal(".home-title", { delay: 200 });
        sr.reveal(".button", { delay: 400 });
        sr.reveal(".home-img", { delay: 600 });
        sr.reveal(".home-social-icon", { interval: 200 });
        sr.reveal(".about-text", { delay: 200 });
      }
    };

    // Wait for ScrollReveal script to load
    if (window.ScrollReveal) {
      initScrollReveal();
    } else {
      // If not loaded yet, wait a bit
      const timer = setTimeout(() => {
        if (window.ScrollReveal) {
          initScrollReveal();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <ScrollProgress />
      <main className="l-main">
        <Home />
        <About />
        <SkillsPreview />
        <ExperiencePreview />
        <ProjectsPreview />
      </main>
      <Contact />
    </>
  );
};

export default HomePage;


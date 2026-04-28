import About from '../components/About';
import ExperienceCarousel from '../components/ExperienceCarousel';
import Hero from '../components/Hero';
import ProjectsCarousel from '../components/ProjectsCarousel';

const HomePage = () => (
  <div className="main-content">
    <Hero />
    <hr className="divider" />
    <About />
    <hr className="divider" />
    <ExperienceCarousel />
    <hr className="divider" />
    <ProjectsCarousel />
  </div>
);

export default HomePage;

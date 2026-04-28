import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import { usePageTracking } from './hooks/usePageTracking';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  usePageTracking();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import posthog from 'posthog-js';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ResearchPage from './pages/ResearchPage';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('page_viewed', {
      path: location.pathname,
      search: location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <PageTracker />
      <ScrollProgress />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ResearchPage from './pages/ResearchPage';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function App() {
  return (
    <Router basename="/">
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

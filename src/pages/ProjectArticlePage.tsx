import { Link, useParams } from 'react-router-dom';
import ArticleRenderer from '../components/ArticleRenderer';
import { projectArticles } from '../content/projectArticles';
import { projectsContent } from '../content/projects';

const ProjectArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsContent.find((p) => p.id === id);
  const article = projectArticles.find((a) => a.id === id);

  if (!project || !article) {
    return (
      <div className="main-content">
        <section className="section">
          <div className="container">
            <Link to="/projects" className="article-back">
              Back to Projects
            </Link>
            <p style={{ color: 'var(--text-2)' }}>Project not found.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="main-content">
      <section className="section">
        <div className="container">
          <Link to="/projects" className="article-back">
            Back to Projects
          </Link>
          <ArticleRenderer
            article={article}
            title={project.title}
            chips={project.technologies}
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectArticlePage;

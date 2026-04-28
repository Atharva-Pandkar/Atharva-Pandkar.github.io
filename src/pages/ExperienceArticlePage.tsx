import { Link, useParams } from 'react-router-dom';
import ArticleRenderer from '../components/ArticleRenderer';
import { experienceArticles } from '../content/experienceArticles';
import { experienceContent } from '../content/experience';

const ExperienceArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experienceContent.find((e) => e.id === id);
  const article = experienceArticles.find((a) => a.id === id);

  if (!experience || !article) {
    return (
      <div className="main-content">
        <section className="section">
          <div className="container">
            <Link to="/experience" className="article-back">
              Back to Experience
            </Link>
            <p style={{ color: 'var(--text-2)' }}>Experience entry not found.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="main-content">
      <section className="section">
        <div className="container">
          <Link to="/experience" className="article-back">
            Back to Experience
          </Link>
          <ArticleRenderer
            article={article}
            title={experience.role}
            subtitle={`${experience.company} · ${experience.period} · ${experience.location}`}
            chips={[experience.company, experience.period, experience.location]}
          />
        </div>
      </section>
    </div>
  );
};

export default ExperienceArticlePage;

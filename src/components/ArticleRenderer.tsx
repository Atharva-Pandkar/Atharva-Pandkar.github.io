import { useState } from 'react';
import { ArticleContent } from '../types/article';

interface Props {
  article: ArticleContent;
  title: string;
  subtitle?: string;
  chips?: string[];
}

const ArticleRenderer = ({ article, title, subtitle, chips }: Props) => {
  const [view, setView] = useState<'business' | 'technical'>('business');

  const content = view === 'business' ? article.businessView : article.technicalView;

  return (
    <div>
      {/* Cover image */}
      {article.image && (
        <img
          src={article.image}
          alt={title}
          className="article-cover"
          loading="lazy"
        />
      )}

      {/* Meta chips */}
      {chips && chips.length > 0 && (
        <div className="article-meta">
          {chips.map((chip) => (
            <span key={chip} className="article-meta-chip">
              {chip}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="article-title">{title}</h1>
      {subtitle && (
        <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}

      {/* View Toggle */}
      <div className="view-toggle">
        <div className="view-toggle-inner">
          <button
            type="button"
            className={`toggle-btn${view === 'business' ? ' active' : ''}`}
            onClick={() => setView('business')}
          >
            Business View
          </button>
          <button
            type="button"
            className={`toggle-btn${view === 'technical' ? ' active' : ''}`}
            onClick={() => setView('technical')}
          >
            Technical View
          </button>
        </div>
      </div>

      {/* Article body */}
      <div className="article-body">
        {/* Summary */}
        <div className="article-section">
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text)',
              lineHeight: 1.8,
              fontWeight: 500,
              borderLeft: '3px solid var(--accent)',
              paddingLeft: '1.25rem',
            }}
          >
            {content.summary}
          </p>
        </div>

        {/* Sections */}
        {content.sections.map((section, i) => (
          <div key={i} className="article-section">
            <p className="article-section-title">{section.label}</p>
            {section.heading && (
              <h2 className="article-section-heading">{section.heading}</h2>
            )}

            {section.body &&
              section.body.map((para, j) => <p key={j}>{para}</p>)}

            {section.quote && (
              <blockquote className="article-quote">{section.quote}</blockquote>
            )}

            {section.stats && (
              <div className="article-impact-grid">
                {section.stats.map((stat) => (
                  <div key={stat.label} className="impact-stat">
                    <span className="impact-number">{stat.number}</span>
                    <span className="impact-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {section.chips && (
              <div className="article-tech-stack">
                {section.chips.map((chip) => (
                  <span key={chip} className="article-tech-chip">
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="article-list">
                {section.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleRenderer;

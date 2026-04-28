import { Link } from 'react-router-dom';
import { projectsContent } from '../content/projects';
import { trackOutboundLink } from '../lib/analytics';

const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
      <p className="section-label">Work</p>
      <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
        Projects &amp; Research
      </h2>
      <div className="card-grid">
        {projectsContent.map((project) => (
          <article key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <p className="card-title">{project.title}</p>
            <p className="card-body" style={{ flex: 1 }}>{project.description}</p>
            <div className="tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="card-actions">
              <Link
                to={`/projects/${project.id}`}
                className="btn btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}
              >
                Read Article →
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    trackOutboundLink('github', project.githubUrl!, 'projects');
                  }}
                >
                  Code ↗
                </a>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent-ghost"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    trackOutboundLink('external', project.externalUrl!, 'projects');
                  }}
                >
                  View ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

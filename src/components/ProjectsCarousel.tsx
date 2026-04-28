import { Link } from 'react-router-dom';
import { projectsContent } from '../content/projects';
import { trackOutboundLink } from '../lib/analytics';

const ProjectsCarousel = () => (
  <section className="section">
    <div className="container">
      <div className="section-header">
        <div>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects &amp; Research</h2>
        </div>
        <Link to="/projects" className="view-all">
          View all
        </Link>
      </div>
      <div className="carousel-wrap">
        <div className="carousel">
          {projectsContent.slice(0, 4).map((project) => (
            <article key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="card-title">{project.title}</p>
              <p className="card-body" style={{ flex: 1 }}>{project.description}</p>
              <div className="tags">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tag">+{project.technologies.length - 4}</span>
                )}
              </div>
              <div className="card-actions">
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-primary"
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.9rem' }}
                >
                  Read →
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
                      trackOutboundLink('github', project.githubUrl!, 'projects_carousel');
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
                      trackOutboundLink('external', project.externalUrl!, 'projects_carousel');
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
    </div>
  </section>
);

export default ProjectsCarousel;

import { Link } from 'react-router-dom';
import { experienceContent } from '../content/experience';

const Experience = () => (
  <section className="section" id="experience">
    <div className="container">
      <p className="section-label">Career</p>
      <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
        Work Experience
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {experienceContent.map((item) => (
          <Link
            key={item.id}
            to={`/experience/${item.id}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <article className="card" style={{ cursor: 'pointer' }}>
              <p className="card-period">{item.period}</p>
              <p className="card-company">{item.company}</p>
              <p className="card-role">{item.role}</p>
              <p className="card-location">{item.location}</p>
              <p className="card-description">{item.description}</p>
              <p
                style={{
                  marginTop: '0.9rem',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                  fontWeight: 500,
                }}
              >
                Read article →
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

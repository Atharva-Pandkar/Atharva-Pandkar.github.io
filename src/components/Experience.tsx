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
          <article key={item.id} className="card">
            <p className="card-period">{item.period}</p>
            <p className="card-company">{item.company}</p>
            <p className="card-role">{item.role}</p>
            <p className="card-location">{item.location}</p>
            <p className="card-description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

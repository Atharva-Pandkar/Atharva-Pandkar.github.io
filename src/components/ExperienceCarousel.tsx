import { Link } from 'react-router-dom';
import { experienceContent } from '../content/experience';

const ExperienceCarousel = () => (
  <section className="section">
    <div className="container">
      <div className="section-header">
        <div>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <Link to="/experience" className="view-all">
          View all
        </Link>
      </div>
      <div className="carousel-wrap">
        <div className="carousel">
          {experienceContent.slice(0, 4).map((item) => (
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
    </div>
  </section>
);

export default ExperienceCarousel;

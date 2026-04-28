import { profileContent } from '../content/profile';

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <p className="section-label">About me</p>
      <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
        Background &amp; Mission
      </h2>
      <div className="about-body">
        {profileContent.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export default About;

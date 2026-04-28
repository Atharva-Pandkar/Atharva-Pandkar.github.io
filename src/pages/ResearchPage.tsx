import { Link } from 'react-router-dom';

const ResearchPage = () => (
  <div className="main-content">
    <section className="section">
      <div className="container">
        <div className="coming-soon">
          <div className="coming-soon-icon">🔬</div>
          <p className="section-label" style={{ textAlign: 'center' }}>Research Work</p>
          <h2>Coming Soon</h2>
          <p>
            This page is reserved for publications, academic contributions, and research work.
            Content will be added here soon.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Link to="/projects" className="btn btn-primary">
              View Projects →
            </Link>
            <Link to="/" className="btn btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ResearchPage;

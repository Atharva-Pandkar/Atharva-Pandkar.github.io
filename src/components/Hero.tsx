import { Link } from 'react-router-dom';
import { analyticsEvents } from '../analytics/events';
import { profileContent } from '../content/profile';
import { trackEvent, trackSocialClick } from '../lib/analytics';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-layout">
        <div className="hero-text">
          <p className="hero-eyebrow">{profileContent.location}</p>
          <h1>
            Hi, I'm <span className="hero-accent">{profileContent.name}</span>
          </h1>
          <p className="hero-subtitle">{profileContent.title}</p>
          <p className="hero-summary">{profileContent.summary}</p>
          <div className="hero-actions">
            <Link
              to="/projects"
              className="btn btn-primary"
              onClick={() => trackEvent(analyticsEvents.ctaClicked, { cta: 'view_projects', location: 'hero' })}
            >
              View Projects →
            </Link>
            <Link to="/experience" className="btn btn-ghost">
              My Experience
            </Link>
            {profileContent.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                onClick={() => trackSocialClick(social.label.toLowerCase(), 'hero')}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img
            src="/images/LinkedIn_Profile_Image.jpg"
            alt={profileContent.name}
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

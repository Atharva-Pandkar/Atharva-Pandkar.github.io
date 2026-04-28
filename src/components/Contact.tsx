import { useState } from 'react';
import { Link } from 'react-router-dom';
import { analyticsEvents } from '../analytics/events';
import { contactContent } from '../content/contact';
import { trackEvent, trackSocialClick } from '../lib/analytics';

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/research', label: 'Research' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    trackEvent(analyticsEvents.emailCopied, { location: 'footer' });
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-name">{contactContent.name}</p>
            <p className="footer-tagline">
              Machine Learning Engineer · AI Solutions Builder
            </p>
            <div className="footer-socials">
              {contactContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  onClick={() => trackSocialClick(social.label.toLowerCase(), 'footer')}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-section-label">Contact</p>
            <div className="footer-contact-row">
              <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
              <button
                type="button"
                className={`copy-btn${copied ? ' copied' : ''}`}
                onClick={copyEmail}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div className="footer-contact-row">
              <span>{contactContent.phone}</span>
            </div>
          </div>

          <div>
            <p className="footer-section-label">Navigate</p>
            <ul className="footer-nav-list">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {contactContent.name} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

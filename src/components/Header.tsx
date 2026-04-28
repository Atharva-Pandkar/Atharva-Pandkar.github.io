import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/research', label: 'Research' },
] as const;

const Header = () => (
  <header className="site-header">
    <div className="container header-inner">
      <NavLink to="/" className="brand">
        Atharva <span className="brand-accent">Pandkar</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={'end' in link ? link.end : false}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

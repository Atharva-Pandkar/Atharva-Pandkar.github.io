import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../../Assets/imgs/teal a small.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Only track sections on home page
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('.section');
        let current = '';

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
          }
        });

        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'experience', label: 'Experience', path: '/experience' },
    { id: 'contact', label: 'Contact', path: '/' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`l-header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav bd-grid">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RouterLink to="/" className="nav-logo">
            <img src={logo} alt="Atharva Pandkar Logo" />
          </RouterLink>
        </motion.div>
        <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.path === '/' && link.id !== 'home' ? (
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`nav-link ${link.id} ${activeSection === link.id ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <RouterLink
                    to={link.path}
                    className={`nav-link ${link.id} ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </RouterLink>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="nav-toggle"
          id="nav-toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;

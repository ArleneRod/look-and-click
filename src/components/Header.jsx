import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Ejemplos', href: '#examples' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proceso', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Nosotros', href: '#about' }
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    handleMenuClick();
  };

  return (
      <motion.header
          className={`header ${isScrolled ? 'scrolled' : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <div className="header-container">
          <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
          >
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
              <span className="logo-look">Look</span>
              <span className="logo-ampersand">&</span>
              <span className="logo-click">Click</span>
            </a>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                  <motion.li
                      key={index}
                      className="nav-item"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                        href={item.href}
                        className="nav-link"
                        onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
              className="header-cta"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
                href="#contact"
                className="cta-button"
                onClick={(e) => scrollToSection(e, '#contact')}
            >
              Empezar proyecto
            </a>
          </motion.div>

          <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.header>
  );
}

export default Header;
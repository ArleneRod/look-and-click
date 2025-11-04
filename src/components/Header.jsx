import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';
import '../styles/header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = t.header.menuItems;

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
              {t.header.cta}
            </a>
          </motion.div>

          <motion.button
              className="language-toggle"
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              aria-label="Toggle language"
              style={{
                background: 'transparent',
                border: '2px solid var(--primary)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'var(--primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginLeft: '1rem'
              }}
          >
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            {language === 'es' ? 'EN' : 'ES'}
          </motion.button>

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
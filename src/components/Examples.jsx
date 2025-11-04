import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaMobileAlt, FaDesktop, FaShoppingCart, FaUtensils, FaSpa, FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';
import '../styles/examples.css';

const Examples = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useLanguage();
  const t = translations[language].examples;

  const icons = [<FaUtensils />, <FaSpa />, <FaShoppingCart />, <FaBriefcase />];
  const colors = ['#ef4444', '#8b5cf6', '#10b981', '#3b82f6'];
  const mockups = ['restaurant', 'spa', 'shop', 'professional'];

  const examples = t.categories.map((example, index) => ({
    id: index + 1,
    ...example,
    icon: icons[index],
    color: colors[index],
    mockup: mockups[index]
  }));

  return (
    <section id="examples" className="examples-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="examples-header"
        >
          <h2>{t.title}</h2>
          <p>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="examples-grid">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="example-card"
              style={{ '--card-color': example.color }}
            >
              {/* Mockup Preview */}
              <div className="mockup-container">
                <div className="devices">
                  <div className="desktop-mockup">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="browser-url">www.tu-negocio.com</div>
                    </div>
                    <div className="mockup-content">
                      <div className="mockup-header" style={{ background: example.color }}></div>
                      <div className="mockup-body">
                        <div className="mockup-text"></div>
                        <div className="mockup-text short"></div>
                        <div className="mockup-image"></div>
                        <div className="mockup-buttons">
                          <div className="mockup-button" style={{ background: example.color }}></div>
                          <div className="mockup-button outline"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-mockup">
                    <div className="mobile-notch"></div>
                    <div className="mobile-content">
                      <div className="mockup-header-mobile" style={{ background: example.color }}></div>
                      <div className="mockup-body-mobile">
                        <div className="mockup-text-mobile"></div>
                        <div className="mockup-text-mobile short"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="responsive-badge">
                  <FaMobileAlt /> <FaDesktop /> {t.responsive}
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-icon" style={{ background: example.color }}>
                  {example.icon}
                </div>

                <div className="card-category">{example.category}</div>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                <div className="card-features">
                  {example.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <div className="card-tags">
                  {example.tags.map((tag, i) => (
                    <span key={i} className="tag" style={{ borderColor: example.color, color: example.color }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card-cta"
                  style={{ background: example.color }}
                  onClick={() => window.location.href = '#contact'}
                >
                  {t.button} <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="examples-cta"
        >
          <h3>{t.cta.title}</h3>
          <p>
            {t.cta.subtitle}
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta.button}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Examples;
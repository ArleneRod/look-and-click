import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaBriefcase, FaCrown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useLanguage();
  const t = translations[language].services;

  const icons = [<FaRocket />, <FaBriefcase />, <FaCrown />];
  const colors = ['#3b82f6', '#10b981', '#8b5cf6'];

  const packages = t.packages.map((pkg, index) => ({
    ...pkg,
    icon: icons[index],
    color: colors[index]
  }));

  return (
    <section id="services" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>{t.title}</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
            {t.subtitle}
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{
                background: 'white',
                border: pkg.popular ? `3px solid ${pkg.color}` : '1px solid #e2e8f0',
                borderRadius: '15px',
                padding: '2rem',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '20px',
                  background: pkg.color,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {t.popularBadge}
                </div>
              )}

              <div style={{ 
                fontSize: '3rem', 
                color: pkg.color, 
                marginBottom: '1rem' 
              }}>
                {pkg.icon}
              </div>

              <h3 style={{ marginBottom: '0.5rem' }}>{pkg.name}</h3>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                color: pkg.color,
                marginBottom: '1.5rem' 
              }}>
                {pkg.price}
              </div>

              <ul style={{ 
                listStyle: 'none', 
                marginBottom: '1.5rem',
                textAlign: 'left' 
              }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ 
                    marginBottom: '0.8rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    color: 'var(--gray)'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: pkg.color,
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{
                background: 'var(--light)',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                <strong>{t.idealFor}</strong> {pkg.ideal}
              </div>

              <div style={{
                color: 'var(--gray)',
                fontSize: '0.9rem',
                marginBottom: '1.5rem'
              }}>
                ⏱️ {t.delivery} {pkg.time}
              </div>

              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  background: pkg.color,
                  border: 'none'
                }}
              >
                {t.startButton}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--light)',
            borderRadius: '15px'
          }}
        >
          <h3>{t.additionalServices.title}</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            {t.additionalServices.items.map((item, index) => (
              <div key={index}>
                <strong>{item.name}</strong>
                <p style={{ color: 'var(--primary)', fontSize: '1.3rem', margin: '0.5rem 0' }}>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

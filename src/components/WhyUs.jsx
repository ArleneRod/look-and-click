import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLanguage, FaDollarSign, FaPalette, FaHandshake, FaGlobe, FaCode } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useLanguage();
  const t = translations[language].whyUs;

  const icons = [<FaLanguage />, <FaDollarSign />, <FaPalette />, <FaHandshake />, <FaGlobe />, <FaCode />];
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

  const reasons = t.reasons.map((reason, index) => ({
    ...reason,
    icon: icons[index],
    color: colors[index]
  }));

  return (
    <section id="why-us" style={{ background: 'var(--white)' }}>
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: '2px solid var(--light)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: reason.color,
                marginBottom: '1rem'
              }}>
                {reason.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{reason.title}</h3>
              <p style={{ color: 'var(--gray)' }}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

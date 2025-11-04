import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" style={{ background: 'var(--light)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                width: '400px',
                height: '400px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}
            >
              {t.photoPlaceholder}
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t.title}
            </motion.h2>

            {t.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                style={{ fontSize: '1.1rem', color: 'var(--gray)', marginBottom: index < t.paragraphs.length - 1 ? '1rem' : '0' }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          section > div > div > div:first-child > div {
            width: 300px !important;
            height: 300px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

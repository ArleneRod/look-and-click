import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const { language } = useLanguage();
  const t = translations[language].faq;

  return (
    <section id="faq" style={{ background: 'var(--light)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
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

        <div>
          {t.questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                background: 'white',
                marginBottom: '1rem',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  background: 'white',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: 'var(--primary)' }}
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  color: 'var(--gray)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

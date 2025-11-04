import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
              TU FOTO
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hola, soy [Tu nombre]
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ fontSize: '1.1rem', color: 'var(--gray)', marginBottom: '1rem' }}
            >
              Soy latina viviendo en Holanda. Entiendo los desafíos de emprender en un país nuevo. 
              Por eso creé Look & Click: para ayudar a otros latinos a dar ese paso digital sin complicaciones.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ fontSize: '1.1rem', color: 'var(--gray)', marginBottom: '1rem' }}
            >
              Como desarrolladora web, combino diseño moderno con funcionalidad real. Mi objetivo es simple: 
              que tu página web te ayude a crecer, no que sea solo algo bonito que nadie ve.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ fontSize: '1.1rem', color: 'var(--gray)' }}
            >
              Trabajo en español e inglés, entiendo tu visión, y hago que el proceso sea fácil y transparente.
            </motion.p>
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

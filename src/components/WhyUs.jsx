import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLanguage, FaDollarSign, FaPalette, FaHandshake, FaGlobe, FaCode } from 'react-icons/fa';

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
    {
      icon: <FaLanguage />,
      title: 'Hablo tu idioma',
      description: 'Trabajo en español e inglés, entiendo tu cultura',
      color: '#3b82f6'
    },
    {
      icon: <FaDollarSign />,
      title: 'Precios justos',
      description: 'Sin sorpresas, sin costos ocultos',
      color: '#10b981'
    },
    {
      icon: <FaPalette />,
      title: 'Diseño personalizado',
      description: 'No uso templates genéricos, cada proyecto es único',
      color: '#f59e0b'
    },
    {
      icon: <FaHandshake />,
      title: 'Soporte real',
      description: 'Respondo tus preguntas, aunque el proyecto ya esté terminado',
      color: '#8b5cf6'
    },
    {
      icon: <FaGlobe />,
      title: 'Entiendo a los expats',
      description: 'Sé lo que es emprender en un país nuevo',
      color: '#ec4899'
    },
    {
      icon: <FaCode />,
      title: 'Tecnología moderna',
      description: 'React, diseño responsive, optimizado para Google',
      color: '#06b6d4'
    }
  ];

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
          <h2>¿Por qué Look & Click?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
            Lo que nos hace diferentes
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

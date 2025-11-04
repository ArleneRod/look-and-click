import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      id="contact"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ color: 'white' }}
        >
          ¿Listo para dar el siguiente paso?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ 
            fontSize: '1.3rem', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
        >
          No dejes que la tecnología te detenga. 
          Agenda una llamada gratuita de 30 minutos y hablemos de tu proyecto.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <motion.a
            href="https://wa.me/31XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: '#25D366',
              color: 'white',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
            }}
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </motion.a>

          <motion.a
            href="mailto:tu-email@ejemplo.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'white',
              color: 'var(--primary)',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            <FaEnvelope size={24} />
            Email
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ 
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
            📧 tu-email@ejemplo.com<br />
            📱 +31 X XX XXX XXXX<br />
            📍 [Tu Ciudad], Países Bajos
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;

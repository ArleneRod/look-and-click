import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaPaintBrush, FaRocket, FaHeadset } from 'react-icons/fa';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: <FaPhone />,
      title: 'Conversemos',
      subtitle: 'Gratis',
      description: 'Llamada de 30 min por Zoom. Hablamos de tu negocio, tus necesidades y tu presupuesto',
      color: '#3b82f6'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Diseño y desarrollo',
      subtitle: 'Colaborativo',
      description: 'Te muestro avances, ajustamos juntos. Siempre en contacto por WhatsApp/email',
      color: '#10b981'
    },
    {
      icon: <FaRocket />,
      title: 'Lanzamiento',
      subtitle: 'Tu página online',
      description: 'Tu página online y funcionando. Training incluido para que sepas manejarla',
      color: '#f59e0b'
    },
    {
      icon: <FaHeadset />,
      title: 'Soporte continuo',
      subtitle: 'Siempre disponible',
      description: 'No te dejo solo después de entregar. Soporte incluido según tu paquete',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="process" style={{ background: 'var(--light)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2>Simple y sin complicaciones</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
            Así trabajamos juntos
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '80px',
                  height: '80px',
                  background: step.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'white',
                  fontSize: '2rem',
                  boxShadow: `0 10px 30px ${step.color}40`
                }}
              >
                {step.icon}
              </motion.div>

              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                background: step.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                {index + 1}
              </div>

              <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
              <div style={{
                color: step.color,
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                {step.subtitle}
              </div>
              <p style={{ color: 'var(--gray)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

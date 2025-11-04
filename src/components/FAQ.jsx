import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma hacer mi página?',
      answer: 'Dependiendo del paquete: 1-4 semanas desde el pago del anticipo.'
    },
    {
      question: '¿Necesito conocimientos técnicos?',
      answer: 'No. Te enseño todo lo que necesitas saber para manejar tu página.'
    },
    {
      question: '¿Qué pasa después de que esté lista mi página?',
      answer: 'Tienes soporte incluido según tu paquete. Después puedes contratar mantenimiento mensual o manejarlo tú.'
    },
    {
      question: '¿Incluye hosting?',
      answer: 'Sí, todos los paquetes incluyen hosting por 1 año.'
    },
    {
      question: '¿Puedo hacer cambios después?',
      answer: 'Las primeras 2-3 rondas de cambios están incluidas. Cambios adicionales se cobran aparte.'
    },
    {
      question: '¿Trabajas solo con latinos?',
      answer: 'Principalmente, pero trabajo con cualquier emprendedor que necesite una página web profesional.'
    },
    {
      question: '¿Cómo es el pago?',
      answer: '50% anticipo para empezar, 50% al entregar el proyecto.'
    },
    {
      question: '¿Nos vemos en persona?',
      answer: 'Trabajo principalmente por Zoom, pero puedo reunirme en persona si es necesario (depende de ubicación).'
    }
  ];

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
          <h2>Preguntas frecuentes</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
            Todo lo que necesitas saber
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
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

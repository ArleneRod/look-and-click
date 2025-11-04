import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaMobileAlt, FaDesktop, FaShoppingCart, FaUtensils, FaSpa, FaBriefcase } from 'react-icons/fa';
import '../styles/examples.css';

const Examples = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const examples = [
    {
      id: 1,
      title: 'Restaurante Latino',
      category: 'Gastronomía',
      description: 'Menú digital, reservas online y galería de platos',
      icon: <FaUtensils />,
      color: '#ef4444',
      features: ['Menú digital', 'Sistema de reservas', 'Galería de fotos'],
      mockup: 'restaurant',
      tags: ['Responsive', 'Reservas', 'Menú']
    },
    {
      id: 2,
      title: 'Spa & Wellness',
      category: 'Belleza & Salud',
      description: 'Catálogo de servicios, citas online y promociones',
      icon: <FaSpa />,
      color: '#8b5cf6',
      features: ['Booking system', 'Catálogo de servicios', 'Blog de tips'],
      mockup: 'spa',
      tags: ['Booking', 'Galería', 'Blog']
    },
    {
      id: 3,
      title: 'Tienda Online',
      category: 'E-commerce',
      description: 'Catálogo de productos, carrito de compra y pagos',
      icon: <FaShoppingCart />,
      color: '#10b981',
      features: ['Carrito de compra', 'Pagos online', 'Panel de admin'],
      mockup: 'shop',
      tags: ['E-commerce', 'Pagos', 'Inventario']
    },
    {
      id: 4,
      title: 'Servicios Profesionales',
      category: 'Freelance/Empresa',
      description: 'Portfolio, testimonios y formulario de contacto',
      icon: <FaBriefcase />,
      color: '#3b82f6',
      features: ['Portfolio', 'Testimonios', 'Contacto'],
      mockup: 'professional',
      tags: ['Portfolio', 'Corporativo', 'SEO']
    }
  ];

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
          <h2>Ejemplos de lo que puedo crear para ti</h2>
          <p>
            Cada proyecto es único y diseñado específicamente para tu negocio.
            Aquí algunos ejemplos del tipo de páginas web que desarrollo:
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
                  <FaMobileAlt /> <FaDesktop /> Responsive
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
                  Quiero algo así <FaArrowRight />
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
          <h3>¿Tienes una idea diferente?</h3>
          <p>
            Estos son solo ejemplos. Puedo crear cualquier tipo de página web que necesites.
            Cuéntame tu idea y la hacemos realidad juntos.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hablemos de tu proyecto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Examples;
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';
import '../styles/contactForm.css';

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { language } = useLanguage();
  const t = translations[language].contact;

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    // IMPORTANTE: Configura tus credenciales de EmailJS
    // 1. Copia .env.example a .env
    // 2. Completa los valores con tus credenciales de https://www.emailjs.com/
    // 3. Ver EMAILJS_SETUP.md para instrucciones detalladas
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'TU_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'TU_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'TU_PUBLIC_KEY';

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('Email enviado:', result.text);
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: t.form.successMessage
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error al enviar email:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: t.form.errorMessage
      });

      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2>{t.title}</h2>
          <p>
            {t.subtitle}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="contact-info"
          >
            <h3>{t.infoTitle}</h3>
            <p>
              {t.infoDescription}
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope className="method-icon" />
                <div>
                  <h4>{t.email}</h4>
                  <a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a>
                </div>
              </div>

              <div className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <h4>{t.phone}</h4>
                  <a href="tel:+31XXXXXXXXX">+31 X XX XXX XXXX</a>
                </div>
              </div>
            </div>

            <div className="quick-links">
              <h4>{t.quickLinks.title}</h4>
              <a
                href="https://wa.me/31XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                {t.quickLinks.whatsapp}
              </a>
              <a
                href="#services"
                className="services-link"
              >
                {t.quickLinks.services}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="contact-form-wrapper"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.form.namePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.form.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone /> {t.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phonePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaCommentDots /> {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder={t.form.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <span className="spinner"></span>
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {t.form.submitButton}
                  </>
                )}
              </button>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`form-message ${formStatus.success ? 'success' : 'error'}`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer style={{
      background: 'var(--dark)',
      color: 'white',
      padding: '3rem 2rem 1rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'white' }}>Look & Click</h3>
            <p style={{ color: '#94a3b8' }}>
              {t.tagline}
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginTop: '1.5rem',
              fontSize: '1.5rem'
            }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#94a3b8', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#E1306C'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#94a3b8', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#1877F2'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                <FaFacebook />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#94a3b8', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#0A66C2'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white' }}>{t.navigation.title}</h4>
            <ul style={{ listStyle: 'none' }}>
              {t.navigation.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a href={item.href} style={{ color: '#94a3b8', textDecoration: 'none' }}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: 'white' }}>{t.contactTitle}</h4>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
              📧 tu-email@ejemplo.com
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
              📱 +31 X XX XXX XXXX
            </p>
            <p style={{ color: '#94a3b8' }}>
              📍 [Tu Ciudad], Países Bajos
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#94a3b8'
        }}>
          <p style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            © 2024 Look & Click. {t.copyright} <FaHeart style={{ color: '#ef4444' }} /> {t.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

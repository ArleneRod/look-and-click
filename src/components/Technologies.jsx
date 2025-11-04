import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const technologies = [
        {
            name: 'React',
            description: 'Interfaces modernas y rápidas',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            category: 'Frontend'
        },
        {
            name: 'Tailwind CSS',
            description: 'Diseño responsive y elegante',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            category: 'Styling'
        },
        {
            name: 'Firebase',
            description: 'Base de datos y hosting confiable',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            category: 'Backend'
        },
        {
            name: 'Vite',
            description: 'Build tool ultrarrápido',
            logo: 'https://vitejs.dev/logo.svg',
            category: 'Build Tool'
        },
        {
            name: 'Framer Motion',
            description: 'Animaciones profesionales',
            logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
            category: 'Animations'
        },
        {
            name: 'Stripe',
            description: 'Pagos online seguros',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg',
            category: 'Payments'
        },
        {
            name: 'WordPress',
            description: 'CMS para blogs y contenido',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
            category: 'CMS'
        },
        {
            name: 'Shopify',
            description: 'E-commerce profesional',
            logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
            category: 'E-commerce'
        },
        {
            name: 'Claude AI',
            description: 'Inteligencia Artificial para desarrollo',
            logo: 'https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=96&q=75',
            category: 'AI'
        },
        {
            name: 'Figma',
            description: 'Diseño y prototipado',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            category: 'Design'
        },
        {
            name: 'Git',
            description: 'Control de versiones',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            category: 'Version Control'
        },
        {
            name: 'Netlify',
            description: 'Hosting rápido y confiable',
            logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg',
            category: 'Hosting'
        }
    ];

    return (
        <section id="technologies" style={{ background: 'var(--white)', padding: '5rem 2rem' }}>
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2>Tecnologías modernas</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--gray)', maxWidth: '700px', margin: '0 auto' }}>
                        Uso las mejores herramientas del mercado para crear páginas web rápidas,
                        seguras y profesionales. Incluyendo Inteligencia Artificial para optimizar el desarrollo.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05
                            }}
                            style={{
                                background: 'white',
                                padding: '2rem 1.5rem',
                                borderRadius: '15px',
                                textAlign: 'center',
                                border: '2px solid var(--light)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.border = '2px solid var(--primary)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.1)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) {
                                    img.style.filter = 'grayscale(0%)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.border = '2px solid var(--light)';
                                e.currentTarget.style.boxShadow = 'none';
                                const img = e.currentTarget.querySelector('img');
                                if (img) {
                                    img.style.filter = 'grayscale(100%)';
                                }
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'var(--light)',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '20px',
                                fontSize: '0.7rem',
                                fontWeight: '600',
                                color: 'var(--gray)'
                            }}>
                                {tech.category}
                            </div>

                            <img
                                src={tech.logo}
                                alt={tech.name}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'contain',
                                    marginBottom: '1rem',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s ease'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const parent = e.target.parentElement;
                                    const fallback = document.createElement('div');
                                    fallback.style.cssText = `
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1rem;
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                  `;
                                    fallback.textContent = tech.name.charAt(0);
                                    parent.insertBefore(fallback, e.target);
                                }}
                            />

                            <h4 style={{
                                marginBottom: '0.5rem',
                                fontSize: '1.1rem',
                                color: 'var(--dark)'
                            }}>
                                {tech.name}
                            </h4>

                            <p style={{
                                color: 'var(--gray)',
                                fontSize: '0.9rem',
                                lineHeight: '1.4',
                                margin: 0
                            }}>
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{
                        textAlign: 'center',
                        padding: '2.5rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '20px',
                        color: 'white'
                    }}
                >
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>
                        🤖 Potenciado con Inteligencia Artificial
                    </h3>
                    <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                        Uso Claude AI y otras herramientas de IA para acelerar el desarrollo,
                        optimizar el código y crear soluciones más eficientes.
                        Esto me permite entregar proyectos de alta calidad en menos tiempo,
                        sin comprometer la personalización ni el toque humano que tu negocio necesita.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;
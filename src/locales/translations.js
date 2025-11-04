export const translations = {
  es: {
    // Header
    header: {
      menuItems: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Ejemplos', href: '#examples' },
        { label: 'Servicios', href: '#services' },
        { label: 'Proceso', href: '#process' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Nosotros', href: '#about' }
      ],
      cta: 'Empezar proyecto'
    },

    // Hero
    hero: {
      brand: 'LOOK&CLICK',
      title: 'Tu negocio merece brillar online',
      subtitle: 'Páginas web profesionales para emprendedores latinos en Holanda. Desde €250.',
      ctaPrimary: 'Ver Paquetes',
      ctaSecondary: 'Contactar'
    },

    // Examples
    examples: {
      title: 'Ejemplos de lo que puedo crear para ti',
      subtitle: 'Cada proyecto es único y diseñado específicamente para tu negocio. Aquí algunos ejemplos del tipo de páginas web que desarrollo:',
      categories: [
        {
          title: 'Restaurante Latino',
          category: 'Gastronomía',
          description: 'Menú digital, reservas online y galería de platos',
          features: ['Menú digital', 'Sistema de reservas', 'Galería de fotos'],
          tags: ['Responsive', 'Reservas', 'Menú']
        },
        {
          title: 'Spa & Wellness',
          category: 'Belleza & Salud',
          description: 'Catálogo de servicios, citas online y promociones',
          features: ['Booking system', 'Catálogo de servicios', 'Blog de tips'],
          tags: ['Booking', 'Galería', 'Blog']
        },
        {
          title: 'Tienda Online',
          category: 'E-commerce',
          description: 'Catálogo de productos, carrito de compra y pagos',
          features: ['Carrito de compra', 'Pagos online', 'Panel de admin'],
          tags: ['E-commerce', 'Pagos', 'Inventario']
        },
        {
          title: 'Servicios Profesionales',
          category: 'Freelance/Empresa',
          description: 'Portfolio, testimonios y formulario de contacto',
          features: ['Portfolio', 'Testimonios', 'Contacto'],
          tags: ['Portfolio', 'Corporativo', 'SEO']
        }
      ],
      cta: {
        title: '¿Tienes una idea diferente?',
        subtitle: 'Estos son solo ejemplos. Puedo crear cualquier tipo de página web que necesites. Cuéntame tu idea y la hacemos realidad juntos.',
        button: 'Hablemos de tu proyecto'
      },
      button: 'Quiero algo así',
      responsive: 'Responsive'
    },

    // Services
    services: {
      title: 'Paquetes diseñados para ti',
      subtitle: 'Elige el que mejor se adapte a tu negocio',
      packages: [
        {
          name: 'STARTER',
          price: '€250-400',
          features: [
            'Landing page profesional',
            'Diseño responsive',
            'Hosting incluido (1 año)',
            'Formulario de contacto',
            'Integración redes sociales',
            '1 mes de soporte gratis',
            'SEO básico'
          ],
          ideal: 'Nuevos emprendedores, profesionales independientes',
          time: '1-2 semanas'
        },
        {
          name: 'BUSINESS',
          price: '€600-900',
          features: [
            'Sitio web multi-página (hasta 5)',
            'Diseño 100% personalizado',
            'Galería de productos/servicios',
            'Blog opcional',
            'Hosting incluido (1 año)',
            '3 meses de soporte',
            'SEO optimizado',
            'Google Maps integrado'
          ],
          ideal: 'Pequeños negocios (restaurantes, spas, tiendas)',
          time: '2-3 semanas',
          popular: true
        },
        {
          name: 'PREMIUM',
          price: '€1,200-1,800',
          features: [
            'E-commerce o funcionalidades avanzadas',
            'Sistema de reservas/citas',
            'Todo lo del paquete Business',
            '6 meses de soporte',
            'Training personalizado',
            'Integraciones especiales'
          ],
          ideal: 'Negocios establecidos con necesidades específicas',
          time: '3-4 semanas'
        }
      ],
      popularBadge: 'MÁS POPULAR',
      idealFor: 'Ideal para:',
      delivery: 'Entrega:',
      startButton: 'Empezar',
      additionalServices: {
        title: 'Servicios Adicionales',
        items: [
          { name: 'Mantenimiento web', price: '€30-50/mes' },
          { name: 'Gestión redes sociales', price: '€80-150/mes' },
          { name: 'Updates de contenido', price: '€40/mes' }
        ]
      }
    },

    // Technologies
    technologies: {
      title: 'Tecnologías modernas',
      subtitle: 'Uso las mejores herramientas del mercado para crear páginas web rápidas, seguras y profesionales. Incluyendo Inteligencia Artificial para optimizar el desarrollo.',
      items: [
        { name: 'React', description: 'Interfaces modernas y rápidas', category: 'Frontend' },
        { name: 'Tailwind CSS', description: 'Diseño responsive y elegante', category: 'Styling' },
        { name: 'Firebase', description: 'Base de datos y hosting confiable', category: 'Backend' },
        { name: 'Vite', description: 'Build tool ultrarrápido', category: 'Build Tool' },
        { name: 'Framer Motion', description: 'Animaciones profesionales', category: 'Animations' },
        { name: 'Stripe', description: 'Pagos online seguros', category: 'Payments' },
        { name: 'WordPress', description: 'CMS para blogs y contenido', category: 'CMS' },
        { name: 'Shopify', description: 'E-commerce profesional', category: 'E-commerce' },
        { name: 'Claude AI', description: 'Inteligencia Artificial para desarrollo', category: 'AI' },
        { name: 'Figma', description: 'Diseño y prototipado', category: 'Design' },
        { name: 'Git', description: 'Control de versiones', category: 'Version Control' },
        { name: 'Netlify', description: 'Hosting rápido y confiable', category: 'Hosting' }
      ],
      aiSection: {
        title: '🤖 Potenciado con Inteligencia Artificial',
        description: 'Uso Claude AI y otras herramientas de IA para acelerar el desarrollo, optimizar el código y crear soluciones más eficientes. Esto me permite entregar proyectos de alta calidad en menos tiempo, sin comprometer la personalización ni el toque humano que tu negocio necesita.'
      }
    },

    // Process
    process: {
      title: 'Simple y sin complicaciones',
      subtitle: 'Así trabajamos juntos',
      steps: [
        {
          title: 'Conversemos',
          subtitle: 'Gratis',
          description: 'Llamada de 30 min por Zoom. Hablamos de tu negocio, tus necesidades y tu presupuesto'
        },
        {
          title: 'Diseño y desarrollo',
          subtitle: 'Colaborativo',
          description: 'Te muestro avances, ajustamos juntos. Siempre en contacto por WhatsApp/email'
        },
        {
          title: 'Lanzamiento',
          subtitle: 'Tu página online',
          description: 'Tu página online y funcionando. Training incluido para que sepas manejarla'
        },
        {
          title: 'Soporte continuo',
          subtitle: 'Siempre disponible',
          description: 'No te dejo solo después de entregar. Soporte incluido según tu paquete'
        }
      ]
    },

    // WhyUs
    whyUs: {
      title: '¿Por qué Look & Click?',
      subtitle: 'Lo que nos hace diferentes',
      reasons: [
        {
          title: 'Hablo tu idioma',
          description: 'Trabajo en español e inglés, entiendo tu cultura'
        },
        {
          title: 'Precios justos',
          description: 'Sin sorpresas, sin costos ocultos'
        },
        {
          title: 'Diseño personalizado',
          description: 'No uso templates genéricos, cada proyecto es único'
        },
        {
          title: 'Soporte real',
          description: 'Respondo tus preguntas, aunque el proyecto ya esté terminado'
        },
        {
          title: 'Entiendo a los expats',
          description: 'Sé lo que es emprender en un país nuevo'
        },
        {
          title: 'Tecnología moderna',
          description: 'React, diseño responsive, optimizado para Google'
        }
      ]
    },

    // FAQ
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber',
      questions: [
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
      ]
    },

    // About
    about: {
      photoPlaceholder: 'TU FOTO',
      title: 'Hola, soy [Tu nombre]',
      paragraphs: [
        'Soy latina viviendo en Holanda. Entiendo los desafíos de emprender en un país nuevo. Por eso creé Look & Click: para ayudar a otros latinos a dar ese paso digital sin complicaciones.',
        'Como desarrolladora web, combino diseño moderno con funcionalidad real. Mi objetivo es simple: que tu página web te ayude a crecer, no que sea solo algo bonito que nadie ve.',
        'Trabajo en español e inglés, entiendo tu visión, y hago que el proceso sea fácil y transparente.'
      ]
    },

    // Contact
    contact: {
      title: '¿Listo para comenzar tu proyecto?',
      subtitle: 'Completa el formulario y te responderemos en menos de 24 horas',
      infoTitle: 'Hablemos de tu proyecto',
      infoDescription: 'No importa si estás empezando o si ya tienes tu negocio establecido. Estoy aquí para ayudarte a dar ese paso digital.',
      email: 'Email',
      phone: 'Teléfono / WhatsApp',
      quickLinks: {
        title: 'También puedes:',
        whatsapp: 'Enviar WhatsApp directo',
        services: 'Ver paquetes y precios'
      },
      form: {
        name: 'Nombre completo *',
        email: 'Email *',
        phone: 'Teléfono',
        message: 'Cuéntame sobre tu proyecto *',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        phonePlaceholder: '+31 X XX XXX XXXX',
        messagePlaceholder: 'Describe brevemente tu negocio, qué necesitas y cualquier detalle que creas importante...',
        submitButton: 'Enviar mensaje',
        sending: 'Enviando...',
        successMessage: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
        errorMessage: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.'
      }
    },

    // Footer
    footer: {
      tagline: 'Tu negocio online, hecho simple.',
      navigation: {
        title: 'Navegación',
        items: [
          { label: 'Sobre mí', href: '#about' },
          { label: 'Servicios', href: '#services' },
          { label: 'Proceso', href: '#process' },
          { label: 'Contacto', href: '#contact' }
        ]
      },
      contactTitle: 'Contacto',
      copyright: 'Todos los derechos reservados. Hecho con',
      location: 'en Holanda'
    }
  },

  en: {
    // Header
    header: {
      menuItems: [
        { label: 'Home', href: '#hero' },
        { label: 'Examples', href: '#examples' },
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'FAQ', href: '#faq' },
        { label: 'About', href: '#about' }
      ],
      cta: 'Start Project'
    },

    // Hero
    hero: {
      brand: 'LOOK&CLICK',
      title: 'Your business deserves to shine online',
      subtitle: 'Professional websites for Latino entrepreneurs in the Netherlands. Starting from €250.',
      ctaPrimary: 'View Packages',
      ctaSecondary: 'Contact'
    },

    // Examples
    examples: {
      title: 'Examples of what I can create for you',
      subtitle: 'Each project is unique and designed specifically for your business. Here are some examples of the types of websites I develop:',
      categories: [
        {
          title: 'Latino Restaurant',
          category: 'Gastronomy',
          description: 'Digital menu, online reservations and photo gallery',
          features: ['Digital menu', 'Booking system', 'Photo gallery'],
          tags: ['Responsive', 'Bookings', 'Menu']
        },
        {
          title: 'Spa & Wellness',
          category: 'Beauty & Health',
          description: 'Service catalog, online appointments and promotions',
          features: ['Booking system', 'Service catalog', 'Tips blog'],
          tags: ['Booking', 'Gallery', 'Blog']
        },
        {
          title: 'Online Store',
          category: 'E-commerce',
          description: 'Product catalog, shopping cart and payments',
          features: ['Shopping cart', 'Online payments', 'Admin panel'],
          tags: ['E-commerce', 'Payments', 'Inventory']
        },
        {
          title: 'Professional Services',
          category: 'Freelance/Company',
          description: 'Portfolio, testimonials and contact form',
          features: ['Portfolio', 'Testimonials', 'Contact'],
          tags: ['Portfolio', 'Corporate', 'SEO']
        }
      ],
      cta: {
        title: 'Have a different idea?',
        subtitle: 'These are just examples. I can create any type of website you need. Tell me your idea and let\'s make it happen together.',
        button: 'Let\'s talk about your project'
      },
      button: 'I want something like this',
      responsive: 'Responsive'
    },

    // Services
    services: {
      title: 'Packages designed for you',
      subtitle: 'Choose the one that best fits your business',
      packages: [
        {
          name: 'STARTER',
          price: '€250-400',
          features: [
            'Professional landing page',
            'Responsive design',
            'Hosting included (1 year)',
            'Contact form',
            'Social media integration',
            '1 month free support',
            'Basic SEO'
          ],
          ideal: 'New entrepreneurs, independent professionals',
          time: '1-2 weeks'
        },
        {
          name: 'BUSINESS',
          price: '€600-900',
          features: [
            'Multi-page website (up to 5)',
            '100% custom design',
            'Product/service gallery',
            'Optional blog',
            'Hosting included (1 year)',
            '3 months support',
            'Optimized SEO',
            'Google Maps integration'
          ],
          ideal: 'Small businesses (restaurants, spas, shops)',
          time: '2-3 weeks',
          popular: true
        },
        {
          name: 'PREMIUM',
          price: '€1,200-1,800',
          features: [
            'E-commerce or advanced features',
            'Booking/appointment system',
            'Everything in Business package',
            '6 months support',
            'Personalized training',
            'Special integrations'
          ],
          ideal: 'Established businesses with specific needs',
          time: '3-4 weeks'
        }
      ],
      popularBadge: 'MOST POPULAR',
      idealFor: 'Ideal for:',
      delivery: 'Delivery:',
      startButton: 'Get Started',
      additionalServices: {
        title: 'Additional Services',
        items: [
          { name: 'Website maintenance', price: '€30-50/month' },
          { name: 'Social media management', price: '€80-150/month' },
          { name: 'Content updates', price: '€40/month' }
        ]
      }
    },

    // Technologies
    technologies: {
      title: 'Modern Technologies',
      subtitle: 'I use the best tools on the market to create fast, secure and professional websites. Including Artificial Intelligence to optimize development.',
      items: [
        { name: 'React', description: 'Modern and fast interfaces', category: 'Frontend' },
        { name: 'Tailwind CSS', description: 'Responsive and elegant design', category: 'Styling' },
        { name: 'Firebase', description: 'Reliable database and hosting', category: 'Backend' },
        { name: 'Vite', description: 'Ultra-fast build tool', category: 'Build Tool' },
        { name: 'Framer Motion', description: 'Professional animations', category: 'Animations' },
        { name: 'Stripe', description: 'Secure online payments', category: 'Payments' },
        { name: 'WordPress', description: 'CMS for blogs and content', category: 'CMS' },
        { name: 'Shopify', description: 'Professional e-commerce', category: 'E-commerce' },
        { name: 'Claude AI', description: 'Artificial Intelligence for development', category: 'AI' },
        { name: 'Figma', description: 'Design and prototyping', category: 'Design' },
        { name: 'Git', description: 'Version control', category: 'Version Control' },
        { name: 'Netlify', description: 'Fast and reliable hosting', category: 'Hosting' }
      ],
      aiSection: {
        title: '🤖 Powered by Artificial Intelligence',
        description: 'I use Claude AI and other AI tools to accelerate development, optimize code and create more efficient solutions. This allows me to deliver high-quality projects in less time, without compromising the customization or human touch your business needs.'
      }
    },

    // Process
    process: {
      title: 'Simple and straightforward',
      subtitle: 'How we work together',
      steps: [
        {
          title: 'Let\'s talk',
          subtitle: 'Free',
          description: '30-min Zoom call. We discuss your business, your needs and your budget'
        },
        {
          title: 'Design & development',
          subtitle: 'Collaborative',
          description: 'I show you progress, we adjust together. Always in touch via WhatsApp/email'
        },
        {
          title: 'Launch',
          subtitle: 'Your site online',
          description: 'Your website online and running. Training included so you know how to manage it'
        },
        {
          title: 'Ongoing support',
          subtitle: 'Always available',
          description: 'I don\'t leave you alone after delivery. Support included based on your package'
        }
      ]
    },

    // WhyUs
    whyUs: {
      title: 'Why Look & Click?',
      subtitle: 'What makes us different',
      reasons: [
        {
          title: 'I speak your language',
          description: 'I work in Spanish and English, I understand your culture'
        },
        {
          title: 'Fair prices',
          description: 'No surprises, no hidden costs'
        },
        {
          title: 'Custom design',
          description: 'I don\'t use generic templates, each project is unique'
        },
        {
          title: 'Real support',
          description: 'I answer your questions, even after the project is finished'
        },
        {
          title: 'I understand expats',
          description: 'I know what it\'s like to start a business in a new country'
        },
        {
          title: 'Modern technology',
          description: 'React, responsive design, optimized for Google'
        }
      ]
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know',
      questions: [
        {
          question: 'How long does it take to build my website?',
          answer: 'Depending on the package: 1-4 weeks from the deposit payment.'
        },
        {
          question: 'Do I need technical knowledge?',
          answer: 'No. I teach you everything you need to know to manage your website.'
        },
        {
          question: 'What happens after my website is ready?',
          answer: 'You have support included based on your package. After that you can hire monthly maintenance or manage it yourself.'
        },
        {
          question: 'Does it include hosting?',
          answer: 'Yes, all packages include hosting for 1 year.'
        },
        {
          question: 'Can I make changes afterwards?',
          answer: 'The first 2-3 rounds of changes are included. Additional changes are charged separately.'
        },
        {
          question: 'Do you only work with Latinos?',
          answer: 'Mainly, but I work with any entrepreneur who needs a professional website.'
        },
        {
          question: 'How does payment work?',
          answer: '50% deposit to start, 50% upon project delivery.'
        },
        {
          question: 'Do we meet in person?',
          answer: 'I mainly work via Zoom, but I can meet in person if necessary (depends on location).'
        }
      ]
    },

    // About
    about: {
      photoPlaceholder: 'YOUR PHOTO',
      title: 'Hello, I\'m [Your name]',
      paragraphs: [
        'I\'m a Latina living in the Netherlands. I understand the challenges of starting a business in a new country. That\'s why I created Look & Click: to help other Latinos take that digital step without complications.',
        'As a web developer, I combine modern design with real functionality. My goal is simple: for your website to help you grow, not just be something pretty that nobody sees.',
        'I work in Spanish and English, I understand your vision, and I make the process easy and transparent.'
      ]
    },

    // Contact
    contact: {
      title: 'Ready to start your project?',
      subtitle: 'Fill out the form and we\'ll respond in less than 24 hours',
      infoTitle: 'Let\'s talk about your project',
      infoDescription: 'It doesn\'t matter if you\'re just starting or if you already have an established business. I\'m here to help you take that digital step.',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      quickLinks: {
        title: 'You can also:',
        whatsapp: 'Send direct WhatsApp',
        services: 'View packages and prices'
      },
      form: {
        name: 'Full name *',
        email: 'Email *',
        phone: 'Phone',
        message: 'Tell me about your project *',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+31 X XX XXX XXXX',
        messagePlaceholder: 'Briefly describe your business, what you need and any details you think are important...',
        submitButton: 'Send message',
        sending: 'Sending...',
        successMessage: 'Message sent successfully! We\'ll contact you soon.',
        errorMessage: 'There was an error sending the message. Please try again or contact us via WhatsApp.'
      }
    },

    // Footer
    footer: {
      tagline: 'Your online business, made simple.',
      navigation: {
        title: 'Navigation',
        items: [
          { label: 'About me', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Process', href: '#process' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      contactTitle: 'Contact',
      copyright: 'All rights reserved. Made with',
      location: 'in the Netherlands'
    }
  }
};

export default translations;

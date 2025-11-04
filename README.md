# Look & Click - Website

Página web profesional para Look & Click, servicios de desarrollo web para emprendedores latinos en Holanda.

## 🚀 Tecnologías

- React 18
- Vite
- Framer Motion (animaciones)
- React Icons
- React Intersection Observer
- EmailJS (formulario de contacto)

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en: `http://localhost:5173`

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `src/styles/global.css`:
```css
:root {
  --primary: #2563eb;    /* Color principal */
  --secondary: #10b981;  /* Color secundario */
  --dark: #1e293b;       /* Texto oscuro */
  --light: #f8fafc;      /* Fondo claro */
}
```

### Cambiar textos
- **Hero**: `src/components/Hero.jsx`
- **Ejemplos**: `src/components/Examples.jsx`
- **Servicios**: `src/components/Services.jsx`
- **Sobre ti**: `src/components/About.jsx`
- **Contacto**: `src/components/ContactForm.jsx` y `src/components/Footer.jsx`

### Agregar tu foto
1. Coloca tu foto en `public/` (ejemplo: `public/mi-foto.jpg`)
2. En `src/components/About.jsx`, reemplaza el div con:
```jsx
<img 
  src="/mi-foto.jpg" 
  alt="Tu nombre"
  style={{
    width: '400px',
    height: '400px',
    borderRadius: '20px',
    objectFit: 'cover'
  }}
/>
```

### Configurar formulario de contacto (EmailJS)

**IMPORTANTE**: El formulario de contacto requiere configuración de EmailJS para funcionar.

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env
```

2. Sigue las instrucciones detalladas en `EMAILJS_SETUP.md`

3. Completa tu archivo `.env` con las credenciales de EmailJS:
```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Actualizar datos de contacto
En `src/components/ContactForm.jsx` y `src/components/Footer.jsx`:
- Cambia `tu-email@ejemplo.com` por tu email real
- Cambia `+31 X XX XXX XXXX` por tu teléfono
- Actualiza el número de WhatsApp en el href: `https://wa.me/31XXXXXXXXX`

### Conectar redes sociales
En `src/components/Footer.jsx`, actualiza los enlaces:
```jsx
<a href="https://instagram.com/tu-usuario">...</a>
<a href="https://facebook.com/tu-pagina">...</a>
<a href="https://linkedin.com/in/tu-perfil">...</a>
```

## 📱 Responsive

El sitio es completamente responsive y se ve bien en:
- 📱 Móviles
- 📱 Tablets
- 💻 Desktop

## 🏗️ Estructura del proyecto

```
look-and-click/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Navegación
│   │   ├── Hero.jsx         # Sección principal
│   │   ├── Examples.jsx     # Ejemplos de páginas web
│   │   ├── Services.jsx     # Servicios/Paquetes
│   │   ├── Technologies.jsx # Tecnologías
│   │   ├── Process.jsx      # Proceso de trabajo
│   │   ├── WhyUs.jsx        # Por qué elegirnos
│   │   ├── FAQ.jsx          # Preguntas frecuentes
│   │   ├── About.jsx        # Sobre ti
│   │   ├── ContactForm.jsx  # Formulario de contacto
│   │   └── Footer.jsx       # Pie de página
│   ├── styles/
│   │   ├── global.css       # Estilos globales
│   │   ├── header.css       # Estilos del header
│   │   ├── examples.css     # Estilos de ejemplos
│   │   └── contactForm.css  # Estilos del formulario
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── .env.example             # Variables de entorno (ejemplo)
├── EMAILJS_SETUP.md         # Guía de configuración EmailJS
├── index.html
├── package.json
└── vite.config.js
```

## 🚢 Deploy

Para producción:

1. Construye el proyecto:
```bash
npm run build
```

2. Los archivos estarán en la carpeta `dist/`

3. Puedes deployar en:
- Netlify (recomendado, gratis)
- Vercel (gratis)
- GitHub Pages (gratis)

## 📝 Próximos pasos

1. ✅ Configura EmailJS para el formulario de contacto (ver `EMAILJS_SETUP.md`)
2. ✅ Cambia todos los textos por los reales
3. ✅ Agrega tu foto
4. ✅ Actualiza datos de contacto (email, teléfono, WhatsApp)
5. ✅ Conecta redes sociales
6. ✅ Compra tu dominio (lookandclick.com o .nl)
7. ✅ Deploy a producción

## 🎯 Características

✨ Animaciones suaves con Framer Motion
🎨 Diseño moderno y profesional
📱 100% Responsive
⚡ Rápido y optimizado
🌐 Bilingüe (Español/Inglés ready)
♿ Accesible
📧 Formulario de contacto funcional con EmailJS
🧭 Navegación fija con smooth scroll
🎯 Header animado con menú hamburguesa
💼 Sección de ejemplos con mockups interactivos
🖥️ Mockups responsive (desktop + mobile)

## 💡 Tips

- Las animaciones se activan al hacer scroll
- Los botones tienen efectos hover
- FAQ tiene acordeón interactivo
- Colores personalizables fácilmente

¡Éxito con tu negocio! 🚀

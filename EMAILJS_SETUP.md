# Configuración de EmailJS - Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto funcione correctamente.

## 📋 Pasos para Configurar EmailJS

### 1. Crear una Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el Servicio de Email

1. Una vez dentro del dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Guarda el SERVICE_ID** que se genera (ejemplo: `service_xyz123`)

### 3. Crear un Template de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template con el siguiente contenido:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{name}}
```

**Content (Contenido):**
```
Has recibido un nuevo mensaje de contacto desde tu sitio web Look & Click:

De: {{name}}
Email: {{email}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
```

4. **Guarda el TEMPLATE_ID** que se genera (ejemplo: `template_abc456`)

### 4. Obtener tu Public Key

1. Ve a **"Account"** > **"General"**
2. Copia tu **"Public Key"** (ejemplo: `abcd1234efgh5678`)

### 5. Actualizar el Código

Abre el archivo `src/components/ContactForm.jsx` y reemplaza las siguientes líneas (aproximadamente línea 41-43):

```javascript
// ANTES (líneas a reemplazar):
const SERVICE_ID = 'TU_SERVICE_ID';
const TEMPLATE_ID = 'TU_TEMPLATE_ID';
const PUBLIC_KEY = 'TU_PUBLIC_KEY';

// DESPUÉS (con tus valores reales):
const SERVICE_ID = 'service_xyz123';  // Tu Service ID real
const TEMPLATE_ID = 'template_abc456';  // Tu Template ID real
const PUBLIC_KEY = 'abcd1234efgh5678';  // Tu Public Key real
```

### 6. Variables del Template

Asegúrate de que las variables en tu template de EmailJS coincidan con los nombres de los campos del formulario:

- `{{name}}` - Nombre del usuario
- `{{email}}` - Email del usuario
- `{{phone}}` - Teléfono del usuario
- `{{message}}` - Mensaje del usuario

Estos nombres deben coincidir exactamente con los atributos `name` de los inputs en el formulario.

## 🔒 Seguridad y Límites

### Plan Gratuito de EmailJS:
- 200 emails por mes
- Velocidad limitada (no más de 1 email por segundo)
- Suficiente para sitios web pequeños y medianos

### Recomendaciones de Seguridad:
1. **NO expongas tus claves privadas** (solo usa la Public Key en el frontend)
2. Considera configurar un **CAPTCHA** para prevenir spam
3. Configura **Auto-Reply** para confirmar la recepción del mensaje
4. Monitorea tu uso mensual en el dashboard de EmailJS

## 📧 Configurar Auto-Reply (Opcional)

Para enviar un email de confirmación automático al usuario:

1. En EmailJS, ve a tu template
2. Activa **"Auto-Reply"**
3. Configura el mensaje de respuesta automática:

```
Hola {{name}},

Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos en menos de 24 horas.

Saludos,
Look & Click
```

## 🧪 Probar el Formulario

1. Guarda todos los cambios
2. Inicia tu servidor de desarrollo: `npm run dev`
3. Navega a la sección de contacto
4. Completa y envía el formulario
5. Verifica que recibas el email en tu bandeja de entrada

## ❗ Solución de Problemas

### El formulario no envía emails:
- Verifica que los IDs (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) sean correctos
- Revisa la consola del navegador para ver errores
- Asegúrate de tener conexión a internet
- Verifica que tu cuenta de EmailJS esté activa

### Error "Service not found":
- Verifica que el SERVICE_ID sea correcto
- Asegúrate de que el servicio esté conectado y activo en EmailJS

### Error "Template not found":
- Verifica que el TEMPLATE_ID sea correcto
- Asegúrate de que el template esté guardado en EmailJS

### No recibo los emails:
- Revisa tu carpeta de spam
- Verifica que el email del servicio esté correctamente configurado
- Asegúrate de no haber excedido el límite mensual

## 📞 Soporte

Si tienes problemas con la configuración:
- Documentación oficial: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Soporte de EmailJS: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

## ✅ Checklist de Configuración

- [ ] Crear cuenta en EmailJS
- [ ] Configurar servicio de email
- [ ] Crear template de email
- [ ] Obtener Public Key
- [ ] Actualizar IDs en ContactForm.jsx
- [ ] Probar el formulario
- [ ] Verificar recepción de emails
- [ ] (Opcional) Configurar auto-reply
- [ ] (Opcional) Configurar CAPTCHA

¡Una vez completados estos pasos, tu formulario de contacto estará listo para funcionar!
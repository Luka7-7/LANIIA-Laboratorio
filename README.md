<div align="center">

<img src="images/logo.svg" alt="LANIIA - Laboratorio Nacional para la Investigación en Inocuidad Alimentaria" width="260">

# LANIIA · Unidad Nayarit

**Sitio web oficial del Laboratorio Nacional para la Investigación en Inocuidad Alimentaria**, perteneciente a la **Universidad Autónoma de Nayarit (UAN)**.

[![Facebook](https://img.shields.io/badge/Facebook-LANIIANAY-1877F2?logo=facebook&logoColor=white)](https://www.facebook.com/LANIIANAY)
[![Instagram](https://img.shields.io/badge/Instagram-laniia.uan-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/laniia.uan/)
[![YouTube](https://img.shields.io/badge/YouTube-laniia--nayarit-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/@laniia-nayarit/videos)

</div>

---

## 📋 Acerca del proyecto

Este repositorio contiene el código fuente del **sitio web informativo del LANIIA**, un laboratorio dedicado al análisis, investigación y asesoría científica en materia de inocuidad alimentaria. El sitio está diseñado para dar visibilidad a los servicios del laboratorio, sus líneas de investigación, su equipo de trabajo y sus canales de contacto con empresas públicas y privadas.

Es un sitio **100% estático** (HTML, CSS y JavaScript), pensado para ser ligero, responsivo y fácil de desplegar en cualquier servicio de hosting.

## ✨ Características principales

-  **Presentación de servicios científicos**: microbiología, inmunodiagnóstico, cromatografía y asesoría científica.
-  **Líneas de investigación**: inocuidad alimentaria, contaminantes emergentes y salud ambiental, alimentos y salud, toxicología de plaguicidas.
-  **Directorio del equipo**: perfiles e imágenes de los colaboradores e investigadores del laboratorio.
-  **Formulario de contacto**, con envío de datos a Google Sheets mediante Google Apps Script y contacto directo por WhatsApp.
-  Animaciones e interacciones modernas con **GSAP**, **WOW.js** y **Swiper**.
-  Diseño **totalmente responsivo**, construido sobre **Bootstrap 5**.
-  Enlaces directos a las redes sociales oficiales del laboratorio.

## 🗂️ Estructura del proyecto

```
LANIIA-Laboratorio/
├── index.html                 # Página de inicio
├── pg/                         # Páginas internas del sitio
│   ├── servicios.html          # Servicios del laboratorio
│   ├── actividadesCientificas.html  # Líneas de investigación
│   ├── equipo.html             # Directorio de colaboradores
│   └── contactanos.html        # Formulario y datos de contacto
├── css/                        # Hojas de estilo (Bootstrap, animaciones, estilos propios)
│   └── custom.css              # Estilos personalizados del sitio
├── js/                         # Lógica y librerías del front-end
│   ├── equipo.js               # Lógica del directorio de colaboradores
│   ├── formulario.js           # Envío del formulario de contacto (Google Sheets)
│   └── function.js             # Funciones generales del sitio
├── images/                     # Imágenes, íconos y fotografías del equipo
├── videos/                     # Video institucional de presentación
└── webfonts/                   # Fuentes de íconos (Font Awesome)
```

## 📩 Integración del Formulario de Contacto (`formulario.js`)

El envío del formulario se gestiona de forma serverless conectando la web con **Google Sheets** y **Google Apps Script**. Esto permite almacenar los prospectos en tiempo real y recibir alertas por correo sin necesidad de mantener un servidor backend dedicado.

### 🔄 Flujo de Datos

1. El usuario completa el formulario en la web.
2. `formulario.js` procesa los datos y envía una petición `POST` en formato JSON al endpoint de Apps Script.
3. Google Apps Script intercepta los datos, añade una nueva fila con la marca de tiempo (timestamp) en la hoja de cálculo y envía una notificación automática por email a **ventas.laniia@gmail.com**.
4. El script responde con un JSON (`{"status": "success"}`) para confirmar la recepción.

---

### 💻 Código en Google Apps Script (`Code.gs`)

Este es el script desplegado como Web App en la hoja de Google Sheets asociada:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var datos = JSON.parse(e.postData.contents);
    
    // Registra la fecha y los campos del formulario en la hoja
    sheet.appendRow([
      new Date(),
      datos.fname,
      datos.lname,
      datos.email,
      datos.phone,
      datos.empresa,
      datos.message
    ]);

    // Envía notificación por correo electrónico
    MailApp.sendEmail(
      "ventas.laniia@gmail.com", 
      "¡Nueva petición! 📊", 
      "El formulario web ha enviado nuevos datos y la hoja de cálculo se actualizó con éxito."
    );

    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "error": error.toString()}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

```

##  Tecnologías, Frameworks y Librerías Utilizadas

A continuación se detalla la pila de recursos (Scripts, Estilos y Plugins) utilizados para el funcionamiento y diseño de este sitio web:

| Archivo / Recurso | Framework / Librería | Tipo | Descripción y Función | Enlace Oficial |
| :--- | :--- | :---: | :--- | :--- |
| **jquery-3.7.1.min.js** | **jQuery** | JS | Librería base para la manipulación del DOM y ejecución de plugins. | [jquery.com](https://jquery.com/) |
| **bootstrap.min.css/js** | **Bootstrap 5** | CSS/JS | Framework principal para el diseño responsivo, rejillas y componentes. | [getbootstrap.com](https://getbootstrap.com/) |
| **gsap.min.js** | **GSAP** | JS | Motor estándar de la industria para animaciones de alto rendimiento. | [greensock.com](https://greensock.com/) |
| **all.min.css** | **Font Awesome** | CSS | Colección de iconos vectoriales para redes sociales e interfaz. | [fontawesome.com](https://fontawesome.com/) |
| **swiper-bundle.min.css/js** | **Swiper JS** | CSS/JS | Slider táctil avanzado para carruseles, banners y galerías. | [swiperjs.com](https://swiperjs.com/) |
| **Manrope & Sora** | **Google Fonts** | Font | Fuentes tipográficas modernas cargadas desde la CDN de Google. | [fonts.google.com](https://fonts.google.com/) |
| **animate.css** | **Animate.css** | CSS | Biblioteca de animaciones CSS predefinidas (fade, zoom, bounce). | [animate.style](https://animate.style/) |
| **magnific-popup.css/js** | **Magnific Popup** | CSS/JS | Sistema de ventanas modales y Lightbox para imágenes y videos. | [dimsemenov.com](https://dimsemenov.com/plugins/magnific-popup/) |
| **slicknav.min.css/js** | **SlickNav** | CSS/JS | Crea menús de navegación optimizados para dispositivos móviles. | [slicknav.io](https://slicknav.io/) |
| **ScrollTrigger.min.js** | **GSAP Plugin** | JS | Sincroniza las animaciones de la web con el scroll del usuario. | [greensock.com/st](https://greensock.com/scrolltrigger/) |
| **SplitText.js** | **GSAP Plugin** | JS | Divide textos en letras/palabras para animaciones tipográficas. | [greensock.com/split](https://greensock.com/splittext/) |
| **waypoints.min.js** | **Waypoints** | JS | Disparador de eventos cuando el usuario llega a un punto de la web. | [imakewebthings.com](http://imakewebthings.com/waypoints/) |
| **counterup.min.js** | **Counter-Up** | JS | Animación de conteo numérico progresivo (estadísticas). | [github.com/bfintal](https://github.com/bfintal/Counter-Up) |
| **parallaxie.js** | **Parallaxie** | JS | Crea efectos de desplazamiento de fondo (Parallax) suaves. | [github.com/Aakash](https://github.com/Aakash-Pawar/parallaxie.js) |
| **wow.min.js** | **WOW.js** | JS | Revela animaciones de Animate.css a medida que se hace scroll. | [wowjs.uk](https://wowjs.uk/) |
| **YTPlayer.min.js** | **mb.YTPlayer** | JS | Permite integrar videos de YouTube como fondo de secciones. | [pupunzi.com](https://pupunzi.com/mb.components/mb.YTPlayer/demo/demo.html) |
| **mousecursor.css/js** | **Magic Cursor** | CSS/JS | **Personalizado:** Crea el efecto visual del puntero que sigue al ratón. | *N/A (Tema)* |
| **function.js** | **Main Config** | JS | **Personalizado:** Archivo maestro que inicializa todos los scripts. | *N/A (Tema)* |
| **theme-panel.js** | **Demo Panel** | JS | **Personalizado:** Panel de control de la demo (cambio de colores). | [awaikenthemes.com](https://awaikenthemes.com/) |

##  Cómo ejecutar el proyecto localmente

Al tratarse de un sitio estático, no requiere instalación de dependencias ni frameworks de backend. Solo necesitas un navegador web y, opcionalmente, un servidor local.

### Opción 1: Abrir directamente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Luka7-7/LANIIA-Laboratorio.git
   ```
2. Entra a la carpeta del proyecto y abre `index.html` con tu navegador.

### Opción 2: Usando un servidor local (recomendado)

Algunas funciones (como las animaciones o las rutas relativas) se comportan mejor sobre un servidor. Puedes levantar uno rápido con:

```bash
cd LANIIA-Laboratorio
python3 -m http.server 8000
```

Y luego abre [http://localhost:8000](http://localhost:8000) en tu navegador.

> También puedes usar la extensión **Live Server** de VS Code para recargar automáticamente los cambios.

##  Navegación del sitio

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `index.html` | Presentación general del laboratorio y sus servicios |
| Servicios | `pg/servicios.html` | Detalle de microbiología, inmunodiagnóstico, cromatografía y asesoría |
| Actividades científicas | `pg/actividadesCientificas.html` | Líneas de investigación del laboratorio |
| Nosotros | `pg/equipo.html` | Directorio de colaboradores |
| Contacto | `pg/contactanos.html` | Formulario de contacto y datos de ubicación/horario |



##  Contacto institucional

**LANIIA — Unidad Nayarit**
Av. Emilio M. González, Colonia Ciudad del Conocimiento, 63173, Tepic, Nayarit.

📘 [Facebook](https://www.facebook.com/LANIIANAY) · 📸 [Instagram](https://www.instagram.com/laniia.uan/) · ▶️ [YouTube](https://www.youtube.com/@laniia-nayarit/videos)

---

<div align="center">

Proyecto desarrollado para la <strong>Universidad Autónoma de Nayarit (UAN)</strong>



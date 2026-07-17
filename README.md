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

- 🧪 **Presentación de servicios científicos**: microbiología, inmunodiagnóstico, cromatografía y asesoría científica.
- 🔬 **Líneas de investigación**: inocuidad alimentaria, contaminantes emergentes y salud ambiental, alimentos y salud, toxicología de plaguicidas.
- 👥 **Directorio del equipo**: perfiles e imágenes de los colaboradores e investigadores del laboratorio.
- ✉️ **Formulario de contacto**, con envío de datos a Google Sheets mediante Google Apps Script y contacto directo por WhatsApp.
- 🎬 Animaciones e interacciones modernas con **GSAP**, **WOW.js** y **Swiper**.
- 📱 Diseño **totalmente responsivo**, construido sobre **Bootstrap 5**.
- 🔗 Enlaces directos a las redes sociales oficiales del laboratorio.

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

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5 / CSS3** | Estructura y estilos del sitio |
| **Bootstrap 5** | Sistema de diseño responsivo |
| **jQuery** | Manipulación del DOM e interacciones |
| **GSAP** (ScrollTrigger, SplitText, SmoothScroll) | Animaciones avanzadas |
| **WOW.js / Animate.css** | Animaciones al hacer scroll |
| **Swiper** | Carruseles e imágenes deslizantes |
| **Font Awesome** | Iconografía |
| **Google Apps Script** | Recepción de datos del formulario de contacto |

## 🚀 Cómo ejecutar el proyecto localmente

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

## 🧭 Navegación del sitio

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `index.html` | Presentación general del laboratorio y sus servicios |
| Servicios | `pg/servicios.html` | Detalle de microbiología, inmunodiagnóstico, cromatografía y asesoría |
| Actividades científicas | `pg/actividadesCientificas.html` | Líneas de investigación del laboratorio |
| Nosotros | `pg/equipo.html` | Directorio de colaboradores |
| Contacto | `pg/contactanos.html` | Formulario de contacto y datos de ubicación/horario |

## ✏️ Cómo contribuir

1. Crea una rama a partir de `main` para tu cambio:
   ```bash
   git checkout -b nombre-de-tu-mejora
   ```
2. Realiza tus cambios y pruébalos localmente abriendo las páginas afectadas en el navegador.
3. Haz commit con un mensaje claro y descriptivo de lo realizado.
4. Sube tu rama y abre un Pull Request describiendo el cambio.

**Buenas prácticas sugeridas:**
- Optimiza las imágenes antes de subirlas (el sitio incluye material multimedia pesado).
- Mantén los estilos personalizados dentro de `css/custom.css` en vez de crear archivos nuevos.
- Verifica que el sitio se vea correctamente en dispositivos móviles antes de hacer commit.

## 📍 Contacto institucional

**LANIIA — Unidad Nayarit**
Av. Emilio M. González, Colonia Ciudad del Conocimiento, 63173, Tepic, Nayarit.

📘 [Facebook](https://www.facebook.com/LANIIANAY) · 📸 [Instagram](https://www.instagram.com/laniia.uan/) · ▶️ [YouTube](https://www.youtube.com/@laniia-nayarit/videos)

---

<div align="center">

Proyecto desarrollado para la <strong>Universidad Autónoma de Nayarit (UAN)</strong>



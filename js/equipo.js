/* =========================================================
   equipo.js
   Datos de los integrantes de LANIIA y función que construye
   dinámicamente las tarjetas (team-item) y los modales
   (Perfil del Investigador) al cargar la página.
   ========================================================= */

 (function () {
    "use strict";

    /* ---------------------------------------------------------
       1) ARREGLO DE DATOS DE LOS INTEGRANTES
       - "modalId" / "modal": si el integrante tiene perfil
         completo, se incluye el objeto "modal" con toda la
         información. Si no tiene perfil (aún), se deja "modal: null"
         y la tarjeta se genera sin enlace a modal.
       --------------------------------------------------------- */
const teamMembers = [
    {
        img: "../images/author-1.jpg",
        cardName: "Dr. Ivan Girón",
        cardRole: "Fundador Signatario",
        modalId: "teamSingleModal",
        modal: {
            fullName: "Dr. Manuel Iván Girón Pérez",
            role: "Fundador Signatario",
            bio: [
                "Doctor en Ciencias Biomédicas, con orientación en Inmunología. Autor de 70 artículos publicados en revistas científicas internacionales y más de 10 capítulos de libros. Su obra científica ha colectado más de 1000 citas (índice H=21). Ha fundado 2 laboratorios científicos, como son el Laboratorio Nacional LANIIA-Nayarit y el Laboratorio de Inmunotoxicología. Ha dirigido más de 20 tesis de licenciatura, 7 de maestría y 3 de doctorados",
                "Dentro de los reconocimientos más importantes que ha recibido, destacan: Premio de Inmunología, Sergio Estrada Parra, otorgado por la Sociedad Mexicana de Inmunología, Medalla al Mérito Nayarit, otorgado por Poder legislativo Nayarit, Medalla a la investigación Científica Nayarit (4 ocasiones). Así como graduado con Mención Honorífica en sus estudios de licenciatura, Maestría y Doctorado, grados otorgados por la UAN, IPN y UdeG, respectivamente. Ha realizado estancias científicas en la Universidad de Lleida, España y en la Universidad Nacional de Córdoba, Argentina."
            ],
            email: "ivangiron@uan.edu.mx",
            experienceText: "Actualmente es Secretario de Investigación y Posgrado de la Universidad Autónoma de Nayarit. Es integrante del Sistema Nacional de Investigadores, Nivel III (CONACyT). Miembro de la Academia Nacional de Medicina de México A.C. y la Academia Mexicana de Ciencias A.C, las dos organizaciones científicas de ingreso competitivo más importantes en México. Profesor investigador de la Universidad Autónoma de Nayarit.",
            skills: [
                { title: "Artículos en revistas científicas", value: "70", percent: 70 },
                { title: "Ponencias en Congresos", value: "100", percent: 100 },
                { title: "Citas (índice H=21)", value: "1000", percent: 100 }
            ]
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/DRA. ADELA YOLANDA BUENO DURÁNjpg.jpg",
        
        cardName: "Dra. Adela Bueno",
        cardRole: "Coordinación de operaciones analíticas",
        modalId: "teamAdelaBuenoModal",
        modal: {
            fullName: "Dra. Adela Yolanda Bueno Durán",
            role: "Sistema de Gestión de Calidad < Coordinación de operaciones analíticas",
            bio: [
                "Doctorado en Ciencia y Tecnología en Biotecnología Productiva por el Centro de Investigación y Asistencia en Tecnología y Diseño del Estado de Jalisco. A.C. (CIATEJ), una maestría en Ciencias de los Alimentos por la Universidad de Guadalajara y Químico Farmacobiólogo por la Universidad Autónoma de Guadalajara. Docente Investigador en la Universidad Autónoma de Nayarit de la Unidad Académica de Ciencias Químicos Biológicas y Farmacéuticas desde 1995, he participado en impartición de unidades de aprendizaje de: Microbiología General, Microbiología de los Alimentos, Microbiología Sanitaria, Fisiología Bacteriana, Micología, Bacteriología y Hematología Médica. Dirección de tesis de licenciatura y posgrado.",
                "Miembro del Sistema Nacional de Investigadoras e Investigadores nivel 1, y miembro del Programa para el Desarrollo Profesional Docente-PRODEP."
            ],
            email: "abueno@uan.edu.mx",
            experienceText: "Coordinador de Operaciones Analíticas en el área de Microbiología de los Alimentos en el Laboratorio Nacional para Investigación en Inocuidad Alimentaria (LANIIA)- Unidad Nayarit. Signatario (2022-2025) por la Entidad Mexicana de Acreditación (ema ac.) bajo la norma NMX-EC-17025-IMNC-2018. Requisitos generales para la competencia de laboratorios de ensayo en la rama de Alimentos, desde el 2017.",
            skills: [
                { title: "Docente Investigador", value: "", percent: 95 },
                { title: "Signatario ema (2022-2025)", value: "", percent: 100 },
                { title: "Miembro SNII", value: "", percent: 90 }
            ]
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/DR. FRANCISCO FABIÁN RAZURA CARMONA.jpg",
        cardName: "Dr. Francisco Razura",
        cardRole: "Administrador del Sistema de Gestión de Calidad",
        titleAttr: "Ver perfil de Dr. Francisco Razura",
        modalId: "teamFranciscoRazuraModal",
        modal: {
            fullName: "Dr. Francisco Fabián Razura Carmona",
            role: "Administrador del Sistema de Gestión de Calidad",
            bio: [],
            email: "fabian.razura@uan.edu.mx",
            experienceText: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M.EN C. MIGDALIA SARAHY NAVIDAD MURRIETA.jpg",
        cardName: "Dra. Migdalia Navidad",
        cardRole: "Auxiliar del Sistema de Gestión de Calidad",
        modalId: "teamMigdaliaNavidadModal",
        modal: {
            fullName: "Dra. Migdalia Sarahy Navidad Murrieta",
            role: "Auxiliar del sistema de gestión de calidad",
            bio: [
                "Ingeniera bioquímica y maestra en ciencias de los alimentos. Auxiliar del Sistema de Gestión de Calidad y procesos de acreditación, así como responsable de cromatografía del laboratorio LANIIA-Unidad Nayarit. Experiencia en el análisis de alimentos, desarrollo de alimentos con potencial probióticos, análisis cromatográficos y procesos de certificación/acreditación de sistemas de gestión y aseguramiento de la calidad.",
                "Participación en congresos nacionales e internacionales, reconocida en el año 2020 como “Mujer SISMENEC” por la entidad mexicana de acreditación (ema ac.), miembro de Grupo ema Regional de Nayarit, miembro de la Asociación Mexicana de Ciencia de los Alimentos AMECA A.C y revisor transitorio de revistas nacionales e internacionales."
            ],
            email: "msnavidad@uan.edu.mx",
            experienceText: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/Dra. Gladys Alejandra Toledo Ibarra.jpg",
        cardName: "Dra. Gladys Toledo",
        cardRole: "Administración - Coordinación",
        modalId: "teamGladysToledoModal",
        modal: {
            fullName: "Dra. Gladys Alejandra Toledo Ibarra",
            role: "Sistema de Gestión de Calidad < Administración – Coordinación",
            bio: [
                "Licenciatura en Químico Fármaco Biólogo (2012) y Maestría en Ciencias Biológico Agropecuarias por la Universidad Autónoma de Nayarit (2015). Doctorado en Ciencias Biomédicas por la Universidad Nacional Autónoma de México (2023).",
                "Profesora de tiempo completo en la Universidad Autónoma de Nayarit desde 2012. Docente en el programa académico de Licenciatura y Posgrado de la Universidad Autónoma de Nayarit. Miembro del cuerpo académico (consolidado) de Biomedicina Ambiental Traslacional.",
                `Autora de 30 artículos científicos con 700 citas. Co-autora de 3 capítulos de libros. Miembro de "Sociedad Mexicana de inmunoendocrinologia" y "Sociedad Mexicana de Inmunología".`,
                "Premio estatal a la juventud la categoría de Ciencia y Tecnología, 2013. Miembro del Sistema Nacional de Investigadoras e Investigadores nivel 1, y miembro del Programa para el Desarrollo Profesional Docente-PRODEP desde el 2021.",
                "Líneas de investigación: Neuro-Inmuno toxicología de plaguicidas organofosforados. Evaluación de contaminantes clásicos y emergentes."
            ],
            email: "gladys.toledo@uan.edu.mx",
            skills: [
                { title: "Artículos científicos", value: "30", percent: 90 },
                { title: "Citas de sus artículos", value: "700", percent: 100 },
                { title: "Capítulos de libros", value: "3", percent: 80 }
            ]
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M. EN C. ANSONNY JHOVANNY OJEDA DURÁN.jpg",
        cardName: "M. en C. Ansonny Ojeda",
        cardRole: "Responsable de Ventas y Atención a clientes",
        modalId: "teamAnsonnyOjedaModal",
        modal: {
            fullName: "M. en C. Ansonny Jhovanny Ojeda Durán",
            role: "Sistema de Gestión de Calidad < Responsable de Ventas y Atención a clientes",
            bio: [
                "M.C. Ansonny Jhovanny Ojeda Durán es Ingeniero Bioquímico con especialidad en Biotecnología y Maestro en Ciencias por CINVESTAV-IPN. Forma parte del equipo del Laboratorio Nacional para Investigación en Inocuidad Alimentaria (LANIIA), donde se desempeña como Operador Analítico y Responsable del Área de Ventas y Atención al Cliente."
            ],
            experienceText: "Su experiencia integra investigación científica, diagnóstico molecular, inocuidad alimentaria y asesoría técnica especializada, contribuyendo al desarrollo de soluciones analíticas confiables para el sector agroalimentario. Ha participado en proyectos de investigación, capacitación, divulgación científica y sistemas de gestión de inocuidad basados en HACCP, BPM y estándares internacionales de calidad. Su compromiso es brindar servicios analíticos con excelencia técnica, atención personalizada y respaldo científico, fortaleciendo la confianza de clientes e instituciones en la toma de decisiones fundamentadas en resultados precisos y oportunos.",
            email: "ansonny.ojeda@uan.edu.mx",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M.EN C. MERCEDES ZAMBRANO SORIA.jpg",
        cardName: "M. en C. Mercedes Zambrano",
        cardRole: "Auxiliar de Ventas y atención a clientes",
        modalId: "teamMercedesZambranoModal",
        modal: {
            fullName: "M. en C. Mercedes Zambrano Soria",
            role: "Sistema de Gestión de Calidad < Auxiliar de Ventas y atención a clientes",
            bio: [
                "Química Farmacobióloga y Maestra en Ciencias Biológico-Agropecuarias en el área de Ciencias Ambientales por la Universidad Autónoma de Nayarit. Experiencia en investigación relacionada con inocuidad alimentaria, contaminación ambiental, plaguicidas, metales pesados y contaminantes emergentes en productos agroalimentarios y ecosistemas acuáticos. Participa en proyectos de investigación multidisciplinarios, actividades de divulgación científica."
            ],
            experienceText: "Actualmente se desempeña como docente universitaria e integrante del Laboratorio Nacional para la Investigación en Inocuidad Alimentaria (LANIIA), Unidad Nayarit.",
            email: "mercedes.zambrano@uan.edu.mx",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M.EN C. LUCÍA AMAPOLA CASTILLO PACHECO.jpg",
        cardName: "M. en C. Lucia Castillo",
        cardRole: "Responsable de mantenimiento",
        modalId: "teamLuciaCastilloModal",
        modal: {
            fullName: "M. en C. Lucia Amapola Castillo Pacheco",
            role: "Sistema de Gestión de Calidad < Responsable de mantenimiento",
            bio: [],
            email: "lucia.castillo@uan.edu.mx",
            experienceText: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M.EN C. ULISES MERCADO SALGADO.jpg",
        cardName: "M. en C. Ulises Mercado",
        cardRole: "Auxiliar de mantenimiento",
        modalId: "teamUlisesMercadoModal",
        modal: {
            fullName: "M. en C. Ulises Mercado Salgado",
            role: "Sistema de Gestión de Calidad < Auxiliar de mantenimiento",
            bio: [
                "Estudiante de octavo semestre de doctorado en ciencias biológico agropecuarias - Universidad Autónoma de Nayarit.",
                "Maestro en Ciencias en Biotecnología Genómica, por el Instituto Politécnico Nacional."
            ],
            experienceText: "Con experiencia en técnicas de biología molecular, extracción e identificación de ácidos nucleicos, diseño de primers, secuenciación y técnicas de cultivos celulares. Con experiencia en Propiedad Intelectual, en particular Evaluación y Desarrollo de Patentes en áreas Biotecnológica, Farmacéutica, Química y Ciencias de la Vida. Búsqueda de antecedentes y opiniones técnicas sobre la viabilidad de proyectos para obtener Patentes, Marcas, Modelos de Utilidad, Diseños Industriales y Derechos de Autor, desde la redacción técnica hasta el otorgamiento y mantenimiento de los derechos de Propiedad Intelectual.",
            email: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/DR. DANIEL ALBERTO GIRÓN PÉREZ.jpg",
        cardName: "Dr. Daniel Girón",
        cardRole: "Capacitación continua",
        modalId: "teamDanielGironModal",
        modal: {
            fullName: "Dr. Daniel Alberto Girón Pérez",
            role: "Sistema de Gestión de Calidad < Capacitación continua",
            bio: [],
            email: "Daniel.giron@uan.edu.mx",
            experienceText: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/M.EN C. MAYRA VIOLETA CANALES DENNIS .jpg",
        cardName: "M.C.A. Mayra Canales",
        cardRole: "Administración - Compras",
        modalId: "teamMayraCanalesModal",
        modal: {
            fullName: "M. C. A. Violeta Canales Dennis",
            role: "Sistema de Gestión de Calidad < Administración – Compras",
            bio: [],
            email: "mayra.canales@uan.edu.mx",
            experienceText: "",
            skills: []
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/1.jpeg",
        cardName: "M.C.L.V. Mirtha Pulido",
        cardRole: "Administración",
        modalId: "teamMirthaPulidoModal",
        modal: {
            fullName: "M.C.L.V. Mirtha Elena Pulido Muñoz",
            role: "Sistema de Gestión de Calidad < Administración",
            bio: [
                "Maestra en Comunicación y Lenguajes Visuales por el Instituto para la Investigación en Comunicación y Cultura ICONOS. Colabora con el Laboratorio Nacional para la Investigación en Inocuidad Alimentaria (LANIIA-Nayarit) y es docente de la Licenciatura en Biomedicina Ambiental Traslacional de la Universidad Autónoma de Nayarit. Forma parte del Comité Editorial de la revista Bio Ciencias (ISSN: 2007-3380) y colabora en la revista de divulgación científica Pardalis. Sus intereses se orientan a la comunicación visual, la divulgación científica y la gestión editorial de publicaciones académicas, incluyendo la estructuración técnica de contenidos científica."
            ],
            email: "mirtha.pulido@uan.edu.mx"
        }
    },
    {
        img: "../images/FOTOGRAFÍAS INTEGRANTES LANIIA/2.jpeg",
        cardName: "M.P.D. Anairis Ávila",
        cardRole: "Administración",
        modalId: "teamAnairisAvilaModal",
        modal: {
            fullName: "M.P.D. Anairis Sol Ávila Ángel",
            role: "Sistema de Gestión de Calidad < Administración",
            bio: [
                "Es Maestra en Periodismo Digital por la Universidad de Guadalajara y Licenciada en Comunicación y Medios por la Universidad Autónoma de Nayarit."
            ],
            email: "sol.angel@uan.edu.mx",
            experienceText: "Se desempeñó como responsable de agenda de medios en la Dirección de Comunicación Institucional y Social de la Universidad Autónoma de Nayarit (UAN), y como Coordinadora de Divulgación y Difusión Científica en la Secretaría de Investigación y Posgrado de la misma institución. Actualmente está a cargo de la difusión y cobertura institucional de LANIIA Unidad Nayarit."
        }
    }
];

    /* Calcula el retraso de la animación "wow fadeInUp" igual que el
       marcado original (el primer elemento no lleva delay, y aumenta
       0.2s por cada tarjeta), pero escalando a cualquier cantidad
       de integrantes. */
    function getWowDelay(index) {
        if (index === 0) return "";
        const delay = Math.round(index * 0.2 * 10) / 10;
        return `${delay}s`;
    }

    /* ---------------------------------------------------------
       2) CONSTRUCCIÓN DE LAS TARJETAS (team-item)
       --------------------------------------------------------- */
    function buildTeamItemHTML(member, index) {
        const delay = getWowDelay(index);
        const delayAttr = delay ? ` data-wow-delay="${delay}"` : "";

        const hasModal = !!member.modalId;
        // Sin "href" no hay URL que el navegador muestre en la barra de estado
        // (evita el popover "javascript:void(0)"), pero mantenemos
        // accesibilidad con role="button" y tabindex para navegación por teclado.
        const linkAttrs = hasModal
            ? `role="button" tabindex="0" data-bs-toggle="modal" data-bs-target="#${member.modalId}"`
            : `href="#"`;
        const titleAttr = member.titleAttr ? ` title="${member.titleAttr}"` : "";

        return `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="team-item "${delayAttr}>
                <div class="team-image">
                    <a ${linkAttrs} data-cursor-text="View"${titleAttr}>
                        <figure>
                            <img src="${member.img}" alt="">
                        </figure>
                    </a>
                </div>
                <div class="team-content">
                    <h3><a ${linkAttrs}>${member.cardName}</a></h3>
                    <p>${member.cardRole}</p>
                </div>
            </div>
        </div>`;
    }

    /* ---------------------------------------------------------
       3) CONSTRUCCIÓN DE LOS MODALES (Perfil del Investigador)
       --------------------------------------------------------- */
function buildSkillBarHTML(skill) {
    // Validamos el nombre/título para evitar el "undefined"
    const title = skill.title || skill.name || "Habilidad";
    const value = parseInt(skill.value) || 80;

    return `
        <div class="skills-progress-bar" style="margin-bottom: 15px;">
            <div class="skillbar" data-percent="${value}%">
                <div class="skill-data" style="display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 0.9rem; font-weight: 600; color: #444;">
                    <div class="skill-title">${title}</div>
                    <div class="skill-no">${value}</div>
                </div>
                <div class="skill-progress" style="background-color: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
                    <div class="count-bar" style="background-color: #007bff; width: ${value}%; height: 100%; border-radius: 4px;"></div>
                </div>
            </div>
        </div>`;
}

function buildModalHTML(member) {
    if (!member.modal) return "";
    const m = member.modal;
    const bioHTML = m.bio.map((p) => `<p>${p}</p>`).join("\n");

    const contactHTML = m.email
        ? `<div class="team-contact-list" style="padding-top: 5px; margin-bottom: 20px;">
                <div class="team-contact-item" style="display: flex; align-items: center; gap: 10px;">
                    <div class="icon-box">
                        <img src="../images/icon-mail.svg" alt="Email" style="width: 18px; height: 18px;" onerror="this.style.display='none'">
                    </div>
                    <div class="team-contact-content">
                        <h4 style="margin: 0; font-size: 1rem; font-weight: 500; color: #555; word-break: break-all;">
                            <a href="mailto:${m.email}" style="color: inherit; text-decoration: none;">${m.email}</a>
                        </h4>
                    </div>
                </div>
            </div>`
        : "";

    // Renderizado usando tus barras horizontales en lugar de círculos
    const skillsHTML = (m.skills && m.skills.length)
        ? `<div class="team-skills-bars-container" style="margin-top: 15px;">
            ${m.skills.map(skill => buildSkillBarHTML(skill)).join("\n")}
           </div>`
        : "";

    return `
    <div class="modal fade" id="${member.modalId}" tabindex="-1" aria-labelledby="${member.modalId}Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content" style="border-radius: 12px; overflow: hidden;">
                <div class="modal-header" style="background-color: #f8f9fa;">
                    <h5 class="modal-title" id="${member.modalId}Label">Perfil del Investigador</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="padding: 30px;"> <div class="page-team-single">
                        <div class="container-fluid" style="padding: 0;">
                            <div class="row g-0">
                                
                                <div class="col-12">
                                    <div class="team-about-box">
                                        
                                        <div class="section-title" style="margin-bottom: 10px;">
                                            <h2 style="font-size: 1.85rem; font-weight: 700; margin-bottom: 5px; color: #222;">${m.fullName}</h2>
                                            <p style="color: #007bff; font-weight: 600; font-size: 1.05rem; margin-bottom: 0;">${m.role}</p>
                                        </div>

                                        ${contactHTML}

                                        <div class="bio-content" style="font-size: 0.95rem; line-height: 1.6; color: #555; margin-bottom: 25px;">
                                            ${bioHTML}
                                        </div>

                                        ${m.experienceText ? `
                                        <div class="team-skill-content" style="margin-bottom: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                                            <h3 style="font-size: 1.4rem; font-weight: 600; margin-bottom: 15px; color: #222;">Experiencia</h3>
                                            <p style="font-size: 0.95rem; line-height: 1.6; color: #555;">${m.experienceText}</p>
                                        </div>` : ""}
                                        
                                        ${skillsHTML ? `
                                        <div class="team-statistics-section" style="margin-bottom: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                                            <h3 style="font-size: 1.3rem; font-weight: 600; margin-bottom: 15px; color: #222;">Habilidades y Estadísticas</h3>
                                            ${skillsHTML}
                                        </div>` : ""}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="background-color: #f8f9fa;">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>`;
}
    /* ---------------------------------------------------------
       4) RENDERIZADO PRINCIPAL AL CARGAR LA PÁGINA
       - Tarjetas: se insertan dentro de #teamMembersRow
       - Modales: se insertan dentro de #teamModalsContainer
       --------------------------------------------------------- */
    function renderTeam() {
        const cardsContainer = document.getElementById("teamMembersRow");
        const modalsContainer = document.getElementById("teamModalsContainer");

        if (cardsContainer) {
            cardsContainer.innerHTML = teamMembers
                .map((member, index) => buildTeamItemHTML(member, index))
                .join("");
        } else {
            console.warn('equipo.js: no se encontró el contenedor "#teamMembersRow".');
        }

        if (modalsContainer) {
            modalsContainer.innerHTML = teamMembers
                .map((member) => buildModalHTML(member))
                .join("");
        } else {
            console.warn('equipo.js: no se encontró el contenedor "#teamModalsContainer".');
        }

        // Si la librería WOW.js ya está disponible, se vuelve a inicializar
        // para que detecte los elementos ".wow" agregados dinámicamente.
        if (typeof WOW !== "undefined") {
            new WOW().init();
        }
    }

    document.addEventListener("DOMContentLoaded", renderTeam);
})();
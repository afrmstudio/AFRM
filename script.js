// Animación al scroll
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
        }
    });
}

// Configurar el Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Observar elementos
document.querySelectorAll('.service-card, h2, .project-card').forEach(el => {
    observer.observe(el);
    el.style.opacity = '0';
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Menú móvil
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    menuButton.innerHTML = isOpen ? 
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' :
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>';
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>';
    });
});

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sistema de traducción
const translations = {
    'it': {
        // Navegación
        'nav-services': 'Servizi',
        'nav-projects': 'Progetti',
        'nav-process': 'Processo',
        'nav-contact': 'Contatto',
        
        // Hero
        'hero-title': 'Creiamo esperienze online memorabili',
        'hero-intro': 'Ciao! Sono Alex Reyna, parte del team di AFRM Studio. Ci appassiona aiutare imprenditori e aziende a creare una presenza online autentica ed efficace.',
        'hero-desc': 'In AFRM Studio, offriamo soluzioni digitali progettate per aiutarti a distinguerti nel mondo digitale, dal web design personalizzato alle strategie di branding che si connettono davvero con il tuo pubblico.',
        'hero-cta': 'Inizia il tuo progetto',
        
        // Servicios
        'services-title': 'I nostri servizi',
        'service-web-title': 'Design Web Personalizzato',
        'service-web-desc': 'Creiamo siti web adattati al tuo stile e alle tue esigenze, garantendo un\'esperienza visiva e funzionale impeccabile',
        'service-landing-title': 'Landing Page Ottimizzate',
        'service-landing-desc': 'Design di landing page che non solo attirano visitatori, ma convertono. Potenzia le tue vendite!',
        'service-seo-title': 'SEO e Marketing Digitale',
        'service-seo-desc': 'Miglioriamo la tua visibilità nei motori di ricerca e ti aiutiamo ad attirare più clienti verso la tua attività',
        'service-branding-title': 'Consulenza di Branding',
        'service-branding-desc': 'Sviluppiamo il tuo marchio online con un approccio strategico che ti posiziona come leader nel tuo settore',
        'service-logo-title': 'Creazione di Loghi',
        'service-logo-desc': 'Creiamo loghi personalizzati che catturano l\'essenza del tuo marchio, garantendo un\'identità visiva coerente e unica',
        
        // Proceso
        'process-title': 'Il nostro processo',
        'process-discovery': 'Scoperta',
        'process-discovery-desc': 'Comprendiamo i tuoi obiettivi e le tue esigenze',
        'process-strategy': 'Strategia',
        'process-strategy-desc': 'Pianifichiamo la migliore soluzione',
        'process-design': 'Design',
        'process-design-desc': 'Creiamo l\'esperienza visiva',
        'process-development': 'Sviluppo',
        'process-development-desc': 'Implementiamo la soluzione',
        
        // Proyectos
        'projects-title': 'Progetti in evidenza',
        'project-1': 'Progetto 1',
        'project-2': 'Progetto 2',
        'project-3': 'Progetto 3',
        'project-4': 'Progetto 4',
        'view-details': 'Vedi dettagli',
        
        // Contacto
        'contact-title': 'Pronto per iniziare?',
        'contact-desc': 'Raccontaci del tuo progetto e ti contatteremo entro 24 ore',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Messaggio',
        'contact-send': 'Invia messaggio',
        'contact-or': 'O contattaci direttamente:',
        'contact-email-btn': 'Email',
        'contact-call': 'Chiama',
        
        // Footer
        'footer-services': 'Servizi',
        'footer-web': 'Design Web Personalizzato',
        'footer-landing': 'Landing Pages',
        'footer-seo': 'SEO e Marketing Digitale',
        'footer-branding': 'Branding',
        'footer-contact': 'Contatto',
        'footer-social': 'Social',
        'footer-rights': 'Tutti i diritti riservati.'
    },
    'es': {
        // Navegación
        'nav-services': 'Servicios',
        'nav-projects': 'Proyectos',
        'nav-process': 'Proceso',
        'nav-contact': 'Contacto',
        
        // Hero
        'hero-title': 'Creamos experiencias online memorables',
        'hero-intro': '¡Hola! Soy Alex Reyna, parte del equipo de AFRM Studio. Nos apasiona ayudar a emprendedores y empresas a crear una presencia online auténtica y efectiva.',
        'hero-desc': 'En AFRM Studio, ofrecemos soluciones digitales diseñadas para ayudarte a destacar en el mundo digital, desde diseño web personalizado hasta estrategias de branding que realmente conectan con tu audiencia.',
        'hero-cta': 'Comienza tu proyecto',
        
        // Servicios
        'services-title': 'Nuestros Servicios',
        'service-web-title': 'Diseño Web Personalizado',
        'service-web-desc': 'Creamos sitios web adaptados a tu estilo y necesidades, asegurando una experiencia visual y funcional impecable',
        'service-landing-title': 'Landing Pages Optimizadas',
        'service-landing-desc': 'Diseño de landing pages que no solo atraen visitantes, sino que convierten. ¡Potencia tus ventas!',
        'service-seo-title': 'SEO y Marketing Digital',
        'service-seo-desc': 'Mejoramos tu visibilidad en los motores de búsqueda y te ayudamos a atraer más clientes a tu negocio',
        'service-branding-title': 'Consultoría en Branding',
        'service-branding-desc': 'Desarrollamos tu marca online con un enfoque estratégico que te posiciona como líder en tu industria',
        'service-logo-title': 'Creación de Logos',
        'service-logo-desc': 'Creamos logos personalizados que capturan la esencia de tu marca, asegurando una identidad visual coherente y única',
        
        // Proceso
        'process-title': 'Nuestro Proceso',
        'process-discovery': 'Descubrimiento',
        'process-discovery-desc': 'Entendemos tus objetivos y necesidades',
        'process-strategy': 'Estrategia',
        'process-strategy-desc': 'Planificamos la mejor solución',
        'process-design': 'Diseño',
        'process-design-desc': 'Creamos la experiencia visual',
        'process-development': 'Desarrollo',
        'process-development-desc': 'Implementamos la solución',
        
        // Proyectos
        'projects-title': 'Proyectos Destacados',
        'project-1': 'Proyecto 1',
        'project-2': 'Proyecto 2',
        'project-3': 'Proyecto 3',
        'project-4': 'Proyecto 4',
        'view-details': 'Ver detalles',
        
        // Contacto
        'contact-title': '¿Listo para empezar?',
        'contact-desc': 'Cuéntanos sobre tu proyecto y te contactaremos en 24 horas',
        'contact-name': 'Nombre',
        'contact-email': 'Email',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar mensaje',
        'contact-or': 'O contáctanos directamente:',
        'contact-email-btn': 'Email',
        'contact-call': 'Llamar',
        
        // Footer
        'footer-services': 'Servicios',
        'footer-web': 'Diseño Web Personalizado',
        'footer-landing': 'Landing Pages',
        'footer-seo': 'SEO y Marketing Digital',
        'footer-branding': 'Branding',
        'footer-contact': 'Contacto',
        'footer-social': 'Social',
        'footer-rights': 'Todos los derechos reservados.'
    },
    'en': {
        // Navigation
        'nav-services': 'Services',
        'nav-projects': 'Projects',
        'nav-process': 'Process',
        'nav-contact': 'Contact',
        
        // Hero
        'hero-title': 'We create memorable online experiences',
        'hero-intro': 'Hi! I\'m Alex Reyna, part of the AFRM Studio team. We are passionate about helping entrepreneurs and companies create an authentic and effective online presence.',
        'hero-desc': 'At AFRM Studio, we offer digital solutions designed to help you stand out in the digital world, from custom web design to branding strategies that truly connect with your audience.',
        'hero-cta': 'Start your project',
        
        // Services
        'services-title': 'Our Services',
        'service-web-title': 'Custom Web Design',
        'service-web-desc': 'We create websites tailored to your style and needs, ensuring an impeccable visual and functional experience',
        'service-landing-title': 'Optimized Landing Pages',
        'service-landing-desc': 'Design of landing pages that not only attract visitors, but convert. Boost your sales!',
        'service-seo-title': 'SEO and Digital Marketing',
        'service-seo-desc': 'We improve your visibility in search engines and help you attract more customers to your business',
        'service-branding-title': 'Branding Consultancy',
        'service-branding-desc': 'We develop your online brand with a strategic approach that positions you as a leader in your industry',
        'service-logo-title': 'Logo Creation',
        'service-logo-desc': 'We create custom logos that capture the essence of your brand, ensuring a coherent and unique visual identity',
        
        // Process
        'process-title': 'Our Process',
        'process-discovery': 'Discovery',
        'process-discovery-desc': 'We understand your goals and needs',
        'process-strategy': 'Strategy',
        'process-strategy-desc': 'We plan the best solution',
        'process-design': 'Design',
        'process-design-desc': 'We create the visual experience',
        'process-development': 'Development',
        'process-development-desc': 'We implement the solution',
        
        // Projects
        'projects-title': 'Featured Projects',
        'project-1': 'Project 1',
        'project-2': 'Project 2',
        'project-3': 'Project 3',
        'project-4': 'Project 4',
        'view-details': 'View details',
        
        // Contact
        'contact-title': 'Ready to start?',
        'contact-desc': 'Tell us about your project and we\'ll contact you within 24 hours',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send message',
        'contact-or': 'Or contact us directly:',
        'contact-email-btn': 'Email',
        'contact-call': 'Call',
        
        // Footer
        'footer-services': 'Services',
        'footer-web': 'Custom Web Design',
        'footer-landing': 'Landing Pages',
        'footer-seo': 'SEO and Digital Marketing',
        'footer-branding': 'Branding',
        'footer-contact': 'Contact',
        'footer-social': 'Social',
        'footer-rights': 'All rights reserved.'
    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    // Guardar preferencia de idioma
    localStorage.setItem('language', language);
    
    // Cambiar el atributo lang del html
    document.documentElement.lang = language;
    
    // Actualizar todos los elementos con data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // Si el elemento tiene un atributo específico a traducir
        if (element.hasAttribute('data-lang-attr')) {
            const attr = element.getAttribute('data-lang-attr');
            element.setAttribute(attr, translations[language][key] || key);
        } else {
            // Traducir el contenido del elemento
            element.textContent = translations[language][key] || key;
        }
    });
    
    // Actualizar clase activa en botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Event listeners para botones de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const language = this.getAttribute('data-lang');
        changeLanguage(language);
    });
});

// Inicializar idioma
document.addEventListener('DOMContentLoaded', function() {
    // Comprobar si hay un idioma guardado
    const savedLanguage = localStorage.getItem('language');
    
    // Usar el idioma guardado o italiano por defecto
    const initialLanguage = savedLanguage || 'it';
    changeLanguage(initialLanguage);
});
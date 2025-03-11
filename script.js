// Navegación suave
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
        
        // Proyectos
        'projects-title': 'Progetti in evidenza',
        'view-details': 'Visita il sito',
        
        // Contacto
        'contact-title': 'Raccontaci del tuo progetto e ti contatteremo entro 24 ore',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Messaggio',
        'contact-send': 'Invia messaggio',
        'contact-or': 'O contattaci direttamente:',
        'contact-email-btn': 'Email',
        'contact-call': 'Chiama',
        
        // Footer
        'footer-services': 'Servizi',
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
        
        // Proyectos
        'projects-title': 'Proyectos Destacados',
        'view-details': 'Visitar sitio',
        
        // Contacto
        'contact-title': 'Cuéntanos sobre tu proyecto y te contactaremos en 24 horas',
        'contact-name': 'Nombre',
        'contact-email': 'Email',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar mensaje',
        'contact-or': 'O contáctanos directamente:',
        'contact-email-btn': 'Email',
        'contact-call': 'Llamar',
        
        // Footer
        'footer-services': 'Servicios',
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
        
        // Projects
        'projects-title': 'Featured Projects',
        'view-details': 'Visit site',
        
        // Contact
        'contact-title': 'Tell us about your project and we\'ll contact you within 24 hours',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send message',
        'contact-or': 'Or contact us directly:',
        'contact-email-btn': 'Email',
        'contact-call': 'Call',
        
        // Footer
        'footer-services': 'Services',
        'footer-contact': 'Contact',
        'footer-social': 'Social',
        'footer-rights': 'All rights reserved.'
    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (element.hasAttribute('data-lang-attr')) {
            const attr = element.getAttribute('data-lang-attr');
            element.setAttribute(attr, translations[language][key] || key);
        } else {
            element.textContent = translations[language][key] || key;
        }
    });
    
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
    const savedLanguage = localStorage.getItem('language');
    const initialLanguage = savedLanguage || 'it';
    changeLanguage(initialLanguage);
});
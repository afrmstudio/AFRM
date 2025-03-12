// Aggiungi questo al tuo script.js esistente

// Toggle menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger-menu');
    const closeButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.menu-mobile');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    if (closeButton && mobileMenu) {
        closeButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Chiudi menu quando si clicca su un link
    document.querySelectorAll('.menu-mobile a[href^="#"]').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Validazione form contatto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Qui puoi aggiungere il codice per inviare il form via AJAX
            alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
            contactForm.reset();
        });
    }
    
    // Effetto scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Controlla elementi visibili al caricamento
});

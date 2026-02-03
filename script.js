// ===================================
// TROPHIC LANDING PAGE SCRIPTS
// Goldwire Games
// ===================================

// Smooth scroll to signup section when CTA is clicked
document.addEventListener('DOMContentLoaded', () => {
    
    // Hero CTA button scroll
    const heroCTA = document.getElementById('hero-cta');
    const signupSection = document.getElementById('signup');
    
    if (heroCTA && signupSection) {
        heroCTA.addEventListener('click', (e) => {
            e.preventDefault();
            signupSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Focus on email input after scroll
            setTimeout(() => {
                const emailInput = document.getElementById('email-input');
                if (emailInput) {
                    emailInput.focus();
                }
            }, 800);
        });
    }
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe ecosystem bands
    const ecosystemBands = document.querySelectorAll('.ecosystem-band');
    ecosystemBands.forEach(band => {
        observer.observe(band);
    });
    
    // Observe about features
    const aboutFeatures = document.querySelectorAll('.about-feature');
    aboutFeatures.forEach(feature => {
        observer.observe(feature);
    });
    
    // Form submission handling (if using custom endpoint)
    const signupForm = document.getElementById('signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            // If you're using Formspree or another service, 
            // this will handle naturally. Otherwise, add custom logic here.
            
            // Optional: Add loading state
            const submitButton = signupForm.querySelector('.submit-button');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Joining...';
                submitButton.disabled = true;
                
                // Re-enable after submission (customize based on your backend)
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Optional: Add parallax effect to hero background on scroll
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const heroBackground = document.querySelector('.hero-background');
                if (heroBackground) {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;
                    heroBackground.style.transform = `translateY(${rate}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Add hover effect tracking for ecosystem bands
    ecosystemBands.forEach(band => {
        band.addEventListener('mouseenter', () => {
            const ecosystem = band.dataset.ecosystem;
            // Optional: Could trigger additional effects based on ecosystem type
            console.log(`Exploring ${ecosystem} ecosystem`);
        });
    });
    
});

// Optional: Add subtle cursor effect for premium feel
document.addEventListener('mousemove', (e) => {
    // This could be extended to add custom cursor effects
    // For now, keeping it minimal per the brief
});

// Helper function for future features
function animateOnScroll(element, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    observer.observe(element);
}

// Export for potential future module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { animateOnScroll };
}

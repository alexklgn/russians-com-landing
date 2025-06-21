// Simple entrance animation for the main title
document.addEventListener('DOMContentLoaded', function() {
    
    // Add entrance animation for hero title
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
});

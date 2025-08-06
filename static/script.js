document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic responsive menu (placeholder for a more complex hamburger menu if needed)
    // For now, the CSS handles hiding the nav ul on small screens.
    // A more complete solution would involve a button to toggle visibility.

    // You can add more JavaScript interactions here as needed, for example:
    // - Animations on scroll
    // - Project filter
    // - Form validation (if a contact form is added)

    console.log('Portfólio JavaScript carregado.');
});


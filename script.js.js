// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form submission with Formspree
const subscriptionForm = document.getElementById('subscription-form');
const formMessage = document.getElementById('form-message');

subscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(subscriptionForm);
    
    try {
        const response = await fetch(subscriptionForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            formMessage.style.display = 'block';
            subscriptionForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formMessage.textContent = 'There was a problem with your submission. Please try again.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .testimonial-card, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.product-card, .testimonial-card, .about-content');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load in case elements are already in view
    animateOnScroll();
});
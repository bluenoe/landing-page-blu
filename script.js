// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const feedbackSlider = document.getElementById('feedback-slider');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Feedback slider functionality
let currentSlideIndex = 0;
const feedbackItems = document.querySelectorAll('.feedback-item');
const dots = document.querySelectorAll('.dot');

// Function to show specific slide
function currentSlide(n) {
    showSlide(currentSlideIndex = n - 1);
}

// Function to show slide by index
function showSlide(n) {
    // Hide all slides
    feedbackItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Wrap around if necessary
    if (n >= feedbackItems.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = feedbackItems.length - 1;
    }
    
    // Show current slide and activate corresponding dot
    if (feedbackItems[currentSlideIndex]) {
        feedbackItems[currentSlideIndex].classList.add('active');
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

// Auto-slide functionality
function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Start auto-sliding
let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Pause auto-slide when user interacts with dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide(index + 1);
        // Restart auto-slide after 10 seconds
        setTimeout(() => {
            slideInterval = setInterval(nextSlide, 5000);
        }, 10000);
    });
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }
    
    // Show success message
    alert(`Cảm ơn ${name}! Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể. ☕`);
    
    // Reset form
    contactForm.reset();
    
    // Add success animation
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Đã gửi! ✓';
    submitButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = 'linear-gradient(45deg, #D2B48C, #8B4513)';
    }, 3000);
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .about-text, .about-image');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add fade-in class to elements that should animate
    document.querySelectorAll('.menu-item, .about-text, .about-image').forEach(element => {
        element.classList.add('fade-in');
    });
});

// Menu item hover effects
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Add pulse animation to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    setInterval(() => {
        ctaButton.classList.add('pulse');
        setTimeout(() => {
            ctaButton.classList.remove('pulse');
        }, 2000);
    }, 8000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Arrow keys for feedback slider
    if (e.key === 'ArrowLeft') {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
        clearInterval(slideInterval);
    }
    
    if (e.key === 'ArrowRight') {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
        clearInterval(slideInterval);
    }
});

// Touch/swipe support for feedback slider
let touchStartX = 0;
let touchEndX = 0;

if (feedbackSlider) {
    feedbackSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    feedbackSlider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            currentSlideIndex++;
        } else {
            // Swipe right - previous slide
            currentSlideIndex--;
        }
        showSlide(currentSlideIndex);
        clearInterval(slideInterval);
        
        // Restart auto-slide after swipe
        setTimeout(() => {
            slideInterval = setInterval(nextSlide, 5000);
        }, 10000);
    }
}

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .about-text, .about-image, .feedback-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Console welcome message
console.log('%c🎉 Welcome to Blu Coffee! ☕', 'color: #8B4513; font-size: 20px; font-weight: bold;');
console.log('%cCà phê chuẩn gu, chill mọi nơi! 💙', 'color: #D2B48C; font-size: 14px;');

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
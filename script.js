// Đợi DOM load xong
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== MOBILE MENU TOGGLE =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Đóng menu khi click vào link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ===== SMOOTH SCROLL FUNCTION =====
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = header.offsetHeight;
            const targetPosition = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Gán hàm scrollToSection vào window để có thể gọi từ HTML
    window.scrollToSection = scrollToSection;

    // ===== CONTACT FORM HANDLER =====
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Lấy giá trị từ form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate đơn giản
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Hiển thị thông báo cảm ơn
        alert(`Cảm ơn ${name} đã liên hệ với Bubu Coffee! Chúng tôi sẽ phản hồi sớm nhất có thể.`);
        
        // Reset form
        contactForm.reset();
    });

    // ===== FEEDBACK SLIDER =====
    const feedbackTrack = document.getElementById('feedback-track');
    const feedbackItems = document.querySelectorAll('.feedback-item');
    let currentSlide = 0;
    
    function showSlide(index) {
        if (feedbackItems.length === 0) return;
        
        // Đảm bảo index không vượt quá giới hạn
        if (index >= feedbackItems.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = feedbackItems.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Di chuyển slider
        feedbackTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Tự động chuyển slide mỗi 4 giây
    let autoSlideInterval = setInterval(nextSlide, 4000);

    // Dừng auto slide khi hover vào slider
    const feedbackSection = document.querySelector('.feedback-slider');
    if (feedbackSection) {
        feedbackSection.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });

        feedbackSection.addEventListener('mouseleave', function() {
            autoSlideInterval = setInterval(nextSlide, 4000);
        });
    }

    // ===== NAVBAR LINKS SMOOTH SCROLL =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // ===== ANIMATION ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe các section để thêm animation
    const sections = document.querySelectorAll('.menu-section, .about-section, .feedback-section, .contact-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ===== UTILITY FUNCTIONS =====
    
    // Debounce function để tối ưu scroll events
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

    // Thêm debounce cho scroll events
    const debouncedScroll = debounce(function() {
        // Có thể thêm các logic scroll khác ở đây
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // ===== ERROR HANDLING =====
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
    });

    // ===== CONSOLE LOG =====
    console.log('🚀 Bubu Coffee Landing Page Loaded Successfully!');
    console.log('✨ Features:');
    console.log('   - Smooth scrolling');
    console.log('   - Mobile responsive menu');
    console.log('   - Auto-sliding testimonials');
    console.log('   - Contact form with validation');
    console.log('   - Scroll animations');
});

// ===== CSS ANIMATIONS (thêm vào CSS) =====
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .menu-section, .about-section, .feedback-section, .contact-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
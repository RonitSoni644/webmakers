// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            icon.textContent = '-';
        } else {
            answer.classList.add('hidden');
            icon.textContent = '+';
        }
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Here you would send the form data to your server
        // For demo purposes, we'll just show the thank you message

        bookingForm.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');

        // Scroll to thank you message
        setTimeout(() => {
            thankYouMessage.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
}

// Initialize ScrollReveal for animations
ScrollReveal().reveal('.service-card', {
    delay: 200,
    interval: 100,
    origin: 'bottom',
    distance: '20px'
});

ScrollReveal().reveal('.testimonial-card', {
    delay: 200,
    interval: 100,
    origin: 'bottom',
    distance: '20px'
});


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ronitsoni506@gmail.com",
        Password: "Jaigurudev:)1",
        To: 'ronitsoni505@gmail.com',
        from: document.getElementById("email").value,
        Subject: "New Contact Form Submission",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}








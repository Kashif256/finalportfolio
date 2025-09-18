// Dark theme toggle
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleBtn.textContent = body.classList.contains('dark-theme') ? "☀️" : "🌙";
});

// Smooth scrolling navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({behavior: 'smooth'});
        document.querySelectorAll('main section').forEach(sec => sec.classList.remove('highlight'));
        targetSection.classList.add('highlight');
        setTimeout(() => targetSection.classList.remove('highlight'), 2000);

        // Show new About section when clicking About
        const newAbout = document.getElementById('new-about');
        if(targetId === "about") {
            newAbout.scrollIntoView({behavior: 'smooth'});
        }
    });
});

// Skills percentage animation
document.querySelectorAll('.skill-track span').forEach(span => {
    span.addEventListener('click', () => {
        const percentage = span.getAttribute('data-percentage');
        const parentBox = span.closest('.skill-box');
        const bar = parentBox.querySelector('.skill-percentage-inner');
        bar.style.width = percentage;
        bar.textContent = percentage;
    });
});

// Experience details toggle
document.querySelectorAll('.experience-box').forEach(box => {
    box.addEventListener('click', () => {
        const details = box.getAttribute('data-details');
        const expDetails = box.querySelector('.exp-details');
        if (expDetails.style.display === 'block') {
            expDetails.style.display = 'none';
        } else {
            expDetails.textContent = details;
            expDetails.style.display = 'block';
        }
    });
});

// Project Popup Logic
const projectItems = document.querySelectorAll('.project-item');
const projectOverlay = document.getElementById('project-overlay');
const popup = document.getElementById('project-popup');
const popupTitle = document.getElementById('popup-title');
const popupView = document.getElementById('popup-view');
const popupCode = document.getElementById('popup-code');
let currentPage = '';

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        currentPage = item.getAttribute('data-page');
        popupTitle.textContent = item.getAttribute('data-title');
        projectOverlay.classList.add('show');
    });
});

popupView.addEventListener('click', () => {
    if (currentPage) window.location.href = currentPage;
});

popupCode.addEventListener('click', () => {
    if (currentPage) window.location.href = currentPage;
});

// Close overlay when clicking outside popup
projectOverlay.addEventListener('click', e => {
    if (e.target === projectOverlay) projectOverlay.classList.remove('show');
});

document.getElementById('popup-close').addEventListener('click', () => {
    projectOverlay.classList.remove('show');
});

// Contact form WhatsApp submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(name && email && message) {
        const whatsappNumber = '919150311529';
        const text = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${encodedText}`;
        window.open(whatsappURL, '_blank');
    }
});

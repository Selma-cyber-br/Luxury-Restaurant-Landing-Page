// --- MOBILE NAVIGATION BAR ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle Menu Open/Close
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon change
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close Mobile Menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-xmark');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});


// --- ACTIVE LINK STATUS ON SCROLL ---
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset added to trigger active state slightly before reaching the element
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});


// --- INTERACTIVE CONTACT FORM SUBMISSION ---
const form = document.getElementById('restaurantForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Simulate API call or confirmation
    alert("Thank you for reaching out to L'Aura! We will contact you shortly to confirm details.");
    form.reset();
});
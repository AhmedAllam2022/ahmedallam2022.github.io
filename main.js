// Home Page - Start ------------------------------------------------------------
// Mobile navigation toggle
// If you already have a main.js file, just merge this block into it.
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (!navToggle || !mainNav) return;

    navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the menu after tapping a link (nicer on mobile)
    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Open menu');
        });
    });
});

// Home Page - End ------------------------------------------------------------

// Portfolio Page - Start ------------------------------------------------------------

const projectThumbs = document.querySelectorAll('.project-thumb');
const liveDemo = document.querySelectorAll('.project-demo');

for (let i = 0 ; i < projectThumbs.length ; i++) {
    projectThumbs[i].addEventListener('click', function () {
        liveDemo[i].click()
    }) 
}
// Portfolio Page - End ------------------------------------------------------------

// Testing Part - Start------------------------------------------------------------




// Contact Page - Start------------------------------------------------------------
const textInput = document.querySelector('[type="text"]');
const mailInput = document.querySelector('[type="email"]');
const textarea = document.querySelector('textarea');
const submitBtn = document.querySelector('.contact-submit');

function validateInput () {
    if (!textInput || !mailInput || !textarea || !submitBtn) return;
    if (textInput.value != '' && mailInput.value != '' && textarea.value != '') {
        submitBtn.classList.add('submit-bright');
    } else {
        submitBtn.classList.remove('submit-bright');
    }
}


textInput.addEventListener('input', validateInput);
mailInput.addEventListener('input', validateInput);
textarea.addEventListener('input', validateInput);
// Contact Page - End------------------------------------------------------------








// Testing Part - End------------------------------------------------------------

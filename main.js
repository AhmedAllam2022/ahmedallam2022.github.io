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

const socialDiv = document.querySelector('.social');

if(socialDiv) {
    socialDiv.style.cssText = `
    display: flex;
    gap: 15px;
    align-items: center;
    `
    const cvElement = document.querySelector('.cv');
    socialDiv.append(cvElement);
}
// Home Page - End ------------------------------------------------------------

// Portfolio Page - Start ------------------------------------------------------------

const projectThumbs = document.querySelectorAll('.project-thumb');
console.log(projectThumbs);
const liveDemo = document.querySelectorAll('.project-demo');
console.log(liveDemo);
projectThumbs.forEach( (thumb, i) => {
    thumb.addEventListener('click', () => {
        liveDemo[i].click();
    })
})

// Portfolio Page - End ------------------------------------------------------------


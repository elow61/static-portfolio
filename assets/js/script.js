'use_strict';

const toggleElement = function (elem) { elem.classList.toggle('active'); }

const btnArrow = document.querySelector('[data-arrow-down]');
const profile = document.querySelector("[data-aside='profile']");
btnArrow.addEventListener('click', () => {toggleElement(profile);});

// page navigation variables
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
console.log('All elements: ', navLinks, pages)
// add event to all nav link
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add('active');
                navLinks[i].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove('active');
                navLinks[i].classList.remove('active');
            }
        }
    });
}

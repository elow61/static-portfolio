'use_strict';

const toggleElement = function (elem) { elem.classList.toggle('active'); }

const btnArrow = document.querySelector('[data-arrow-down]');
const profile = document.querySelector('[data-profile]');
console.log(btnArrow, profile)
btnArrow.addEventListener('click', () => {toggleElement(profile);});

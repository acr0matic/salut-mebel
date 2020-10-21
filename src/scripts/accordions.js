/* eslint-disable new-cap */
/* global handorgel */

const accordions = Array.from(document.querySelectorAll('.handorgel')).map((selector) => new handorgel(selector));

accordions.forEach((accordion) => {
  accordion.on('fold:open', () => {
    const icon = accordion.element.querySelector('.handorgel__icon');
    icon.classList.toggle('handorgel__icon--opened');
  });

  // listen for event
  accordion.on('fold:close', () => {
    const icon = accordion.element.querySelector('.handorgel__icon');
    icon.classList.toggle('handorgel__icon--opened');
  });
});

/* eslint-disable new-cap */
/* global handorgel */

const accordions = Array.from(document.querySelectorAll('.handorgel')).map((selector) => new handorgel(selector));

accordions.forEach((accordion) => {
  const icon = accordion.element.querySelector('.handorgel__icon');

  accordion.on('fold:open', () => {
    icon.classList.toggle('handorgel__icon--opened');
  });

  // listen for event
  accordion.on('fold:close', () => {
    icon.classList.toggle('handorgel__icon--opened');
  });
});

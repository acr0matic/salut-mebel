// Убирает отступ между футером и секцией "заказать рассчет"
document.addEventListener('DOMContentLoaded', () => {
  const sectionArray = document.querySelectorAll('section');
  const calculationSection = document.querySelector('#calculation');

  if (sectionArray[sectionArray.length - 1] === calculationSection) {
    calculationSection.style.marginBottom = '-100px';
  }
});

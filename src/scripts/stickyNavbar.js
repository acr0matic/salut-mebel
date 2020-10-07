let scrollPosition = window.pageYOffset;
const headerNav = document.getElementById('headerNav');

const addNavClass = () => headerNav.classList.add('nav--visible');
const removeNavClass = () => headerNav.classList.remove('nav--visible');

window.addEventListener('scroll', () => {
  scrollPosition = window.pageYOffset;

  if (scrollPosition >= 600) addNavClass();
  else removeNavClass();
});

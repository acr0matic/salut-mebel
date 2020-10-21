const contactAddress = document.getElementById('contactAddress');
const contactList = document.getElementById('contactList');
let scrollPosition = window.pageYOffset;

contactAddress.addEventListener('click', () => {
  contactList.classList.toggle('contact-address--visible');
});

window.addEventListener('click', (e) => {
  if (!contactAddress.contains(e.target) && !contactList.contains(e.target)) {
    contactList.classList.remove('contact-address--visible');
  }
});

window.addEventListener('scroll', () => {
  scrollPosition = window.pageYOffset;

  if (scrollPosition >= 150) contactList.classList.remove('contact-address--visible');
});

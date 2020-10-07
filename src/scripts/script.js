const contactAddress = document.getElementById('contactAddress');
const contactList = document.getElementById('contactList');

contactAddress.addEventListener('click', () => {
  contactList.classList.toggle('contact-address--visible');
});

window.addEventListener('click', (e) => {
  if (!contactAddress.contains(e.target) && !contactList.contains(e.target)) {
    contactList.classList.remove('contact-address--visible');
  }
});

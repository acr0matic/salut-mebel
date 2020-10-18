/* global MicroModal */

MicroModal.init({
  awaitCloseAnimation: true,
});

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

// TODO: найти библиотеку
const current = document.querySelector('#gallery-current');
const thumbs = document.querySelectorAll('#gallery-thumbs img');

function imgActivate(e) {
  thumbs.forEach((img) => img.classList.remove('product-gallery__image--selected'));
  current.src = e.target.src;
  e.target.classList.add('product-gallery__image--selected');
}

thumbs[0].classList.add('product-gallery__image--selected');
thumbs.forEach((img) => img.addEventListener('click', imgActivate));

// TODO //
// ПЕРЕПИСАТЬ ПОЛНОСТЬЮ //
/* ******************** */

/* global handorgel */

const accordion_1 = new handorgel(document.querySelector('.handorgel-1'));
const accordion_2 = new handorgel(document.querySelector('.handorgel-2'));
const accordion_3 = new handorgel(document.querySelector('.handorgel-3'));
const accordion_4 = new handorgel(document.querySelector('.handorgel-4'));
const accordion_5 = new handorgel(document.querySelector('.handorgel-5'));
const accordion_address = new handorgel(document.querySelector('.handorgel-address'));

// listen for event
accordion_1.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-1 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_1.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-1 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_2.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-2 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_2.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-2 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});


// listen for event
accordion_3.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-3 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_3.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-3 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});


// listen for event
accordion_4.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-4 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_4.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-4 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});


// listen for event
accordion_5.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-5 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_5.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-5 .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});


// listen for event
accordion_address.on('fold:open', () => {
  const icon = document.querySelector('.handorgel-address .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

// listen for event
accordion_address.on('fold:close', () => {
  const icon = document.querySelector('.handorgel-address .handorgel__icon');
  console.log('icon', icon);

  icon.classList.toggle('handorgel__icon--opened');
});

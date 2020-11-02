/* global MicroModal */
/* global IMask */

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

window.addEventListener('DOMContentLoaded', () => {
  // Маска для номера телефона
  const phoneInputs = document.querySelectorAll('input[name=user_phone]');
  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
  };

  phoneInputs.forEach((input) => IMask(input, maskOptions));
});

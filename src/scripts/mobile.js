const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = mobileMenu.querySelectorAll('.mobile-menu__item--extended');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('mobile-menu--open');
  });
}

mobileMenuItems.forEach((item) => {
  const span = item.querySelector('span');
  const subMenu = item.querySelectorAll('.mobile-submenu');

  span.addEventListener('click', () => {
    subMenu.forEach((element) => element.classList.toggle('mobile-submenu--visible'));
  });

  subMenu.forEach((element) => {
    const subMenuTitle = element.querySelector('.mobile-submenu__title');
    const subMenuContent = element.querySelector('.mobile-submenu__content');

    subMenuTitle.addEventListener('click', () => {
      subMenuContent.classList.toggle('mobile-submenu__content--visible');
    });
  });
});

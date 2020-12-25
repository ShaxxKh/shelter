const disabledLinks = document.getElementsByClassName('nav__link--disabled');
const burgerButton = document.querySelector('.burger');
const burgerListWrapper = document.querySelector('.burger__list-wrapper');
const burgerList = document.querySelector('.burger__list')
const logo = document.querySelector('.header__logo')



burgerButton.addEventListener('click', () => {
    burgerListWrapper.classList.toggle('show');
    burgerList.classList.toggle('show');
    burgerButton.classList.toggle('rotate');
    burgerButton.classList.toggle('rotate-back');

})

disabledLinks.disabled = true
const disabledLinks = document.getElementsByClassName('nav__link--disabled');
const burgerButton = document.querySelector('.burger');
const burgerListWrapper = document.querySelector('.burger__list-wrapper');
const burgerList = document.querySelector('.burger__list');
const katrineCard = document.querySelector('.item--1');
const katrinePopup = document.querySelector('.katrine-wrapper');
const friends = document.querySelector('.friends');
const closeButton = document.querySelector('.popup__close-button');


katrineCard.addEventListener('click', () => {
    katrinePopup.classList.add('display');
    friends.classList.add('make-dark-background');
})
closeButton.addEventListener('click', () => {
    katrinePopup.classList.remove('display');
    friends.classList.remove('make-dark-background');
})

burgerButton.addEventListener('click', () => {
    burgerListWrapper.classList.toggle('show');
    burgerList.classList.toggle('show');
    burgerButton.classList.toggle('rotate');
    burgerButton.classList.toggle('rotate-back');
})

disabledLinks.disabled = true
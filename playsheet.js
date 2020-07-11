const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});


const navicon = document.querySelector('.navicon');
const nav = document.querySelector('.hidden-nav');
const exit = document.querySelector('.nav-close');

navicon.addEventListener('click', () => {
    nav.style.display = 'block';
});

exit.addEventListener('click', () => {
    nav.style.display = 'none';
});



navicon.addEventListener('mouseover', () => {
    nav.style.display = 'block';
});

navicon.addEventListener('mouseout', () => {
    nav.style.display = 'none';
});

nav.addEventListener('mouseover', () => {
    nav.style.display = 'block';
});

nav.addEventListener('mouseout', () => {
    nav.style.display = 'none';
});




const img1 = document.querySelector('.test1');
const cart1 = document.querySelector('.test1x');

img1.addEventListener('mouseover', () => {
    cart1.style.display = 'block';
});

img1.addEventListener('mouseout', () => {
    cart1.style.display = 'none';
});

const img2 = document.querySelector('.test2');
const cart2 = document.querySelector('.test2x');

img2.addEventListener('mouseover', () => {
    cart2.style.display = 'block';
});

img2.addEventListener('mouseout', () => {
    cart2.style.display = 'none';
});

const img3 = document.querySelector('.test3');
const cart3 = document.querySelector('.test3x');

img3.addEventListener('mouseover', () => {
    cart3.style.display = 'block';
});

img3.addEventListener('mouseout', () => {
    cart3.style.display = 'none';
});

const img4 = document.querySelector('.test4');
const cart4 = document.querySelector('.test4x');

img4.addEventListener('mouseover', () => {
    cart4.style.display = 'block';
});

img4.addEventListener('mouseout', () => {
    cart4.style.display = 'none';
});

const img5 = document.querySelector('.test5');
const cart5 = document.querySelector('.test5x');

img5.addEventListener('mouseover', () => {
    cart5.style.display = 'block';
});

img5.addEventListener('mouseout', () => {
    cart5.style.display = 'none';
});

const img6 = document.querySelector('.test6');
const cart6 = document.querySelector('.test6x');

img6.addEventListener('mouseover', () => {
    cart6.style.display = 'block';
});

img6.addEventListener('mouseout', () => {
    cart6.style.display = 'none';
});

const img7 = document.querySelector('.test7');
const cart7 = document.querySelector('.test7x');

img7.addEventListener('mouseover', () => {
    cart7.style.display = 'block';
});

img7.addEventListener('mouseout', () => {
    cart7.style.display = 'none';
});

const img8 = document.querySelector('.test8');
const cart8 = document.querySelector('.test8x');

img8.addEventListener('mouseover', () => {
    cart8.style.display = 'block';
});

img8.addEventListener('mouseout', () => {
    cart8.style.display = 'none';
});

const img9 = document.querySelector('.test9');
const cart9 = document.querySelector('.test9x');

img9.addEventListener('mouseover', () => {
    cart9.style.display = 'block';
});

img9.addEventListener('mouseout', () => {
    cart9.style.display = 'none';
});

const img10 = document.querySelector('.test10');
const cart10 = document.querySelector('.test10x');

img10.addEventListener('mouseover', () => {
    cart10.style.display = 'block';
});

img10.addEventListener('mouseout', () => {
    cart10.style.display = 'none';
});


const cart = document.querySelector('.hidden-cart');
const cartClose = document.querySelector('.cart-close');
const carticon = document.querySelector('.carticon');
const empty = document.querySelector('.empty');

carticon.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'block';
});

cart1.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart2.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart3.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart4.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart5.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart6.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart7.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart8.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart9.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cart10.addEventListener('click', () => {
    cart.style.display = 'block';
    empty.style.display = 'none';
});

cartClose.addEventListener('click', () => {
    cart.style.display = 'none';
});


// APPENDING ITEMS


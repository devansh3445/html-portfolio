let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Physicl Fitness', 'Weight Gain','Strength Training','Fat Lose','weight lifting','Running'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
  });
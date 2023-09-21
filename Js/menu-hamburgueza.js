document.querySelector('.menu-bars').addEventListener('click', animatebars);

let animatebars1 = document.querySelector('.linea1');
let animatebars2 = document.querySelector('.linea2');
let animatebars3 = document.querySelector('.linea3');

function animatebars(){

    animatebars1.classList.toggle('active-linea1');
    animatebars2.classList.toggle('active-linea2');
    animatebars3.classList.toggle('active-linea3');
    }

let menu = document.querySelector('menu-bars');

menu.addEventListener('click', function(){
alert('funcion')
menu.classList.toggle('active')
    
});
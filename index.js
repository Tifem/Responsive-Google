const menu = document.querySelector('.menu-dot');
const menuContainer = document.querySelector('.menu-container');



menu.addEventListener('click',() =>{
    menuContainer.classList.toggle('open')
})
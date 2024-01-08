const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');
const navButtons = document.getElementsByClassName("navButtons");

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', close);
}




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close(){
  mainMenu.style.top = '-100%';

}

const ul = document.querySelector('ul');
const close_menu = document.querySelector('.close_menu');
const menu_bar = document.querySelector('.menu_bar');



menu_bar.addEventListener('click',show);
close_menu.addEventListener('click',close);


function show(){
    ul.style.display = 'flex';
    ul.style.top = '0';
}

function close(){
    ul.style.top = '-100%'; 
}

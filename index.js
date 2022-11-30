var ul = document.querySelector("nav ul");
var menu_btn = document.querySelector(".menu-btn");

function menuShow(){ 
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }   
}
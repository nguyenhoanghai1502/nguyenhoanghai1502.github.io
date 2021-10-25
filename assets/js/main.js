var parallax=document.getElementById('header__background');
window.addEventListener('scroll', function(){
    let offset=window.pageYOffset||document.documentElement.scrollTop;
    parallax.style.backgroundPositionY=-130 - offset*0.1 +"px";
    var navbar=document.getElementById('headernav');
    var introduce=this.document.getElementById('jumbotron');
    if(offset<=0){
        parallax.style.backgroundPositionY='-130';
        introduce.style.opacity=1;
    }
    else{
        introduce.style.opacity=(100/offset);
    }
})
function listSlide(){
    var listitem=document.getElementsByClassName('header__navbar__item');
    var x=0.3;
    for(var i=0; i<listitem.length;i++){
        listitem[i].style.animatio="slideIn ease-in "+x+"s";
        x+=0.3;
    }
}
var menu=document.querySelector(".header__navbar__container");
var menubutton= document.querySelector(".header__navbar__btn");
menubutton.addEventListener("click",()=>{
    menu.classList.toggle("open__nav");
    menubutton.classList.toggle("open");
})

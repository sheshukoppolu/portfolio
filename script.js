let menu=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};


const sr=scrollReveal({
    distance:'40px',
    duration:'2500',
    reser:true
});
sr.reveal('.logo',{delay:200,origin:'left'})

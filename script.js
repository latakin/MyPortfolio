const btn = document.querySelector('.hamburger');
const mobilenav = document.querySelector('.mobilenav');
const cancelButton = document.querySelector('.cancel');
const mobilenavlinks = document.querySelectorAll('.navbtn');

btn.addEventListener('click', ()=> {
    
    mobilenav.style.display = 'block';
})



cancelButton.addEventListener('click', ()=> {
    mobilenav.style.display = 'none';
    
})

mobilenavlinks.forEach((navlink) => {
    navlink.addEventListener('click', ()=> {
        mobilenav.style.display = 'none';
    }) 
    
});
const btn = document.querySelector('.hamburger');
const mobilenav = document.querySelector('.mobilenav');
const cancelButton = document.querySelector('.cancel');
const mobilenavlinks = document.querySelector('.navbtn');

btn.addEventListener('click', ()=> {
    
    mobilenav.style.display = 'block';
})



cancelButton.addEventListener('click', ()=> {
    mobilenav.style.display = 'none';
})

mobilenavlinks.addEventListener ('click', ()=> {
    mobilenav.style.display = 'none';
})
const btn = document.querySelector('.hamburger');
const mobilenav = document.querySelector('.mobilenav');
const cancelButton = document.querySelector('.cancel');

btn.addEventListener('click', ()=> {
    
    mobilenav.setAttribute('class', 'navlinkmobile')
})



cancelButton.addEventListener('click',()=> {
    mobilenav.setAttribute('class', '.mobilenav');
})
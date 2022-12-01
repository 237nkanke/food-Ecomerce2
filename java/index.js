
const dropdown = document.querySelector('.next')
const select = document.querySelector('.select')
const caret = document.querySelector('.cater')
const menu = document.getElementById('menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')

let n=0
select.addEventListener('mousedown' , () => {
    if(n%2 == 0){
        menu.style.display = 'block'
        menu.style.opacity = 1
        n++
    }else{
        menu.style.display = 'none'
        menu.style.opacity = 0
        n++
    }
   
})






const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider div img')
const pre = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

let counter = 1;
// const size = 1302+'px';
const size = images[0].clientWidth;


slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


//adding btn listeners

next.addEventListener('click' , () => {
    if(counter >= images.length -1) return;
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
pre.addEventListener('click' , () => {
    if(counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

//a transitionend event listener is an avent listener that starts working arter a transition have finish

slider.addEventListener('transitionend', () =>
{
    if(images[counter].id === 'last') {
        slider.style.transition = 'none';
        counter = images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } 
    if(images[counter].id === 'first') {
        slider.style.transition = 'none';
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } 
})
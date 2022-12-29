// slider
const leftbtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const slider = document.querySelector('.slider')

const imgSrc = ["img/banner (1).jpeg","img/banner (2).jpeg"]

let counter = 0;

leftbtn.addEventListener('click',()=>{
    counter++;
    if(counter >2){
        counter = 1
    }
    slider.src = `img/banner (${counter}).jpeg`
})
rightBtn.addEventListener('click',()=>{
    counter++;
    if(counter >2){
        counter = 1
    }
    slider.src = `img/banner (${counter}).jpeg`
})
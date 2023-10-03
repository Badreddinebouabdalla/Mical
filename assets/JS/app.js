const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const homeSlider= document.querySelector(".slider-container");
const rSlide= document.querySelector(".slide-r");
const lSlide= document.querySelector(".slide-l");
const balls = document.querySelectorAll('.ball');
const testSlider=document.querySelector('.testimonial-slider');

const swiperEl = document.querySelector(".swiper-container");
const swiperParams = {
    pagination:{
        el:'.balls',
        clickable:true,
    },
}
Object.assign(swiperEl,swiperParams);
swiperEl.initialize();

function slideNav(){
    document.querySelector('nav').classList.toggle('show');
}


menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("show-menu");
});

rSlide.addEventListener("click",()=>{
   homeSlider.swiper.slideNext();
});

lSlide.addEventListener("click",()=>{
    homeSlider.swiper.slidePrev();
});


balls.forEach((ball)=>{
    ball.addEventListener("click",()=>{
        var ballIndex = ball.getAttribute('data-slide-to')
        testSlider.setAttribute('data-slide-to',String(ballIndex))
        n=ballIndex;
        checkCurrentSlide(balls,ballIndex)
    });

    
})
function checkCurrentSlide(items,currentIndex){
    items.forEach((item,i) => {
        if(i==currentIndex-1){
            item.classList.add('focus');
        }else{
            item.classList.remove('focus')
        }
    });
}

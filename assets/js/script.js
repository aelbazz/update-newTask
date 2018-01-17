var swiper1 = new Swiper('#HotelsSlides1', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 130,
      modifier: 2,
      slideShadows : true,
    },
    navigation: {
            nextEl: '#Swiper1Next',
          prevEl: '#Swiper1Prev',
    }

}); 
swiper1.activeIndex = 1; 
var swiper2 = new Swiper('#HotelsSlides2', {
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    spaceBetween: 0,
    width	:(230*5),
    height: 370,
    loop: true,
    navigation: {
        nextEl: '#Swiper2Next',
        prevEl: '#Swiper2Prev',
    },
    breakpoints: { 
        // when window width is <= 768px
        768: {
            slidesPerView: 3
        } 
    }
});
swiper2.activeIndex = 1; 

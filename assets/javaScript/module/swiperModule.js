export default function swiperModule(){

  const mySwiper = document.querySelector('.mySwiper')
  
  if(mySwiper){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 21,
      loop: true,  
       
      breakpoints: {  
        '600': {
          slidesPerView: 2,
       
       
      },
      '1024': {
        slidesPerView: 3,
     
     
    },
        '2000': {
          slidesPerView: 3,
          spaceBetween: 40,},
       
      },
     
    });
  
  }
  const swiperPr = document.querySelector('.swiper-pr')
  if( swiperPr ){
    var swiper = new Swiper(swiperPr, {
      slidesPerView: 1,
      spaceBetween: 21,
      navigation: {
        nextEl: ".des-navigation-next",
        prevEl: ".des-navigation-prev",
      },
      breakpoints: {  
        '1024': {
          slidesPerView: 3,
       
       
      },
      '690': {
        slidesPerView: 2,
     
     
    },
        '2000': {
          slidesPerView: 4,
          spaceBetween: 40,},
       
      },
     
    });
  }
  const swiperBrand = document.querySelector('.swiper-brand')
  if(  swiperBrand  ){
    var swiper = new Swiper( swiperBrand , {
      slidesPerView: 5,
      spaceBetween: 32,
      
      breakpoints: {  
       
      },
     
    });
  }
  const swiperStruct = document.querySelector('.swiper-struct')
  if( swiperStruct ){
    var swiper = new Swiper(swiperStruct, {
      slidesPerView: 1,
     
      navigation: {
        nextEl: ".des-navigation-next",
        prevEl: ".des-navigation-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
    });
  }
}

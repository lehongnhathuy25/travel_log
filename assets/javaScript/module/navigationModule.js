export default function  navigationModule(){

    const swiperSlider = document.querySelectorAll(".des-pr-item")
    const nextSlider = document.querySelector('.des-navigation-next')
    const prevSlider = document.querySelector('.des-navigation-prev')
   const navgation = () =>{
        let nextIndex = 0;
        nextSlider.classList.add('active')
      
        nextSlider.onclick = function(){
            nextIndex = nextIndex + 1;
           if(nextIndex === swiperSlider.length -1){
            nextSlider.classList.remove('active')
            prevSlider.classList.add('active')
           }
        }
        prevSlider.onclick = function(){
            nextIndex = nextIndex - 1;
            if(nextIndex < 0){
                nextIndex = 0
            }
            if(nextIndex === 0){
                nextSlider.classList.add('active')
                prevSlider.classList.remove('active')
            }
        }
   }
   navgation()
  
}

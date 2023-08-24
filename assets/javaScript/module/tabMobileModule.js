export default function tabMobileModule(){
    const tabMobile = document.querySelector('.tab-mobile')
  
    if(tabMobile)
    {
        const menuTab = document.querySelector('.menu-tab')
        const removeTab = document.querySelector('.removeTab')
        const overlayMenu = document.querySelector('.menu-mobile-overlay')
        tabMobile.onclick = function(){
            menuTab.classList.add('open')
        }
        removeTab.onclick = function(){
            menuTab.classList.remove('open')
        }
        overlayMenu .onclick = function(){
            menuTab.classList.remove('open')
        }
    }
}

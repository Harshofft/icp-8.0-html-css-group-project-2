let openPageLogo = document.querySelector("#hamb-menu-logo img")
let ClosePageLogo = document.querySelector("#hamb-close-logo img")
let page = document.querySelector("#hamb-menu-page")

openPageLogo.addEventListener("click",()=>{
    page.style.left=0
})

ClosePageLogo.addEventListener("click",()=>{
    page.style.left=`${100}%`
})


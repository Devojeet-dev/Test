let btn = true;
const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('mobile-nav');
navBtn.addEventListener("click",()=>{
    if(btn===true){
        mobileNav.style.height = "auto";
        btn=false;
    }
    else{
        mobileNav.style.height = "0";
        btn=true;
    }
})


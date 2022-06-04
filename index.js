const nav = document.querySelector("#navscroll");
const returnTop = document.querySelector(".return");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.isIntersecting)
        // console.log(entry.intersectionRatio)
        if (entry.isIntersecting == true){
            nav.style.top = "-40px";
            returnTop.style.bottom = "-100px";
        } else {
            nav.style.top = 0;
            returnTop.style.bottom = "5px";
        }
    })
}, {
    threshold: 0.5
} );
  
const target = document.querySelector('header');
observer.observe(target);

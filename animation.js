const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((e) => {
    e.forEach((x) => {
        if(x.isIntersecting){
            x.target.classList.add('show');
        }
        else{
            x.target.classList.remove('show');
        }
    });
})

hiddenElements.forEach((el) => observer.observe(el));
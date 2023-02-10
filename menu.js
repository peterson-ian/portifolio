const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event){
    if(event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("active");
    setAria();
}

function setAria(){
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive)

    if (isActive){
        btnMenu.setAttribute("aria-label", "Fechar Menu")
    }
    else{
        btnMenu.setAttribute("aria-label", "Abrir Menu")
    }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

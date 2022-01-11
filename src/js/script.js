const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const passos = document.querySelectorAll('.passos .etapas .etapa');

let menuActive = false;


menuIcon.addEventListener('click', () => {
    if(!menuActive) {
        mobileMenu.style.transform = 'translateY(0)';
    } else {
        mobileMenu.style.transform = 'translateY(-400%)';
    }
    menuActive = !menuActive;
});

document.addEventListener('scroll', () => {
    let viewHeight = window.innerHeight;
    
    passos.forEach((passo, idx) => {
        let passoToTop = passo.getBoundingClientRect().top;
        let passoHeight = passo.getBoundingClientRect().height;
        
        if(passoToTop <= (viewHeight - passoHeight)) {
            passo.style.transform = 'translateX(0)';
        } else {
            if (idx % 2 === 0) {
                passo.style.transform = 'translateX(300%)';
            } else {
                passo.style.transform = 'translateX(-300%)';
            }
        }
    });
});

(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

(function() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.header__nav');
    const navbarClose = document.querySelector('.header__nav-close');

    burger.addEventListener('click', () => {
        navbar.classList.add('header__nav--active');
    });

    navbarClose.addEventListener('click', () => {
        navbar.classList.remove('header__nav--active');
    })
}());
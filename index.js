document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('menu-hidden')) {
        mobileMenu.classList.remove('menu-hidden');
        mobileMenu.classList.add('menu-visible');
    } else {
        mobileMenu.classList.remove('menu-visible');
        mobileMenu.classList.add('menu-hidden');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
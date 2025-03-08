document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('with-background');
        } else {
            header.classList.remove('with-background');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburger.classList.toggle('is-active');
    });
});

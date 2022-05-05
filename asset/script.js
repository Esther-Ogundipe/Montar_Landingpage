$(document).ready(function () {


    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    Object.defineProperty(String.prototype, 'capitalize', {
        value: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        enumerable: false
    });


    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('.header').css({ 'background': '#6C5CE7', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });


});

document.querySelectorAll('.faq .accordion-container .accordion').forEach(accordion => {
    accordion.onclick = () => {
        accordion.classList.toggle('active');
    }
});
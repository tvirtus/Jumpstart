$(document).ready(function () {

    //Stack navigation menu for screens under 768
    var $window = $(window),
        $html = $('.nav-pills');

    function resize() {
        if ($window.width() < 768) {
            return $html.addClass('nav-stacked');
        }

        $html.removeClass('nav-stacked');
    }

    $window
        .resize(resize)
        .trigger('resize'); //end of stacking logic

    // Jumbotron - carousel
    $('.carousel').slick({
        arrows: false,
        dragable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

//    Hide header on scroll
    $(window).scroll(function () {
        var $header = $('div.navbar');
        $(window).scrollTop() >=
        // aucounting for screen size when hiding/showing the header
        ($(window).width() < 768 ? 135 : 50)
            ? $header.slideUp('slow')
            : $header.slideDown('fast');
    });
});

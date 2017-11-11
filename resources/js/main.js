$(document).ready(function () {

    /*Header*/
    // Hide header on scroll
    $(window).scroll(function () {
        var $header = $('.navbar');
        var $headerHeight = $(window).width() < 768 ? 135 : 50;
        $(window).scrollTop() >= $headerHeight
            ? $header.slideUp(150)
            : $header.slideDown(150)

        //Note to instructor: animate() is not behaving correctly
        // ? $header.animate({top: '-' + $headerHeight}, 150)
        // : $header.animate({top: $headerHeight}, 150)

    }); // end of hiding header logic

    //Stack navigation menu for screens under 768px
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
    // end of header logic

    /* Jumbotron */
    //Slick carousel
    $('.carousel').slick({
        arrows: false,
        dragable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 4000
    }); // end of slick carousel logic

    // jumbotron Jump in button
    var $jumpInButton = '<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Jump in</a>';
    $('.text-container').append($jumpInButton); //end of jumbotron Jump in Button logic

    // end of jumbotron logic
});


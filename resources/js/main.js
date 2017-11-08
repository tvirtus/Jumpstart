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


});

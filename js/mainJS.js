$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 70;
            if ($(window).scrollTop() > navHeight) {
                $('body').addClass('fixed-header');
            }
            else {
                $('body').removeClass('fixed-header');
            }
    });
    // $(".slide-bottom").click(function(){
    //     $("#top-section-one").slideDown("slow");
    // });

});


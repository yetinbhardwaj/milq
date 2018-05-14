$(document).ready(function(){
        $('.mobile-trigger').click(function() {
            $('body').toggleClass('show-mobile-nav');
         });
       
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100){
            $('body').addClass("sticky-header");
            }
            else{
            $('body').removeClass("sticky-header");
            }
        });
       
});


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
   
    var i = 0 ;
    var j = 7;
    $(".cs-banner-left-content .cs-text-box li,.cs-article-box-wrapper,.cs-banner-mobile-box,.cs-banner-right-bg-img-box img").each(function(){
        var keyNo = $(this).attr('key');          
        if (keyNo == i ) {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        }
    });
    $('.cs-banner-right-bg-img-box img').each(function(){
        if($(this).hasClass('active')){
            var url = $(this).attr('src');   
            $(this).parent().parent().css("background-image", "url("+url+")");
        }
        
    })
    $("#NextBtn").click(function(){
        i++
        if ( i > 6 ) {
            i = 0;
        }   
        $(".cs-banner-left-content .cs-text-box li,.cs-article-box-wrapper,.cs-banner-mobile-box,.cs-banner-right-bg-img-box img").each(function(){
            var keyNo = $(this).attr('key');          
            if (keyNo == i ) {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            }
        });
        $('.cs-banner-right-bg-img-box img').each(function(){
            if($(this).hasClass('active')){
                var url = $(this).attr('src');   
                $(this).parent().parent().css("background-image", "url("+url+")");
            }            
        })
        
    });
   
    $("#PrevBtn").click(function(){
        j--
        if ( j <= 0 ) {
            j = 6;
        }   
        $(".cs-banner-left-content .cs-text-box li,.cs-article-box-wrapper,.cs-banner-mobile-box,.cs-banner-right-bg-img-box img").each(function(){
            var keyNo = $(this).attr('key');          
            if (keyNo == j ) {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            }
        });
        $('.cs-banner-right-bg-img-box img').each(function(){
            if($(this).hasClass('active')){
                var url = $(this).attr('src');   
                $(this).parent().parent().css("background-image", "url("+url+")");
            }
            
        })
       
    });
    

});


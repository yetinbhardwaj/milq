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
    var myVar ;

    function newTimeout(){
        window.clearTimeout(myVar);
        myVar = setTimeout(nextClick, 5000);
    }
    function nextClick(){
        $("#NextBtn").click();
    }

    newTimeout();

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
        if ( i > 5 ) {
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
        newTimeout();
    });

    $("#PrevBtn").click(function(){
        if ( i === 0 ) {
            i = 5;
        } else {
            i--;
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
        newTimeout();
    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('#sendMail').click(function () {
        var payload = {
            senderName: $('#name').val().trim(),
            senderEmail: $('#email').val().trim()
        };

        if (validate(payload)) {
            $.ajax({
                type: "POST",
                url: "api/v0/entities/sendmail",
                data: {
                    senderEmail: payload.senderEmail,
                    senderName: payload.senderName
                },
                dataType: "application/json",
                complete: function (xhr) {
                    if (xhr && xhr.status === 200) {
                        showMessage('Mail sent successfully', 'nameSpan', false);
                    } else {
                        showMessage('Some error occurred', 'nameSpan', true);
                    }
                }
            });
        }

        function validate(payload) {
            var isValid = false;
            var email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
            if (payload) {
                if (email.test(payload.senderEmail)) {
                    isValid = true;
                    showMessage(null, 'emailSpan', false);
                } else {
                    showMessage('Please enter valid email', 'emailSpan', true);
                }
                if (payload.senderName) {
                    isValid = isValid? true: false;
                    showMessage(null, 'nameSpan', false);
                } else {
                    isValid = false;
                    showMessage('Please enter your name', 'nameSpan', true);
                }
            }
            return isValid;
        }

        function showMessage(msg, spanId, isError) {
            var spanObj = $('#' + spanId);
            if (spanObj) {
                spanObj.hasClass('none')? spanObj.removeClass('none'): '';
                (isError && !spanObj.hasClass('error')) ? spanObj.addClass('error'): '';
                (!isError && spanObj.hasClass('error')) ? spanObj.removeClass('error'): '';
                spanObj.text(msg || '');
            }
        }
    });
});

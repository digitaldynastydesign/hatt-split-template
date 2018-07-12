$( document ).ready(function() {
    
    $(window).on('activate.bs.scrollspy', function (event) {
        var navId = $('.list-group .active').attr('href');
        if (navId != "#home"){
            //$('.navigation, .mobile-nav').css('visibility', 'visible');
            $('.navigation').css('top', '0');
            $('.mobile-nav').css('bottom', '0');
        } else {
            //$('.navigation, .mobile-nav').css('visibility', 'hidden');
            $('.navigation').css('top', '-53px');
            $('.mobile-nav').css('bottom', '-50px');
        }
      });

    $('.portfolio-item').hover(function(){
        $(this).find('div.splitter').css('border-bottom', '0 solid #6534ff');
    }, function() {
        $(this).find('div.splitter').css('border-bottom', '140px solid #6534ff');
    })
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$( document ).ready(function() {
    
    $(window).on('activate.bs.scrollspy', function (event) { //show and hide navbars based on if on the home page or not
        var navId = $('.list-group .active').attr('href');
        if (navId != "#home"){
            $('.navigation').css('top', '0');
            $('.mobile-nav').css('bottom', '0');
        } else {
            $('.navigation').css('top', '-53px');
            $('.mobile-nav').css('bottom', '-50px');
        }
      });

    $('.portfolio-item').hover(function(){ //animations for portoflio items
        $(this).find('div.splitter').css('border-bottom', '0 solid #6534ff');
    }, function() {
        $(this).find('div.splitter').css('border-bottom', '140px solid #6534ff');
    })
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({ //smooth scroll
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


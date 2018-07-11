$( document ).ready(function() {
    
    $(window).on('activate.bs.scrollspy', function (event) {
        var navId = $('.list-group .active').attr('href');
        if (navId != "#home"){
            $('#navbar').css('visibility', 'visible');
        } else {
            $('#navbar').css('visibility', 'hidden');
        }
      })
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


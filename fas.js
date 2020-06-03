$(document).ready(function(){

    $('.fas').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0 ){
            $('.containerup').slideDown(300);
        } else {
            $('.containerup').slideUp(300);
        }
    });

});
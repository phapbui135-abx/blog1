$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        console.log(pos_body);
        if (pos_body > 200) {
            $('.site-header').addClass('co-dinh-menu');
        } else {
            $('.site-header').removeClass('co-dinh-menu');
        }
        if (pos_body > 2200) {
            $('.back-to-top').addClass('hien-ra');
        } else {
            $('.back-to-top').removeClass('hien-ra');
        }
    });
    $('.back-to-top').click(function(event) {
        $('html,body').animate({
            scrollTop: 0,
        }, 500);
    });
});
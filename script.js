$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        console.log(pos_body);
        // if (pos_body > 200) {
        //     $('.site-header').addClass('co-dinh-menu');
        // } else {
        //     $('.site-header').removeClass('co-dinh-menu');
        // }
        if (pos_body > 2200) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });
    $('.back-to-top').click(function(event) {
        $('html,body').animate({
            scrollTop: 0,
        }, 500);
    });
});



function hienthimenu() {
    var element = document.getElementById('sub-menu');
    element.classList.toggle("show");
};

function timkiem() {
    var x = document.getElementById('search');
    var y = document.getElementsByClassName('search-top');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    if (y.style.display === 'block') {
        y.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
};
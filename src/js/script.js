$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
});



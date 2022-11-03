$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding: '60px',
        responsive: [
            {
            breakpoint: 768,
            settings: {  
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 425,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ],  
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
    });
});

$(document).ready(function(){
    $(".slider2").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '60px',
        responsive: [
            {
            breakpoint: 768,
            settings: {  
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 425,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ], 
        autoplay: true,
        autoplaySpeed: 4000, 
        focusOnSelect: true,
        dots: true
    });
});

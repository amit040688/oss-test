$(document).ready(function() {
   // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     $('.slider').owlCarousel({
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 2,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });





    $(".read-more-content").hide();

    $(".choose-header .btn-primary").click(function () {

        $(".read-more-content").slideToggle(400);

        if ($(this).text().trim() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

    });

     $('.test-slider').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

     $('.exclusive').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            }
        }
    });



    $(".about .read-more-content").hide();

    $(".about .btn-primary").click(function () {

        $(this).siblings(".read-more-content").slideToggle(400);

        if ($(this).text().trim() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

    });


    $(".dropdown").click(function(){
        $("body").toggleClass("active");
    });



});
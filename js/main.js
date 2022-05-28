$(document).ready(function(){

    //============== Header Search
    
    $('a[href="#header-search"]').on("click", function (event) {
        event.preventDefault();
        $("#header-search").addClass("open");
        $('#header-search > form > input[type="search"]').focus();
    });
    $("#header-search, #header-search button.close").on("click keyup", function (
        event
    ) {
        if (
            event.target === this ||
            event.target.className === "close" ||
            event.keyCode === 27
        ) {
            $(this).removeClass("open");
        }
    });
    $("form").on('submit', function (event) {
        event.preventDefault();
        return false;
    });

    //============== Homepage-01 intro slider

    $('.intro-01-slider').owlCarousel({
        loop:true,
        responsiveClass:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        center:true,
        nav:true,
        dots:true,
        navText:[
            "<i class='fa-solid fa-chevron-left'></i>",
            "<i class='fa-solid fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            768:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });

    //============== Counter 
    
    $('.counter').counterUp({
        time : 3000
    });

    //============== Homepage-01 feedback slider

    $('.feedback-slider').owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        navText:[
            "<i class='fa-solid fa-chevron-left'></i>",
            "<i class='fa-solid fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //============== Homepage-01 customer slider

    $('.customer-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Isotope js code

    $('.iso-items').isotope({
        itemSelector: '.iso-item',
        masonry: {
            columnWidth: 100,
            gutter:6,
            fitWidth: true,
            horizontalOrder: true
          }
      });
      $('.products-display-nav ul li').click(function(){
        $('.products-display-nav ul li').removeClass('active');
        $(this).addClass('active');
      
        var selector = $(this).attr('data-filter');
        $('.iso-items').isotope({
            filter:selector
        });
        return false;
      });

      // Pop-up video js

      $('.video-play a').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });

    //===========slick js for leaderboard section slider-01

    $('.leaderboard-slider-one').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: true,
        dots:false,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            }
          ]
    });

    //===========slick js for leaderboard section slider-02

    $('.leaderboard-slider-two').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: true,
        dots:false,
        arrows:true
    });

    //===========slick js for leaderboard section slider-03
    
    $('.leaderboard-slider-three').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: true,
        dots:false,
        arrows:true
    });

    // Various artist js code for homepage-03

    $('.various-artist-isotope').isotope({
        itemSelector: '.various-iso-item',
        layoutMode:'fitRows'
      });
      $('.various-artist-nav ul li').click(function(){
        $('.various-artist-nav ul li').removeClass('active');
        $(this).addClass('active');
      
        var selector = $(this).attr('data-filter');
        $('.various-artist-isotope').isotope({
            filter:selector
        });
        return false;
      });

      //Mean menu js
      jQuery(document).ready(function () {
        jQuery('nav .main-menu').meanmenu({
            meanScreenWidth: "991"
        });
    });

    //sleel js for product details page

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
   
});
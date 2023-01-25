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

    $(window).load(function() {
      $('.iso-items').isotope({
        itemSelector: '.iso-item',
        percentPosition: true,
        masonry: {
            columnWidth: 100,
            fitWidth: true,
            gutter:6,
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
        infinite: true,
        variableWidth: true,
        dots:false,
        arrows:true,
        speed:300,
        nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
        ]
    });

    //===========slick js for leaderboard section slider-02

    $('.leaderboard-slider-two').slick({
        infinite: true,
        variableWidth: true,
        dots:false,
        arrows:true,
        nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
        ]
    });

    //===========slick js for leaderboard section slider-03
    
    $('.leaderboard-slider-three').slick({
        infinite: true,
        variableWidth: true,
        dots:false,
        arrows:true,
        nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
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

    // Various artist js code for homepage-03

    $(window).load(function(){
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
    });

      //Mean menu js
      jQuery(document).ready(function () {
        jQuery('nav .main-menu').meanmenu({
          meanScreenWidth:"991"
        });
    });

    //sleel js for product details page

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        arrows:true,
        nextArrow: '<span class="next-arrow"><i class="fa-solid fa-chevron-right"></i></span>',
        prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-chevron-left"></i></span>'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

      $('.blog-slider').owlCarousel({
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

    //Audio js
    var audio = {    
      init: function() {        
      var $that = this;        
          $(function() {            
              $that.components.media();        
          });    
      },
      components: {        
          media: function(target) {            
              var media = $('audio.fc-media', (target !== undefined) ? target : 'body');            
              if (media.length) {                
                  media.mediaelementplayer({                    
                      audioHeight: 40,
                      features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                      alwaysShowControls      : true,
                      timeAndDurationSeparator: '<span></span>',
                      iPadUseNativeControls: true,
                      iPhoneUseNativeControls: true,
                      AndroidUseNativeControls: true                
                  });            
              }        
          },
              
      },
  };
  audio.init();
   
});
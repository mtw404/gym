$(function () {
    'use strict';
    $(function () {

 
      $(window).on('load', function(){
          $('.pre_loader').delay(1000).fadeOut();
      });
  });
    // ---------------------------------------Slick slider start------------- 
    // banner
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
    });

    // testimonial
    $('.txt-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    // team
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    // logo
    $('.logo-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        nextArrow: '<i class="fas fa-chevron-right nxt"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv"></i>',
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: 0,
        speed: 500,
        arrows:false,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:false,
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]

    });
    // -----------------------------------------Slick slider end--------------

    // --------------------------------------------Venobox start--------------
    $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38',
        arrowsColor: '#e23e38',
        bgcolor: 'rgba(226, 62, 56, 0.5);',
        border: '50px',
        overlayColor: 'rgba(53, 53, 53, 0.25);',
        closeColor: '#e23e38',
    });

    // footer 
    $('.footerpart').venobox({
        spinner: 'cube-grid',
        spinColor: '#e23e38',
        arrowsColor: '#e23e38',
        bgcolor: 'rgba(226, 62, 56, 0.5);',
        border: '50px',
        overlayColor: 'rgba(53, 53, 53, 0.25);',
        closeColor: '#e23e38',
    });
    // ----------------------------------------------Venobox end--------------





    // --------------------------------------------Menu Fix start-------------
    var navoff = $('.main-manu').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main-manu').addClass('menu-fix');
        } else {
            $('.main-manu').removeClass('menu-fix');
        }
    });
    //  -----------------Button----------------
    $('.btop').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 100);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.btop').fadeIn();
        } else {
            $('.btop').fadeOut();
        }
    });
    // --------------------------------------------Menu Fix end-----------




    // -------------------------------------------Counter Fix star-------
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // --------------------------------------------Counter Fix end-------








});
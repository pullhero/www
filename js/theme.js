// js Document



(function($) {
    "use strict";

      //-------------- Click event to scroll to top
      $(window).on('scroll', function (){
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });
      $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop : 0});
        return false;
      });

      // --------------------- Add .active class to current navigation based on URL
      var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
      $(".navbar-nav > li  a").each(function(){
      if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
      $(this).addClass("active");
      // $(this).parent("li").addClass("active");
      })


        // ----------------------------- Counter Function
        var timer = $('.counter');
        if(timer.length) {
          $('.counter').counterUp({
            delay: 10,
            time: 1200,
          });
        }

        // ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.sticky-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 180) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });


      // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });



        // ------------------------ Partner Slider One
        if($(".partner-logo-one").length) {
          $('.partner-logo-one').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
        }




      // ------------------------ Feedback Slider One
      if($(".feedback-slider-one").length) {
        $('.feedback-slider-one').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.prev_a'),
            nextArrow: $('.next_a'),
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            vertical: true,
            verticalScrolling: true,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }


      // ------------------------ Feedback Slider Two
      if($(".feedback-slider-two").length) {
        $('.feedback-slider-two').slick({
            dots: false,
            arrows: false,
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }

      // ------------------------ Feedback Slider Three
      if($(".feedback-slider-three").length) {
        $('.feedback-slider-three').slick({
            dots: false,
            arrows: false,
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
          });
      }


        // --------------------------------- Contact Form
          // init the validator
          // validator files are included in the download package
          // otherwise download from http://1000hz.github.io/bootstrap-validator

          if($("#contact-form").length) {
            $('#contact-form').validator();
            // when the form is submitted
            $('#contact-form').on('submit', function (e) {

                // if the validator does not prevent form submit
                if (!e.isDefaultPrevented()) {
                    var url = "inc/contact.php";

                    // POST values in the background the the script URL
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            // data = JSON object that contact.php returns

                            // we recieve the type of the message: success x danger and apply it to the
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;

                            // let's compose Bootstrap alert box HTML
                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                            // If we have messageAlert and messageText
                            if (messageAlert && messageText) {
                                // inject the alert to .messages div in our form
                                $('#contact-form').find('.messages').html(alertBox);
                                // empty the form
                                $('#contact-form')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            });
          }


          // ------------------------------- Scroll Animation
          var sall = $ ("[data-sal]");
          if(sall.length) {
            sal({
              threshold: 0.01,
            });
          }

$(window).on ('load', function (){ // makes sure the whole site is loaded

// -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});




        
// ------------------------------------- Fancybox
        var fancy = $ ("[data-fancybox]");
        if(fancy.length) {
          Fancybox.bind("[data-fancybox]", {
            // Your custom options
          });
        }




// ----------------------------- isotop gallery
        if ($("#isotop-gallery-wrapper").length) {
            var $grid = $('#isotop-gallery-wrapper').isotope({
              // options
              itemSelector: '.isotop-item',
              percentPosition: true,
              masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
              }

            });

            // filter items on button click
            $('.isotop-menu-wrapper').on( 'click', 'li', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
                });
            });
        }



    });  //End On Load Function


})(jQuery);
(function ($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function () {
        init_menu_toggle();
    });

    //Run function when window on scroll
    $(window).on("scroll", function () {
        init_menu_scroll();
    });

    function init_menu_scroll() {
        var header = $(".header");
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            header.addClass("header-fixed");
        } else {
            header.removeClass("header-fixed");
        }
    }

    function init_menu_toggle() {
        $(".menu-icon").click(function () {
            $(this).toggleClass("menu-icon-design");
            $(".main-menu").toggleClass("main-menu-open");
        });
    }




//  type js

    var typed3 = new Typed('#typed3', {
        strings: ['Web Developer', 'Photgrapher', 'seo'],
        typeSpeed: 100,
        backSpeed: 50,
        smartBackspace: true, // this is a default
        loop: true,
        backDelay: 500,
        startDelay: 1000,
      });


    //   slider

    $('.all-client').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            575: {
                items: 1,
            },

            768: {
                items: 1,
                nav: false,
                dots: true,
            },

            1000: {
                items: 1,
                nav: false,
                dots: true,
            }
        }
    })    //   slider 2

    $('.slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            575: {
                items: 1,
            },

            768: {
                items: 1,
                nav: true,
                dots: false,
            },

            1000: {
                items: 1,
                nav: false,
                dots: false,
            }
        }
    })














// web site end




    // Menu Resume
    $(document).ready(function () {
        $('.Resume-class li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 85
            }, 1000, 'swing');
        });
    });


    

    // add class

    $(document).ready(function () {
        
        //smoothscroll
        $('.Resume-class li a').on('click', function () {
           
            
            $('.Resume-class li a').each(function () {
                $(this).removeClass('logo-fixed');
            })
            $(this).addClass('logo-fixed');
          

        });
    });





    // isotop
    $(document).ready(function () {
        $('.project-item-menu li').on('click', function () {

            $('.project-item-menu li').removeClass("active");
            $(this).addClass('active');
            
        });
    });
 

    $(document).ready(function () {
        $('.project-item-menu li').on('click', function () {

            var selector = $(this).attr('data-filter');
            $(".progec").isotope({
                filter:selector
            });
            
        });
    });
 
    jQuery(".progec").isotope();

    // Scroll Top Icon Show & Hide
    $(function () {
        var myWindowScroll = 200;
        $(window).scroll(function () {
            if ($(window).scrollTop() > myWindowScroll) {
                $(".top-icon ").fadeIn("slow");
            } else {
                $(".top-icon").fadeOut("slow");
            }
        });
    });


    // Back To Top
    $(".top-icon").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });


  
    //   type js jave

    $(function () {

        var vul = "main-menu-open";

        $(".menu-icon").on("click", function () {

            if(vul == "main-menu-open"){
                $(".main-menu").animate(
                    {"display":"block"}, 200);
            }else{
                $(".main-menu").animate({"display":"none"}, 200);
            }
        });

    });

    $(".map").animate(
        {"opacity": "1"}, 200);




})(jQuery);


$(function () {

    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('.main-menu li a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('.main-menu li a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.main-menu li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.main-menu ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    

});









// secrnd

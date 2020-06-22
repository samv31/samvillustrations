/*Shanik Sengupta*/







/*Home Page Cslider*/


$('.owl-carousel-testi').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
    center: true,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
})



var owl = $('.owl-carousel-testi');
owl.owlCarousel();








// Go to the next item
$('.customNextBtn-testi').click(function() {
    owl.trigger('next.owl.carousel');
})



// Go to the previous item
$('.customPrevBtn-testi').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


/*Home Page Cslider*/





/*Home Page Laptop Screen*/


$('.owl-carousel-laptop').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    nav: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



var owl = $('.owl-carousel-laptop');
owl.owlCarousel();








// Go to the next item
$('.customNextBtn-laptop').click(function() {
    owl.trigger('next.owl.carousel');
})



// Go to the previous item
$('.customPrevBtn-laptop').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


/*Home Page Laptop Screen*/




/*Home Page Iphone Screen*/


$('.owl-carousel-iphone').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: false,
    nav: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



var owl = $('.owl-carousel-iphone');
owl.owlCarousel();








// Go to the next item
$('.customNextBtn-iphone').click(function() {
    owl.trigger('next.owl.carousel');
})



// Go to the previous item
$('.customPrevBtn-iphone').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


/*Home Page Iphone Screen*/








/*Sticky Header*/






$(window).scroll(function(){
  var sticky = $('.wrap_head'),
      scroll = $(window).scrollTop(); 
 



   if (scroll > 200) {
        $(sticky).addClass("scrolled");
    }

    if (scroll > 400) {
        $(sticky).addClass("Sticky");
        $(sticky).removeClass("scrolled");
    }

    if (scroll == 0) {
        $(sticky).removeClass("Sticky");  
        $(sticky).removeClass("scrolled");      
        }


});








/*Sticky Header*/





/*Add class to section when scroll reaches specific section*/
    
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.page_navigator').toggleClass('show',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#smart-navigator').offset().top
        );
    });
    //trigger the scroll
    $(window).scroll();//ensure if you're in current position when page is refreshed 



/*Add class to section when scroll reaches specific section*/


/*Smooth scroll to id*/

    $('a[href^="#"]').click(function() {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top-0}, 1000);

      return false;

      e.preventDefault();

      });


  /*Smooth scroll to id*/
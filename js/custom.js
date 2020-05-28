


// Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').on('click', function () {
    $('.navbar-toggle:visible').trigger('click');
      
      //What happen on window scroll  
$(window).on("scroll", function (e) {
    setTimeout(function () {
        stickyMenu();
    }, 300)
});

});


 function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 800);
  }
  $('[data-scroll]').on('click', scrollToSection);


// filter items on button click
$('.portfolio-btn').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// init Isotope
var $grid = $('.grid').isotope({

  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});

 $(".customer").owlCarousel({
         items:4,
         autoplay:true,
         loop:true,
         dots:true,
         
         
     });
$('.timer').countTo();
  
/*---------------------------------------------*
         * SCROLL TO TOP - ALL VIDEOS PAGE
         ---------------------------------------------*/


        jQuery("#scrollTop").click(function () {
                jQuery("body,html").animate({
                    scrollTop: 0
                }, 600);
            });
            jQuery(window).scroll(function () {
                if (jQuery(window).scrollTop() > 250) {
                    jQuery("#scrollTop").addClass("visible");
                } else {
                    jQuery("#scrollTop").removeClass("visible");
                }
            });
 


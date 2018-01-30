(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false, // Stops event propagation
      }
    );
      $('.carousel.carousel-slider').carousel({fullWidth: true});
  /*
    $('.carousel').carousel({
      padding: 150
  });
      autoplay()
      function autoplay() {
          $('.carousel').carousel('next');
          setTimeout(autoplay, 2500);
      }
      */
  /*
    $('.slider').slider({
      indicators: false,
      interval: 1000
    });
*/
  /*
    $('.carousel').carousel();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 2000);
*/

  }); // end of document ready
})(jQuery); // end of jQuery name space

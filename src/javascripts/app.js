import './modules'
import $ from 'jquery';

$('.button').on('click', function() {
  const target = $(this.hash);
  $('html, body').animate({
      scrollTop: target.offset().top
    }, 500)
})

// if $('input').is(":focus")

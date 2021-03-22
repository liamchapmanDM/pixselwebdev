$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  

  if ($(document).scrollTop() >= 100) {
    $('nav').addClass('solid-bg')
  } else {
    $('nav').removeClass('solid-bg')
  }
  
});


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('nav').addClass('solid-bg')
  } else {
    $('nav').removeClass('solid-bg')
  }
});

$('.nav-btn').click(function() {
  $('.nav').toggleClass('active-nav');
});
$(function(){
  $('#fullpage').fullpage();
  $('.full-page').height = $(window).innerHeight();
  $(window).on('orientationchange', function() {
    location.reload();
   });
});
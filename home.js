$(document).ready(function() {
    $('.flipper').on('click', function () {
      $(this).find('.flipper-card').toggleClass('flipper-is-flipped');
    });
  });
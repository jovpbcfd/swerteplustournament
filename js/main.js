$(document).ready(function() {
  // Toggle 'active' and 'dropdown-menu' classes when dropdown is clicked
  $('.dropdown-toggle').on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings('.dropdown-menu').toggleClass('show');
  });

  // Remove 'active' and 'dropdown-menu' classes when user clicks outside of dropdown
  $('body').on('click', function(e) {
    if (!$('.dropdown-toggle').is(e.target) && $('.dropdown-toggle').has(e.target).length === 0) {
      $('.dropdown-toggle').removeClass('active');
      
      $('.dropdown-menu').removeClass('show');
        $('.dropdown-menu > .dropdown-item').removeClass('active');
    }
  });
});

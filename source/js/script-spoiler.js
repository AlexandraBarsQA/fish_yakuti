$(document).ready(function() {
  $(".sidebar__user").click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

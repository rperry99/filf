$(document).ready(function () {
  //Clicking the hamburger button to open the nav
  $("#hamburger").click(function () {
    if ($("#navContent").hasClass("hide")) {
      $("#navContent").removeClass("hide").addClass("show");
    }
  });

  //Clicking the close X to close the nav
  $(".close").click(function () {
    if ($("#navContent").hasClass("show")) {
      $("#navContent").removeClass("show").addClass("hide");
    }
  });
});

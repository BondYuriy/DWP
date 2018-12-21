$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  });
});

//===================================================

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    } //if-else
  }); //win func.
}); //ready func.

//==================================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//===================================================

$(".btn-toggle").click(function() {
  $(this)
    .next(".category-filter")
    .toggleClass("show");
});

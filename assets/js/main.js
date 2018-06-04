//Animate the building with scrolling

$(document).ready(function () {
  var pictureCount = $('.images img').length;
  var width = screen.width;
  var height = screen.height;

  alert(document.documentElement.width);
  alert(document.documentElement.height);

  var scrollResolution = 70;

  // if (width >= 1440) {
  //   var scrollResolution = width / 21;
  // }
  // else if (width < 1440 && width >= 1300){
  //   var scrollResolution = width / 19;
  // }
  // else{
  //   var scrollResolution = width / 17;
  // }



  animateBuilding();

  function animateBuilding() {
    var currentScrollPosition = window.pageYOffset;
    var imageIndex = Math.round(currentScrollPosition / scrollResolution);

    if (imageIndex >= pictureCount) {
      imageIndex = pictureCount - 1; // Select last image

    }

    $(".images img").hide();
    $(".images img").eq(imageIndex).show();
  }

  $(window).bind('scroll', function() {
    animateBuilding();
  });
});


//Revealing text content with scroll
window.sr = ScrollReveal({duration:"250", delay: "100"});
sr.reveal(".textContent");
sr.reveal(".function")

//Fading out down arrow
$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
  //250 is fade pixels
});

//Image comparison slider
$('.cocoen').cocoen();

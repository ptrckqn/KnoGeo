//Animate the building with scrolling

$(document).ready(function () {
  var pictureCount = $('.images img').length;
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;

  alert("width: " + width);
  alert("height: " + height);

  if (width <= 1680) {
     var scrollResolution = 70;
   }
  //  else if (width > 1680 && width <= 2000){
  //   var scrollResolution = 71.5;
  // }
   else{
     var scrollResolution = 71.5;
   }

alert(scrollResolution);

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

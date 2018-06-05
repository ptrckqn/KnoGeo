//Animate the building with scrolling

$(document).ready(function () {
  var pictureCount = $('.images img').length;
  var width = document.documentElement.clientWidth;


  if (width <= 766){
    var scrollResolution = 60;
  }
  else if(width <= 1197 && width > 766 ){
    var scrollResolution = 68.5;
  }
  else if (width <= 1680 && width > 1197) {
     var scrollResolution = 70;
   }
   else{
     var scrollResolution = 71.5;
   }

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

//Adding a jumbotron to the landing text if on Mobile
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth <= 1197){
  $('.landing').addClass('.jumbotron');
}

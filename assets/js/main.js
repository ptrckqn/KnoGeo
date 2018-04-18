//Animate the building with scrolling

$(document).ready(function () {
    var pictureCount = $('.images img').length;
    var scrollResolution = 50;

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
window.sr = ScrollReveal({duration:"700", delay: "250"});
sr.reveal(".textContent");

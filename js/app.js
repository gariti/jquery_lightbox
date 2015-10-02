//Add a lightbox

//Click image, capture event on link to image

//Show lightbox overlay

//Update overlay with captured link

//Add caption by capturing alt attribute
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);
$("body").append($overlay);


$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imagelocation = $(this).attr("href");
  $image.attr("src", imagelocation)
  $overlay.fadeIn()
});

$overlay.click(function() {
  $overlay.fadeOut();
});
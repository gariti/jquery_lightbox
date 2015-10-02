//*******Initialize Lightbox Overlay*******
//create empty lightbox overlay
var $overlay = $('<div id="overlay"></div>');

//load empty img tag for image to display on lightbox overlay
var $image = $("<img>");
$overlay.append($image);

//load empty p tag for caption
var $caption = $("<p></p>");
$overlay.append($caption);

//put empty overlay on page (intially hidden)
$("body").append($overlay);

//****When an image on page is clicked, display it on lightbox overlay with caption****
$("#imageGallery a").click(function(event) {
  
  //capture link to clicked image, then put link into img tag attribute so it will display
  event.preventDefault();
  var imagelocation = $(this).attr("href");
  $image.attr("src", imagelocation);

  //capturing alt attribute of clicked image and display it as caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

  //Show lightbox overlay
  $overlay.fadeIn();


});
//when clicked, the lightbox overlay will dissapear
$overlay.click(function() {
  $overlay.fadeOut();
});

//
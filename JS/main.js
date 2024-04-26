
$(window).scroll(function(){
if($(this).scrollTop() > 100){
    $('nav').addClass('sticky')
} else{
    $('nav').removeClass('sticky')
}
});
/*------horizontal image slider--------*/

const multipleItemCarousel1 = document.querySelector("#testimonialCarousel1");

if (window.matchMedia("(min-width:357px)").matches) {
  const carousel1 = new bootstrap.Carousel(multipleItemCarousel1, {
    interval: false
  });

  var carousel1Width = $(".carousel1-inner")[0].scrollWidth;
  var cardWidth = $(".carousel1-item").width();

  var scrollPosition = 0;

  $(".carousel1-control-next").on("click", function () {
    if (scrollPosition < carousel1Width - cardWidth * 3) {
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel1-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel1-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel1-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel1).addClass("slide");
}

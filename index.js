//Scroll Reveal http://machine-agency.com
$(document).ready(function ($) {
  var revealClass = ".animated";
  var targetClass = ".has-scroll-reveal:not(" + revealClass + ")";
  var offset = 100; // Offset from bottom of viewport in pixels.

  var winHeight = $(window).height();

  // Recalc height of window in case of resize
  $(window).bind("resizeEnd", function () {
    winHeight = $(window).height();
  });

  // Fire when page loads
  triggerAnimation(revealClass, targetClass, offset, winHeight);

  // Also fire on scroll
  $(window).on("scroll", function () {
    triggerAnimation(revealClass, targetClass, offset, winHeight);
  }); // window.on('scroll')
}); // document.ready
function triggerAnimation(revealClass, targetClass, offset, winHeight) {
  // Get current scrollPos
  var trigger = $(window).scrollTop() + winHeight - offset;

  // Loop through elements we're affecting
  $(targetClass).each(function () {
    var elementOffset = $(this).offset().top;

    if (elementOffset < trigger) {
      $(this).addClass(revealClass.replace(".", ""));
    }
  });
}
$(window).resize(function () {
  if (this.resizeTO) clearTimeout(this.resizeTO);

  this.resizeTO = setTimeout(function () {
    $(this).trigger("resizeEnd");
  }, 500);
});

//card animation
$(".demo-card").mouseenter(function () {
  $(this).children().find($("img")).css("transform", "scale(1.3)");
});
$(".demo-card").mouseleave(function () {
  $(this).children().find($("img")).css("transform", "scale(1)");
});
if ($(window).width() < 415) {
  $(".demo-card").click(function () {
    $(this).children().find($("img")).css("transform", "scale(1)");
  });
}
window.onload = function () {
  var toggleButton = document.getElementById("burger-btn");
  function handleToggle() {
    document.getElementById("hamburger-menu").classList.toggle("is-active");
  }
  toggleButton.addEventListener("click", handleToggle);
};

//Media Query + navigation
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

$(".burger-btn").click(function () {
  $(".mobile-nav").toggleClass("hidden");
  $("body").toggleClass("overflow");
});

$(".mobile-menu a").click(function () {
  $(".mobile-nav").toggleClass("hidden");
  $("body").toggleClass("overflow");
  $(".hamburger").removeClass("is-active");
});

$(".btn").click(function () {
  $(this).children("a")[0].click();
});

//Scroll to anchor
const speed = 1000;

$('a[href*="#"]')
  .filter(
    (i, a) =>
      a.getAttribute("href").startsWith("#") ||
      a.href.startsWith(`${location.href}#`)
  )
  .unbind("click.smoothScroll")
  .bind("click.smoothScroll", (event) => {
    const targetId = event.currentTarget.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $(targetElement).offset().top },
        speed
      );
    }
  });

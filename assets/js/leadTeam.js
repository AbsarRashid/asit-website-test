function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}
function vw(v) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".menu-btn__overlay");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
$(".menu-nav__item").on("click", function () {
  var scrollAnchor = $(this).attr("data-scroll"),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - vh(15);
  $("body, html").animate(
    {
      scrollTop: scrollPoint,
    },
    "slow"
  );
  toggleMenu();
});

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}

$(".right-container__dot-nav ul li").on("click", function () {
  var scrollAnchor = $(this).attr("data-scroll"),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - vh(15);
  $("body, html").animate(
    {
      scrollTop: scrollPoint,
    },
    "slow"
  );
});

$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $(".left-container section").each(function (i) {
        if ($(this).position().top <= windscroll + 100) {
          $(".right-container__dot-nav ul li.current").removeClass("current");

          $(".right-container__dot-nav ul li").eq(i).addClass("current");
        }
      });
    } else {
      $(".right-container__dot-nav ul li.current").removeClass("current");
      $(".right-container__dot-nav ul li:first").addClass("current");
    }
  })
  .scroll();

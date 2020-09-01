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
timeout_var = null;

function typeWriter(
  selector_target,
  text_list,
  placeholder = false,
  i = 0,
  text_list_i = 0,
  delay_ms = 100
) {
  if (!i) {
    document.querySelector(selector_target).innerHTML = "";
  }
  txt = text_list[text_list_i];
  if (i < txt.length) {
    document.querySelector(selector_target).innerHTML += txt.charAt(i);
    i++;
    setTimeout(
      typeWriter,
      delay_ms,
      selector_target,
      text_list,
      placeholder,
      i,
      text_list_i
    );
  } else {
    text_list_i++;
    if (typeof text_list[text_list_i] === "undefined") {
      setTimeout(
        typeWriter,
        delay_ms * 5,
        selector_target,
        text_list,
        placeholder
      );
    } else {
      i = 0;
      setTimeout(
        typeWriter,
        delay_ms * 3,
        selector_target,
        text_list,
        placeholder,
        i,
        text_list_i
      );
    }
  }
}

text_list = ["Enhance Your Business", "Grow Faster Than Expectation"];
return_value = typeWriter("#type-animation", text_list, true);

$(".main-left-container__nav-border li").on("click", function () {
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
$(".main-right-container__dot-nav ul li").on("click", function () {
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
      $(".main-center-container section").each(function (i) {
        if ($(this).position().top <= windscroll + 100) {
          $(".main-left-container__nav-border li.current").removeClass(
            "current"
          );
          $(".main-right-container__dot-nav ul li.current").removeClass(
            "current"
          );
          $(".menu-nav__item.current").removeClass("current");
          $(".main-left-container__nav-border li").eq(i).addClass("current");
          $(".main-right-container__dot-nav ul li").eq(i).addClass("current");
          $(".menu-nav__item").eq(i).addClass("current");
        }
      });
    } else {
      $(".main-left-container__nav-border li.current").removeClass("current");
      $(".main-right-container__dot-nav ul li.current").removeClass("current");
      $(".menu-nav__item.current").removeClass("current");
      $(".main-right-container__dot-nav ul li:first").addClass("current");
      $(".main-left-container__nav-border li:first").addClass("current");
      $(".menu-nav__item:first").addClass("current");
    }
  })
  .scroll();

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

const serviceMenu = document.querySelectorAll(".box");
const serviceActiveMenu = document.querySelector(
  ".services-container__menu .active"
);
const generalServices = document.querySelector("#general");
const erpServices = document.querySelector("#erp");
erpServices.style.display = "flex";
generalServices.style.display = "none";
serviceMenu.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    if (serviceActiveMenu.innerHTML == "ERP") {
      serviceActiveMenu.innerHTML = "General";
      item.getElementsByTagName("a")[0].innerText = "ERP";
      erpServices.style.display = "none";
      generalServices.style.display = "flex";
    } else {
      serviceActiveMenu.innerHTML = "ERP";
      item.getElementsByTagName("a")[0].innerText = "General";
      erpServices.style.display = "flex";
      generalServices.style.display = "none";
    }
  });
});

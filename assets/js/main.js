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
  console.log($('section[data-anchor="' + scrollAnchor + '"]').offset().top);
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
    console.log(windscroll);
    if (windscroll >= 100) {
      $(".main-center-container section").each(function (i) {
        if ($(this).position().top <= windscroll + 100) {
          $(".main-left-container__nav-border li.current").removeClass(
            "current"
          );
          $(".main-right-container__dot-nav ul li.current").removeClass(
            "current"
          );
          $(".main-left-container__nav-border li").eq(i).addClass("current");
          $(".main-right-container__dot-nav ul li").eq(i).addClass("current");
        }
      });
    } else {
      $(".main-left-container__nav-border li.current").removeClass("current");
      $(".main-right-container__dot-nav ul li.current").removeClass("current");
      $(".main-right-container__dot-nav ul li:first").addClass("current");

      $(".main-left-container__nav-border li:first").addClass("current");
    }
  })
  .scroll();

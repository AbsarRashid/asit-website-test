const data = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

const ulId = document.querySelector("#nav");

function lidata(st, end) {
  let innerHtml = `
  <a href="#" id="up"><i class="fas fa-chevron-up"></i></a>
  `;
  data.slice(0, data.length).forEach((item, index) => {
    if (index >= end) {
      innerHtml += `<li data-scroll="${item}" class="none-prop" style="display:none;">
      <a href="#">${item}</a>
    </li>`;
    } else {
      innerHtml += `<li data-scroll="${item}" class="display-prop">
      <a href="#">${item}</a>
    </li>`;
    }
  });
  innerHtml += `
  <a href="#" id="down"><i class="fas fa-chevron-down"></i></a>
  `;
  ulId.innerHTML = innerHtml;
}
lidata(0, 6);

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
$(".main-side-container__nav-border li").on("click", function () {
  var scrollAnchor = $(this).attr("data-scroll"),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - vh(15);
  $("body, html").animate(
    {
      scrollTop: scrollPoint,
    },
    "slow"
  );

  //lidata(1, 6);
});
$("#up").on("click", function () {
  topdisplayli();
  scrollPoint = $('section[data-anchor="' + 2020 + '"]').offset().top - vh(15);
  $("body, html").animate(
    {
      scrollTop: scrollPoint,
    },
    "slow"
  );
});
$("#down").on("click", function () {
  bottomdisplayli();
  scrollPoint = $('section[data-anchor="' + 2014 + '"]').offset().top - vh(15);
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
      $(".main-main-container section").each(function (i) {
        if ($(this).position().top <= windscroll + 100) {
          $(".main-side-container__nav-border li.current").removeClass(
            "current"
          );
          $(".menu-nav__item.current").removeClass("current");
          $(".main-side-container__nav-border li").eq(i).addClass("current");
          $(".menu-nav__item").eq(i).addClass("current");

          if ($(this).attr("id") == "2014") {
            bottomdisplayli();
          }
          if ($(this).attr("id") == "2015") {
            topdisplayli();
          }
        }
      });
    } else {
      $(".main-side-container__nav-border li.first").removeClass("current");
      $(".menu-nav__item.current").removeClass("current");
      $(".main-side-container__nav-border li:first").addClass("current");
      $(".menu-nav__item:first").addClass("current");
    }
  })
  .scroll();

function bottomdisplayli() {
  $(".main-side-container__nav-border li.none-prop").css({
    display: "flex",
  });
  $(".main-side-container__nav-border li.display-prop").css({
    display: "none",
  });
}

function topdisplayli() {
  $(".main-side-container__nav-border li.none-prop").css({
    display: "none",
  });
  $(".main-side-container__nav-border li.display-prop").css({
    display: "flex",
  });
}
const item2020 = [
  {
    image: "../assets/images/Our_Story/cre.jpg",
    month: "Apr",
    company: "Credence Housing Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/Lanco_s.jpg",
    month: "Mar",
    company: "Lanco Housing Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/portland.jpg",
    month: "Feb",
    company: "Portland Group",
    type: "Standard ERP",
  },
  {
    image: "../assets/images/Our_Story/stderpgrow.jpg",
    month: "Jan",
    company: "New Version of",
    type: "Standard ERP",
  },
  {
    image: "../assets/images/Our_Story/mti.jpg",
    month: "Jan",
    company: "Multi Trade International Ltd.",
    type: "Trading ERP",
  },
  {
    image: "../assets/images/Our_Story/Midistar.jpg",
    month: "Jan",
    company: "Medistar Ltd.",
    type: "Healthcare ERP",
  },
];
const item2019 = [
  {
    image: "../assets/images/Our_Story/NCC.jpg",
    month: "Oct",
    company: "NCC Park",
    type: "Ticketing System",
  },
  {
    image: "../assets/images/Our_Story/edisonfootwear.jpg",
    month: "Jul",
    company: "Edison Footwear Ltd.",
    type: "Manufacturing ERP",
  },
  {
    image: "../assets/images/Our_Story/URBAN.jpg",
    month: "Apr",
    company: "Urban Design & Development Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/Land.jpg",
    month: "Mar",
    company: "Dept. Of Lands, Records & Surveys",
    type: "Land Solution",
  },
  {
    image: "../assets/images/Our_Story/IBCL.jpg",
    month: "Feb",
    company: "Islam Brothers Construction & Engineering Ltd.",
    type: "Construction ERP",
  },
  {
    image: "../assets/images/Our_Story/Tropical.jpg",
    month: "Jan",
    company: "Tropical Homes Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/tanvirc.jpg",
    month: "Jan",
    company: "Tanvir Construction Ltd.",
    type: "Construction ERP",
  },
  {
    image: "../assets/images/Our_Story/NCC.jpg",
    month: "Jan",
    company: "Launched",
    type: "SME Version",
  },
];
const item2018 = [
  {
    image: "../assets/images/Our_Story/rpgcl.jpg",
    month: "Dec",
    company: "Rupantarita Prakritik Gas Company Ltd.(RPGCL)",
    type: "Govt. Project",
  },
  {
    image: "../assets/images/Our_Story/softwaretesting.jpg",
    month: "Oct",
    company: "New Version",
    type: "Software Automated Testing And Backup",
  },
  {
    image: "../assets/images/Our_Story/AcmeTechnology.jpg",
    month: "Jul",
    company: "Acme Technologies.Ltd",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/Suvastu.jpg",
    month: "Mar",
    company: "Suvastu Space Development Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/Multiplan.jpg",
    month: "Jan",
    company: "Multiplan Ltd.",
    type: "Standard ERP",
  },
];
const item2017 = [
  {
    image: "../assets/images/Our_Story/edison_properties.jpg",
    month: "Dec",
    company: "Edison Properties Ltd.",
    type: "Manufacturing ERP",
  },
  {
    image: "../assets/images/Our_Story/oemkay.jpg",
    month: "Apr",
    company: "Emkay Enterprise Ltd.",
    type: "Standard ERP",
  },
  {
    image: "../assets/images/Our_Story/Allaince.jpg",
    month: "Mar",
    company: "Alliance Properties Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/Linnex.jpg",
    month: "Mar",
    company: "Linnex Mobile: Bengal Group Ltd.",
    type: "Trading ERP",
  },
];
const item2016 = [
  {
    image: "../assets/images/Our_Story/sp.jpg",
    month: "Sep",
    company: "Star Paradise Ltd.",
    type: "Manufacturing ERP",
  },
  {
    image: "../assets/images/Our_Story/zelta.jpg",
    month: "Jun",
    company: "Sky Telecommunication Ltd.: Partex Star Group",
    type: "Trading ERP",
  },
  {
    image: "../assets/images/Our_Story/STDERP.jpg",
    month: "Mar",
    company: "Avencia Corp Ltd.",
    type: "Standard ERP",
  },
  {
    image: "../assets/images/Our_Story/greenbay.jpg",
    month: "Feb",
    company: "Green Bay Development Ltd.",
    type: "Housing ERP",
  },
];
const item2015 = [
  {
    image: "../assets/images/Our_Story/bridgeholding.jpg",
    month: "Dec",
    company: "Bridge Holding Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/rupayanctg.jpg",
    month: "Oct",
    company: "Rupayan Group",
    type: "KPI ERP",
  },
  {
    image: "../assets/images/Our_Story/Bengalremidies.jpg",
    month: "Sep",
    company: "Bengal Remedies Ltd.",
    type: "Manufacturing ERP",
  },
  {
    image: "../assets/images/Our_Story/digilab.jpg",
    month: "Feb",
    company: "Digilab Medical Services Ltd.",
    type: "Healthcare ERP",
  },
  {
    image: "../assets/images/Our_Story/AssureG.jpg",
    month: "Sep",
    company: "Assure Group",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/start.jpg",
    month: "Jan",
    company: "New Launch of",
    type: "Standard ERP for shipping",
  },
];
const item2014 = [
  {
    image: "../assets/images/Our_Story/singmar.jpg",
    month: "Oct",
    company: "Singmar Marine & Offshore PTE Ltd.",
    type: "Project ERP",
  },
  {
    image: "../assets/images/Our_Story/STDERP.jpg",
    month: "Feb",
    company: "Development Started",
    type: "Standard ERP",
  },

  {
    image: "../assets/images/Our_Story/HealthcareERP.jpg",
    month: "Jan",
    company: "Development Started",
    type: "Health Care ERP",
  },
];
const item2013 = [
  {
    image: "../assets/images/Our_Story/rupayanuttara.jpg",
    month: "Mar",
    company: "Rupayan Uttara City",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/softwaretesting.jpg",
    month: "Jan",
    company: "Launched",
    type: "Manufacturing ERP",
  },
];
const item2012 = [
  {
    image: "../assets/images/Our_Story/Manu.jpg",
    month: "Jul",
    company: "Development Started",
    type: "Manufacturing ERP",
  },
  {
    image: "../assets/images/Our_Story/RatulPro.jpg",
    month: "Jul",
    company: "Ratul Properties Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/rupayanland.jpg",
    month: "May",
    company: "Rupayan Land Development Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/rupayanhousing.jpg",
    month: "Feb",
    company: "Rupayan Housing Estate Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/rupayanctg.jpg",
    month: "Feb",
    company: "Ratul Group Ltd.",
    type: "Housing ERP",
  },
];
const item2011 = [
  {
    image: "../assets/images/Our_Story/sanmar.jpg",
    month: "Nov",
    company: "Sanmar Land Development Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/default.jpg",
    month: "Feb",
    company: "Development Started",
    type: "Garments ERP",
  },
];
const item2010 = [
  {
    image: "../assets/images/Our_Story/Foster.jpg",
    month: "Nov",
    company: "Foster Real Estate Ltd.",
    type: "Housing ERP",
  },
  {
    image: "../assets/images/Our_Story/dd.jpg",
    month: "Sept",
    company: "Dressy Deal(DD)",
    type: "Trading SME",
  },
  {
    image: "../assets/images/Our_Story/default.jpg",
    month: "Mar",
    company: "",
    type: "Recruited Some Talented and Experienced Software Engineers",
  },
  {
    image: "../assets/images/Our_Story/default.jpg",
    month: "Mar",
    company: "",
    type:
      "The Managing Director, the Chairman and 6 professional colleagues formed a new public limited company [ASIT]",
  },
];

const cont20 = document.querySelector(".item-container-2020");
const cont19 = document.querySelector(".item-container-2019");
const cont18 = document.querySelector(".item-container-2018");
const cont17 = document.querySelector(".item-container-2017");
const cont16 = document.querySelector(".item-container-2016");
const cont15 = document.querySelector(".item-container-2015");
const cont14 = document.querySelector(".item-container-2014");
const cont13 = document.querySelector(".item-container-2013");
const cont12 = document.querySelector(".item-container-2012");
const cont11 = document.querySelector(".item-container-2011");
const cont10 = document.querySelector(".item-container-2010");
function itemContainervalue(item, cont) {
  let value = "";
  item.forEach((item, index) => {
    console.log(item);
    value += `<div
  class="item"
  style="
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
      ),
      url(${item.image});
  "
  >    
  <p class="index">
  ${index + 1}
  </p>   
  <p class="month">${item.month}</p>
  <div class="main-info">
    <h5>${item.company}</h5>
    <p>${item.type}</p>
  </div>
  
  </div>`;
  });
  cont.innerHTML = value;
}
itemContainervalue(item2020, cont20);
itemContainervalue(item2019, cont19);
itemContainervalue(item2018, cont18);
itemContainervalue(item2017, cont17);
itemContainervalue(item2016, cont16);
itemContainervalue(item2015, cont15);
itemContainervalue(item2014, cont14);
itemContainervalue(item2013, cont13);
itemContainervalue(item2012, cont12);
itemContainervalue(item2011, cont11);
itemContainervalue(item2010, cont10);

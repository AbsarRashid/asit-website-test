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
const itemContainerModules = document.querySelector(".item-container-modules");

const priceheader = document.querySelector(".item-container-price .header");

const urlParams = new URLSearchParams(window.location.search);
const myType = urlParams.get("Type");

const realEstateData = [
  {
    header: "Real Estate And Land Management",
    imageUrl: "../../assets/images/Services_section/RealestateService.png",
    moduleLData: [
      "Annual Business Plan",
      "Land Feasibility",
      " Budgetary Control",
      "Project Planning",
      "Project Implementation",
      "Central Warehouse",
      "Inventory Control",
      "Procurement",
    ],
    moduleRData: [
      "CRM",
      "Sales",
      "Creditr Realization / Recovery",
      "Customer Care",
      "Fixed Assets Management",
      "Accounts And FInance",
      "MIS",
    ],
  },
];
const constData = [
  {
    header: "Construction And Project Management",
    imageUrl:
      "../../assets/images/Services_section/Construction_ProjectManagement.png",
    moduleLData: [
      "Tender Process",
      " Budgetary Control",
      "Project Planning",
      "Project Implementation",
      "Inventory Control",
    ],
    moduleRData: [
      "Procurement",
      "Bill",
      "Control Panel",
      "Accounts And FInance",
      "MIS",
    ],
  },
];
const manuData = [
  {
    header: "Manufacturing (Pharmaceutical & Others)",
    imageUrl: "../../assets/images/Services_section/Manuf.png",
    moduleLData: [
      "Annual Business Plan",
      "Costing",
      "Materials Inventory",
      "Import",
      "Procurement ",
      "Production",
      "HRM",
    ],
    moduleRData: [
      "Goods Inventory",
      "Distribution & Sales ",
      "Fixed Assets Management",
      "Accounts And FInance",
      "Management Module",
      "Management Interface",
    ],
  },
];
const footwearData = [
  {
    header: "Footwear And Garments",
    imageUrl: "../../assets/images/Services_section/Garments_Footwear.png",
    moduleLData: [
      "Business Planning",
      "Merchandising",
      "Cost & Budget",
      "Planning",
      "Import ",
      "Commercial",
      "Procurement",
    ],
    moduleRData: [
      "Materials Inventory",
      "Production ",
      "Goods Inventory",
      "Export",
      "Accounts & Finance",
      "MIS",
      "HRM",
    ],
  },
];
const healthData = [
  {
    header: "Healthcare & Diagnostic",
    imageUrl: "../../assets/images/Services_section/Healthcare.png",
    moduleLData: [
      "Front Desk Commercial Operation ",
      "In-Patient, Cabin, Bed, OT Mgt.",
      "Out-Patient Management ",
      "Physical Test and Laboratory Test Reporting",
      "Inventory and Procurement System ",
    ],
    moduleRData: [
      "HR, Payroll & KPI Management",
      "Marketing Management ",
      "Accounting System ",
      "Membership and Referrals Databank Mgt.",
      "MIS",
      "Control Panel",
    ],
  },
];
const tradData = [
  {
    header: "Trading",
    imageUrl: "../../assets/images/Services_section/Standard-business-soft.png",
    moduleLData: [
      "Business Planning ",
      "Foreign Procurment",
      "Local Procurements",
      "General Accounts",
      "Finished Goods Inventory",
    ],
    moduleRData: [
      "Service Management",
      "Sales Module",
      "Fixed Assets",
      "MIS",
      "HRM",
      "KPI",
    ],
  },
];
function viewData(itemArray) {
  let innerHTML = "";
  let headprice = "";
  itemArray.forEach((item, index) => {
    console.log(item);
    innerHTML += `<div class="header">
    <h4>${item.header}</h4>
  </div>
  <div class="item">
    <div class="img-container">
      <img
        src="${item.imageUrl}"
        alt="${item.header}"
      />
    </div>
    <div class="info-container">
      <h3>Modules</h3>
      <div class="module">
        <div class="module-left">
          <ul>`;
    item.moduleLData.forEach((leftitem) => {
      innerHTML += `<li>${leftitem}</li>`;
    });
    innerHTML += `</ul>
        </div>
        <div class="module-right">
          <ul>`;
    item.moduleRData.forEach((rightitem) => {
      innerHTML += `<li>${rightitem}</li>`;
    });
    innerHTML += `</ul>
        </div>
      </div>
    </div>
  </div>`;
    headprice += ` <h4>${item.header}</h4>`;
  });
  itemContainerModules.innerHTML = innerHTML;
  priceheader.innerHTML = headprice;
}

if (myType == "RealERP") {
  viewData(realEstateData);
} else if (myType == "const") {
  viewData(constData);
} else if (myType == "manu") {
  viewData(manuData);
} else if (myType == "footwear") {
  viewData(footwearData);
} else if (myType == "health") {
  viewData(healthData);
} else if (myType == "trad") {
  viewData(tradData);
}

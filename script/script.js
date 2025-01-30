$(document).ready(function () {
  new WOW().init();
});

$(".navbar-toggle").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("body-active");
  // Close toggle if clicked outside of them
  $(".opacity-div").click(function () {
    $("body").removeClass("body-active");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());

$(document).ready(function () {
  // Open the first item by default
  $(".faq-items").first().find(".faq-item-data").show();
  $(".faq-items").first().find("img").addClass("rotate");

  $(".faq-items-btn button").on("click", function () {
    // Toggle the corresponding .faq-item-data
    $(this).closest(".faq-items").find(".faq-item-data").slideToggle();

    // Rotate the arrow image
    $(this).find("img").toggleClass("rotate");

    // Close other open accordions
    $(".faq-items")
      .not($(this).closest(".faq-items"))
      .find(".faq-item-data")
      .slideUp();
    $(".faq-items")
      .not($(this).closest(".faq-items"))
      .find("img")
      .removeClass("rotate");
  });
});
$(document).ready(function () {
  // Open the first item by default
  $(".partner-accodian-items").first().find(".partner-items-data").show();
  $(".partner-accodian-items").first().find("img").addClass("rotate");
  $(".partner-accodian-items").first().addClass("active");

  $(".partner-items-btn").on("click", function () {
    var parentItem = $(this).closest(".partner-accodian-items");

    // Toggle the corresponding .partner-items-data
    parentItem.find(".partner-items-data").slideToggle();

    // Rotate the arrow image
    $(this).find("img").toggleClass("rotate");

    // Toggle 'active' class on the clicked item
    parentItem.toggleClass("active");

    // Close other open accordions
    $(".partner-accodian-items")
      .not(parentItem)
      .find(".partner-items-data")
      .slideUp();
    $(".partner-accodian-items")
      .not(parentItem)
      .find("img")
      .removeClass("rotate");
    $(".partner-accodian-items").not(parentItem).removeClass("active");
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

$(document).ready(function () {
  $(".partner-img1").show();
  $(".partner-btn-1").click(function () {
    $(".partner-img1").show();
    $(".partner-img2, .partner-img3").hide();
  });

  $(".partner-btn-2").click(function () {
    $(".partner-img2").show();
    $(".partner-img1, .partner-img3").hide();
  });

  $(".partner-btn-3").click(function () {
    $(".partner-img3").show();
    $(".partner-img1, .partner-img2").hide();
  });
});

$(document).ready(function () {
  // Handle hover for desktop view
  $(".navbar-dropdown").hover(
    function () {
      if ($(window).width() >= 768) {
        // Assuming 768px is the breakpoint for mobile
        $(this).find(".dropdown-list").slideDown(300);
        $(this).find(".arrow").addClass("rotate"); // Rotate arrow on hover
      }
    },
    function () {
      if ($(window).width() >= 768) {
        $(this).find(".dropdown-list").slideUp(300);
        $(this).find(".arrow").removeClass("rotate"); // Remove rotate on hover out
      }
    }
  );

  // Handle click on arrow for mobile view
  $(".arrow").click(function (e) {
    e.preventDefault();
    if ($(window).width() < 768) {
      var $currentDropdown = $(this).siblings(".dropdown-list");

      // Close any open dropdowns that are not the current one
      $(".dropdown-list").not($currentDropdown).slideUp(300);
      $(".arrow").not(this).removeClass("rotate");

      // Toggle the current dropdown and rotate the arrow
      $currentDropdown.slideToggle(300);
      $(this).toggleClass("rotate");
    }
  });

  // Close dropdown when clicking on a dropdown item
  $(".dropdown-item a").click(function () {
    var dropdownList = $(this).closest(".dropdown-list");
    dropdownList.slideUp(300);
    dropdownList.siblings(".arrow").removeClass("rotate");
  });

  // Ensure that clicking on the main dropdown link (a.dropdown-a) does nothing
  $(".dropdown-a").click(function (e) {
    e.preventDefault();
  });
});

$(".input-form input, .input-form textarea").focus(function () {
  $(this).parents(".input-form").addClass("active");
});

$(".input-form input, .input-form textarea").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".input-form").removeClass("active");
  } else {
    $(this).addClass("filled");
  }
});

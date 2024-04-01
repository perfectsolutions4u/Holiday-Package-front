// select 
$('.card-container:nth-child(even)').addClass( 'slideInDown')
$('.card-container:nth-child(odd)').addClass( 'slideInUp')


// // loader
$(window).on("load", function () {
  /*--------------------------------
          preloader
      ---------------------------------*/
  let preLoder = $("#preloader");
  preLoder.fadeOut(1000);

  /*--------------------------------
          Cancel Preloader
      ---------------------------------*/
  $(document).on("click", ".cancel-preloader a", function (e) {
    e.preventDefault();
    $("#preloader").fadeOut(2000);
  });
});



// sign up  -  login 

    // let bodyOvrelay = $("#body-overlay");
    // let singupPopup = $("#signUp-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      $("#body-overlay").removeClass("active");
      $("#signUp-popup").removeClass("active");
    });
    $(document).on("click", ".signUp-btn", function (e) {
      e.preventDefault();
      $("#signUp-popup").addClass("active");
      $("#body-overlay").addClass("active");
    });
    
    
    // $('.signUp-btn').on('click' , function(){
      
      // $('.login-register-popup').toggleClass('active')
  
    // })

$('.sign-in-btn').on('click', function(){
  $('.signup').addClass('d-none');
  $('.login').removeClass('d-none');
})
$('.log-in-btn').on('click', function(){
  $('.signup').removeClass('d-none');
  $('.login').addClass('d-none');
})

// make trip

let checkInput = document.querySelectorAll(".js-check input");
let submitBtn = document.getElementById("firstNextStep");
// console.log(checkInput);
let element;
for (let i = 0; i < checkInput.length; i++) {
  element = checkInput[i];
  // console.log(element);
  element.addEventListener("click", function (e) {
    element.setAttribute("data-value", "true");
    // console.log(e.target);
    // console.log(element.getAttribute("data-value"));
  });
}

if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    // console.log('clicked');
    if (element.getAttribute("data-value") == "true") {
      // console.log('ahmed');
      $("#main").addClass("d-none");
      $("#secondSec").removeClass("d-none");
    } else {
      Swal.fire({
        icon: "question",
        title: "You must choise at least one",
      });
    }
  });
}

// to user can't check date befour date to
let fromDate, toDate;
$("#departure").on("change", function () {
  fromDate = $(this).val();
  $("#return").attr("min", function () {
    return fromDate;
  });
});
$("#return").on("change", function () {
  toDate = $(this).val();
  $("#departure").attr("max", function () {
    return fromDate;
  });
});

$("#fChoise").on("change", function () {
  $("#calender").removeClass("d-none"); //able
  $("#approximate").addClass("d-none"); //disable
});
$("#sChoise").on("change", function () {
  $("#approximate").removeClass("d-none"); //able
  $("#calender").addClass("d-none"); // disable
});

$("#backStep").on("click", function () {
  $("#secondSec").addClass("d-none");
  $("#main").removeClass("d-none");
});

radioChecked = false;
$(".choise").change(function () {
  if ($(this).is(":checked")) {
    return (radioChecked = true);
  } else {
    return (radioChecked = false);
  }
});
$("#nextStep").on("click", function () {
  if (radioChecked == true) {
    $("#secondSec").addClass("d-none");
    $("#lastSec").removeClass("d-none");
  } else {
    Swal.fire({
      icon: "question",
      title: "You must choise at least one",
    });
  }
});

let countValueAdultInput = document.getElementById("countValueAdult");
let countValueChildrenInput = document.getElementById("countValueChildren");
let countValueInfantsInput = document.getElementById("countValueInfants");

let value = 0;


$('#minusAdult').on("click", function () {
  value = countValueAdultInput.innerText;
  value--;
  if (value > 12 || value == 0) {
    console.log("ahmed");
  } else {
    countValueAdultInput.innerHTML = value;
    $('#adultValue').val() = value;
    // console.log(adultValue);
  }
});
$('#plusAdult').on("click", function () {
  value = countValueAdultInput.innerText;
  value++;
  if (value > 12 || value == 0) {
    console.log("ahmed");
  } else {
    countValueAdultInput.innerHTML = value;
    $('#adultValue').val() = value;
    // console.log(adultValue);
  }
});

$('#minusChildren').on("click", function () {
  value = countValueChildrenInput.innerText;
  value--;
  if (value > 12 || value < 0) {
    console.log("ahmed");
  } else {
    countValueChildrenInput.innerHTML = value;
    $('#childrenValue').val() = value;
    // console.log(childrenValue);
  }
});
$('#plusChildren').on("click", function () {
  value = countValueChildrenInput.innerText;
  value++;
  if (value > 12 || value < 0) {
    console.log("ahmed");
  } else {
    countValueChildrenInput.innerHTML = value;
    $('#childrenValue').val() = value;
    // console.log(childrenValue);
  }
});

$('#minusInfants').on("click", function () {
  value = countValueInfantsInput.innerText;
  value--;
  if (value > 12 || value < 0) {
    console.log("ahmed");
  } else {
    countValueInfantsInput.innerHTML = value;
    $('#infantsValue').val() = value;
    // console.log(infantsValue);
  }
});
$('#plusInfants').on("click", function () {
  value = countValueInfantsInput.innerText;
  value++;
  if (value > 12 || value < 0) {
    console.log("ahmed");
  } else {
    countValueInfantsInput.innerHTML = value;
    $('#infantsValue').val() = value;
    // console.log(infantsValue);
  }
});

// let inputName = document.getElementById("name");
// let inputEmail = document.getElementById("email");
// let inputPhone = document.getElementById("userPhone");

// validation name lastName email phone
function validateName() {
  regexName = /^[A-Za-z]{3,20}$/;
  // console.log(inputName.value);
  if (regexName.test($("#name").val())) {
    $("#name").removeClass("is-invalid");
    $("#name").addClass("is-valid");
    $('label[for="name"]').addClass("d-none");
    return true;
  } else {
    $('label[for="name"]').removeClass("d-none");
    $("#name").removeClass("is-valid");
    $("#name").addClass("is-invalid");
  }
}

function validatelastName() {
  regexName = /^[A-Za-z]{3,20}$/;
  // console.log(inputName.value);
  if (regexName.test($("#lastName").val())) {
    $("#lastName").removeClass("is-invalid");
    $("#lastName").addClass("is-valid");
    $('label[for="name"]').addClass("d-none");
    return true;
  } else {
    $('label[for="name"]').removeClass("d-none");
    $("#lastName").removeClass("is-valid");
    $("#lastName").addClass("is-invalid");
  }
}

function validateEmail() {
  regexEmail = /^[a-zA-Z0-9]{3,}(@gmail.com)$/;
  // console.log(inputEmail.value);
  if (regexEmail.test($("#email").val())) {
    $("#email").removeClass("is-invalid");
    $("#email").addClass("is-valid");
    $('label[for="email"]').addClass("d-none");
    return true;
  } else {
    $('label[for="email"]').removeClass("d-none");
    $("#email").removeClass("is-valid");
    $("#email").addClass("is-invalid");
  }
}

function validatePhone() {
  regexPhone = /^01[0125][0-9]{8,16}$/;
  // console.log(inputPhone.value);
  if (regexPhone.test($("#userPhone").val())) {
    $("#userPhone").removeClass("is-invalid");
    $("#userPhone").addClass("is-valid");
    $('label[for="userPhone"]').addClass("d-none");
    return true;
  } else {
    $('label[for="userPhone"]').removeClass("d-none");
    $("#userPhone").removeClass("is-valid");
    $("#userPhone").addClass("is-invalid");
  }
}

$("#back").on("click", function () {
  $("#secondSec").removeClass("d-none");
  $("#lastSec").addClass("d-none");
});

$("#inquire").on("click", function () {
  if (validateEmail() && validateName() && validatePhone()) {
    Swal.fire({
      title: "successfull Ya man",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "fill all inputs Ya 3am",
      icon: "error",
    });
  }
});


$("#makeTrip .accommodation").on("click", function () {
  $(".fa-star").removeClass("fa-solid").addClass("fa-regular");
  $(this).find(".fa-star").removeClass("fa-regular").addClass("fa-solid");
});


$('#chooseOptions').on('click' , function(){
  $('.optionBox').toggleClass('d-none')
})



$('.count').click(function(){
  // console.log('ahmed');

  // slideToggle()
  $('.single-blog').addClass('.activeNone');
  $(this).parent().siblings().find('.single-blog').toggleClass('d-none');
  
  
})


// nasr
// $('.card').click(function () {
//   location.href = '../../tour-details.html'
// })

// $('.destinationDetails').click(function () {
//   location.href = '../../destination-list.html'

// })

// $('.single-destinations-list').click(function () {
//   location.href = '../../tour-details.html'
// })


// // wow plugin

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});


// about slider

$(document).ready(function () {
  var carousel = $("#carousel").slidingCarousel({
    squeeze: 250,
  });
});

(function ($) {
  $.fn.slidingCarousel = function (options) {
    options = $.extend({}, $.fn.slidingCarousel.defaults, options || {});

    var pluginData = {
      container: $(this),
      sinus: [0],
      images: null,
      mIndex: null,
    };

    var preload = function (callback) {
      var images = pluginData.container.find(".slide img"),
        total = images.length,
        shift = total % 2,
        middle = total < 3 ? total : ~~(total / 2) + shift,
        result = [],
        loaded = 0;

      images.each(function (index, element) {
        var img = new Image();

        $(img).bind("load error", function () {
          loaded++;

          // push loaded images into regular array.
          // to preserve the order array gets constructed so, that elements indexed:
          //
          //    0 1 2 3 4 5 6
          //
          // are shifted within destination array by half of total length (-1 depending on parity/oddness):
          //
          //    6 5 4 0 1 2 3
          //
          // and finally reversed to get correct scrolling direction.

          result[(index + middle - shift) % total] = element;

          // need ratio for calculating new widths
          element.ratio = this.width / this.height;
          element.origH = this.height;
          element.idx = index;

          if (loaded == total) {
            pluginData.mIndex = middle;
            pluginData.sinsum = 0;
            pluginData.images = result.reverse();

            // prepare symetric sinus table

            for (var n = 1, freq = 0; n < total; n++) {
              pluginData.sinus[n] =
                n <= middle
                  ? Math.sin((freq += 1.6 / middle))
                  : pluginData.sinus[total - n];

              if (n < middle)
                pluginData.sinsum += pluginData.sinus[n] * options.squeeze;
            }
            callback(pluginData.images);
          }
        });
        img.src = element.src;
      });
    };

    var setupCarousel = function () {
      preload(doLayout);
      setupEvents();
    };

    var setupEvents = function () {
      pluginData.container
        .find(".slide div > a")
        .click(function (e) {
          var idx = $(this).find("img")[0].idx,
            arr = pluginData.images;

          while (arr[pluginData.mIndex - 1].idx != idx) {
            arr.push(arr.shift());
          }
          doLayout(arr, true);
        })
        .end()
        .find(".navigate-right")
        .click(function () {
          var images = pluginData.images;

          images.splice(0, 0, images.pop());
          doLayout(images, true);
        })
        .end()
        .find(".navigate-left")
        .click(function () {
          var images = pluginData.images;

          images.push(images.shift());
          doLayout(images, true);
        });
    };

    var doLayout = function (images, animate) {
      var mid = pluginData.mIndex,
        sin = pluginData.sinus,
        posx = 0,
        diff = 0,
        width =
          images[mid - 1].origH *
          images[mid - 1].ratio /* width of middle picture */,
        middle =
          (pluginData.container.width() - width) /
          2 /* center of middle picture, relative to container */,
        offset =
          middle -
          pluginData.sinsum /* to get the center, all sinus offset that will be added below have to be substracted */,
        height = images[mid - 1].origH,
        top,
        left,
        idx,
        j = 1;

      // hide description before doing layout
      pluginData.container.find("span").hide().css("opacity", 0);

      $.each(images, function (i, img) {
        idx = Math.abs(i + 1 - mid);
        top = idx * 15;

        // calculating new width and caching it for later use
        img.cWidth = (height - top * 2) * img.ratio;

        diff = sin[i] * options.squeeze;
        left = posx +=
          i < mid ? diff : images[i - 1].cWidth + diff - img.cWidth;

        var el = $(img).closest(".slide"),
          fn = function () {
            if (i === mid - 1) {
              // show caption gently
              el.find("span").show().animate({ opacity: 0.7 });
            }
          };

        if (animate) {
          el.animate(
            {
              height: height - top * 2,
              zIndex: mid - idx,
              top: top,
              left: left + offset,
              opacity: i == mid - 1 ? 1 : sin[j++] * 0.8,
            },
            options.animate,
            fn
          );
        } else {
          el.css({
            zIndex: mid - idx,
            height: height - top * 2,
            top: top,
            left: left + offset,
            opacity: 0,
          })
            .show()
            .animate({ opacity: i == mid - 1 ? 1 : sin[j++] * 0.8 }, fn);

          if (options.shadow) {
            el.addClass("shadow");
          }
        }
      });

      if (!animate) {
        pluginData.container
          .find(".navigate-left")
          .css("left", middle + 50)
          .end()
          .find(".navigate-right")
          .css("left", middle + width - 75);
      }
    };

    this.initialize = function () {
      setupCarousel();
    };

    // Initialize the plugin
    return this.initialize();
  };

  $.fn.slidingCarousel.defaults = {
    shadow: true,
    squeeze: 124,
    animate: 250,
  };
})(jQuery);


$(".videoBox").on("click", function () {
  $(".ytubeIcon").toggleClass("d-none");

});


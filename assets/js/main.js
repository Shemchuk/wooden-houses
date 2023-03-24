$(document).ready(function () {

  var galleryThumbsProduct = new Swiper('.product_slider .gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
          240: {
              slidesPerView: 2,
          },
          768: {
              slidesPerView: 3
          },
          999: {
              slidesPerView: 4
          }
      },
  });

  // console.log(galleryThumbsProduct);

  var galleryTopProduct = new Swiper('.product_slider .gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      thumbs: {
          swiper: galleryThumbsProduct,
      },
  });


  var feedbackSlider = new Swiper('.feedback-slider', {
      loop: true,
      // loopedSlides: 5, //looped slides should be the same

      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 150,
      
      breakpoints: {
        240: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 80,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 100,
        },
        1280: {
          slidesPerView: "auto",
          spaceBetween: 120,
        },
    },
  });

  // function for add/remove .action class in the options blocks
  function setComplectSectionActive( complectType ) {
    // remove .active class from the options blocks
    $('.complect-click-js.active').removeClass('active');

    // set .active class to the options blocks
    complectType && $('.' + complectType).addClass('active');
  }


  // show/hide complectation description
  $('.complect-item').click(function() {
    $('.complect-item.active').not(this).removeClass('active');
    $(this).addClass('active');
    
    // set .active class to the bottom buttons Каркас/теплый контур
    let to_id = $(this).attr('data-to-id');
    $('.complectation__item.active').removeClass('active');
    $('#' + to_id).addClass('active');

    // add/remove .action class in the options blocks
    setComplectSectionActive( $(this).attr('data-complect-type') );

  });


  // click on product tabs
  $('.product-tab__item-click').click(function (e) {
    e.preventDefault();
    let to_id = $(this).attr('data-to-id');
    $('.product-tab__item-click').removeClass('active');
    $(this).addClass('active');
    $('.product-tab__list').hide();
    $('#' + to_id).fadeIn();

    //show/hide buttons каркас/теплый контур
    const complectationContainer = $(".complectation-container");
    if ( to_id === "complectation" ) {
      complectationContainer.addClass("show")
    } else {
      complectationContainer.removeClass("show")
    }
});


  // click on product tabs - Каркас/Теплый пол
  var complectationItem = $('.complectation__item');
  
  complectationItem.click(function (e) {
    complectationItem.removeClass('active');
    $(this).addClass('active');

    // set .active class to the top buttons Каркас/теплый контур
    let to_id = $(this).attr('data-to-id');
    $('.complect-item.active').removeClass('active');
    $('#' + to_id).addClass('active');

    setComplectSectionActive( $(this).attr('data-complect-type') );

  });

});


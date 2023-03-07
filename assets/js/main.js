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

});


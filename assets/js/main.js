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

  console.log(galleryThumbsProduct);

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

  console.log(galleryTopProduct);




});


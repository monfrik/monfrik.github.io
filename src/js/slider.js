import $ from 'jquery';

import 'slick-carousel';


export function initSliders() {
  $('.speakers__slider').slick({
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2.2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.2,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          slidesToShow: 1.6,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        }
      },
    ]
  });
  $('.gallery__slider').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: '120px',
          slidesToShow: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1,
          arrows: false,
        }
      },
      // {
      //   breakpoint: 450,
      //   settings: {
      //     centerPadding: '100px',
      //     slidesToShow: 1,
      //   }
      // },
    ]
  });
}
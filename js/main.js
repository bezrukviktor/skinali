$(document).ready(function () {
  $('.fa-heart').click(function () {
    if ($(this).hasClass('far')) {
      $(this).removeClass('far').addClass('fas');
    } else
      $(this).removeClass('fas').addClass('far');
  })

  $('.menu-button').click(function () {
    $('.menu').toggleClass('menu_active')
    $('.menu-button').toggleClass('menu-button--active')
  })

  $('.form-group__select').on('click', function () {
    this.querySelector('.form-select').classList.toggle('form-select--open')
  })

  $('body').on('click', function (e) {
    if ((e.target).closest('.form-group__select') === null) {
      $('.form-select').removeClass('form-select--open')
    }
    e.stopPropagation();
  })

  $(".before-after").twentytwenty({
    before_label: 'без скинали',
    after_label: 'со скинали'
  });
  $('.before-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.slider-arrow__prev',
    nextArrow: '.slider-arrow__next'
  })
  $('.review-block').slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  })

  for (const option of document.querySelectorAll('.form-select__option')) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.form-select__option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.form-group__select').querySelector('.form-select__value').textContent = this.textContent;
      }
    })
  }

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    if (screen.width < 768) {
      fixed_offset = 400
    }
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
  });

  $('.input-tel').mask('+00 (000) 000 00 00', {
    placeholder: '+__ (___) ___ __ __'
  });

  let start = $('.prices');
  let startTop = start.offset().top;
  $(window).bind('scroll', function () {
    let windowTop = $(this).scrollTop();
    console.log(windowTop)
    if (windowTop > startTop) {
      $('.map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.2086424670708!2d37.644139751011096!3d55.65870098930891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab36bf58f6ed5%3A0x2da28a2339bd09fa!2z0JrQsNGI0LjRgNGB0LrQvtC1INGILiwgMjMsIDM0NSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExNTQ3OA!5e0!3m2!1sru!2sfr!4v1593867958929!5m2!1sru!2sfr" width="100%" height="410" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
      $(window).unbind('scroll')
    }
  })
})
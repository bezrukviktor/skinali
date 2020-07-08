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
})
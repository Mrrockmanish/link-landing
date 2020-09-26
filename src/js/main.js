$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  
  $('.quest').on('click', '.quest__title-wrap', function () {
    $(this).next('.quest__content').slideToggle();
    $(this).find('.quest__chevron').toggleClass('open');
  });




















});
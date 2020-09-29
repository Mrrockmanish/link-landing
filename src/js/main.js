$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  
  $('.quest').on('click', '.quest__title-wrap', function () {
    $(this).next('.quest__content').slideToggle();
    $(this).find('.quest__chevron').toggleClass('open');
  });



  $('.reviews-slider').slick({
    prevArrow: '<svg class="slick-arrow slick-prev" width="75" height="18" viewBox="0 0 75 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                  '<path d="M10.2986 18H16.3759L9.89749 12.0864L75 12.0864V5.9103L9.89749 5.9103L16.3759 0H10.2986L0 8.99836" fill="#FE7A00"/>\n' +
                '</svg>',
    nextArrow: '<svg class="slick-arrow slick-next" width="75" height="18" viewBox="0 0 75 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                  '<path d="M64.7014 0L58.6241 0L65.1025 5.91358H0L0 12.0897H65.1025L58.6241 18H64.7014L75 9.00164" fill="#FE7A00"/>\n' +
                '</svg>\n',
    dots: true
  });


  // заказ обратного звонко
  $('.call').on('click', function () {
    $('#form-modal').arcticmodal();
  });

  // вывод ошибки формы
  const displayFormError = () => {
    $('#error-modal').arcticmodal();
    setInterval('$(\'#error-modal\').arcticmodal(\'close\')', 3000)
  };


  // Плавная прокрутка

  $(".slideto").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    const id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });








});
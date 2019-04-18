$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin: 10,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        items: 1
    })


    $(".nav a").on("click", function(e) {
      if(this.hash !== "") {
        e.preventDefault();
  
        const hash = this.hash;
  
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 1000);
      }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
        $('.fa-angle-double-up').addClass('active');
    } else {
        $('.fa-angle-double-up').removeClass('active');
    }
});
$('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

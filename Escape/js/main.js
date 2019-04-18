jQuery(function(){
	initMenu();
});

function initMenu() {
	var opener = jQuery('.menu-open');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);

	$(".logos-item a").animated("flipInX")
	$(".heading-box").animated("flipInY")

	$(".section-contact, .images-holder, .team-holder, .clients-holder, .descr-services h2, .descr-services p, .info-box").animated("fadeInUp")
	
	$(".our-contact").animated("fadeInLeft")
	$(".contact-form-hold").animated("fadeInRight")

	$(".logo").animated("bounceInLeft");
	
	$(".navigation").animated("bounceInDown");

	$("html").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    // event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
	 //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
 });
}

jQuery(function(){
	initMenu();
	hideSpan();
	owlCarousel();
  slider();
  btnTop();
  linkDown();
});

function initMenu() {
	var opener = jQuery('.menu-open, .menu-close');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}

function hideSpan() {
	$(".know-more").on("click", function(){
  	$(this).parent(".visible-text").parent(".services-holder").toggleClass("show");
  })
  $(".close-wrapp").on("click", function(){
  	$(this).parent(".hover-text").parent(".services-holder").toggleClass("show");
  })
}

function owlCarousel() {
  	$('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 800,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
}

function slider() {
  let sliderContent = document.querySelectorAll(".slide");
      arrowLeft = document.querySelector("#arrow-left");
      arrowRight = document.querySelector("#arrow-right");
      current = 0;

  // Clear all images
  function reset() {
    for(let i = 0; i < sliderContent.length; i++) {
      sliderContent[i].style.display = "none";
    }
  }

  // Init slider
  function startSlide() {
    reset();
    sliderContent[0].style.display = "block";
  }

  // show prev
  function slideLeft() {
    reset();
    sliderContent[current - 1].style.display = "block";
    current--;
  }

  // Show next
  function slideRight() {
    reset();
    sliderContent[current + 1].style.display = "block";
    current++;
  }

  // Left arrow click
  arrowLeft.addEventListener("click", function() {
    if(current === 0) {
      current = sliderContent.length;
    }
    slideLeft();
  });

  // Right arrow click
  arrowRight.addEventListener("click", function() {
    if(current === sliderContent.length - 1) {
      current = -1
    }
    slideRight();
  });

  startSlide();
}

// button scroll top
function btnTop() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 40) {
      $(".btn-top").fadeIn();
    } else {
      $(".btn-top").fadeOut();
    }
  });

  $(".btn-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 800);
  });
}

// link down
function linkDown() {
  $(".navigation a").on("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 1000);
    }
  });
}
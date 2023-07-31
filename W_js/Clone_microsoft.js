<<<<<<< HEAD
var swiper = new Swiper(".main-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1500, // 슬라이드 속도
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false
  // }
});

$(document).ready(function () {

  var footer = $(".inner-E-wrap").offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500 && $(this).scrollTop() < footer - 400) {
        $(".scrollTopbt").addClass("on");
    } else {
        $(".scrollTopbt").removeClass("on");
    }
});


  $(".scrollTopbt").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });


$('header nav ul li:nth-of-type(8)').click(function () {
  if (!$('header nav ul li:nth-of-type(8) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(8) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(8) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(9)').click(function () {
  if (!$('header nav ul li:nth-of-type(9) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(9) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(9) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(10)').click(function () {
  if (!$('header nav ul li:nth-of-type(10) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(10) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(10) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(11)').click(function () {
  if (!$('header nav ul li:nth-of-type(11) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(11) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(11) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(12)').click(function () {
  if (!$('header nav ul li:nth-of-type(12) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(12) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(12) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(13)').click(function () {
  if (!$('header nav ul li:nth-of-type(13) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(13) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(13) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('.menu').click(function () {
  if (!$('.menu-ul').hasClass('on')) { 
    $('.menu-ul').addClass('on');
  }
  else {
    $('.menu-ul').removeClass('on');
  }

  $('header nav ul li:nth-of-type(8) div').removeClass('on');
  
}); 

$('.Hamburger').click(function () {
  if (!$('.Hamburger-ul').hasClass('on')) { 
    $('.Hamburger-ul').addClass('on');
  }
  else {
    $('.Hamburger-ul').removeClass('on');
  }

  if ($('.Hamburger-ul').hasClass('on')) { 
    $('.Hamburger-li-bt01').addClass('on');
    $('.Hamburger-li-bt02').addClass('on');
    $('.Hamburger-li-bt03').addClass('on');
    $('.Hamburger-li-bt04').addClass('on');
    $('.Hamburger-li-bt05').addClass('on');
    $('.Hamburger-li-bt06').addClass('on');
  }
  else {
    $('.Hamburger-li-bt01').removeClass('on');
    $('.Hamburger-li-bt02').removeClass('on');
    $('.Hamburger-li-bt03').removeClass('on');
    $('.Hamburger-li-bt04').removeClass('on');
    $('.Hamburger-li-bt05').removeClass('on');
    $('.Hamburger-li-bt06').removeClass('on');
  }

  $('.Hamburger-li-bt01').css('border','0');
  $('.Hamburger-li-bt02').css('border','0');
  $('.Hamburger-li-bt03').css('border','0');
  $('.Hamburger-li-bt04').css('border','0');
  $('.Hamburger-li-bt05').css('border','0');
  $('.Hamburger-li-bt06').css('border','0');
}); 

  $('.Hamburger-li-bt01').click(function () {
    if (!$('.arrow-ul01').hasClass('on')) { 
      $('.arrow-ul01').addClass('on');
      $('.Hamburger-li-bt01').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul01').removeClass('on');
      $('.Hamburger-li-bt01').css('border','0');
    }
  });

  $('.Hamburger-li-bt02').click(function () {
    if (!$('.arrow-ul02').hasClass('on')) { 
      $('.arrow-ul02').addClass('on');
      $('.Hamburger-li-bt02').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul02').removeClass('on');
      $('.Hamburger-li-bt02').css('border','0');
    }
  });

  $('.Hamburger-li-bt03').click(function () {
    if (!$('.arrow-ul03').hasClass('on')) { 
      $('.arrow-ul03').addClass('on');
      $('.Hamburger-li-bt03').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul03').removeClass('on');
      $('.Hamburger-li-bt03').css('border','0');
    }
  });

  $('.Hamburger-li-bt04').click(function () {
    if (!$('.arrow-ul04').hasClass('on')) { 
      $('.arrow-ul04').addClass('on');
      $('.Hamburger-li-bt04').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul04').removeClass('on');
      $('.Hamburger-li-bt04').css('border','0');
    }
  });

  $('.Hamburger-li-bt05').click(function () {
    if (!$('.arrow-ul05').hasClass('on')) { 
      $('.arrow-ul05').addClass('on');
      $('.Hamburger-li-bt05').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul05').removeClass('on');
      $('.Hamburger-li-bt05').css('border','0');
    }
  });

  $('.Hamburger-li-bt06').click(function () {
    if (!$('.arrow-ul06').hasClass('on')) { 
      $('.arrow-ul06').addClass('on');
      $('.Hamburger-li-bt06').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul06').removeClass('on');
      $('.Hamburger-li-bt06').css('border','0');
    }
  });


});




=======
var swiper = new Swiper(".main-slide", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1500, // 슬라이드 속도
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false
  // }
});

$(document).ready(function () {

  var footer = $(".inner-E-wrap").offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500 && $(this).scrollTop() < footer - 400) {
        $(".scrollTopbt").addClass("on");
    } else {
        $(".scrollTopbt").removeClass("on");
    }
});


  $(".scrollTopbt").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });


$('header nav ul li:nth-of-type(8)').click(function () {
  if (!$('header nav ul li:nth-of-type(8) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(8) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(8) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(9)').click(function () {
  if (!$('header nav ul li:nth-of-type(9) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(9) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(9) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(10)').click(function () {
  if (!$('header nav ul li:nth-of-type(10) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(10) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(10) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(11)').click(function () {
  if (!$('header nav ul li:nth-of-type(11) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(11) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(11) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(12)').click(function () {
  if (!$('header nav ul li:nth-of-type(12) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(12) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(12) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('header nav ul li:nth-of-type(13)').click(function () {
  if (!$('header nav ul li:nth-of-type(13) div').hasClass('on')) { 
    $('header nav ul li:nth-of-type(13) div').addClass('on');
  }
  else {
    $('header nav ul li:nth-of-type(13) div').removeClass('on');
  }
  $('.menu-ul').removeClass('on');
});

$('.menu').click(function () {
  if (!$('.menu-ul').hasClass('on')) { 
    $('.menu-ul').addClass('on');
  }
  else {
    $('.menu-ul').removeClass('on');
  }

  $('header nav ul li:nth-of-type(8) div').removeClass('on');
  
}); 

$('.Hamburger').click(function () {
  if (!$('.Hamburger-ul').hasClass('on')) { 
    $('.Hamburger-ul').addClass('on');
  }
  else {
    $('.Hamburger-ul').removeClass('on');
  }

  if ($('.Hamburger-ul').hasClass('on')) { 
    $('.Hamburger-li-bt01').addClass('on');
    $('.Hamburger-li-bt02').addClass('on');
    $('.Hamburger-li-bt03').addClass('on');
    $('.Hamburger-li-bt04').addClass('on');
    $('.Hamburger-li-bt05').addClass('on');
    $('.Hamburger-li-bt06').addClass('on');
  }
  else {
    $('.Hamburger-li-bt01').removeClass('on');
    $('.Hamburger-li-bt02').removeClass('on');
    $('.Hamburger-li-bt03').removeClass('on');
    $('.Hamburger-li-bt04').removeClass('on');
    $('.Hamburger-li-bt05').removeClass('on');
    $('.Hamburger-li-bt06').removeClass('on');
  }

  $('.Hamburger-li-bt01').css('border','0');
  $('.Hamburger-li-bt02').css('border','0');
  $('.Hamburger-li-bt03').css('border','0');
  $('.Hamburger-li-bt04').css('border','0');
  $('.Hamburger-li-bt05').css('border','0');
  $('.Hamburger-li-bt06').css('border','0');
}); 

  $('.Hamburger-li-bt01').click(function () {
    if (!$('.arrow-ul01').hasClass('on')) { 
      $('.arrow-ul01').addClass('on');
      $('.Hamburger-li-bt01').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul01').removeClass('on');
      $('.Hamburger-li-bt01').css('border','0');
    }
  });

  $('.Hamburger-li-bt02').click(function () {
    if (!$('.arrow-ul02').hasClass('on')) { 
      $('.arrow-ul02').addClass('on');
      $('.Hamburger-li-bt02').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul02').removeClass('on');
      $('.Hamburger-li-bt02').css('border','0');
    }
  });

  $('.Hamburger-li-bt03').click(function () {
    if (!$('.arrow-ul03').hasClass('on')) { 
      $('.arrow-ul03').addClass('on');
      $('.Hamburger-li-bt03').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul03').removeClass('on');
      $('.Hamburger-li-bt03').css('border','0');
    }
  });

  $('.Hamburger-li-bt04').click(function () {
    if (!$('.arrow-ul04').hasClass('on')) { 
      $('.arrow-ul04').addClass('on');
      $('.Hamburger-li-bt04').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul04').removeClass('on');
      $('.Hamburger-li-bt04').css('border','0');
    }
  });

  $('.Hamburger-li-bt05').click(function () {
    if (!$('.arrow-ul05').hasClass('on')) { 
      $('.arrow-ul05').addClass('on');
      $('.Hamburger-li-bt05').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul05').removeClass('on');
      $('.Hamburger-li-bt05').css('border','0');
    }
  });

  $('.Hamburger-li-bt06').click(function () {
    if (!$('.arrow-ul06').hasClass('on')) { 
      $('.arrow-ul06').addClass('on');
      $('.Hamburger-li-bt06').css('border-bottom','1px solid #e6e6e6');
    }
    else {
      $('.arrow-ul06').removeClass('on');
      $('.Hamburger-li-bt06').css('border','0');
    }
  });


});




>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a

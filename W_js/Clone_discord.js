<<<<<<< HEAD
AOS.init({
    duration: 1200,
  })

  $('.link-wrap-manu').click(function () {
    if (!$('.link-wrap').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.link-wrap').addClass('on');//온을 추가해라
    }
    else {
      $('.link-wrap').removeClass('on'); //가지고 있으면 온을 제거해라
    }
  });

  $('.link-wrap .logo > img:nth-of-type(2)').click(function () {
    if ($('.link-wrap').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.link-wrap').removeClass('on');//온을 추가해라
    }
  });
=======
AOS.init({
    duration: 1200,
  })

  $('.link-wrap-manu').click(function () {
    if (!$('.link-wrap').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.link-wrap').addClass('on');//온을 추가해라
    }
    else {
      $('.link-wrap').removeClass('on'); //가지고 있으면 온을 제거해라
    }
  });

  $('.link-wrap .logo > img:nth-of-type(2)').click(function () {
    if ($('.link-wrap').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.link-wrap').removeClass('on');//온을 추가해라
    }
  });
>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a

<<<<<<< HEAD
$(document).ready(function () {
    $('.Languages').click(function () {
      if (!$('.gloval').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
        $('.gloval').addClass('on');//온을 추가해라
      }
      else {
        $('.gloval').removeClass('on'); //가지고 있으면 온을 제거해라
      }
    });
  
    $('.Languages02').click(function () {
      if (!$('.gloval02').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
        $('.gloval02').addClass('on');//온을 추가해라
      }
      else {
        $('.gloval02').removeClass('on'); //가지고 있으면 온을 제거해라
      }
    });
  
    // 햄버거 버튼 클릭하면 gnb 나타남, 로그인 스타트 gnb안에 들어감
    $('.hamburger').click(function () {
      if (!$('.gnbfamily').hasClass('on')) {
        $('.gnbfamily').addClass('on');
      }
      else {
        $('.gnbfamily').removeClass('on');
      }
  
      // if (!$('.login_start').hasClass('on')) {
      //   $('.login_start').addClass('on');
      // }
      // else {
      //   $('.login_start').removeClass('on');
      // }
    // 
      // $('.login_start').appendTo('.gnbfamily');
      
      $('.gnbfamily .sub li').removeClass('on');
  
      $(this).toggleClass('on');
    });
  
    // 
  
    // $('.gnbfamily li button').click(function () {
    //   if (!$('.gnbfamily .sub li').hasClass('on')) {
    //     $('.gnbfamily .sub li').addClass('on');
    //   }
    //   else {
    //     $('.gnbfamily .sub li').removeClass('on');
    //   }
    // });
  })

  // 슬라이드 01, 02

  var swiper = new Swiper(".main_image", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
  });

  var swiper = new Swiper(".slide_image", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 700,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  $(function(){
    $(".image01").click(function(){
        modalClose();
        //컨펌 이벤트 처리
    });
    $("#image01").click(function(){$("#popup01").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup01").fadeOut();
    }
  });

  $(function(){
    $(".image02").click(function(){
        modalClose();
    });

    
    $("#image02").click(function(){$("#popup02").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup02").fadeOut();
    }
  });

  $(function(){
    $(".image03").click(function(){
        modalClose();
        //컨펌 이벤트 처리
    });
    $("#image03").click(function(){$("#popup03").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup03").fadeOut();
    }
  });

  $('.gnbfamily button').click(function () {
    if (!$('.gnbfamily li .sub').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.gnbfamily li .sub').addClass('on');//온을 추가해라
    }
    else {
      $('.gnbfamily li .sub').removeClass('on'); //가지고 있으면 온을 제거해라
    }
  });

  

=======
$(document).ready(function () {
    $('.Languages').click(function () {
      if (!$('.gloval').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
        $('.gloval').addClass('on');//온을 추가해라
      }
      else {
        $('.gloval').removeClass('on'); //가지고 있으면 온을 제거해라
      }
    });
  
    $('.Languages02').click(function () {
      if (!$('.gloval02').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
        $('.gloval02').addClass('on');//온을 추가해라
      }
      else {
        $('.gloval02').removeClass('on'); //가지고 있으면 온을 제거해라
      }
    });
  
    // 햄버거 버튼 클릭하면 gnb 나타남, 로그인 스타트 gnb안에 들어감
    $('.hamburger').click(function () {
      if (!$('.gnbfamily').hasClass('on')) {
        $('.gnbfamily').addClass('on');
      }
      else {
        $('.gnbfamily').removeClass('on');
      }
  
      // if (!$('.login_start').hasClass('on')) {
      //   $('.login_start').addClass('on');
      // }
      // else {
      //   $('.login_start').removeClass('on');
      // }
    // 
      // $('.login_start').appendTo('.gnbfamily');
      
      $('.gnbfamily .sub li').removeClass('on');
  
      $(this).toggleClass('on');
    });
  
    // 
  
    // $('.gnbfamily li button').click(function () {
    //   if (!$('.gnbfamily .sub li').hasClass('on')) {
    //     $('.gnbfamily .sub li').addClass('on');
    //   }
    //   else {
    //     $('.gnbfamily .sub li').removeClass('on');
    //   }
    // });
  })

  // 슬라이드 01, 02

  var swiper = new Swiper(".main_image", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
  });

  var swiper = new Swiper(".slide_image", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 15,
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 700,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  $(function(){
    $(".image01").click(function(){
        modalClose();
        //컨펌 이벤트 처리
    });
    $("#image01").click(function(){$("#popup01").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup01").fadeOut();
    }
  });

  $(function(){
    $(".image02").click(function(){
        modalClose();
    });

    
    $("#image02").click(function(){$("#popup02").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup02").fadeOut();
    }
  });

  $(function(){
    $(".image03").click(function(){
        modalClose();
        //컨펌 이벤트 처리
    });
    $("#image03").click(function(){$("#popup03").css('display','flex').hide().fadeIn();
    });
    $(".pop-btn.close").click(function(){
        modalClose();
    });
    function modalClose(){
      $("#popup03").fadeOut();
    }
  });

  $('.gnbfamily button').click(function () {
    if (!$('.gnbfamily li .sub').hasClass('on')) { //만약 글로벌이 온을 가지고 있지 않으면
      $('.gnbfamily li .sub').addClass('on');//온을 추가해라
    }
    else {
      $('.gnbfamily li .sub').removeClass('on'); //가지고 있으면 온을 제거해라
    }
  });

  

>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a

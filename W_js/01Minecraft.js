<<<<<<< HEAD
var swiper1 = new Swiper(".gamecard", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false
  },
});

var swiper2 = new Swiper(".News", {
  slidesPerView: 1,
  spaceBetween: 120,
  breakpoints: {
    899: {
      slidesPerView: 2.5,
      spaceBetween: 90,
    },
    1199: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1439: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".pickcard", {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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

  $('.gnbfamily li button').click(function () {
    if (!$('.gnbfamily .sub li').hasClass('on')) {
      $('.gnbfamily .sub li').addClass('on');
    }
    else {
      $('.gnbfamily .sub li').removeClass('on');
    }
  });
})

// $(window).resize(function(){
//   location.reload();
=======
var swiper1 = new Swiper(".gamecard", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false
  },
});

var swiper2 = new Swiper(".News", {
  slidesPerView: 1,
  spaceBetween: 120,
  breakpoints: {
    899: {
      slidesPerView: 2.5,
      spaceBetween: 90,
    },
    1199: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1439: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".pickcard", {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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

  $('.gnbfamily li button').click(function () {
    if (!$('.gnbfamily .sub li').hasClass('on')) {
      $('.gnbfamily .sub li').addClass('on');
    }
    else {
      $('.gnbfamily .sub li').removeClass('on');
    }
  });
})

// $(window).resize(function(){
//   location.reload();
>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a
// })
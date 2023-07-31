<<<<<<< HEAD
var swiper = new Swiper(".IndexSwiper", {
  // direction: "vertical",
  // slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  freeMode: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    200: {
      // direction: "vertical",
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }
  }
});


// 인트로 글씨
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  });


  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  });

});

// 런닝텍스트 //슬라이드 페이지 이동
jQuery(function () {
  // initMarquee();

  $('nav.menu button').eq(0).click(function () {
    swiper.slideTo(1)
  })
  $('nav.menu button').eq(1).click(function () {
    swiper.slideTo(2)
  })
  $('nav.menu button').eq(2).click(function () {
    swiper.slideTo(3)
  })
  $('nav.menu button').eq(3).click(function () {
    swiper.slideTo(4)
  })
  $('nav.menu button').eq(4).click(function () {
    swiper.slideTo(5)
  })
  $('nav.menu button').eq(5).click(function () {
    swiper.slideTo(0)
  })
});

// 이메일

// (function(){
//  emailjs.init("pBPeWRA0n2ba_KzgY");
// })();
window.onload = function () {
  // 이메일
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.init("pBPeWRA0n2ba_KzgY"); // API keys
    emailjs.sendForm('service_wrjf9da', 'template_08ef3ty', this)
      .then(function () {
        alert(`메일 전송이 완료 되었습니다 :)`)
      }, function (error) {
        alert(`메일 전송이 실패했습니다 :(`)
        console.log('전송실패', error);
      });
  });
}

// menu-open
// .swiper-slide h5
$('.menu-open').click(function () {
  if (!$('.swiper-slide h5').hasClass('on')) {
    $('.swiper-slide h5').addClass('on');
  }
  else {
    $('.swiper-slide h5').removeClass('on');
  }
});

=======
var swiper = new Swiper(".IndexSwiper", {
  // direction: "vertical",
  // slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  freeMode: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    200: {
      // direction: "vertical",
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    }
  }
});


// 인트로 글씨
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  });


  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  });

});

// 런닝텍스트 //슬라이드 페이지 이동
jQuery(function () {
  // initMarquee();

  $('nav.menu button').eq(0).click(function () {
    swiper.slideTo(1)
  })
  $('nav.menu button').eq(1).click(function () {
    swiper.slideTo(2)
  })
  $('nav.menu button').eq(2).click(function () {
    swiper.slideTo(3)
  })
  $('nav.menu button').eq(3).click(function () {
    swiper.slideTo(4)
  })
  $('nav.menu button').eq(4).click(function () {
    swiper.slideTo(5)
  })
  $('nav.menu button').eq(5).click(function () {
    swiper.slideTo(0)
  })
});

// 이메일

// (function(){
//  emailjs.init("pBPeWRA0n2ba_KzgY");
// })();
window.onload = function () {
  // 이메일
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.init("pBPeWRA0n2ba_KzgY"); // API keys
    emailjs.sendForm('service_wrjf9da', 'template_08ef3ty', this)
      .then(function () {
        alert(`메일 전송이 완료 되었습니다 :)`)
      }, function (error) {
        alert(`메일 전송이 실패했습니다 :(`)
        console.log('전송실패', error);
      });
  });
}

// menu-open
// .swiper-slide h5
$('.menu-open').click(function () {
  if (!$('.swiper-slide h5').hasClass('on')) {
    $('.swiper-slide h5').addClass('on');
  }
  else {
    $('.swiper-slide h5').removeClass('on');
  }
});

>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a

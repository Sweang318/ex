<<<<<<< HEAD
$(document).ready(function () {
  //스크롤시 헤더메뉴 상단 고정
  $(window).scroll(function () {
    scrollGnb();
  });



  // x = null; t = currentTime; b = begin; c = end; d = distance;
  
// 속도조절
$.easing.easeOutCirc = function (x, t, b, c, d) {

  // if ((t /= d) < (1 / 2.75)) {
  //     return c * (7.5625 * t * t) + b;
  // } else if (t < (2 / 2.75)) {
  //     return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
  // } else if (t < (2.5 / 2.75)) {
  //     return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
  // } else {
  //     return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
  // }

  // return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  // return -(Math.cos(Math.PI * x) - 1) / 2;
  return 1 - Math.pow(1 - x, 3);
  // return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};


  //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
  $(document).on('click', '#gnb a', function (event) {
    var headerHeight = $('header').outerHeight();

    event.preventDefault();
  

    $("html,body").animate({
      scrollTop: $(this.hash).offset().top - headerHeight}, 2500, 'easeOutCirc');

  });

  //헤더메뉴 상단고정 함수
  function scrollGnb() {
    var windowTop = $(window).scrollTop();
    if (windowTop > 30) {
      $("header").addClass('scroll');
    } else {
      $("header").removeClass('scroll');
    }
  }
  
  scrollGnb();//새로고침, 최초 접속시에 확인

// 

$(document).scroll(function (event) {
  event.preventDefault();

  var home = $("#home").offset(); 
  var about = $("#about-me").offset(); 
  var web = $("#web-publishing").offset(); 
  var clone = $("#clone-website").offset(); 
  var study = $("#study").offset(); 
  var contact = $("#contact-me").offset(); 

  var heightOffset = 81;

  // 현재 스크롤 위치를 확인합니다.
  var scrollTop = $(document).scrollTop();

  if (scrollTop >= home.top - heightOffset && scrollTop < about.top - heightOffset) {
    $('.gnb li:nth-of-type(1)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= about.top - heightOffset&& scrollTop < web.top- heightOffset) {
    $('.gnb li:nth-of-type(2)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= web.top - heightOffset&& scrollTop < clone.top- heightOffset) {
    $('.gnb li:nth-of-type(3)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= clone.top - heightOffset&& scrollTop < study.top- heightOffset) {
    $('.gnb li:nth-of-type(4)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= study.top - heightOffset&& scrollTop < contact.top- heightOffset) {
    $('.gnb li:nth-of-type(5)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= contact.top- heightOffset) {
    $('.gnb li:nth-of-type(6)').addClass('on').siblings().removeClass('on');
  }
});
// 



});







const overlay = document.querySelector(".slide-overlay");
let slides = document.querySelectorAll(".slides > li");
let slidePhoto = document.querySelectorAll(".slides > li>img");
const slide = document.querySelector(".slides");
const thumbnails = document.querySelectorAll(".box__gallery > li");
const photoCount = slides.length;
const duration = 400;
let bullets = 0;
let photoIndex = 0;

// 갤러리 모달창 이벤트
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    // 썸네일 원본 사진과 갤러리 슬라이드 이미지 소스 링크 연결
    for (let i = 0; i < thumbnails.length; i++) {
      let photo = thumbnails[i].lastElementChild;
      slidePhoto[i].src = photo.href;
    }
  });
});
document.querySelector(".close-btn").addEventListener("click", () => {
  overlay.style.display = "none";
});

// bullet 이미지 개수에 맞게 생성하는 함수
function createBullets() {
  // bullet들의 리스트를 생성
  const bulletsList = document.createElement("ul");
  bulletsList.setAttribute("id", "bullets");
  overlay.appendChild(bulletsList);
  // 이미지 개수대로 bullet를 생성
  slides.forEach((slide, index) => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    // 이미지의 index를 a의 html에 집어넣음 (나중에 이미지 이동할 때 주소 역할이 되어줌)
    a.innerHTML = `${index}`;
    const li = document.createElement("li");
    li.appendChild(a);
    bulletsList.appendChild(li);
  });
  return (bullets = document.querySelectorAll("#bullets > li > a"));
}
createBullets();
bulletLink();


// bullet을 클릭하면 해당하는 번호의 이미지로 슬라이드 되는 함수
function bulletLink() {
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", (e) => {
      e.preventDefault();
      // 클릭된 bullet의 인덱스
      const clickedIndex = index;
      // 현재 bullet과 클릭된 bullet의 차이
      let step = clickedIndex - photoIndex;
      photoIndex = clickedIndex;
      //모든 bullet의 클래스를 없애고 클릭된 bullet에만 on 클래스 추가
      bulletClassReset();
      bullets[clickedIndex].classList.add("on");

      // 클릭할 때마다 순서가 바뀌는 slides들 업뎃
      slides = document.querySelectorAll(".slides>li")
      let currentSlides = [...slides];
      //step이 양수: 현재 요소보다 뒤에 오는 요소로 이동
      if (step > 0) {
        // 이미지 슬라이드 step의 수 만큼 앞에서 자른다
        let sliceSlides = currentSlides.slice(undefined, step);
        slide.style.transition = duration + "ms";
        slide.style.left = step * -100 + "%";
        window.setTimeout(() => {
          slide.removeAttribute("style");
          // 잘린 요소들을 맨 뒤로 집어넣기..
          slide.append(...sliceSlides);
        }, duration);
      } else {
        // step이 음수: 현재 요소보다 앞에 있는 요소로 이동
        sliceSlides = currentSlides.slice(step);
        // 잘린 요소들을 맨 앞으로 집어넣기
        slide.prepend(...sliceSlides);
        slide.style.left = step * 100 + "%";
        window.setTimeout(() => {
          slide.style.left = 0;
          slide.style.transition = duration + "ms";
        })
      }
      //서로 같은 경우 이동할 필요가 없기 때문에 함수 즉시 종료
      if (step == 0) return;
    });
  });
}
//썸네일을 클릭하면 해당하는 사진으로 점프
thumbnails.forEach((thumbnail, index) => {
  // 클릭 이벤트 추가
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedIndex = index;
    let step = clickedIndex - photoIndex;
    photoIndex = clickedIndex;
    bulletClassReset();
    bullets[clickedIndex].classList.add("on");
    // 클릭할 때마다 순서가 바뀌는 slides들 업뎃
    slides = document.querySelectorAll(".slides>li");
    let currentSlides = [...slides];
    if (step > 0) {
      // 이미지 슬라이드 step의 수 만큼 앞에서 자른다
      let sliceSlides = currentSlides.slice(undefined, step);
      // 잘린 슬라이드들 맨 뒤로 집어넣기..
      slide.append(...sliceSlides);
    } else {
      sliceSlides = currentSlides.slice(step);
      // 잘린 슬라이드들 맨 앞으로 집어넣기
      slide.prepend(...sliceSlides);
    }
  });
});



// 슬라이드 버튼 클릭 이벤트
document.querySelector(".--next").addEventListener("click", nextSlideImage);
document.querySelector(".--prev").addEventListener("click", prevSlideImage);

// 다음 사진으로 슬라이드
function nextSlideImage() {
  photoIndex++;
  photoIndex %= photoCount;
  slide.style.left = "-100%";
  slide.style.transition = duration + "ms";
  window.setTimeout(() => {
    slide.appendChild(slide.firstElementChild);
    slide.removeAttribute("style");
  }, duration);
  bulletClassReset();
  //해당하는 bullet에 on 클래스 넣기
  bulletIndex();
}
// 이전 사진으로 슬라이드
function prevSlideImage() {
  photoIndex--;
  photoIndex %= photoCount;
  slide.insertBefore(slide.lastElementChild, slide.firstChild);
  slide.style.left = "-100%";
  slide.style.transition = "0ms";
  window.setTimeout(() => {
    slide.style.left = 0;
    slide.style.transition = duration + "ms";
  });
  bulletClassReset();
  //해당하는 bullet에 on 클래스 넣기
  bulletIndex();
}

// 모든 bullet의 on 클래스를 삭제
function bulletClassReset() {
  bullets.forEach((bullet) => {
    bullet.classList.remove("on");
  });
}

//해당하는 bullet에 on 클래스 넣기
function bulletIndex() {
  // photoIndex가 음수일 때를 고려
  let index = photoIndex + bullets.length;
  index %= bullets.length;
  bullets[index].classList.add("on");
}


// 햄버거
const hambuger = document.querySelector('.hambuger');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('change');
})

// W, 햄버거 클릭하면 gnb.on
$('.hambuger').click(function () {
  if (!$('.gnb').hasClass('on')) {
    $('.gnb').addClass('on');
  }
  else {
    $('.gnb').removeClass('on');
  }

  if (!$('.gnb_overlay').hasClass('on')) {
    $('.gnb_overlay').addClass('on');
  }
  else {
    $('.gnb_overlay').removeClass('on');
  }

});


// 나브 누르면 활성화 꺼짐(T, M)
$('.gnb li').click(function () {
  if (!$('.gnb').hasClass('on')) {
    $('.gnb').addClass('on');
  }
  else {
    $('.gnb').removeClass('on');
  }

  if (!$('.gnb_overlay').hasClass('on')) {
    $('.gnb_overlay').addClass('on');
  }
  else {
    $('.gnb_overlay').removeClass('on');
  }

  if (!$('.hambuger').hasClass('change')) {
    $('.hambuger').addClass('change');
  }
  else {
    $('.hambuger').removeClass('change');
  }
});


// 스터디 내용 누르면 나브 사라짐(T, M/ W)
$('.box__gallery li').click(function () {
  if (!$('.hambuger').hasClass('on')) {
    $('.hambuger').addClass('on');
  }
  // 
  $(".gnb").hide();
});


// 클로즈 버튼 누르면 나브 나타남(T, M/ W)
$('.close-btn').click(function () {
  if ($('.hambuger').hasClass('on')) {
    $('.hambuger').removeClass('on');
  }
  // 
  $(".gnb").show();
});


// study06 
$(document).ready(function () {

  $('.menu01').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 0 + 'px)' })

    if (!$('.menu01').hasClass('on')) {
      $('.menu01').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(1)').hasClass('on')) {
      $('.menu-text div:nth-of-type(1)').addClass('on').siblings().removeClass('on');
    }

  });


  $('.menu02').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 150 + 'px)' })

    if (!$('.menu02').hasClass('on')) {
      $('.menu02').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(2)').hasClass('on')) {
      $('.menu-text div:nth-of-type(2)').addClass('on').siblings().removeClass('on');;
    }

  });


  $('.menu03').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 300 + 'px)' })

    if (!$('.menu03').hasClass('on')) {
      $('.menu03').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(3)').hasClass('on')) {
      $('.menu-text div:nth-of-type(3)').addClass('on').siblings().removeClass('on');;
    }
  });

  $('.menu01').trigger('click');

})

// 클론 웹사이트 호버 유지
$(document).ready(function(){
$('.clonewebsite-content-tab:nth-of-type(1)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(1)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(1)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(2)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(2)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(2)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(3)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(3)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(3)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(1)').trigger('click');

})

// study07 탭
$(document).ready(function(){

  $('.study07 ul li:nth-of-type(1)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(1)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(1)').addClass('on').siblings().removeClass('on');
    }
  });
  
  $('.study07 ul li:nth-of-type(2)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(2)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(2)').addClass('on').siblings().removeClass('on');
    } 
  });
  
  $('.study07 ul li:nth-of-type(3)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(3)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(3)').addClass('on').siblings().removeClass('on');
    } 
  });

  $('.study07 ul li:nth-of-type(1)').trigger('click');
  })

=======
$(document).ready(function () {
  //스크롤시 헤더메뉴 상단 고정
  $(window).scroll(function () {
    scrollGnb();
  });



  // x = null; t = currentTime; b = begin; c = end; d = distance;
  
// 속도조절
$.easing.easeOutCirc = function (x, t, b, c, d) {

  // if ((t /= d) < (1 / 2.75)) {
  //     return c * (7.5625 * t * t) + b;
  // } else if (t < (2 / 2.75)) {
  //     return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
  // } else if (t < (2.5 / 2.75)) {
  //     return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
  // } else {
  //     return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
  // }

  // return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  // return -(Math.cos(Math.PI * x) - 1) / 2;
  return 1 - Math.pow(1 - x, 3);
  // return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
};


  //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
  $(document).on('click', '#gnb a', function (event) {
    var headerHeight = $('header').outerHeight();

    event.preventDefault();
  

    $("html,body").animate({
      scrollTop: $(this.hash).offset().top - headerHeight}, 2500, 'easeOutCirc');

  });

  //헤더메뉴 상단고정 함수
  function scrollGnb() {
    var windowTop = $(window).scrollTop();
    if (windowTop > 30) {
      $("header").addClass('scroll');
    } else {
      $("header").removeClass('scroll');
    }
  }
  
  scrollGnb();//새로고침, 최초 접속시에 확인

// 

$(document).scroll(function (event) {
  event.preventDefault();

  var home = $("#home").offset(); 
  var about = $("#about-me").offset(); 
  var web = $("#web-publishing").offset(); 
  var clone = $("#clone-website").offset(); 
  var study = $("#study").offset(); 
  var contact = $("#contact-me").offset(); 

  var heightOffset = 81;

  // 현재 스크롤 위치를 확인합니다.
  var scrollTop = $(document).scrollTop();

  if (scrollTop >= home.top - heightOffset && scrollTop < about.top - heightOffset) {
    $('.gnb li:nth-of-type(1)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= about.top - heightOffset&& scrollTop < web.top- heightOffset) {
    $('.gnb li:nth-of-type(2)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= web.top - heightOffset&& scrollTop < clone.top- heightOffset) {
    $('.gnb li:nth-of-type(3)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= clone.top - heightOffset&& scrollTop < study.top- heightOffset) {
    $('.gnb li:nth-of-type(4)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= study.top - heightOffset&& scrollTop < contact.top- heightOffset) {
    $('.gnb li:nth-of-type(5)').addClass('on').siblings().removeClass('on');
  } else if (scrollTop >= contact.top- heightOffset) {
    $('.gnb li:nth-of-type(6)').addClass('on').siblings().removeClass('on');
  }
});
// 



});







const overlay = document.querySelector(".slide-overlay");
let slides = document.querySelectorAll(".slides > li");
let slidePhoto = document.querySelectorAll(".slides > li>img");
const slide = document.querySelector(".slides");
const thumbnails = document.querySelectorAll(".box__gallery > li");
const photoCount = slides.length;
const duration = 400;
let bullets = 0;
let photoIndex = 0;

// 갤러리 모달창 이벤트
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
    // 썸네일 원본 사진과 갤러리 슬라이드 이미지 소스 링크 연결
    for (let i = 0; i < thumbnails.length; i++) {
      let photo = thumbnails[i].lastElementChild;
      slidePhoto[i].src = photo.href;
    }
  });
});
document.querySelector(".close-btn").addEventListener("click", () => {
  overlay.style.display = "none";
});

// bullet 이미지 개수에 맞게 생성하는 함수
function createBullets() {
  // bullet들의 리스트를 생성
  const bulletsList = document.createElement("ul");
  bulletsList.setAttribute("id", "bullets");
  overlay.appendChild(bulletsList);
  // 이미지 개수대로 bullet를 생성
  slides.forEach((slide, index) => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    // 이미지의 index를 a의 html에 집어넣음 (나중에 이미지 이동할 때 주소 역할이 되어줌)
    a.innerHTML = `${index}`;
    const li = document.createElement("li");
    li.appendChild(a);
    bulletsList.appendChild(li);
  });
  return (bullets = document.querySelectorAll("#bullets > li > a"));
}
createBullets();
bulletLink();


// bullet을 클릭하면 해당하는 번호의 이미지로 슬라이드 되는 함수
function bulletLink() {
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", (e) => {
      e.preventDefault();
      // 클릭된 bullet의 인덱스
      const clickedIndex = index;
      // 현재 bullet과 클릭된 bullet의 차이
      let step = clickedIndex - photoIndex;
      photoIndex = clickedIndex;
      //모든 bullet의 클래스를 없애고 클릭된 bullet에만 on 클래스 추가
      bulletClassReset();
      bullets[clickedIndex].classList.add("on");

      // 클릭할 때마다 순서가 바뀌는 slides들 업뎃
      slides = document.querySelectorAll(".slides>li")
      let currentSlides = [...slides];
      //step이 양수: 현재 요소보다 뒤에 오는 요소로 이동
      if (step > 0) {
        // 이미지 슬라이드 step의 수 만큼 앞에서 자른다
        let sliceSlides = currentSlides.slice(undefined, step);
        slide.style.transition = duration + "ms";
        slide.style.left = step * -100 + "%";
        window.setTimeout(() => {
          slide.removeAttribute("style");
          // 잘린 요소들을 맨 뒤로 집어넣기..
          slide.append(...sliceSlides);
        }, duration);
      } else {
        // step이 음수: 현재 요소보다 앞에 있는 요소로 이동
        sliceSlides = currentSlides.slice(step);
        // 잘린 요소들을 맨 앞으로 집어넣기
        slide.prepend(...sliceSlides);
        slide.style.left = step * 100 + "%";
        window.setTimeout(() => {
          slide.style.left = 0;
          slide.style.transition = duration + "ms";
        })
      }
      //서로 같은 경우 이동할 필요가 없기 때문에 함수 즉시 종료
      if (step == 0) return;
    });
  });
}
//썸네일을 클릭하면 해당하는 사진으로 점프
thumbnails.forEach((thumbnail, index) => {
  // 클릭 이벤트 추가
  thumbnail.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedIndex = index;
    let step = clickedIndex - photoIndex;
    photoIndex = clickedIndex;
    bulletClassReset();
    bullets[clickedIndex].classList.add("on");
    // 클릭할 때마다 순서가 바뀌는 slides들 업뎃
    slides = document.querySelectorAll(".slides>li");
    let currentSlides = [...slides];
    if (step > 0) {
      // 이미지 슬라이드 step의 수 만큼 앞에서 자른다
      let sliceSlides = currentSlides.slice(undefined, step);
      // 잘린 슬라이드들 맨 뒤로 집어넣기..
      slide.append(...sliceSlides);
    } else {
      sliceSlides = currentSlides.slice(step);
      // 잘린 슬라이드들 맨 앞으로 집어넣기
      slide.prepend(...sliceSlides);
    }
  });
});



// 슬라이드 버튼 클릭 이벤트
document.querySelector(".--next").addEventListener("click", nextSlideImage);
document.querySelector(".--prev").addEventListener("click", prevSlideImage);

// 다음 사진으로 슬라이드
function nextSlideImage() {
  photoIndex++;
  photoIndex %= photoCount;
  slide.style.left = "-100%";
  slide.style.transition = duration + "ms";
  window.setTimeout(() => {
    slide.appendChild(slide.firstElementChild);
    slide.removeAttribute("style");
  }, duration);
  bulletClassReset();
  //해당하는 bullet에 on 클래스 넣기
  bulletIndex();
}
// 이전 사진으로 슬라이드
function prevSlideImage() {
  photoIndex--;
  photoIndex %= photoCount;
  slide.insertBefore(slide.lastElementChild, slide.firstChild);
  slide.style.left = "-100%";
  slide.style.transition = "0ms";
  window.setTimeout(() => {
    slide.style.left = 0;
    slide.style.transition = duration + "ms";
  });
  bulletClassReset();
  //해당하는 bullet에 on 클래스 넣기
  bulletIndex();
}

// 모든 bullet의 on 클래스를 삭제
function bulletClassReset() {
  bullets.forEach((bullet) => {
    bullet.classList.remove("on");
  });
}

//해당하는 bullet에 on 클래스 넣기
function bulletIndex() {
  // photoIndex가 음수일 때를 고려
  let index = photoIndex + bullets.length;
  index %= bullets.length;
  bullets[index].classList.add("on");
}


// 햄버거
const hambuger = document.querySelector('.hambuger');

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('change');
})

// W, 햄버거 클릭하면 gnb.on
$('.hambuger').click(function () {
  if (!$('.gnb').hasClass('on')) {
    $('.gnb').addClass('on');
  }
  else {
    $('.gnb').removeClass('on');
  }

  if (!$('.gnb_overlay').hasClass('on')) {
    $('.gnb_overlay').addClass('on');
  }
  else {
    $('.gnb_overlay').removeClass('on');
  }

});


// 나브 누르면 활성화 꺼짐(T, M)
$('.gnb li').click(function () {
  if (!$('.gnb').hasClass('on')) {
    $('.gnb').addClass('on');
  }
  else {
    $('.gnb').removeClass('on');
  }

  if (!$('.gnb_overlay').hasClass('on')) {
    $('.gnb_overlay').addClass('on');
  }
  else {
    $('.gnb_overlay').removeClass('on');
  }

  if (!$('.hambuger').hasClass('change')) {
    $('.hambuger').addClass('change');
  }
  else {
    $('.hambuger').removeClass('change');
  }
});


// 스터디 내용 누르면 나브 사라짐(T, M/ W)
$('.box__gallery li').click(function () {
  if (!$('.hambuger').hasClass('on')) {
    $('.hambuger').addClass('on');
  }
  // 
  $(".gnb").hide();
});


// 클로즈 버튼 누르면 나브 나타남(T, M/ W)
$('.close-btn').click(function () {
  if ($('.hambuger').hasClass('on')) {
    $('.hambuger').removeClass('on');
  }
  // 
  $(".gnb").show();
});


// study06 
$(document).ready(function () {

  $('.menu01').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 0 + 'px)' })

    if (!$('.menu01').hasClass('on')) {
      $('.menu01').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(1)').hasClass('on')) {
      $('.menu-text div:nth-of-type(1)').addClass('on').siblings().removeClass('on');
    }

  });


  $('.menu02').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 150 + 'px)' })

    if (!$('.menu02').hasClass('on')) {
      $('.menu02').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(2)').hasClass('on')) {
      $('.menu-text div:nth-of-type(2)').addClass('on').siblings().removeClass('on');;
    }

  });


  $('.menu03').click(function () {
    $('.menu-var').css({ 'transform': 'translateX(' + 300 + 'px)' })

    if (!$('.menu03').hasClass('on')) {
      $('.menu03').addClass('on').siblings().removeClass('on');
    }

    if (!$('.menu-text div:nth-of-type(3)').hasClass('on')) {
      $('.menu-text div:nth-of-type(3)').addClass('on').siblings().removeClass('on');;
    }
  });

  $('.menu01').trigger('click');

})

// 클론 웹사이트 호버 유지
$(document).ready(function(){
$('.clonewebsite-content-tab:nth-of-type(1)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(1)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(1)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(2)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(2)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(2)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(3)').click(function () {
  
  if (!$('.clonewebsite-content-tab:nth-of-type(3)').hasClass('hover')) {
    $('.clonewebsite-content-tab:nth-of-type(3)').addClass('hover').siblings().removeClass('hover');
  } 
});

$('.clonewebsite-content-tab:nth-of-type(1)').trigger('click');

})

// study07 탭
$(document).ready(function(){

  $('.study07 ul li:nth-of-type(1)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(1)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(1)').addClass('on').siblings().removeClass('on');
    }
  });
  
  $('.study07 ul li:nth-of-type(2)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(2)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(2)').addClass('on').siblings().removeClass('on');
    } 
  });
  
  $('.study07 ul li:nth-of-type(3)').click(function () {
    
    if (!$('.study07 ul li:nth-of-type(3)').hasClass('on')) {
      $('.study07 ul li:nth-of-type(3)').addClass('on').siblings().removeClass('on');
    } 
  });

  $('.study07 ul li:nth-of-type(1)').trigger('click');
  })

>>>>>>> 4825fc604952e9db9288ce656ffdeaf8a59a8e7a

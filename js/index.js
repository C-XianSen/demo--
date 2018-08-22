$(window).ready(function () {
  //获取宽度
  var winWidth = document.body.offsetWidth
  console.log(winWidth);
  $('.head-bottom-ddlist').css('width', winWidth)
  // 防诈骗
  var length = $('#head-top-fl-txt2 li').length;
  var liHeight = $('#head-top-fl-txt2 li').first().height();
  var j = 0;
  var timer1 = null;
  $('#head-top-fl-txt2 li').first().clone().appendTo('#head-top-fl-txt2')
  // console.log(length);

  timer1 = setInterval(move, 2000);

  function move() {
    j++;
    if (j > length) {
      j = 1;
      $('#head-top-fl-txt2').css('top', 0);
    }
    $('#head-top-fl-txt2').stop().animate({
      'top': -j * liHeight
    }, 1000);
  }

  // 导航
  $('.head-bottom-li').mouseenter(function () {
    // console.log($(this));
    $(this).children('div').show();
  })
  $('.head-bottom-li').mouseleave(function () {
    // console.log($(this));
    $(this).children('div').hide();
  })

  // Fixed导航
  var navT = $('.head-bottom-nav').offset().top;
  var navH = $('.head-bottom-nav').height();
  var bottomH = $('#head-bottom').height();
  // console.log(navT);
  // console.log(bottomH);
  $(window).scroll(function () {
    var docSc = $(document).scrollTop();
    if (docSc > navT) {
      $('#head-bottom').addClass('head-bottom-fixed');
      $('.head-bottom-bg').addClass('dis-none');
      $('.middle').css('margin-top', navT);
      $('.head-bottom-nav').addClass('head-bottom-navfixed');
      $('#head-bottom-list').children().addClass('head-bottom-lifixed');
      $('.head-bottom-line').addClass('dis-none');
      $('.head-bottom-txt').addClass('dis-none');
      $('.head-bottom-lidd').css('left', -128);
      $('.head-bottom-logo').css('display', 'block');
      $('.head-bottom-ss-member').css({
        'display': 'block',
        'margin-top': 19,
      });
      $('.head-bottom-thisli').css('margin-left', 12);
      $('.head-bottom-ss-search').css({
        'margin-top': 21,
        'margin-right': 33,
      });
      $('.head-bottom-ss-shopcart').css({
        'margin-top': 19,
        'margin-right': 30,
        'margin-left': 27,
      });
      $('.head-bottom-ss-search input').css('display', 'none');
      $('.head-bottom .wrap').css('position', 'relative')
    } else {
      $('#head-bottom').removeClass('head-bottom-fixed');
      $('.middle').css('margin-top', 0);
      $('.head-bottom-bg').removeClass('dis-none');
      $('.head-bottom-nav').removeClass('head-bottom-navfixed');
      $('#head-bottom-list').children().removeClass('head-bottom-lifixed');
      $('.head-bottom-line').removeClass('dis-none');
      $('.head-bottom-txt').removeClass('dis-none');
      $('.head-bottom-lidd').css('left', 0);
      $('.head-bottom-logo').css('display', 'none');
      $('.head-bottom-ss-member').css({
        'display': 'none',
        'margin-top': 0,
      });
      $('.head-bottom-thisli').css('margin-left', 0);
      $('.head-bottom-ss-search').css({
        'margin-top': 75,
        'margin-right': 0,
      });
      $('.head-bottom-ss-shopcart').css({
        'margin-top': 75,
        'margin-right': 22,
        'margin-left': 20,
      });
      $('.head-bottom-ss-search input').css('display', 'block');
      $('.head-bottom .wrap').css('position', '')      
    }
  })

  // banner
  var bannerLg = $('.middle-banner-img').length;
  var i = 0;
  var timer2 = null;
  console.log(bannerLg);


  for (var i = 1; i <= bannerLg; i++) {
    var li = '<li>' + '</li>';
    $('#middle-banner-dotlist').append(li);
  }
  $('#middle-banner-dotlist li').eq(0).addClass('dotlist-active');
  $('.middle-banner-img').eq(0).show();
  $('.middle-banner-img').eq(0).show().siblings().hide();
  $('#middle-banner-dotlist li').mouseover(function () {
    var index = $(this).index();
    $(this).addClass('dotlist-active').siblings().removeClass('dotlist-active');
    $('.middle-banner-img').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
  });

  timer2 = setInterval(moveR, 2000);

  function moveR() {
    i++;
    if (i > bannerLg - 1) {
      i = 0;
    }
    $('#middle-banner-dotlist li').eq(i).addClass('dotlist-active').siblings().removeClass('dotlist-active')
    $('.middle-banner-img').eq(i).stop().fadeIn(1000).siblings().fadeOut(1000);
  }

  function moveL() {
    i--;
    if (i < 0) {
      i = bannerLg - 1;
    }
    $('#middle-banner-dotlist li').eq(i).addClass('dotlist-active').siblings().removeClass('dotlist-active')
    $('.middle-banner-img').eq(i).stop().fadeIn(1000).siblings().fadeOut(1000);
  };

  $('.middle-banner').mouseover(function () {
    clearInterval(timer2)
    $('.middle-banner-btn').css('display', 'block')
  });

  $('.middle-banner-btnL').click(function () {
    moveL();
  })
  $('.middle-banner-btnR').click(function () {
    moveR();
  })
  $('.middle-banner').mouseout(function () {
    $('.middle-banner-btn').css('display', 'none')
    timer2 = setInterval(moveR, 2000);
  })
})

function next() {
  var slick = document.getElementsByClassName('slick-track')[0];
  slick.style.transform = "translate3d(-1100px, 0, 0)";
}

function prev() {
  var slick = document.getElementsByClassName('slick-track')[0];
  slick.style.transform = "translate3d(0, 0, 0)";
}
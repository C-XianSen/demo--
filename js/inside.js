$(window).ready(function () {
  //获取宽度
  var winWidth = document.body.offsetWidth
  console.log(winWidth);
  $('.head-bottom-ddlist').css('width', winWidth)
  // 页面头部防诈骗自动轮播
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

  banner();

  // productList();
})

//轮播
function banner() {
  var i = 0
  var timer = null
  var itemlength = $('.middle-gs-fw-item').length;
  console.log(itemlength)
  var itemWidth = document.getElementsByClassName('middle-gs-fw-item')[0].offsetWidth;
  
  btnshow = function () {
    $('.middle-gs-fw').mouseenter(function () {
      clearInterval(timer);
      $('.middle-gs-fw-prev').css('display', 'block');
      $('.middle-gs-fw-next').css('display', 'block');
      $('.middle-gs-fw-dot li').mouseover(function () {
        var i = $(this).index();
        $('.middle-gs-fw-dot li').eq(i).addClass('dot-active').siblings().removeClass('dot-active');
        $('.middle-gs-fw-list').css('transform', 'translate3d('+ i * (-itemWidth) + 'px, 0 , 0)')
      })
    });

    $('.middle-gs-fw-prev').click(function () {
      prev();
    });

    $('.middle-gs-fw-next').click(function () {
      next();
    });

    $('.middle-gs-fw').mouseleave(function () {
      $('.middle-gs-fw-prev').css('display', 'none');
      $('.middle-gs-fw-next').css('display', 'none');
      timer = setInterval(next, 4000)
    })

    
  }

  btnshow();

  next = function () {
    i++;
    if (i > itemlength - 1) {
      i = 0;
    };
    $('.middle-gs-fw-dot li').eq(i).addClass('dot-active').siblings().removeClass('dot-active');
    $('.middle-gs-fw-list').css('transform', 'translate3d('+ i * (-itemWidth) + 'px, 0 , 0)')
  }

  timer = setInterval(next, 2000)

  prev = function () {
    i--;
    if (i < 0) {
      i = itemlength - 1;
    };
    $('.middle-gs-fw-dot li').eq(i).addClass('dot-active').siblings().removeClass('dot-active');
    $('.middle-gs-fw-list').css('transform', 'translate3d('+ i * (-itemWidth) + 'px, 0 , 0)')
  }
}


//用ajax生成商品列表


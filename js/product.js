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

  //商品展示轮播

  imgChange();

  // transMove();
})

// function transMove() {
//   var slick = document.getElementsByClassName('slick-track')[0];
//   var viewWidth = document.getElementsByClassName('slick-list')[0].offsetWidth;
//   var maxL = slick.clientWidth - viewWidth;
//   $('.slick-track').mousedown(function (event) {
//     var event = event || window.event;
//     var regX = event.clientX - slick.offsetLeft;

//     document.onmousemove = function (event) {
//       var event = event || window.event;
//       X = event.clientX - regX
//       // console.log(X)
//       // if (X > 0 || X < -960) {
//       //   if (X > 0) {
//       //     // slick.style.left = 0;
//       //     slick.style.transform = 'translate3d(0, 0, 0)';

//       //   } else {
//       //     // slick.style.left = -960 + 'px';          
//       //     slick.style.transform = "translate3d(-960px, 0, 0)";
//       //   }
//       // } else {
//       //   slick.style.transform = "translate3d("+ X + "px, 0, 0)";
//       // }
//       X < 0 && (X = 0);
//       X >maxL && (X = maxL);
//       slick.style.left = X + "px";
      
//       console.log(X)

//       console.log(slick.style.transform)
//       // console.log(slick.style.left)
//     };
//     document.onmouseup = function (event) {
//       document.onmousemove = null;
//       document.onmouseup = null;
//       slick.releaseCapture && slick.releaseCapture();

//       slick.offsetLeft >  maxL/4 ?  startMove(0) : startMove(maxL)
        
//     }

//     function startMove(iTarget, onEnd) {
//       clearInterval(slick.timer);
//       slick.timer = setInterval(function () {
//         doMove(iTarget, onEnd)
//       },30)
//     }

//     function doMove(iTarget, onEnd) {
//       var iSpeed = (iTarget - viewWidth) / 5;
//       iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//       iTarget == slick.offsetLeft ? (clearInterval(slick.timer), onEnd && onEnd()) : slick.style.left = iSpeed + slick.offsetLeft + 'px'
//     }
//   })
// }

function next() {
  var slick = document.getElementsByClassName('slick-track')[0];
  slick.style.transform = "translate3d(-960px, 0, 0)";
}

function prev() {
  var slick = document.getElementsByClassName('slick-track')[0];
  slick.style.transform = "translate3d(0, 0, 0)";
}


//触摸视图更换
function imgChange() {
  var viewLis = document.getElementsByClassName('view-list')[0].getElementsByTagName('li');
  var view = document.getElementsByClassName('mw-detail-hd-sview')[0].getElementsByTagName('img')[0];
  console.log(viewLis);

  for (var i = 0; i < viewLis.length; i++) {
    viewLis[i].index = i;
    viewLis[i].onmouseover = function () {
      for (j = 0; j < viewLis.length; j++) {
        viewLis[j].classList.remove('view-list-active')
      }
      var index = this.index;
      this.className = 'view-list-active';
      view.setAttribute('src','../img/product-view' + (index+1) +'.png')
    }
  }
}


//数量变化
function changeNum(inputId, flag) {
  var input = document.getElementById(inputId);
  // console.log($(input.previousElementSibling))

  if (flag == "add") {
      input.value = parseInt(input.value) + 1
      if (input.value !== 1) {
        $(input.previousElementSibling).css('cursor', 'pointer');
      }
  } else {
      if (input.value == 1) { //1
          $(input.previousElementSibling).css('cursor', 'not-allowed');
          // return;
      } else {
          input.value = parseInt(input.value) - 1 //0
      }
  }
}


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

  //切换手机、邮箱登录方式
  $('.middle-login-topphone').click(function () {
    $('.middle-login-mail').css('display', 'none');
    $('.middle-login-phone').css('display', 'block');
    $(this).removeClass('middle-login-hover');
    $('.middle-login-topmail').addClass('middle-login-hover');
  });
  $('.middle-login-topmail').click(function () {
    $('.middle-login-phone').css('display', 'none');
    $('.middle-login-mail').css('display', 'block');
    $(this).removeClass('middle-login-hover');
    $('.middle-login-topphone').addClass('middle-login-hover');
  })

  //切换手机、邮箱注册方式
  $('.middle-logon-topphone').click(function () {
    $('.middle-logon-mail').css('display', 'none');
    $('.middle-logon-phone').css('display', 'block');
    $(this).removeClass('middle-logon-hover');
    $('.middle-logon-topmail').addClass('middle-logon-hover');
  });
  $('.middle-logon-topmail').click(function () {
    $('.middle-logon-phone').css('display', 'none');
    $('.middle-logon-mail').css('display', 'block');
    $(this).removeClass('middle-logon-hover');
    $('.middle-logon-topphone').addClass('middle-logon-hover');
  })

  //登录注册切换方式
  $('.logon-toggle').click(function () {
    $('.middle-logonbox').css('display', 'none');
    $('.middle-loginbox').css('display', 'block');
  });
  $('.login-bottom-text').click(function () {
    $('.middle-loginbox').css('display', 'none');
    $('.middle-logonbox').css('display', 'block');
    $('.middle-logon-mail').css('display', 'none');
    $('.middle-logon-phone').css('display', 'block');
    $('.middle-logon-topphone').removeClass('middle-logon-hover');
    $('.middle-logon-topmail').addClass('middle-logon-hover');
  })
  $('.login-bottom-text1').click(function () {
    $('.middle-loginbox').css('display', 'none');
    $('.middle-logonbox').css('display', 'block');
    $('.middle-logon-phone').css('display', 'none');
    $('.middle-logon-mail').css('display', 'block');
    $('.middle-logon-topmail').removeClass('middle-logon-hover');
    $('.middle-logon-topphone').addClass('middle-logon-hover');
  })

  //手机号注册检测
  $('#logon-tel').focus(function () {
    $('.logon-input-tel').removeClass('error-color');
    $('.logon-nerror-tel').css('display', 'none');
  })
  $('#logon-tel').mouseleave(function () {
    $('#logon-tel').blur()
    var reg = /^((13[0-9])|(15[^4\D])|(18[0-9])|(17[678]))\d{8}$/
    if (!reg.test(this.value) & this.value.length !== 0) {
      $('.logon-input-tel').addClass('error-color');
      $('.logon-nerror-tel').css('display', 'block');
    }
  })

  //手机号登录检测
  $('#login-tel').focus(function () {
    $('.login-input-tel').removeClass('error-color');
    $('.login-nerror-tel').css('display', 'none');
  })
  $('#login-tel').mouseleave(function () {
    $('#login-tel').blur()
    var reg = /^((13[0-9])|(15[^4\D])|(18[0-9])|(17[678]))\d{8}$/
    if (!reg.test(this.value) & this.value.length !== 0) {
      $('.login-input-tel').addClass('error-color');
      $('.login-nerror-tel').css('display', 'block');
    }
  })

  //邮箱注册检测
  $('#logon-mail').focus(function () {
    $('.logon-input-mail').removeClass('error-color');
    $('.logon-nerror-mail').css('display', 'none');
  })
  $('#logon-mail').mouseleave(function () {
    $('#logon-mail').blur()
    var reg = /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/
    if (!reg.test(this.value) & this.value.length !== 0) {
      $('.logon-input-mail').addClass('error-color');
      $('.logon-nerror-mail').css('display', 'block');
    }
  })

  //邮箱登录检测
  $('#login-mail').focus(function () {
    $('.login-input-mail').removeClass('error-color');
    $('.login-nerror-mail').css('display', 'none');
  })
  $('#login-mail').mouseleave(function () {
    $('#login-mail').blur()
    var reg = /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/
    if (!reg.test(this.value) & this.value.length !== 0) {
      $('.login-input-mail').addClass('error-color');
      $('.login-nerror-mail').css('display', 'block');
    }
  })
})

//手机注册
function checkinput() {
  var reg = /^((13[0-9])|(15[^4\D])|(18[0-9])|(17[678]))\d{8}$/
  if (phoneform.name.value == "" || !reg.test(phoneform.name.value)) {
    phoneform.name.focus();
    $('.logon-input-tel').addClass('error-color');
    $('.logon-nerror-tel').css('display', 'block');
    return false;
  }
  if (phoneform.pwd.value == "") {
    phoneform.pwd.focus();
    return false;
  }
}

//邮箱注册
function checkinput1() {
  var reg = /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/
  if (mailform.name.value == "" || !reg.test(mailform.name.value)) {
    mailform.name.focus();
    $('.logon-input-mail').addClass('error-color');
    $('.logon-nerror-mail').css('display', 'block');
    return false;
  }
  if (mailform.pwd.value == "") {
    mailform.pwd.focus();
    return false;
  }
}

//手机登录
function foo() {
  var reg = /^((13[0-9])|(15[^4\D])|(18[0-9])|(17[678]))\d{8}$/
  if (phonelogin.name.value == "" || !reg.test(phonelogin.name.value)) {
    phonelogin.name.focus();
    $('.login-input-tel').addClass('error-color');
    $('.login-nerror-tel').css('display', 'block');
    return false;
  }
  if (phonelogin.pwd.value == "") {
    phonelogin.pwd.focus();
    return false;
  }
}

//邮箱登录
function foo1() {
  var reg = /^[\w\-\.]{5,}\@[\w]+\.[\w]{2,4}$/
  if (maillogin.name.value == "" || !reg.test(maillogin.name.value)) {
    maillogin.name.focus();
    $('.login-input-mail').addClass('error-color');
    $('.login-nerror-mail').css('display', 'block');
    return false;
  }
  if (maillogin.pwd.value == "") {
    maillogin.pwd.focus();
    return false;
  }
}
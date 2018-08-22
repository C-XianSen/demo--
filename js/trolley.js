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

  addNum()

  //删除所选
  $('.alldelete').on('click', function() {
    $('.cart-content-goods-item').each(function() {
      if ($(this).find('.checkbox').prop('checked')) {
          $(this).remove();
      }
      addNum();
    })
  });

  //删除单个
  $('.goods-item6 a').on('click', function() {
    $(this).parent().parent().parent().remove();
    addNum();
  });
})

//数量添加减少
function changeNum(inputId, flag) {
  var input = document.getElementById(inputId);
  // console.log($(input.previousElementSibling))

  if (flag == "add") {
      input.value = parseInt(input.value) + 1
  } else {
      if (input.value == 1) { //1
          $(input.previousElementSibling).css('cursor', 'not-allowed');
          // return;
      } else {
          input.value = parseInt(input.value) - 1 //0
      }
  }
  addNum()
}


//计算总价
function addNum() {
  var items = document.getElementsByClassName('cart-content-goods-item');
  var price, num;
  var total = 0;

  for (var i = 0; i < items.length; i++) {
    price = items[i].getElementsByClassName('price')[0].innerHTML;
    console.log(price);
    num = items[i].getElementsByClassName('goods-value')[0].value;
    console.log(num);
    items[i].getElementsByClassName('goods-item5-sum')[0].innerHTML = '￥' + price * num;
    if (items[i].getElementsByClassName('checkbox')[0].checked) {
      total += price * num;
    };

    if (num == 1) {
      $(items[i].getElementsByClassName('goods-reduce')[0]).css('cursor', 'not-allowed')
    } else {
      $(items[i].getElementsByClassName('goods-reduce')[0]).css('cursor', 'pointer')        
    }0

  }
  console.log(total)
  if (total > 0) {
    $('.cart-total-info-right button').css('background-color', '#b4a078')
  }
  document.getElementById('total').innerHTML = total
}


//全选
function selectAll() {
  var all = document.getElementById("allcheck");
  var itemcheck = document.getElementsByClassName("checkbox");

  for (var i = 0; i < itemcheck.length; i++) {
      itemcheck[i].checked = all.checked //赋值
  }
  addNum()
}


//单选
function Singlesel() {
  var all = document.getElementById("allcheck");
  var itemcheck = document.getElementsByClassName("checkbox");
  var flag = 0;

  for (var i = 0; i < itemcheck.length; i++) {
      if (itemcheck[i].checked == false) {
          flag = 1
      }
  }
  console.log(flag)
  console.log('174')
  if (flag == 0) {
      all.checked = true;
  } else {
      all.checked = false;
  }
  addNum()
}


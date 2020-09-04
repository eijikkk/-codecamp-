/* 起動時処理 */
$(document).ready(function(){
/* スライドショー */
  $('.multiple').slick({
    autoplay: true, //自動再生
    infinite: true, //スライドのループ有効化
    dots: true, //ドットのナビゲーションを表示
    slidesToShow: 4, //表示するスライドの数
    slidesToScroll: 1, //スクロールで切り替わるスライドの数
    responsive: [{
      breakpoint: 1024, //ブレークポイントが768px
      settings: {
        slidesToShow: 3, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 768, //ブレークポイントが768px
      settings: {
        slidesToShow: 2, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }, {
      breakpoint: 480, //ブレークポイントが480px
      settings: {
        slidesToShow: 1, //表示するスライドの数
        slidesToScroll: 1, //スクロールで切り替わるスライドの数
      }
    }]
  }); 

  $('.mobile-menu').click(
    function(){
      $('.mobile-menu').toggleClass('active');
      $('.menu').toggle();
    }
  );
/* トップへ戻る */
  $(function () {
    $('.logo-img').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
  });


  $(function(){/* バナー */
    var windowWidth = window.innerWidth;
        if(windowWidth>1023){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 0 && $(this).scrollTop() < 100 ) {
                $('.pro-counselor').fadeIn();
            }
          });

          $('.delete').click(function(){
            $('.pro-counselor').css('display','none');
          });
        }else{
          $('.pro-counselor').hide();
        }
  });
  
  $(function(){
    $('.pulldown').click(
      function(){
        $(this).children('ul').toggle();
      }
    );
  });
});




/* リサイズ時処理 */
$(window).resize(function() {
  $(function(){
    var windowWidth = window.innerWidth;
    if(windowWidth>1250){
      $('.menu').css('display','flex');
    }
    else{
      $('.mobile-menu').removeClass('active');
      $('.menu').hide();
    }
  });

  $(function(){/* バナー */
    var windowWidth = window.innerWidth;
        if(windowWidth>1023){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 0 && $(this).scrollTop() < 100 ) {
                $('.pro-counselor').fadeIn();
            }
          });

          $('.delete').click(function(){
            $('.pro-counselor').css('display','none');
          });
        }else{
          $('.pro-counselor').hide();
        }
  });
});
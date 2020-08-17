$(function(){
	// 返回顶部
	$(document).ready(function() {
	    //首先将#rete隐藏
	    $(".rete").hide();
	    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
	    $(function() {
	      $(window).scroll(function() {
	        if ($(window).scrollTop() > 50) {
	          $(".rete").fadeIn(200);
	        } else {
	          $(".rete").fadeOut(200);
	        }
	      });
	      //当点击跳转链接后，回到页面顶部位置
	      $(".rete").click(function() {
	        $('body,html').animate({
	          scrollTop: 0
	        },
	        500);
	        return false;
	      });
	    });
	  });
	// 导航栏tab切换
	$('.navbar-nav>.nav-item').on('click',function(){
		console.log(1111);
		$(this).addClass('bianse').siblings().removeClass('bianse');
	})
})
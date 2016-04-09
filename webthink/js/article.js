$(function() {

	//3.footer部分
        $('.footer .toku span').hide();
        
	 //导航部分动画开始
        var header=$('.header');
        var main=$('.main');
        //当且仅当页面滚动超过一屏时，导航固定定位
        var viewh=$(window).height();
        $(window).scroll(function(event) {
        	var wineath=$(window).scrollTop();
        	if (wineath>=viewh) {
        		header.addClass('cur');
        		main.css('marginTop', 90);
        	} else{
        		header.removeClass('cur');
        		main.css('marginTop', 0);
        	};
        });
    //导航部分动画结束

    //底部动画开始
        var weiXin=$('.footer .weixin');
        var weiXinCon=$('.footer .toku span');
        weiXin.hover(function() {
           weiXinCon.stop().slideToggle();
        });
        //底部动画结束

});
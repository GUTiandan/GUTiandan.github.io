 $(function() {
        

        //JQ初始化css
        //1.banner部分
        $('.banner .ban-txt:not(:first)').hide();
        //2.网思服务部分
        $('.service li').find('img:first').hide();
        //3.footer部分
        $('.footer .toku span').hide();


        //导航部分动画开始
        var header=$('.header');
        var banner=$('.banner');
        //当且仅当页面滚动超过一屏时，导航固定定位
        var viewh=$(window).height();
        $(window).scroll(function(event) {
        	var wineath=$(window).scrollTop();
        	if (wineath>=viewh) {
        		header.addClass('cur');
        		banner.css('marginTop', 90);
        	} else{
        		header.removeClass('cur');
        		banner.css('marginTop', 0);
        	};
        });
        //导航部分动画结束
        

        //banner部分动画开始
        var next=$('.banner .right');
        var prev=$('.banner .left');
        
        var imgLi=$('.banner ul');
        var num=0;
        var timer;
        //在末尾加一个图片临时工
		var tempImg=imgLi.children('li').first().clone(true);
		imgLi.append(tempImg); 
		var txt=$('.banner .ban-txt');
		//封装切换下一个的功能
		function nextFn(){
			txt.eq(num).stop().fadeOut(400);
			num++;
        	if (num>3) {
        		num=1
        		imgLi.css('left', 0);
        	};
        	var move=num*-100+'%';
        	imgLi.stop().animate({
        		'left': move
        	}, 400,function(){
        		txt.eq(num).stop().fadeIn(400);
        	})
		}       
        //切换下一个
        next.click(nextFn);
        //切换上一个
        prev.click(function(event) {
        	txt.eq(num).stop().fadeOut(400);
        	num--;
        	if (num<0) {
        		num=2
        		imgLi.css('left', -300+'%');
        	};
        	var move=num*-100+'%';
        	imgLi.stop().animate({
        		'left': move
        	}, 400,function(){
        		txt.eq(num).stop().fadeIn(400);
        	})
        });
        //实现图片轮播
        timer=setInterval(nextFn, 3000);
        //鼠标悬停，轮播停止；鼠标离开，轮播继续
        banner.hover(function() {
        	clearInterval(timer);
        }, function() {
        	clearInterval(timer);
        	timer=setInterval(nextFn, 3000);
        });
        //banner部分动画结束
        
        
        //网思服务动画开始
        var sLi=$('.service li');
        //当鼠标移上li时，li下面的第一张图淡入出现，并且pic-down滑下来（top值为0）；当鼠标移开时，pic-down上滑消失（top值为-134），第一张图淡出。
        sLi.hover(function() {

            $(this).find('img:first').stop().fadeIn('fast');
            $(this).find('.pic-down').stop().animate({
                'top': 0
            }, 'normal');

        }, function() {

            $(this).find('.pic-down').stop().animate({
                'top': -134
            }, 'normal');
            $(this).find('img:first').fadeOut('fast');

        });
        //网思服务动画结束

        //网思案例动画开始
        //鼠标移上时，li下面的hover盒子下滑出现（top值变为0）；鼠标移开时，此盒子上滑消失（top值恢复原值）
        var cLi=$('.case li');
        cLi.hover(function() {

             $(this).find('.hover').stop().animate({
                'top': 0
            }, 300);

        }, function() {

             $(this).find('.hover').stop().animate({
                'top': -198
            }, 300);

        });
        //网思案例动画结束

        //网思动态动画开始
        var nLi=$('.news li');
        //鼠标移上li，li下面的img下滑（top值为0），li下面的pad盒子上滑（bottom值为0）；鼠标移开时，两者恢复原貌（即top值恢复原貌）。
        nLi.hover(function() {

            $(this).find('img').stop().animate({
                'top': 0
            }, 'normal');
            $(this).find('.pad').stop().animate({
                'bottom': 0
            }, 'normal');

        }, function() {
            
            $(this).find('img').stop().animate({
                'top': -165
            }, 'fast');
            $(this).find('.pad').stop().animate({
                'bottom': -148
            }, 'fast');

        });
        //网思动画结构结束
        
        //底部动画开始
        var weiXin=$('.footer .weixin');
        var weiXinCon=$('.footer .toku span');
        weiXin.hover(function() {
           weiXinCon.stop().slideToggle();
        });
        //底部动画结束
        
        
    });
$(function() {


        //css初始化
        var aimgLi=$('.banner .slider ul li');
        aimgLi.first().show();
        var aroleLi=$('.roles li');
        aroleLi.first().width(453);
        var cosBody=$('.cos .cos-body ul');
        cosBody.first().show();
        var faqBody=$('.faq .faq-bd>div');
        faqBody.first().show();
        

        //右侧悬浮框动画
        var sidebaryo=$('.sidebaryo');
        $(window).scroll(function(event) {
            var x=$(window).scrollTop()+110;
            sidebaryo.stop().animate({
                'top': x
            }, 'normal')
        });



        //banner轮播
        //点击角标，切换图片，以及角标
        var slider=$('.slider');
        var abtnLi=$('.banner .slider ol li');
        var num=0;
        var timer;
        abtnLi.click(function(event) {
            //当前图淡出，对应角标还原
            aimgLi.eq(num).stop().fadeOut();
            abtnLi.eq(num).removeClass('cur');
            //点击后得到的图淡入，对应角标变化
            num=$(this).index();
            aimgLi.eq(num).stop().fadeIn();
            abtnLi.eq(num).addClass('cur');
        });

        //使图片自动轮播
        //封装一个使图片切换下一个的功能
        function nextfn(){
            //当前图淡出，对应角标还原
            aimgLi.eq(num).stop().fadeOut();
            abtnLi.eq(num).removeClass('cur');
            //点击后得到的图淡入，对应角标变化
            num++;
            if (num==4) {
                num=0
            };
            aimgLi.eq(num).stop().fadeIn();
            abtnLi.eq(num).addClass('cur');
        }
        timer=setInterval(nextfn, 2000);

        //鼠标悬停(整个banner图，即slider)时，轮播停止；鼠标移开时，轮播继续；
        slider.hover(function() {
           
           clearInterval(timer);

        }, function() {
            
            clearInterval(timer);
            timer=setInterval(nextfn, 2000);

        });


        //roles部分的人物介绍切换动画
        aroleLi.click(function(event) {
            $(this).stop().animate({
                'width': 453
            }, 'normal')
            $(this).siblings().stop().animate({
                'width': 68
            }, 'normal')
        });


        //cosplay部分tab切换
        var cosTab=$('.cos .tyhd li');
        cosTab.hover(function() {

            $(this).addClass('cur').siblings().removeClass('cur');
            var i=$(this).index();
            cosBody.eq(i).show().siblings().hide();

        }, function() {
            
        });



        //游戏配置部分tab切换
        var faqTab=$('.faq .faq-tit li');
        faqTab.hover(function() {

            $(this).addClass('cur').siblings().removeClass('cur');
            var i=$(this).index();
            faqBody.eq(i).show().siblings().hide();

        }, function() {
            
        });

    });
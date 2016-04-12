$(function() {

	var smaBan=$('.banner .sma-ban ul');
	var bigBanLi=$('.banner .big-ban ul li');
	bigBanLi.first().show();
	var prevBtn=$('.banner .left');
	var nextBtn=$('.banner .right');
	var timer;
	//封装一个自动切换下一张的功能
	var bignum=smanum=0;
	function nextFn () {
		clearInterval(timer);
		//控制大banner图的交错呼吸切换
		bigBanLi.eq(bignum).stop().fadeOut('slow');
		bignum++;
		if (bignum>5) {
			bignum=0;
		};
		bigBanLi.eq(bignum).stop().fadeIn('slow');
		//控制小banner图的滑动切换
		smanum++;
		if (smanum>6) {
			smanum=1;
			smaBan.css('left', 0);
		};
		var smamove=-223*smanum;
		smaBan.stop().animate({'left': smamove}, 'slow',function(){
			timer=setInterval(nextFn, 3000);
		});
	}
	//点击下一个按钮
	nextBtn.click(nextFn);
	//点击上一个按钮
	prevBtn.click(function(event) {
		clearInterval(timer);
		//控制大banner图的交错呼吸切换
		bigBanLi.eq(bignum).stop().fadeOut('slow');
		bignum--;
		if (bignum<0) {
			bignum=5;
		};
		bigBanLi.eq(bignum).stop().fadeIn('slow');
		//控制小banner图的滑动切换
		smanum--;
		if (smanum<0) {
			smanum=5;
			smaBan.css('left', -1338);
		};
		var smamove=-223*smanum;
		smaBan.stop().animate({'left': smamove}, 'slow',function(){
			timer=setInterval(nextFn, 3000);
		});
	});
	//实现自动轮播
	timer=setInterval(nextFn, 3000);
	






});
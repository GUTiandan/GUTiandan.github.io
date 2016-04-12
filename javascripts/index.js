$(function() {
	

	//part2作业区域
	var otherwork=$('.part2 li:gt(3)');
	otherwork.hide();
	var moreBtn=$('.part2 span');
	var onOff=true;
	moreBtn.click(function(event) {
		if (onOff) {
			otherwork.stop().slideDown();
			moreBtn.html('收起');
			onOff=false;
		} else{
			otherwork.stop().slideUp();
			moreBtn.html('展开');
			onOff=true;
		};
	});

	
	//part3日志区域
	var article=$('.part3 .col-r li');
	article.first().show();
	var list=$('.part3 .col-l li');
	list.first().css('backgroundColor', '#d7e9bf');
	list.click(function(event) {
		$(this).css('backgroundColor', '#d7e9bf').siblings('li').css('backgroundColor', '#ffdcad');
		var i=$(this).index();
		article.eq(i).show().siblings('li').hide();
	});







});
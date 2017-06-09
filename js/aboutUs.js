$(function() {
	//	产品nav
	var $chanpin=$("#changpin");
	$chanpin.hover(function(){
		$(this).find("ul").css("display","block").stop().animate({"opacity":1},300);
	},function(){
		$(this).find("ul").stop().animate({"opacity":0},300,function(){
			$(this).css("display","none")
		});
	});
	//小箭头
	var arrTriangle0 = $(".triangle-down0");
	var arrTriangle1 = $(".triangle-down1");
	var arrTriangle2 = $(".triangle-down2");
	var arrTriangle3 = $(".triangle-down3");
	var scrollHeight = 0;
	arrTriangle0.addClass("animated fadeInDown");
	var littleNav = $(".littleNav");
	//小nav效果
	littleNav.click(function() {
		if($(this).index() == 0) {
			$("body,html").animate({scrollTop:359},500,"swing")
		};
		if($(this).index() == 2) {
			$("body,html").animate({scrollTop:900},500,"swing")
		};
		if($(this).index() == 4) {
			$("body,html").animate({scrollTop:1660},500,"swing")
		};
		if($(this).index() == 6) {
			$("body,html").animate({scrollTop:2300},500,"swing")
		};
	})
	$(window).scroll(function() {
		scrollHeight = $(this).scrollTop();
		var nowIndex = 0;
		var oNav = $(".nav2Wrap");
		console.log(scrollHeight);
		//小nav定位
		if(scrollHeight > 369) {
			oNav.css("position", "fixed").css("top", "102px");
		} else {
			oNav.css("position", "absolute").css("top", "450px");
		};
		//下拉箭头动画
		if(scrollHeight > 850) {
			arrTriangle0.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		} else {
			arrTriangle0.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		};
		if(850< scrollHeight & scrollHeight < 1660) {
			arrTriangle1.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle1.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		};
		if(scrollHeight > 1650 & scrollHeight < 2300) {
			arrTriangle2.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle2.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		};
		if(scrollHeight >= 2300) {
			arrTriangle3.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle3.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		};
	})
	//照片翻转
	var animatedBox = $(".animatedBox");
})
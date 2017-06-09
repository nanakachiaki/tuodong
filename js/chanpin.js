$(function() {

	//小箭头动画效果
	var arrTriangle0 = $(".triangle-down0");
	var arrTriangle1 = $(".triangle-down1");
	var arrTriangle2 = $(".triangle-down2")
	arrTriangle0.addClass("animated fadeInDown");
	var scrollHeight = 0;
	var littleNav = $(".littleNav");

	//	产品nav
	var $chanpin = $("#changpin");
	$chanpin.hover(function() {
		$(this).find("ul").css("display", "block").stop().animate({
			"opacity": 1
		}, 300);
	}, function() {
		$(this).find("ul").stop().animate({
			"opacity": 0
		}, 300, function() {
			$(this).css("display", "none")
		});
	})

	//小nav效果
	littleNav.click(function() {
		if($(this).index() == 1) {
			$("body,html").animate({
				scrollTop: 359
			}, 500, "swing")
		}
		if($(this).index() == 3) {
			$("body,html").animate({
				scrollTop: 670
			}, 500, "swing")
		}
		if($(this).index() == 5) {
			$("body,html").animate({
				scrollTop: 1472
			}, 500, "swing")
		}
	})
	$(window).scroll(function() {
		scrollHeight = $(this).scrollTop();
		var nowIndex = 0;
		var oNav = $(".nav2Wrap");
		if(scrollHeight > 369) {
			oNav.css("position", "fixed").css("top", "102px");
		} else {
			oNav.css("position", "absolute").css("top", "450px");
		}
		if(scrollHeight > 660) {
			arrTriangle0.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		} else {
			arrTriangle0.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		}
		if(660 < scrollHeight & scrollHeight < 1472) {
			arrTriangle1.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle1.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		}
		if(scrollHeight > 1470) {
			arrTriangle2.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle2.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		}
	})

	//弹框动画效果
	//	var arrTextBox=$(".textBox");
	//	var arrCapacityWrap=$(".capacityWrap");
	//	arrTextBox.hover(function(){
	//		$(this).find(arrCapacityWrap).css("display","block").removeClass("animated flipOutY").addClass("animated flipInX")
	//	},function(){
	//		$(this).find(arrCapacityWrap).removeClass("animated flipInX").fadeOut()
	//	});
	var show = $(".mask");
	var textBox = $(".textBox");
	textBox.click(function() {
		show.css("display","block");
		
//		$(window).scroll(function(){
//			
//		})
	//	alert($(this).index())
})
	var close = $(".closeShow");
	close.click(function() {
		show.css("display", "none");
		
	})
	
	
	//logo轮播效果
	var oLunboBox = $(".lunboBox");
	var lunboTimer = setInterval(function() {
		var left = parseInt(oLunboBox.css("left"));
		var arrLunboImg = oLunboBox.find("img");
		left -= 2;
		oLunboBox.css("left", left + "px");
		if(parseInt(oLunboBox.css("left")) == -196) {
			arrLunboImg.eq(8).after(arrLunboImg.eq(0));
			oLunboBox.css("left", 0);
		}
	}, 50);
})
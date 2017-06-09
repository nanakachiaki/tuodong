$(function() {
	//	产品nav
	var $chanpin=$("#changpin");
	$chanpin.hover(function(){
		$(this).find("ul").css("display","block").stop().animate({"opacity":1},300);
	},function(){
		$(this).find("ul").stop().animate({"opacity":0},300,function(){
			$(this).css("display","none")
		});
	})
	//小nav
	$(window).scroll(function() {
		scrollHeight = $(this).scrollTop();
		var nowIndex = 0;
		var oNav = $(".nav2Wrap");
		if(scrollHeight > 369) {
			oNav.css("position", "fixed").css("top", "102px");
		} else {
			oNav.css("position", "absolute").css("top", "450px");
		}
	})
	//路由
	var $content = $(".content");

	function loadPage() {
		if(window.location.hash) {
			var loadHash = window.location.hash.substring(1)
			$content.load(loadHash + ".html","",function(){})
		} else {
			$content.load("THQMS_purpose.html","",function(){})
		}
	}
	loadPage()
	//跳转
	var $load00 = $(".loadPage00"),
		$load01 = $(".loadPage01"),
		$load02 = $(".loadPage02"),
		$load03 = $(".loadPage03");
	$load00.click(function() {
		$content.load("THQMS_purpose.html","",function(){})
	})
	$load01.click(function() {
		$content.load("THQMS_feature00.html","",function(){})
	})
	$load02.click(function() {
		$content.load("THQMS_feature01.html","",function(){})
	})
	$load03.click(function() {
		$content.load("THQMS_feature02.html","",function(){})
	})
})
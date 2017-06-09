$(function(){
	var $content=$(".content");
	$content.load("download_content.html","",function(){})
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
		var pLeftNav=$(".leftNav");
		var $litleNav=$('#litleNav');
		var arrNavTittle=$('.navTittle');
			arrNavTittle.click(function(){
				$litleNav.text($(this).find("a").text());
			})
		if(scrollHeight > 369) {
			oNav.css("position", "fixed").css("top", "102px");
			pLeftNav.css("position", "fixed").css("top", "182px")
		} else {
			oNav.css("position", "absolute").css("top", "450px");
			pLeftNav.css("position", "absolute").css("top", "90px");
		}
	})
})

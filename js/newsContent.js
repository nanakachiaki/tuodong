$(function(){
	$(window).scroll(function(){
		scrollHeight = $(this).scrollTop();
		var nowIndex = 0;
		var oNav = $(".nav2Wrap");
		console.log(scrollHeight);
		//小nav定位
		if(scrollHeight > 369) {
			oNav.css("position", "fixed").css("top", "102px");
		} else {
			oNav.css("position", "absolute").css("top", "460px");
		}
	})
})

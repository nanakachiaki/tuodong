$(function() {
	var arrTriangle0 = $(".triangle-down0");
	var arrTriangle1 = $(".triangle-down1");
	arrTriangle0.addClass("animated fadeInDown");
	var littleNav = $(".littleNav");
	//小nav效果
	littleNav.click(function() {
		//		console.log($(this).index())
		if($(this).index() == 2) {
			$("body,html").animate({ scrollTop: 0 }, 500, "swing")
		}
		if($(this).index() == 4) {
			$("body,html").animate({ scrollTop: 600 }, 500, "swing")
		}
	})
	//	产品nav
	var $chanpin=$("#changpin");
	$chanpin.hover(function(){
		$(this).find("ul").css("display","block").stop().animate({"opacity":1},300);
	},function(){
		$(this).find("ul").stop().animate({"opacity":0},300,function(){
			$(this).css("display","none")
		});
	})
	var scrollHeight = 0;
	$(window).scroll(function() {
		scrollHeight = $(this).scrollTop();
		var nowIndex = 0;
		//下拉箭头动画
		if(scrollHeight > 580) {
			arrTriangle0.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		} else {
			arrTriangle0.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		}
		if(580 < scrollHeight) {
			arrTriangle1.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
		} else {
			arrTriangle1.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
		}
	})
	$.ajax({
		type: "get",
		url: "",
		async: true
	});
})

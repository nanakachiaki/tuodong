window.onload = function() {
//	产品nav
	var $chanpin=$("#changpin");
	$chanpin.hover(function(){
		$(this).find("ul").css("display","block").stop().animate({"opacity":1},300);
	},function(){
		$(this).find("ul").stop().animate({"opacity":0},300,function(){
			$(this).css("display","none")
		});
	})
	//设定banner部分高度
	var oBannerWrap = document.getElementsByClassName("bannerWrap")[0];

	//获取当前屏幕高度
	var fullHight;

	function getHight() {
		fullHight = document.documentElement.clientHeight + "px";
	}
	getHight()
	oBannerWrap.style.height = fullHight
	var oBannerBox = oBannerWrap.getElementsByClassName("bannerBox")[0]
	var arrBanner = oBannerBox.getElementsByClassName("banner")
	for(var i = 0; i < arrBanner.length; i++) {
		arrBanner[i].style.height = fullHight
	}

	//保持背景垂直居中
	var arrBannerImg = document.getElementsByClassName("bannerImg")
	for(var i = 0; i < arrBannerImg.length; i++) {
		arrBannerImg[i].style.marginTop = (parseInt(fullHight) - arrBannerImg[i].offsetHeight) / 2 + "px";
	}

	//屏幕大小变化时调整banner部分高度
	window.onresize = function() {
		getHight()
		oBannerWrap.style.height = fullHight
		for(var i = 0; i < arrBanner.length; i++) {
			arrBanner[i].style.height = fullHight
		}
		for(var i = 0; i < arrBanner.length; i++) {
			arrBanner[i].style.height = fullHight
		}
		for(var i = 0; i < arrBannerImg.length; i++) {
			arrBannerImg[i].style.marginTop = (parseInt(fullHight) - arrBannerImg[i].offsetHeight) / 2 + "px";
		}
	}
}
$(function() {
	var fullHight;

	function getHight() {
		fullHight = document.documentElement.clientHeight + "px";
	}
	getHight();

	//滚动动画
	var oBannerBox = $("#bannerBox");
	var arrBannerNav = $(".mark");
	var arrBannerLi = $("#bannerNav li");
	var animateNow = true;
	var nowIndex = 0;
	var animateTimer;
	var oHeaderMark = $(".headerMark");
	var oHeaderWrap = $("#headerWrap");
	var oChangeNum = $("#num");

	//侧栏nav效果
	arrBannerLi.click(function() {
		if(nowIndex != $(this).index()) {
			nowIndex = $(this).index();
			oBannerBox.stop(true, false).animate({ "top": -nowIndex * parseInt(fullHight) + "px" }, 500, "swing");
			if(nowIndex == 0) {
				oHeaderWrap.stop(true, false).animate({ "marginTop": "30px" });
			} else {
				oHeaderWrap.stop(true, false).animate({ "marginTop": 0 });
			}
			arrBannerNav.fadeOut().eq(nowIndex).fadeIn();
			
		}

	})
	$(window).resize(function() {
		getHight();
		console.log(nowIndex);
		oBannerBox.css("top", -nowIndex * parseInt(fullHight) + "px");
	})
	var scrollFunc = function(e) {
		e = e || window.event;
		if(e.wheelDelta) { //IE/Opera/Chrome
			if(e.wheelDelta > 0) {
				//				向上
				if(nowIndex > 0) {
					if(!animateTimer) {
						animateTimer = setTimeout(animated(oBannerBox, "up", fullHight, function() {
							animateTimer = undefined;
							nowIndex--;
							//右侧nav部分
							arrBannerNav.eq(nowIndex).fadeIn();
						}))
					}
					if(nowIndex <= 1) {
						oHeaderWrap.stop(true, false).animate({ "marginTop": "30px" })
					}
					if(nowIndex == 3) {
						//第三版数字动画部分
						var num = 0;
						var numTimer = setInterval(function() {
							num += 16;
							oChangeNum.text(num)
							if(parseInt(num) >= 420) {
								clearInterval(numTimer);
								oChangeNum.text(420)
							}
						}, 30)
					}
				}
			} else {
				//				向下
				if(nowIndex < arrBannerLi.length - 1) {
					if(!animateTimer) {
						animateTimer = setTimeout(animated(oBannerBox, "down", fullHight, function() {
							animateTimer = undefined;
							nowIndex++;
							//右侧nav部分
							arrBannerNav.eq(nowIndex).fadeIn();
						}), 1000)
					}
					if(nowIndex >= 0) {
						oHeaderWrap.stop(true, false).animate({ "marginTop": 0 })
					}
					if(nowIndex == 1) {
						//第三版数字动画部分
						var num = 0;
						var numTimer = setInterval(function() {
							num += 16;
							oChangeNum.text(num)
							if(parseInt(num) >= 420) {
								clearInterval(numTimer);
								oChangeNum.text(420)
							}
						}, 30)

					}
				}
			}
		} else if(e.detail) { //Firefox
			if(e.detail > 0) {
				//向下
				if(nowIndex < arrBannerLi.length - 1) {
					if(!animateTimer) {
						animateTimer = setTimeout(animated(oBannerBox, "down", fullHight, function() {
							animateTimer = undefined;
							nowIndex++;
							//右侧nav部分
							arrBannerNav.eq(nowIndex).fadeIn();
						}), 1000)
					}
					if(nowIndex >= 0) {
						oHeaderWrap.stop(true, false).animate({ "marginTop": 0 })
					}
					if(nowIndex == 1) {
						//第三版数字动画部分
						var num = 0;
						var numTimer = setInterval(function() {
							num += 16;
							oChangeNum.text(num)
							if(parseInt(num) >= 420) {
								clearInterval(numTimer);
								oChangeNum.text(420)
							}
						}, 30)
					}
				}
			} else {
				//向上
				if(nowIndex > 0) {
					if(!animateTimer) {
						animateTimer = setTimeout(animated(oBannerBox, "up", fullHight, function() {
							animateTimer = undefined;
							nowIndex--;
							//右侧nav部分
							arrBannerNav.eq(nowIndex).fadeIn();
						}))
					}
					if(nowIndex <= 1) {
						oHeaderWrap.stop(true, false).animate({ "marginTop": "30px" })
					}
					console.log(nowIndex)
					if(nowIndex == 3) {
						//第三版数字动画部分
						var num = 0;
						var numTimer = setInterval(function() {
							num += 16;
							oChangeNum.text(num)
							if(parseInt(num) >= 420) {
								console.log(num)
								clearInterval(numTimer);
								oChangeNum.text(420)
							}
						}, 30)
					}
				}
			}
		}
	}
	if(document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	} //W3C
	window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari
	function animated(obj, target, fullHight, fn) {
		var targetPx;
		if(target == "down") {
			arrBannerNav.fadeOut();
			arrBannerLi.fadeIn();
			targetPx = -(nowIndex + 1) * parseInt(fullHight) + "px";
		} else if(target == "up") {
			arrBannerNav.fadeOut();
			targetPx = -(nowIndex - 1) * parseInt(fullHight) + "px"
		}
		obj.stop(true, false).animate({ "top": targetPx }, 500, "swing", fn)
	}
})
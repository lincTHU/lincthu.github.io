//实现单击右下角灰条时隐藏/开启评论区和灰条的功能
$('#Hover').click(function(){
	$('#Hover').fadeToggle(1500);
	$('#Comment').slideUp(1500);
})

//添加卖萌区的两个事件，单击图片分别增加钱和RP，同时钱打到一定数量设置了搞怪的出发事件
$("#clickEat").click(function(){
	$('#money').html(parseInt($('#money').html()) + 1 + '元');
	if (parseInt($('#money').html()) == 50)
		alert("壕！今晚我是你的人！");
	else if (parseInt($('#money').html()) == 100)
		alert("壕！今晚别把我当人！");
	else if (parseInt($('#money').html()) == 15)
		alert("作者望了望碗里的几块零钱，鄙夷的看了你一眼。")
})

$("#clickPlay").click(function(){
	$('#renpin').html(parseInt($('#renpin').html()) + 1);
})
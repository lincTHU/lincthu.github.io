$('#Hover').click(function(){
	$('#Hover').fadeToggle(1500);
	$('#Comment').slideUp(1500);
})

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
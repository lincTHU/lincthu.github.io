//获取图片和相关信息
$.getJSON('js/view_content.js', function(a){
		a = a.anime;
		for (var i = 0; i < a.length; i++) {
			//创建并插入图片节点
			img = $('<img class = "focus_view_picture"/>');
			if (i == 0) {
				li = $('<li id = "pic_show" style = "z-index:5;"/>');
			}
			else li = $('<li style = "display:none"/>');
			img.attr('src', 'pic/' + a[i].picName);
			$('#focus_view ul').append(li.append(img));

			//创建并插入图片信息
			title = $('<p class = "focus_text_title"/>');
			title.html(a[i].title + "");
			article = $('<p class = "focus_text_article"/>');
			article.html("&nbsp;&nbsp;&nbsp;&nbsp;" + a[i].contents);
			if (i == 0) {
				text_li = $('<li class = "text_show"/>');
			}
			else text_li = $('<li class = "text_hidden"/>');
			
			text_li.append(title);
			text_li.append(article);
			$('#focus_text ul').append(text_li);
		}
		var w=screen.width;//可见区域宽度
		var h=document.documentElement.clientHeight;//可见区域高度
		$('.focus_view_picture, #focus').height(h);
		$('.focus_view_picture').width(w);
});

//读取存在本地的历史信息并读入右下角历史状态栏中
var storage = window.localStorage;
if(storage.picName != null)
{
	$('#last_pic').html($('#last_pic').html()+' ' + storage.picName);
	$('#last_page').html($('#last_page').html()+' ' + storage.pageNum);
	/*alert("你上次浏览到"+storage.picName);*/
}


//设置触发事件，当鼠标不动超过2S后标题栏自动淡出，使得整张图片更加完整。
var stop_time = 0;
$(document).mousemove(function(){
	clearInterval(stop_time);
	$("#focus_text").fadeIn(1000);
	stop_time = setInterval("$('#focus_text').fadeOut(2000)", 2000);
})

//设置触发事件，5S为周期自动向右切换图片
setInterval("f()", 5000);

//向右切换图片的函数
function f(){
	if($('#pic_show').next().length != 0)//当右边还有图片时，读取下一张为要显示的图片，原图设为淡出效果，下一张淡入效果
	{
		var temp = $('#pic_show').next();
		$('#pic_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('#pic_show').attr('id', '');
		temp.attr('id', 'pic_show');

		temp = $('.text_show').next();
		$('.text_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('.text_show').attr('class', 'text_hidden');
		temp.attr('class', 'text_show');

	}
	else//当右边没有图片时，读取左边第一张图片为下一张要显示的图片
	{
		var temp = $($('#pic_show').parent()[0].firstElementChild);
		$('#pic_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('#pic_show').attr('id', '');
		temp.attr('id', 'pic_show');

		temp = $($('.text_show').parent()[0].firstElementChild);
		$('.text_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('.text_show').attr('class', 'text_hidden');
		temp.attr('class', 'text_show');
	}
	storage.setItem("picName", $(".text_show .focus_text_title").html());//切换图片完成后将本次浏览的图片数据存储在本地中
}


//向左切换同理
$('#focus_left').click(function(){
	if($('#pic_show').prev().length != 0)
	{
		var temp = $('#pic_show').prev();
		$('#pic_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('#pic_show').attr('id', '');
		temp.attr('id', 'pic_show');

		temp = $('.text_show').prev();
		$('.text_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('.text_show').attr('class', 'text_hidden');
		temp.attr('class', 'text_show');
	}
	else
	{
		var temp = $($('#pic_show').parent()[0].lastElementChild);
		$('#pic_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('#pic_show').attr('id', '');
		temp.attr('id', 'pic_show');

		temp = $($('.text_show').parent()[0].lastElementChild);
		$('.text_show').fadeOut(1500);
		temp.fadeIn(1500);
		$('.text_show').attr('class', 'text_hidden');
		temp.attr('class', 'text_show');
	}
	storage.setItem("picName", $(".text_show .focus_text_title").html());
});

$('#focus_right').click(f);

//这里分别设置了左边和右边两个区域，当鼠标进入左/右区域时，相应的箭头按钮才会显示出来，而当鼠标离开时，则会触发淡出效果。也保证了图片显示的完整性。
$("#focus_left_area").mouseenter(function(){
	$('#focus_left').fadeIn(500);
})

$('#focus_left_area').mouseleave(function(){
	$('#focus_left').fadeOut(500);
});

$('#focus_right_area').mouseenter(function(){
	$('#focus_right').fadeIn(500);
});

$('#focus_right_area').mouseleave(function(){
	$('#focus_right').fadeOut(500);
});


//设置了当点击标题栏的相关信息时，可以打开评论区
$("#focus_text").click(function(){
	$("#Comment").slideToggle(1500);
	$('#Hover').fadeToggle(1500);
})




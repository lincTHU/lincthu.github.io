$("#comment_order").find("li").mouseenter(function(){
	$(this).addClass('comment_mouse_on');
})

$("#comment_order").find("li").mouseleave(function(){
	if ($(this).hasClass('comment_mouse_on'))
		$(this).removeClass('comment_mouse_on');
})

$("#page_list_box").on('mouseenter', 'a', function(){
	$(this).addClass('comment_mouse_on');
});

$("#page_list_box").on('mouseleave', 'a', function(){
	if ($(this).hasClass('comment_mouse_on'))
		$(this).removeClass('comment_mouse_on');
});


var comment;
var e = 10; //the number of comments in every page;
$.getJSON('js/comment_content.js', function(a){
		localStorage.setItem("page", 1);
		a = a.comment;
		comment = a;
		//得到page_list_box节点
		parent = $('#page_list_box');

		//得到一共几页几个评论
		num = comment.length;
		page = Math.ceil(num/e);
		span = $('<span/>').html('共 ' + page + ' 页 / ' + num + ' 个评论');

		//创建首页节点
		first = $('<a class = "indexPage"/>').html('首页');
		parent.append(span, first);

		//创建页码节点
		for (var i = 1; i <= page; i++) {
			if (i == 1) {
				parent.append($('<a class = "page_strong"/>').html(i+''));
			}
			else parent.append($('<a class = "page"/>').html(i+''));
		};
		//创建下页和末页节点
		next = $('<a class = "nextPage"/>').html('下页');
		end = $('<a class = "endPage"/>').html('末页');
		parent.append(next, end);

		//更新评论区内容
		n = $('#page_list_box .page_strong').html();
		parent = $('#comment_area ul').last();
		for (var i = 0; i < e && (n-1)*e+i+1 < num; i++) {
			//得到第一个的序号
			k = (n-1)*e+i;
			//得到头像区数据
			div1 = $('<div class = "comment_facebox"/>').append($('<img class = "comment_face"/>').attr('src', 'pic/comment_item/'+comment[k].face));
			//得到标题区数据
			div2 = $('<div class = "comment_item_title"/>').html("#" + (k+1) + "<span class = 'comment_username'>" + comment[k].username + "</span>");
			//得到内容区数据
			div3 = $('<div class = "comment_content"/>').html(comment[k].content + '');
			//得到时间及其他信息
			div4 = $('<div class = "comment_item_footer"/>').html(comment[k].date + '<div class = "comment_report"><a  class = "zan" style = "margin-right:10px;">赞 +0</a><a class = "moe">层主不要卖萌 +0</a></div>');
			//组合在li中插入ul
			parent.append($('<li class = "comment_item"/>').append(div1, div2, div3, div4));
		};
	}
)

//绑定点击页数时跳转页面
$('#page_list_box').on('click', 'a:not(.page_strong)', function(){
	n = $(this).html();
	if (n == '首页')//如果点击首页时页数已经是第一页则跳出提示
	{
		n = 1;
		if ($('#page_list_box .page_strong').html() == n) {alert('已经到首页了啦(;¬_¬) ');return;}
	}
	if(n == '末页')//如果点击末页时页数已经是最后一页则跳出提示
	{
		n = Math.ceil(comment.length/e);
		if ($('#page_list_box .page_strong').html() == n) {alert('已经到尾页了啦(;¬_¬) ');return;}
	}
	if(n == '下页')//如果点击下一页时页数已经是最后一页则跳出提示
	{
		n = parseInt($('#page_list_box .page_strong').html()) + 1;
		if (n > Math.ceil(comment.length/e)) {alert('已经到尾页了啦(;¬_¬) ');return;}
	}
	parent = $('#comment_area ul').last();
	parent.empty();
	for (var i = 0; i < e && (n-1)*e+i < comment.length; i++) {
		//得到第一个的序号
		k = (n-1)*e+i;
		//得到头像区数据
		div1 = $('<div class = "comment_facebox"/>').append($('<img class = "comment_face"/>').attr('src', 'pic/comment_item/'+comment[k].face));
		//得到标题区数据
		div2 = $('<div class = "comment_item_title"/>').html("#" + (k+1) + "<span class = 'comment_username'>" + comment[k].username + "</span>");
		//得到内容区数据
		div3 = $('<div class = "comment_content"/>').html(comment[k].content + '');
		//得到时间及其他信息
		div4 = $('<div class = "comment_item_footer"/>').html(comment[k].date + '<div class = "comment_report"><a class = "zan" style = "margin-right:10px;">赞 +0</a><a class = "moe">层主不要卖萌 +0</a></div>');
		//组合在li中插入ul
		parent.append($('<li class = "comment_item"/>').append(div1, div2, div3, div4));
	};

	t = $('#page_list_box .page_strong').attr('class', 'page');//清除当前页的强调效果

	if($(this).html() === '首页')//如果是首页则对第一页设置强调效果
	{
		$('#page_list_box :contains(1)').attr('class', 'page_strong');
	}
	else if($(this).html() === '末页')//如果是首页则对最后一页设置强调效果
	{
		$('#page_list_box a:not(.nextPage, .endPage)').last().attr('class', 'page_strong');
	}
	else if($(this).html() === '下页')//如果是下页则对当前设置了强调效果的下一页设置强调效果
	{
		t.next().attr('class', 'page_strong');
	}
	else $(this).attr('class', 'page_strong');//其他情况则对选中的页码设置强调效果
	storage.setItem("pageNum", $("#page_list_box .page_strong").html());//同时本地存储此时浏览的页数
	
	
})

//蠢萌的函数们
$('#reply_sort, #agree_sort').click(function(){
	alert("蠢萌的作者还在施工中..");
})

$("#comment_list").on("click", '.zan' ,function(){
	alert("蠢萌的作者还在施工中");
});

$("#comment_list").on("click", '.moe' ,function(){
	alert("蠢萌的作者还在施工中");
});
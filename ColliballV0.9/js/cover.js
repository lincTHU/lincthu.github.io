var col= ["#31c6e4", "#2ce4ab", "#e4de31",
		  "#ffad50", "#e4472d", "#ffad50", "#e4de31",
		  "#2ce4ab"];
var pos = 0;
function changeColor(){
	if(pos<0||pos>9){
		pos=0;
	}
	$('.cover').css("background", col[pos]);
	setTimeout(changeColor, 4000);
	pos++;
}

function start2PlayerMode(){
}

function start4PlayerMode(){

}

function startOnlineMode(){

}

$(document).ready(function(){
	changeColor();

	var modeArray = $('.hint').children();
	$(modeArray).click(function(){
		$('.cover').css("z-index", '1');
		$('.cover').css("z-index", '2');
		$('.partLeft').css("right", '50%');
		$('.partRight').css("left", '50%');
		switch($(this).attr("rel")){
			case "2Player": gameModeInit(1); break;
			case "4Player": gameModeInit(2); break;
			case "Online": startOnlineMode(); break;
			default: break;
		}
		var w = document.documentElement.clientWidth;
   		var h = document.documentElement.clientHeight;		//可见区域高度
   		setTimeout(function(){}, 1500);
	});
});



function end(){
	$('#myCanvas').remove();
	$('.partLeft').css("right", '100%');
	$('.partRight').css("left", '100%');
	setTimeout(function(){
		$('.cover').css("z-index", '5');
		$('.hint').css("z-index", '6');
		$('.footer').css("z-index", '6');
	}, 3000);
}
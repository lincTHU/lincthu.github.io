$(".hover-frame").hide();

$(".status-area").mouseenter(
	function(){
/*	var currentMousePos = { x: -1, y: -1 };
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    })*/

    var id = $(this).attr("name");
    var status = statusDB[id];
    //load status pic
    $(".hover-frame").find("img").attr("src", status.src);
    $(".hover-header-name").text(status.name);
    $(".hover-content-discription-info").text(status.info);
    if (status.duration != undefined){
   		$(".hover-content-discription-duration").html("<a style=\"color:#0AA30E\">持续时间：</a>"+ status.duration + "秒");
   	}
   	else $(".hover-content-discription-duration").text("");

    //load status location
    var statusOffset = $(this).offset();
    statusOffset.top += 20;
    statusOffset.left += 20;
	$(".hover-frame").css(statusOffset);
	$(".hover-frame").show();
	}
).mouseleave(function(){
		$(".hover-frame").hide();
	}
);

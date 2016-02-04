pageHeight = window.innerHeight ;
pageWidth = window.innerWidth ;
console.log(pageHeight);
$("#title").css("margin-top", 0.4 * pageHeight + "px");

// contentPage
$("#contTitle").css("margin-left", 0.25 * pageWidth + "px");
$("#contTitle").css("margin-top", 0.15 * pageHeight + "px");
$("#contTitle").css("margin-bottom", 0.05 * pageHeight + "px");

$(".cont").css("margin-left", 0.35 * pageWidth + "px");
$(".contLi").css("margin-left", 0.4 * pageWidth + "px");

// softwarePage
divHeight = $(".coverTitle").height();
divWidth = $(".coverTitle").width();
$(".coverTitle").css("margin-left", 0.5 * (pageWidth - divWidth) + "px");
$(".coverTitle").css("margin-top", 0.42 * (pageHeight - divHeight)  + "px");


pageId = ["#Cover", "#Content", "#SoftwareCover", "#S1", "#S2", "#S3", "#gameCover", "#G1", "#G2", "#G3"];

pageIndex = 0;

$("#arrowLeft").click(function(event) {
	if (pageIndex == 0)
		return;
	else {
		$(pageId[pageIndex]).fadeOut('400', function() {});
		window.scrollTo(0, 0);
		$(pageId[--pageIndex]).fadeIn('400', function() {});
		if (pageIndex == 0) {
			$("#arrowLeft").fadeOut('500', function() {});
		}
		if (pageIndex < pageId.length-1) {
			$("#arrowRight").fadeIn('500', function() {});
		}
		
	};

});

$("#arrowRight").click(function(event) {
	if (pageIndex == pageId.length-1)
		return;
	else {
		$(pageId[pageIndex]).fadeOut('400', function() {});
		window.scrollTo(0, 0);
		$(pageId[++pageIndex]).fadeIn('400', function() {});
		if (pageIndex == pageId.length-1) {
			$("#arrowRight").fadeOut('500', function() {});
		}
		if (pageIndex > 0) {
			$("#arrowLeft").fadeIn('500', function() {});
		}

	};

});
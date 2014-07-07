m = document.getElementsByClassName("sidebar_c")[0];
month = document.getElementsByClassName("fc-header-title")[0].firstElementChild.innerText[5];
if (month == 7)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/7.png');");
if (month == 6)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/6.png');");
if (month == 5)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/5.png');");
if (month == 4)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/4.png');");
if (month == 3)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/3.png');");
if (month == 2)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/2.png');");
if (month == 1)
	m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/1.png');");

pr = document.getElementsByClassName("fc-button fc-button-prev fc-state-default fc-corner-left")[0];
pr.setAttribute("onclick", "changeMonth()");
ne = document.getElementsByClassName("fc-button fc-button-next fc-state-default fc-corner-right")[0];
ne.setAttribute("onclick", "changeMonth()");
td = document.getElementsByClassName("fc-button fc-button-today fc-state-default fc-corner-left fc-corner-right fc-state-disabled")[0];
td.setAttribute("onclick", "changeMonth()");

var changeMonth = function(){
	m = document.getElementsByClassName("sidebar_c")[0];
	month = document.getElementsByClassName("fc-header-title")[0].firstElementChild.innerText[5];
	if (month == 7)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/7.png');");
	if (month == 6)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/6.png');");
	if (month == 5)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/5.png');");
	if (month == 4)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/4.png');");
	if (month == 3)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/3.png');");
	if (month == 2)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/2.png');");
	if (month == 1)
		m.setAttribute("style", "background-size:cover;background-position:center;background-image:url('https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/calendar_theme/1.png');");
}

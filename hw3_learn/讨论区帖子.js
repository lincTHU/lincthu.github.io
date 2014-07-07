//j=document.createElement("script");j.src="https://raw.githubusercontent.com/lincTHU/lincthu.github.io/master/hw3_learn/%E8%AE%A8%E8%AE%BA%E5%8C%BA%E5%B8%96%E5%AD%90.js";document.body.appendChild(j)
head = document.getElementsByClassName("toolbar")[0];
b = document.createElement("button");
b.innerHTML = '<img><span>So What( </span><span>0</span><span> )</span>';
b.className = "red-button"; 
b.setAttribute("onclick", "clickOnSoWhat()");
b.setAttribute("type", "button");
b.setAttribute("style", "padding:0 26px; float:right; margin-top:6px; margin-right:10px");
b.lastElementChild.previousElementSibling.setAttribute("id", "SoWhatNum");
bItem = b.children;
bItem[0].setAttribute("style", "width: 20px; vertical-align: top; margin:3px 5px 0 0;");
bItem[0].className = "hidden";
b.lastElementChild.setAttribute("style", "text-align:center")
head.firstElementChild.appendChild(b);

var clickOnSoWhat = function(){
	m = document.getElementById("SoWhatNum");
	num = parseInt(m.innerText) + 1;
	m.innerText = num;
	return;
};


head = document.getElementsByClassName("toolbar")[0];
b = document.createElement("button");
b.innerHTML = '<img><span>同问 ( </span><span>0</span><span> )</span>';
b.className = "red-button"; 
b.setAttribute("onclick", "clickOnWhy()");
b.setAttribute("type", "button");
b.setAttribute("style", "padding:0 26px; float:right; margin-top:6px; margin-right:10px");
b.lastElementChild.previousElementSibling.setAttribute("id", "whyNum");
bItem = b.children;
bItem[0].setAttribute("style", "width: 20px; vertical-align: top; margin:3px 5px 0 0;");
bItem[0].className = "hidden";
b.lastElementChild.setAttribute("style", "text-align:center")
head.firstElementChild.appendChild(b);

var clickOnWhy = function(){
	m = document.getElementById("whyNum");
	num = parseInt(m.innerText) + 1;
	m.innerText = num;
	return;
}




tb = document.getElementById("homeworklist").firstElementChild.children;
for(i = 0; i < tb.length; i++)
{
	item = tb[i].children;
	if (item[2].firstElementChild.innerText != '已改批改') 
	{
		item[8].firstElementChild.setAttribute('style', 'color:#969696');
		item[8].firstElementChild.removeAttribute("href");
	}
	else (item[2].firstElementChild.innerText = '批改完毕')
	tb[i].insertBefore(item[2], item[6]);
	tb[i].appendChild(item[6]);
}
tb = document.getElementsByClassName("hw-table-title")[0].firstElementChild.firstElementChild.firstElementChild;
state = tb.children;
tb.insertBefore(state[2], state[6]);
tb.appendChild(state[6]);
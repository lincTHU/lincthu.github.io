t = document.getElementsByClassName('lh30');
for (i = 1; i < t.length - 1; i++)
{
	b = t[i].firstElementChild;
	a = document.createElement('td');
	t[i].insertBefore(a, b);
	a.innerHTML = '<a style = "margin-left:10px" >'+i;
	m = t[i].lastElementChild;
	for (j = 0; j < 3; j++)
	{
		m.firstElementChild.innerText = 1073741824;
		m = m.previousElementSibling;
	}
}


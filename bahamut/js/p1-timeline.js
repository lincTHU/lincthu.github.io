//p1-1
var container = document.getElementById('p1.1-timeline-area');

var items = new vis.DataSet([
    {id: 0, content: '死刑', start: moment('00:20', 'HH:mm'), end: moment('00:24', 'HH:mm'), subgroup:1, group: 2},
    {id: 3, content: '垂直下落', start: moment('00:06', 'HH:mm'), subgroup:1, group: 2},
    {id: 4, content: '垂直下落', start: moment('00:27', 'HH:mm'), subgroup:1, group: 2},
    {id: 8, content: '旋风', start: moment('00:10', 'HH:mm'), end: moment('00:12', 'HH:mm'), subgroup:2, group: 2},
    {id: 11, content: '火球', start: moment('00:09', 'HH:mm'), end: moment('00:15', 'HH:mm'),subgroup:3, group: 2}
  ]);



var groups = new vis.DataSet([
	{id: 1, content: '减伤'},
	{id: 2, content: '双塔尼亚', subgroupOrder: 'subgroup', subgroupStack: {1: true, 2: true, 3:true}}
]);


items.add([
	{id: 25, content: '圣光幕帘', start: moment('00:00', 'HH:mm'), end: moment('00:15', 'HH:mm'),subgroup:5, group: 1}
]);

function updateTooltips(){
	for (var i = items.length - 1; i >= 0; i--) {
		tempItem = items._data[i];
		if (tempItem.title != undefined)
			continue;
		if (tempItem.group != 1)
			continue;
		if (tempItem.end == undefined)
			tempItem.title = tempItem.start._i + "|" + tempItem.group +  "发动了\""  + tempItem.content + "\"<br>";
		else{
			tempItem.title = tempItem.start._i + "|" + tempItem.group +  "正在发动\""  + tempItem.content + "\"<br>"
			+ tempItem.end._i + "|" + tempItem.group +  "发动了\""  + tempItem.content + "\"";
		}
		tempItem.editable = false;
	}
}

// updateTooltips();
  // Configuration for the Timeline
var options = {
	editable: true,
	min: moment('00:00', 'HH:mm'),
	max: moment('00:32', 'HH:mm'),
	showMajorLabels: false,
	minHeight: '15rem',
	zoomMin: 600000,
	stack: false,
	stackSubgroups: true
};

// var options.hiddenDates = ;
// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

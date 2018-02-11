var container = document.getElementById('p3.0-timeline-area');

var items = new vis.DataSet([
    {content: '第七<br>灵灾', start: moment('06:05', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息', start: moment('06:22', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息', start: moment('07:03', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息x3', start: moment('07:54', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息', start: moment('08:41', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息', start: moment('08:55', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息x3', start: moment('09:48', 'HH:mm'), subgroup:1, group: 2},
    {content: '核爆<br>吐息', start: moment('10:54', 'HH:mm'), subgroup:1, group: 2},
    {content: '平击', start: moment('06:30', 'HH:mm'), subgroup:2, group: 2},
    {content: '平击', start: moment('07:11', 'HH:mm'), subgroup:2, group: 2},
    {content: '平击', start: moment('08:49', 'HH:mm'), subgroup:2, group: 2},
    {content: '平击', start: moment('10:50', 'HH:mm'), subgroup:2, group: 2},
    {content: '进军<br>三重奏', start: moment('06:34', 'HH:mm'), end: moment('06:34', 'HH:mm'), subgroup:3, group: 2},
    {content: '黑炎<br>三重奏', start: moment('07:15', 'HH:mm'), end: moment('07:36', 'HH:mm'), subgroup:3, group: 2},
    {content: '灾厄<br>三重奏', start: moment('08:07', 'HH:mm'), end: moment('08:25', 'HH:mm'), subgroup:3, group: 2},
    {content: '天地<br>三重奏', start: moment('09:00', 'HH:mm'), end: moment('09:25', 'HH:mm'), subgroup:3, group: 2},
    {content: '连击<br>三重奏', start: moment('10:01', 'HH:mm'), end: moment('10:28', 'HH:mm'), subgroup:3, group: 2},
    {content: '群龙<br>八重奏', start: moment('10:58', 'HH:mm'), end: moment('11:30', 'HH:mm'), subgroup:3, group: 2},
    {content: '十亿<br>核爆', start: moment('07:38', 'HH:mm'), subgroup:2, group: 2},
    {content: '十亿<br>核爆', start: moment('08:29', 'HH:mm'), subgroup:2, group: 2},
    {content: '十亿<br>核爆', start: moment('09:33', 'HH:mm'), subgroup:2, group: 2},
    {content: '十亿<br>核爆', start: moment('10:33', 'HH:mm'), subgroup:2, group: 2}
  ]);



var groups = new vis.DataSet([
	{id: 1, content: '减伤'},
	{id: 2, content: '巴哈<br>姆特', subgroupOrder: 'subgroup', subgroupStack: {1: true, 2: true, 3:true, 4:true, 5:true, 6:true}}
]);


items.add([
	// {id: 25, content: '圣光幕帘', start: moment('00:00', 'HH:mm'), end: moment('00:15', 'HH:mm'),subgroup:5, group: 1}
]);

updateTooltips();

  // Configuration for the Timeline
var options = {
	editable: true,
	min: moment('05:50', 'HH:mm'),
	max: moment('12:00', 'HH:mm'),
	showMajorLabels: false,
	minHeight: '10rem',
	zoomMin: 600000,
	stack: false,
	stackSubgroups: true
/*	timeAxis:  {scale: 'minute', step: 5},
	orientation: 'bottom'*/
};

// options.timeAxis = {
// 	scale: 'second',
// 	step: 1
// }

// var options.hiddenDates = ;
// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);




// quickmarch
var items = new vis.DataSet([
    {content: '进军<br>三重奏', start: moment('06:34', 'HH:mm'), end: moment('06:38', 'HH:mm'), subgroup:1, group: 2},
    {content: '百万核爆冲', start: moment('06:42', 'HH:mm'), end: moment('06:46', 'HH:mm'), subgroup:1, group: 2},
    {content: '旋风', start: moment('06:46', 'HH:mm'), subgroup:2, group: 2},
    {content: '百万核爆', start: moment('06:49', 'HH:mm'), end: moment('06:54', 'HH:mm'), subgroup:1, group: 2},
    {content: '大地摇动', start: moment('06:57', 'HH:mm'), subgroup:1, group: 2},
    {content: '风暴之翼', start: moment('06:59', 'HH:mm'), subgroup:1, group: 2}
]);

updateTooltips();

var container = document.getElementById('p3.1-timeline-area');
options.min = moment('06:30', 'HH:mm');
options.max = moment('07:00', 'HH:mm');
var timeline = new vis.Timeline(container, items, groups, options);

// blackfire
var items = new vis.DataSet([
    {content: '黑炎<br>三重奏', start: moment('07:15', 'HH:mm'), end: moment('07:19', 'HH:mm'), subgroup:1, group: 2},
    {content: '百万核爆冲', start: moment('07:24', 'HH:mm'),  subgroup:1, group: 2},
    {content: '液体<br>地狱', start: moment('07:24', 'HH:mm'), subgroup:2, group: 2},
    {content: '液体<br>地狱', start: moment('07:25', 'HH:mm'), subgroup:2, group: 2},
    {content: '液体<br>地狱', start: moment('07:26', 'HH:mm'), subgroup:2, group: 2},
    {content: '液体<br>地狱', start: moment('07:27', 'HH:mm'), subgroup:2, group: 2},
    {content: '液体<br>地狱', start: moment('07:28', 'HH:mm'), subgroup:2, group: 2},
    {content: '超新星', start: moment('07:34', 'HH:mm'), subgroup:2, group: 2},
    {content: '超新星', start: moment('07:35', 'HH:mm'), subgroup:2, group: 2},
    {content: '超新星', start: moment('07:37', 'HH:mm'), subgroup:2, group: 2},
    {content: '超新星', start: moment('07:38', 'HH:mm'), subgroup:2, group: 2},
    {content: '热离子光束', start: moment('07:27', 'HH:mm'),  subgroup:1, group: 2},
    {content: '百万核爆(分摊)', start: moment('07:30', 'HH:mm'), subgroup:1, group: 2},
    {content: '百万核爆(踩塔)', start: moment('07:38', 'HH:mm'), subgroup:1, group: 2}
]);

updateTooltips();

var container = document.getElementById('p3.2-timeline-area');
options.min = moment('07:10', 'HH:mm');
options.max = moment('07:50', 'HH:mm');
var timeline = new vis.Timeline(container, items, groups, options);

// fellruin
var items = new vis.DataSet([
    {content: '灾厄三重奏', start: moment('08:07', 'HH:mm'), end: moment('08:12', 'HH:mm'), subgroup:1, group: 2},
    {content: '风暴之翼', start: moment('08:26', 'HH:mm'), subgroup:1, group: 2},
    {content: '以太失控', start: moment('08:22', 'HH:mm'), end: moment('08:27', 'HH:mm'), subgroup:3, group: 2},
    {content: '台词2：凶鸟冲+月流电圈', start: moment('08:20', 'HH:mm'), subgroup:1, group: 2},
    {content: '台词1：月流电圈+凶鸟冲', start: moment('08:20', 'HH:mm'), subgroup:2, group: 2},
    {content: '十亿核爆', start: moment('08:30', 'HH:mm'), end: moment('08:36', 'HH:mm'), subgroup:1, group: 2},
    {content: '陨石流', start: moment('08:31', 'HH:mm'), subgroup:2, group: 2}
]);

updateTooltips();

var container = document.getElementById('p3.3-timeline-area');
options.min = moment('08:00', 'HH:mm');
options.max = moment('08:40', 'HH:mm');
var timeline = new vis.Timeline(container, items, groups, options);
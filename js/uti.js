//var page2navList = document.getElementsByClassName('page2-nav')[0].getElementsByTagName('a');

//var courseListNav = document.getElementsByClassName('courseListNav')[0].getElementsByTagName('a');

//for(var i = 0; i < page2navList.length; i++) {
//	page2navList[i].addEventListener("tap", active);
//
//}

//for(var i = 0; i < courseListNav.length; i++) {
//	courseListNav[i].addEventListener("tap", activeNav);
//}

//function active() {
//	for(var i = 0; i < page2navList.length; i++) {
//		page2navList[i].style.color = '#333';
//	}
//	this.style.color = 'orange';
//}

//function activeNav() {
//	for(var i = 0; i < courseListNav.length; i++) {
//		courseListNav[i].style.color = '#333';
//	}
//	this.style.color = 'orange';
//}

//console.log(mui('.mui-iframe-wrapper'));
//
//mui('#windowShow').on("swiperight",function(e){
//	
//	console.log(111);
//	mui.back(-1);
//	
//})

var iWidth = document.documentElement.clientWidth / 16;
document.getElementsByTagName('html')[0].style.fontSize = iWidth + 'px';

window.onresize = function() {

	iWidth = document.documentElement.clientWidth / 16;
	document.getElementsByTagName('html')[0].style.fontSize = iWidth + 'px';

}
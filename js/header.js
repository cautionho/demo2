var search = document.getElementById('search');

var busying = true;

search.addEventListener("tap", function() {

	if(busying) {
		document.getElementById('search-area').style.transform = 'scale(1)';
		busying = false;
	} else {
		document.getElementById('search-area').style.transform = 'scale(0)';
		busying = true;
	}
},false);

//关闭搜索框
var close = document.getElementsByClassName('closeSearch')[0];


close.addEventListener("tap",closeSearch,false);

function closeSearch(){
	
	document.getElementById('search-area').style.transform = 'scale(0)';
		busying = true;
	
}

document.getElementById('all').addEventListener("tap", function() {
	mui.openWindow({
		url: './totalCourse.html',
		id: 'totalCourse',
		styles: {
			top: '45px', 
			bottom: '0px', 

		},show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
//			duration: "200", //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			event: 'titleUpdate', //页面显示时机，默认为titleUpdate事件时显示
		},
	})

})

document.getElementById('returnHome').addEventListener("tap", function() {

	mui.openWindow({
		url: './xJia.html',
		id: 'xJia',
		styles: {
			top: '45px', 
			bottom: '0px', 
			//						width: '100%', //新页面宽度，默认为100%
			//						height: '100%', //新页面高度，默认为100%					
		},
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-left", //页面显示动画，默认为”slide-in-right“；
//			duration: "200", //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			event: 'titleUpdate', //页面显示时机，默认为titleUpdate事件时显示
		},
	})

})

document.getElementById('goProfile').addEventListener("tap", function() {
	mui.openWindow({
		url: './profile.html',
		id: 'profile',
		styles: {
			top: '45px', 
			bottom: '0px', 
		},
		createNew:false,
		show: {
			autoShow: true, 
			aniShow: "slide-in-right", 
			duration: "200", 
			event: 'titleUpdate', 
		},
	})

})
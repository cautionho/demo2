//轮播图
var slider = mui("#slider");

slider.slider({
	interval: 2000,
})

var nav = document.getElementById('nav');

var navList = nav.getElementsByClassName('nav-item');

mui('#nav').on("tap",'.nav-item',function(){
	console.log(mui('#nav'))
	window.location.href = './courseIntro.html';
	
})

var path1 = document.getElementsByClassName('route')[0];

var path2 = document.getElementsByClassName('route')[1];

var pathList = path1.getElementsByTagName('li');

var pathList1 = path2.getElementsByTagName('li');

for(var i = 0; i < navList.length; i++) {
	//随机背景色
	navList[i].style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 0) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',.4)';
}

for(var i = 0; i < pathList.length; i++) {
	pathList[i].firstElementChild.style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 100) + ',' + Math.floor(Math.random() * 150) + ',' + Math.floor(Math.random() * 256) + ',.1)';
}

for(var i = 0; i < pathList1.length; i++) {
	pathList1[i].firstElementChild.style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 100) + ',' + Math.floor(Math.random() * 150) + ',' + Math.floor(Math.random() * 256) + ',.1)';
}




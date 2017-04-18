var page2navList = document.getElementsByClassName('page2-nav')[0].getElementsByTagName('a');

for(var i = 0; i < page2navList.length; i++) {
	page2navList[i].addEventListener("tap", active);

}

function active() {
	for(var i = 0; i < page2navList.length; i++) {
		page2navList[i].style.color = '#333';
	}
	this.style.color = 'orange';
}

mui(".totalCourse").on('tap', '.totalCourse-item', function() {
	
	window.location.href = './courseIntro.html'; 
	
})
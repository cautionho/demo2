var courseListNav = document.getElementsByClassName('courseListNav')[0].getElementsByTagName('a');

for(var i = 0; i < courseListNav.length; i++) {
	courseListNav[i].addEventListener("tap", activeNav);
}

function activeNav() {
	for(var i = 0; i < courseListNav.length; i++) {
		courseListNav[i].style.color = '#333';
	}
	this.style.color = 'orange';
}
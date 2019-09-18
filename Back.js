
var timeIn, timeOut;


document.querySelector ('.In').addEventListener('click', function() {

	//var actualtime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	let d = new Date();
	console.log(d);
	year = d.getYear();
	month = d.getMonth();
	day = d.getDay();
	hour = d.getHours();
	minute = d.getMinutes();
	document.querySelector('.time-in').textContent = d;

});

document.querySelector ('.Out').addEventListener('click', function() {

	let d = new Date();
	console.log(d);
	document.querySelector('.time-out').textContent = d;
});
//Neil Tobin Napase - Project 6
//Javascript file containing the javascript and jquery functions

//Arrays containing days of week and months of year
var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Function that handles determining the current day and time of when page is accessed
function loadTime() {
	var currentDate = new Date();
	
	//Day and Month are obtained from arrays using given index from Date()
	var day = days[currentDate.getDay()]  + " ";
	var month = months[currentDate.getMonth()] + " ";
	var date = currentDate.getDate() + ", ";
	var year = currentDate.getFullYear() + " ";
	
	var datestring = day + month + date + year;
	
	var hour = currentDate.getHours();
	if(hour < 10){
		hour = '0' + hour;
	}
	
	var minute = currentDate.getMinutes();
	if(minute < 10){
		minute = '0' + minute;
	}
	
	var second = currentDate.getSeconds();
	if(second < 10) {
		second = '0' + second;
	}
	
	var timestring = hour + ":" + minute + ":" + second;
	
	var finalstring = datestring + timestring + " GMT-0500 (Eastern Standard Time)";
	
	//String of day and time are sent to the document
	document.querySelector('#smallDateAndTime').innerHTML = finalstring;
	document.querySelector('#dateAndTime').innerHTML = finalstring;
}

//Function is called every second, updating the day and time
var updating = setInterval(function(){loadTime()}, 1000);


//Jquery function that changes the background color and text of table elements.
//When mouse hovers over table element, it changes background color to yellow and
//text to red. When it leaves that element, the background color and text revert back to normal
$(document).ready(function(){
		$("td").mouseover(function(){
			$(this).addClass('mousefun');
		});
		$("td").mouseout(function(){
			$(this).removeClass('mousefun');
		});	
});

//When page is loaded, it calls the function loadTime
window.onload = loadTime;


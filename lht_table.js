"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Rami Hadey
   Date:   2/3/20

	
*/


//Sets the date as August 30, 2018
var thisDay = new Date(2018, 7, 30);

//displays info for the set date
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//Sets the last day as 14 days after the set day
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);


//Displays the calender and what to put on it
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   
// so the date is within 2 weeks
   if(thisDay <= eventDate  && eventDate <= endDate){
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
   }
}
tableHTML += "</table>";

//display the list on the page
document.getElementById("eventList").innerHTML = tableHTML;

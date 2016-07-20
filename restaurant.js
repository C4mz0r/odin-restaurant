$(function(){
	
	drawTabs();

	$( "#tabs" ).tabs({
      collapsible: true
    });
	
});

var drawTabs = function() {
	
	// Container for tabs
	$('#content').append("<div id='tabs'></div>");
		
	// The tabs
	$('#tabs').append("<ul>" +
					  "<li><a href='#tabs-1'>Home</a></li>" +
					  "<li><a href='#tabs-2'>Menu</a></li>" +
					  "<li><a href='#tabs-3'>Contact</a></li>" +
					  "</ul>");
	
    // Content for first tab
	$('#tabs').append(	"<div id='tabs-1'>" +
						homePageHtml() +
						"</div>");
						
	// Content for second tab
	$('#tabs').append(	"<div id='tabs-2'>" +
						menuPageHtml() +
						"</div>");
						
	// Content for second tab
	$('#tabs').append(	"<div id='tabs-3'>" +
						contactPageHtml() +
						"</div>");
}

var contactPageHtml = function() {
	var contact = "<h1>The Chocolate Truffle</h1>";
	contact += "<p>Located in the heart of the Alpine Valley in Somewhere, Nowhereland.</p>";
	contact += "<p>Open weekdays 11 AM until 9 PM, weekends 11 AM until 11 PM";
	contact += "<p>Phone: 555-5555</p>";
	return contact;
}

var homePageHtml = function() {
	var home = "<h1>The Chocolate Truffle</h1>";
	home += "The best fine dining in your town!";
	return home;
}

var menuPageHtml = function() {
	var menu = "<h1>The Chocolate Truffle</h1>";
	menu += "<table>";
	menu += "<tr><td>Chocolate Truffles</td><td>$12.95</td></tr>";
	menu += "<tr><td>Cheesecake</td><td>$8.95</td></tr>";
	menu += "<tr><td>Tenderloin</td><td>$39.95</td></tr>";
	menu += "<tr><td>Lobster Tail</td><td>$49.95</td></tr>";
	menu += "</table>";
	return menu;
}

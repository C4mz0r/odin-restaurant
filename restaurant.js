$(function(){	
	
	// Draw the navigation links
	drawTabs();
	
	// Register click events for the navigation links	
	$("li").click(function(event) {		
		loadContentForTab(this.textContent);
		$("li").removeClass(); // remove selected from all
		$(this).addClass('selected'); // add selected to the clicked li
	});

});

var drawTabs = function() {
	
	// Container for tabs
	$('#content').append("<div id='tabs'></div>");
	
	// Area where tab content will be loaded
	$('#content').after("<div id='loadingArea'></div>");		
		
	// The tabs
	$('#tabs').append("<ul>" +
					  "<li>Home</li>" +
					  "<li>Menu</li>" +
					  "<li>Contact</li>" +
					  "</ul>");    
}

// Loads the content for the specified tabName
// into the #loadingArea div
var loadContentForTab = function(tabName) {
	
	$("#loadingArea").empty();
	$("#loadingArea").removeClass(); // removes background class

    switch(tabName){
    	case "Home":	    
			$('#loadingArea').append(homePageHtml());
			$('#loadingArea').addClass('background-table');			
			break;
							
		case "Menu":
			$('#loadingArea').append(menuPageHtml());
			$('#loadingArea').addClass('background-food');
			break;
							
		case "Contact":
			$('#loadingArea').append(contactPageHtml());
			$('#loadingArea').addClass('background-street');
			break;
			
		default:
			$('#loadingArea').append(homePageHtml());
			$('#loadingArea').addClass('background-table');			
	}
}

// Page content

var contactPageHtml = function() {
	var contact = "<div class='writing'>"; 
	contact += "<h1>The Chocolate Truffle</h1>";
	contact += "<p>Located in the heart of the Alpine Valley in Somewhere, Nowhereland.</p>";
	contact += "<p>Open weekdays 11 AM until 9 PM, weekends 11 AM until 11 PM";
	contact += "<p>Phone: 555-5555</p>";
	contact += "</div>";
	return contact;
}

var homePageHtml = function() {
	var home = "<div class='writing'>";
	home += "<h1>The Chocolate Truffle</h1>";
	home += "The best fine dining in your town!";
	home += "</div>";
	return home;
}

var menuPageHtml = function() {
	var menu = "<div class='writing'>";
	menu += "<h1>The Chocolate Truffle</h1>";
	menu += "<table>";
	menu += "<tr><td>Chocolate Truffles</td><td>$12.95</td></tr>";
	menu += "<tr><td>Cheesecake</td><td>$8.95</td></tr>";
	menu += "<tr><td>Tenderloin</td><td>$39.95</td></tr>";
	menu += "<tr><td>Lobster Tail</td><td>$49.95</td></tr>";
	menu += "</table>";
	menu += "</div>";
	return menu;
}

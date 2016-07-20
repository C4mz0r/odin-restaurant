$(function(){
	
	drawTabs();
	
	$("li").click(function(event) {		
		loadContentForTab(this.textContent);		
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

var loadContentForTab = function(tabName) {
	
	$("#loadingArea").empty();

    switch(tabName){
    	case "Home":	    
			$('#loadingArea').append(homePageHtml());
			break;
							
		case "Menu":
			$('#loadingArea').append(menuPageHtml());
			break;
							
		case "Contact":
			$('#loadingArea').append(contactPageHtml());
			break;
			
		default:
			$('#loadingArea').append(homePageHtml());			
	}
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

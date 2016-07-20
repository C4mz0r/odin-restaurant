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
					  "<li><a href='#tabs-1'>First</a></li>" +
					  "<li><a href='#tabs-2'>Second</a></li>" +
					  "</ul>");
	
    // Content for first tab
	$('#tabs').append(	"<div id='tabs-1'>" +
						"<p>Here is content for first tab</p>" +
						"</div>");
						
	// Content for second tab
	$('#tabs').append(	"<div id='tabs-2'>" +
						"<p>Here is content for second tab</p>" +
						"</div>");
}


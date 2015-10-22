$(document).ready(function(){
	console.log("ready");
	$('#search-term').submit(function(event){
		event.preventDefault();
		console.log("submit clicked");
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});


function getRequest(searchTerm){
	//set up a params variable to pass to .getJSON that meets the Youtube API requirements
	var params = {
		part: 'snippet',
		q: searchTerm,
		key: 'AIzaSyCX18fh2GihWojMUnf2jjw_19xESuYytDA',
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		console.log(data.items);
		showResults(data.items);
	});
};

function showResults(results){
	var videoList ="";
	var ul = $('<ul>');
	$('#search-results').html(ul);
	$.each(results, function(key, value){
		var thumb = value.snippet.thumbnails.medium.url;
		var title = value.snippet.title;
        var videoId = value.id.videoId;
        var youtubeSearch = "https://www.youtube.com/watch?v=";
        console.log(thumb);
        //create list item and place it in a variable called li
        var li = $("<li>");
        //create title
        var title = $('<p>' + title + '</p>');
        //create image tag and set src equal to var thumb
        var img = $('<img>').attr('src', thumb);
        //add title and img to list item
        $(li).append([title, img]);
        //wrap title and img in a link
        title.wrap($('<a>').attr('href', youtubeSearch + videoId));
        img.wrap($('<a>').attr('href', youtubeSearch + videoId));
        //show the list item on the page
        $(ul).append(li);
    });
};

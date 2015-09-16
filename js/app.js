$(document).ready(function(){
	console.log("ready");
	$('#search-term').submit(function(event){
		event.preventDefault();
		console.log("submit");
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});


function getRequest(searchTerm){
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
	$.each(results, function(key, value){
		var thumb = value.snippet.thumbnails.medium.url;
		var title = value.snippet.title;
        var videoId = value.id.videoId;
        console.log(thumb);
        videoList += '<ul><li><p>' + title + ' - ' + videoId + '</p><img src="' + thumb +'></li></ul>';
          $('#search-results').prepend(videoList);
    });
};
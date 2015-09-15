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
		console.log(data);
		//showResults(data.Search);
	});
};

/*function showResults(results){
	var html ="";
	$.each(results, function(index, value){
	  html += '<p>' + data + '</p>';
	  console.log(data);
	  //console.log(value.Title);
	});
	$('#search-results').html(html);
};*/
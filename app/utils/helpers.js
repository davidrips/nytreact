var axios = require('axios');
// var helpers ={
// 	getArticles: function(query, callback){
// 		console.log('got to the helper, searching for:')
// 		console.log(query);
// 		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// 		var query = query;
// 		url += '?' + $.param({
// 		  'api-key': "8d5ed33e08304c0eb6fb88eb7cfc44ba",
// 		  'q': query,
// 		  // 'begin_date': "20141201",
// 		  // 'end_date': "20151103"
// 		});
		
		
// 		return axios.get(url).then(function(data){
// 			console.log("helpers here:")
// 		  console.log(data);
			
// 				callback(data.data.response.docs)
			
// 		})
// 	}
// }


/* NYT API Key*/
var APIKey = "8d5ed33e08304c0eb6fb88eb7cfc44ba";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This will run our query.
	runQuery: function(term, start, end, callback){

		// Adjust to get search terms in proper format
		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";


		console.log("Query Run");
		// Run a query using Axios. Then return the results as an object with an array.
		// See the Axios documentation for details on how we structured this with the params.
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': APIKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end			
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);
			callback(results.data.response)

			// return results.data.response;

		});



	},

	getSaved: function(callback){

		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results", results);
				callback(results);
			})
	},

	postSaved: function(data){

		var newArticle = {url: data.web_url, text: data.snippet, title: data.headline.main, date: data.pub_date};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				console.log("axios results", results._id);
				return results._id;
			})

	},

	deleteSaved: function(id){

		return axios.delete('/api/saved', {
			params: {
			    'id': id
			}
		})
		.then(function(results){
			console.log("axios results", results);
			return results;
		})
	}

}

module.exports = helpers;


var React = require('react');
var Router = require('react-router');
var Articles = require('./Articles');
var helpers = require("../utils/helpers");

var Results = React.createClass({
	// getInitialState: function(){
	// 	return {
	// 		articles: []
	// 	}
	// },
	// componentWillMount: function(){
	
	// 	console.log("MOUNTED");
	// 	helpers.getArticles(this.props.params.query, function(data){
	// 		console.log("Got back to Results component!")
	// 		console.log(data);

	// 		// debugger;
	// 		this.setState({
	// 			articles: data
	// 		});
	// 		debugger;
	// 	}.bind(this));
		
	// },
	

	handleSubmit: function(event){
		console.log("clicked to save")
		
		var index= event.target.getAttribute('data-index');
		
		var toSave = this.props.results.docs[index];
		console.log(toSave);
		helpers.postSaved(toSave)


	},
	render: function(){
		
		console.log(this.props);
		if (!this.props.results.hasOwnProperty('docs')){
			return(
				<li className="list-group-item">

					<h3>
					  	<span><em>Enter search terms to begin...</em></span>
					</h3>

			  	</li>
			)
		}else {
			var articles = this.props.results.docs.map(function(article,index){
				return(
					
						<li className='list-group-item' key={index}>

							{article.web_url && <h4><a href={article.web_url}>{article.headline.main}</a></h4>}
				          {article.snippet && <p>{article.snippet}</p>}
				          <button className="btn btn-primary" onClick={this.handleSubmit} data-index={index}>Save</button>
			         	</li>
			        
				)
			}.bind(this));
		}

			return(
					<div className ="main-container">


						<div className="row">
							<div className="col-lg-12">

								<div className="panel panel-primary">
									<div className="panel-heading">
										<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
									</div>
									<div className="panel-body">
										<ul className="list-group">

											{articles}

										</ul>
									</div>
								</div>

							</div>
						</div>
					</div>
			)
		
					
	}
		
	
	
})

module.exports = Results;

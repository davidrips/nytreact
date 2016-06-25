// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Include the Helper (for the saved recall)
var helpers = require('../utils/helpers');

// Create the Saved component
var Saved = React.createClass({

	getInitialState: function(){

		return {
			savedArticles: []
		}
	},

	componentWillMount: function(){

		// Code
		helpers.getSaved(function(response){
			this.setState({
				savedArticles: response.data
			})
		}.bind(this))
		console.log(this.state);

	},

	handleSubmit: function(event){
		console.log("clicked to save")
		var index= event.target.getAttribute('data-index');
		console.log(index);
		helpers.deleteSaved(index);
		helpers.getSaved(function(response){
			this.setState({
				savedArticles: response.data
			})
		}.bind(this))
		

	},

	render: function(){

		if (this.state.savedArticles == "") {
			return(

				<li className="list-group-item">

					<h3>
					  	<span><em>Save your first article...</em></span>
					</h3>

			  	</li>

			)
		}

		else {
				var articles = this.state.savedArticles.map(function(article,index){
				return(
					
						<li className='list-group-item' key={index}>

							{article.url && <h4><a href={article.url}>{article.title}</a></h4>}
				          {article.text && <p>{article.text}</p>}
				          {article.date && <p>{article.date}</p>}
				          <button className="btn btn-primary" onClick={this.handleSubmit} data-index={article._id}>Delete</button>
			         	</li>
			        
				)
			}.bind(this));

			// Show saved articles

		}


		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong></h1>
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
});

// Export the module back to the route
module.exports = Saved;
var React = require('react');

var Articles = React.createClass({
	componentWillMount: function(){
		


	},
	render: function(){
		console.log("got to articles");
		console.log(this.props);
		var articles = this.props.articles.map(function(article,index){
			return(
				<div>
					<li className='list-group-item' key={index}>

						{article.web_url && <h4><a href={article.web_url}>{article.headline.main}</a></h4>}
			          {article.snippet && <p>{article.snippet}</p>}
		         	</li>
		         </div>
			)

		});

		return (
			<div>
				<h3> Articles </h3>
				<ul className="list-group">
					{articles}
				</ul>
			</div>
		)
	}
});

module.exports = Articles;
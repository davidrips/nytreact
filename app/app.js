// app.js plays the central role of handling rouing and is the "starting point" in our code.

// Grab the dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require ('./config/routes')



ReactDOM.render(
	// routes will tell us which route to go to depending on which route we are looking at
	// We will drop the content into the 'app' 
	<Router>{routes}</Router>,
	document.getElementById('app')
)
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    /*Set up your route configuration file to activate the Main 
    component whenever a user hits the index '/' path of your app.
    */
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
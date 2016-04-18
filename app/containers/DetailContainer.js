var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
   	render: function() {
     	return (
     		// Why
       		<Detail
       		weather={this.props.location.state.weather}
        	city={this.props.routeParams.city} />        	
     	);
   	}
});

module.exports = DetailContainer;
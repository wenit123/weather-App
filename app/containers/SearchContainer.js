var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('../components/Search');
var Main = require('../containers/Main');
var getCurrent = require('../helpers/api').getCurrent
var getForecast = require('../helpers/api').getForecast

var SearchContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getDefaultProps: function () {
    	return {
    	  	direction: 'column'
    	}
  	},
  
  	propTypes: {
    	direction: PropTypes.string
  	},
	
	getInitialState: function () {
    	return {
      		city: ''
    	}
  	},

  	handleSubmitCity: function (e) {
      e.preventDefault();
    	console.log(this.state.city)
      // push to the path
      this.context.router.push('forecast/' + this.state.city)
  	},

  	handleUpdateCity: function (e) {
    	this.setState({
      	city: e.target.value
   	 	})
  	},
  

  	render: function () {
    	return (
      		<Search
        	direction={this.props.direction}
        	onSubmitCity={this.handleSubmitCity}
        	onUpdateCity={this.handleUpdateCity}
        	city={this.state.city} />
    )
  }

});

module.exports = SearchContainer;
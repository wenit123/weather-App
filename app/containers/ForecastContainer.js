var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForecast;

var ForecastContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},

  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {}
    }
  },

  // review the following 

  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    getForecast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  },

  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/day/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },

  render: function () {
    return (
      <Forecast
        city = {this.props.routeParams.city}
        isLoading = {this.state.isLoading}
        forecastData = {this.state.forecastData}
        handleClick = {this.handleClick} />
    )
  }
});

module.exports = ForecastContainer;
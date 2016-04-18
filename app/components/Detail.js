var React = require('react');
var details = require('../helpers/details');
var Day = require('./Day');
var temp = details.temp;

var styles = {
  container: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail (props) {
  return (
    <div style={styles.container}>
      <Day day={props.weather} />
      <div style={styles.container}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {temp(props.weather.temp.min)} degrees</p>
        <p>max temp: {temp(props.weather.temp.max)} degrees</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </div>
  )
}

module.exports = Detail;

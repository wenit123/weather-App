var React = require('react');
var PropTypes = React.PropTypes;
var detail = require('../helpers/detail');
var getDate = detail.getDate;
var temp = detail.temp;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1 style={styles.header}> Loading </h1>
          : <ForecastUI 
          	city={props.city} 
          	forecast={props.forecastData} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
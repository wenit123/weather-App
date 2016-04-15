var React = require('react');
var PropTypes = React.PropTypes;
var detail = require('../helpers/detail');
var getDate = detail.getDate;
var temp = detail.temp;

var styles = {
	header: {
    	fontSize: 65,
      	color: "black",
    	fontWeight: 100,
    	textAlign: 'center'
  	},
  	subheader: {
    	fontSize: 30,
    	color: "black",
    	fontWeight: 100,
    	textAlign: 'center'
  	},
  	container: {
    	display: 'flex',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	flexDirection: 'row',
    	flexWrap: 'wrap',
    	maxWidth: 1200,
    	margin: '50px auto'
  	},
  	weather: {
    	height: 130
  	}
}

function DayItem (props) {
  	var date = getDate(props.day.dt);
  	var icon = props.day.weather[0].icon;
  	return (
    	<div style={styles.dayContainer} onClick={props.handleClick}>
     	<img style={styles.weather} src={'./app/images/icon/' + icon + '.svg'} alt='Weather' />
      	<h2 style={styles.subheader}>{date}</h2>
    	</div>
  	)	
}

//handleclick add, review
function ForecastUI (props) {
  	return (
    	<div>
      	<h1 style={styles.header}>{props.city}</h1>
      	<p style={styles.subheader}>pick a day </p>
      	<div style={styles.container}  onClick={props.handleClick}>
        	{props.forecast.list.map(function (listItem) {
          	return <DayItem key={listItem.dt} day={listItem} 
          	handleClick={props.handleClick.bind(null, listItem)}/>
        })}
      	</div>
    	</div>
  	)
}

//review the function 
function Forecast (props) {
 	 return (
    	<div>
      	{
        props.isLoading === true
          ? <h1 style={styles.header}> Loading </h1>
          : <ForecastUI 
          	city={props.city} 
          	forecast={props.forecastData} 
          	handleClick={props.handleClick} />
      	}
    	</div>
  	)
}

Forecast.propTypes = {
  	city: PropTypes.string.isRequired,
  	forecastData: PropTypes.object.isRequired,
  	isLoading: PropTypes.bool.isRequired,
  	handleClick: PropTypes.func.isRequired,

}

module.exports = Forecast;
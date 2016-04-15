var React = require('react');
var detail = require('../helpers/detail');
var getDate = detail.getDate;

var styles = {
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
function Day (props) {
	return (
		<div>DETAIL!</div>
   )
}

Day.propTypes = {
  	city: PropTypes.string.isRequired,
  	forecastData: PropTypes.object.isRequired,
}

module.exports = Day;
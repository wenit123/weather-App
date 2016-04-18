var React = require('react');
var PropTypes = React.PropTypes;
var details = require('../helpers/details');
var getDate = details.getDate;

var styles = {
  	subheader: {
    	fontSize: 30,
    	color: "black",
    	fontWeight: 100,
    	textAlign: 'center'
  	},
  	container: {
    	display: 'flex',
    	justifyContent: 'center',
    	alignItems: 'center',
    	margin: '50px auto'
  	},
  	weather: {
    	height: 130
  	}  	
}

function Day (props) {
  	var date = getDate(props.day.dt);
  	var icon = props.day.weather[0].icon;
  	return (
    	<div style={styles.Container} onClick={props.handleClick}>
     		<img style={styles.weather} src={'./app/images/icon/' + icon + '.svg'} alt='Weather' />
      		<h2 style={styles.subheader}>{date}</h2>
    	</div>
  	)	
}

// check!!

Day.propTypes = {
	day: PropTypes.shape({
		dt: PropTypes.number.isRequired,
		weather: PropTypes.array.isRequired,
	}).isRequired,
	handleClick: PropTypes.func,
}


module.exports = Day;
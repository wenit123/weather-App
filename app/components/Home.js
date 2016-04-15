var React = require('react');
var PropTypes = React.PropTypes;
var SearchContainer = require('../containers/SearchContainer');

var styles = {
	container: {
		backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '500px',
    width: '100%'
	},

	header: {
    	fontSize: 40,
      fontWeight: 100,
    	color: "white",
  	}
}


function Home (props) {
  return (
  	<div style = {styles.container}>
  	<h1 style={styles.header}> Enter City and State </h1>
  	<SearchContainer />
  	</div>  
  )
}

module.exports = Home;



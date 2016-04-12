var React = require('react');
var ReactRouter = require('react-router');



var styles = {
	container: {
		backgroundSize: 'cover',
    	backgroundImage: "url('app/images/pattern.svg')",
    	display: 'flex',
    	flexDirection: 'column',
    	justifyContent: 'center',
    	alignItems: 'center',
    	height: '100%',
    	width: '100%'
	},
	header: {
    	fontSize: 40,
    	color: "white",
    	
  	}
}


function Home () {
  return (
  	<div style = {styles.container}>
  	<h1 style={styles.header}> Enter City and State </h1>
  	</div>
    
  )
}

module.exports = Home;



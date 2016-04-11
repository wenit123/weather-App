var React = require('react');


var Home = React.createClass({
	render: function () {
    	return (
      	<div> Hello from Home! </div>
		);
	}
	
	renderImages: function() {
  		return (
    	<View>
      	<Image
        style={styles.icon}
        source={require('./myIcon.png')}/>
      	<Image
        style={styles.logo}
        source={{uri: 'images/pattern.svg'}}/>
    	</View>
  		);
	},
});

module.exports = Home;
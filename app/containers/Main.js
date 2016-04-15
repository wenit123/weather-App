var React = require('react');
var SearchContainer = require('./SearchContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
  	display: 'flex',
    justifyContent: 'space-between',
  	background: "#F59938",
  	color: "white",
    padding: 5,
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
      <div style={styles.header}> 
      <h2> Weather Search </h2>
      <SearchContainer direction='row' />
      </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;



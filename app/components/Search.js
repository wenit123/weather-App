var React = require('react');
var PropTypes = React.PropTypes;


function Button(props){
  return(
	 <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
   </button>
  )
}

function Input (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='Las Vegas, Nevada'
      type='text'
      value={props.city} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}


function Search(props) {
  return (
    <div >
      <Input
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}



Search.propTypes = {
	direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}


module.exports = Search;
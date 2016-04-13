var axios = require('axios');  // read

var baseUrl = 'http://api.openweathermap.org/data/2.5/';
var apikey = '44b04fd342232c08e6f8dfea1a7fc4b5';


//dont understand 
function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl(int, queryStringData) {
	// int can be weather or foeecase
	return baseUrl + int + '?' + prepRouteParams(queryStringData);
}

function getQueryData(city) {
	
	return{
		q: city,
		type: 'accurate',
		APPID : apikey,
		cnt: 5
	}
}

function getCurrent(city) {
	var data = getQueryData(city);
	var url = prepUrl('weather', data)

	return axios.get(url).then(function(CurrentWeatherData){
		console.log(CurrentWeatherData.data)
	})
}


module.exports = {
  getCurrent: getCurrent,
};



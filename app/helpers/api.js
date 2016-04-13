var axios = require('axios');  // read

var baseUrl = 'http://api.openweathermap.org/data/2.5/';
var apikey = '44b04fd342232c08e6f8dfea1a7fc4b5';


//don't understand 
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
	/*
	Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
	5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
	*/
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

	// return ?
	return axios.get(url).then(function(currentData){
		console.log(currentData.data)
	})
}

function getForecast(city){
	var data = getQueryData(city);
	var url = prepUrl('forecast/daily', data)

	// return ?
	return axios.get(url).then(function(forecastData){
		console.log(forecastData.data)
	})
}


module.exports = {
  getCurrent: getCurrent,
  getForecast: getForecast
};



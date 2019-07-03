import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.css';
import WeatherDiv from "./WeatherInfo";

let weatherInfo = ""

class App extends Component {

	constructor() {

		super()

		let d = new Date()

		this.state = {
			thisYr: d.getFullYear(),
			zipcode : '',
			alert: "",
			weatherData: ""
		}

	}

	getCurrentWeather = () => {

		let al = ""
		let isOK = true

		if (this.state.zipcode === "") {
			al = <span className="required"><i>Please provide a correct input.</i></span>
			isOK = false
		} 

		this.setState({
			alert : al
		})

		if (isOK) {

			fetch("/getCurrentWeather/"+this.state.zipcode,{ 
			    method: 'GET',
			    headers: {
			          	'Accept': 'application/json',
			          	'Content-Type': 'application/json'
			    }
			}).then(l => l.json())
			   .then(l => {
			   		//this.updateWeatherInfo(l)
			   		//console.log(l)

			   		if (l.error)
			   			weatherInfo=<div className="errorMsg">{l.error}</div>
			   		else 
						weatherInfo = <WeatherDiv info={l}/>
						
					this.setState({
						weatherData: weatherInfo
					})
			    });

			/* FOR TESTING PURPOSES DO NOT REMOVE */

			// let l = wjson
			// //console.log(l)
			// weatherInfo = <WeatherDiv info={l} states={true}/>
			// this.setState({
			// 	weatherData: weatherInfo
			// })

		}

	}

	handleSubmitButton = (e) => {

		this.setState({
			zipcode: e.target.value
		})

	}

	render() {

		return (
		    <div id="parentContainer">
		    	<div id="mainContainer">
		    		<div id="searchArea">
	    				<input type="text" id="zipCode" placeholder="Enter Zip Code" onChange={this.handleSubmitButton}/>
	    				<button className="submit" onClick={this.getCurrentWeather}>Search</button>
	    				{this.state.alert}
		    		</div>
		    		{this.state.weatherData}
		    	</div>

		        <footer className="footer page-footer"> 
			        <div className="footer-copyright">
			            <div className="container">
			            	<div className="col s12 center-align">© {`${this.state.thisYr}`} Copyright</div>
			            </div>
			        </div>
		      	</footer>
		    </div>
		 );

	}

	
}

/* FOR TESTING PURPOSES DO NOT REMOVE */

// var wjson = {
//     "location": {
//         "name": "South San Francisco",
//         "region": "California",
//         "country": "USA",
//         "lat": 37.65,
//         "lon": -122.43,
//         "tz_id": "America/Los_Angeles",
//         "localtime_epoch": 1562155609,
//         "localtime": "2019-07-03 5:06"
//     },
//     "current": {
//         "last_updated_epoch": 1562154709,
//         "last_updated": "2019-07-03 04:51",
//         "temp_c": 13.7,
//         "temp_f": 56.7,
//         "is_day": 0,
//         "condition": {
//             "text": "Partly cloudy",
//             "icon": "//cdn.apixu.com/weather/64x64/night/116.png",
//             "code": 1003
//         },
//         "wind_mph": 10.3,
//         "wind_kph": 16.6,
//         "wind_degree": 293,
//         "wind_dir": "WNW",
//         "pressure_mb": 1013.0,
//         "pressure_in": 30.4,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 87,
//         "cloud": 7,
//         "feelslike_c": 12.3,
//         "feelslike_f": 54.1,
//         "vis_km": 10.0,
//         "vis_miles": 6.0,
//         "uv": 0.0,
//         "gust_mph": 16.1,
//         "gust_kph": 25.9
//     },
//     "forecast": {
//         "forecastday": [
//             {
//                 "date": "2019-07-03",
//                 "date_epoch": 1562112000,
//                 "day": {
//                     "maxtemp_c": 19.2,
//                     "maxtemp_f": 66.6,
//                     "mintemp_c": 13.3,
//                     "mintemp_f": 55.9,
//                     "avgtemp_c": 15.6,
//                     "avgtemp_f": 60.1,
//                     "maxwind_mph": 16.8,
//                     "maxwind_kph": 27.0,
//                     "totalprecip_mm": 0.0,
//                     "totalprecip_in": 0.0,
//                     "avgvis_km": 10.0,
//                     "avgvis_miles": 6.0,
//                     "avghumidity": 80.0,
//                     "condition": {
//                         "text": "Partly cloudy",
//                         "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
//                         "code": 1003
//                     },
//                     "uv": 8.9
//                 },
//                 "astro": {
//                     "sunrise": "05:53 AM",
//                     "sunset": "08:35 PM",
//                     "moonrise": "06:47 AM",
//                     "moonset": "09:44 PM"
//                 }
//             },
//             {
//                 "date": "2019-07-04",
//                 "date_epoch": 1562198400,
//                 "day": {
//                     "maxtemp_c": 19.3,
//                     "maxtemp_f": 66.7,
//                     "mintemp_c": 13.4,
//                     "mintemp_f": 56.1,
//                     "avgtemp_c": 15.6,
//                     "avgtemp_f": 60.1,
//                     "maxwind_mph": 12.1,
//                     "maxwind_kph": 19.4,
//                     "totalprecip_mm": 0.1,
//                     "totalprecip_in": 0.0,
//                     "avgvis_km": 10.0,
//                     "avgvis_miles": 6.0,
//                     "avghumidity": 83.0,
//                     "condition": {
//                         "text": "Partly cloudy",
//                         "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
//                         "code": 1003
//                     },
//                     "uv": 8.4
//                 },
//                 "astro": {
//                     "sunrise": "05:53 AM",
//                     "sunset": "08:35 PM",
//                     "moonrise": "07:55 AM",
//                     "moonset": "10:34 PM"
//                 }
//             },
//             {
//                 "date": "2019-07-05",
//                 "date_epoch": 1562284800,
//                 "day": {
//                     "maxtemp_c": 19.7,
//                     "maxtemp_f": 67.5,
//                     "mintemp_c": 13.7,
//                     "mintemp_f": 56.7,
//                     "avgtemp_c": 16.1,
//                     "avgtemp_f": 60.9,
//                     "maxwind_mph": 12.1,
//                     "maxwind_kph": 19.4,
//                     "totalprecip_mm": 0.0,
//                     "totalprecip_in": 0.0,
//                     "avgvis_km": 10.0,
//                     "avgvis_miles": 6.0,
//                     "avghumidity": 81.0,
//                     "condition": {
//                         "text": "Partly cloudy",
//                         "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
//                         "code": 1003
//                     },
//                     "uv": 8.8
//                 },
//                 "astro": {
//                     "sunrise": "05:54 AM",
//                     "sunset": "08:34 PM",
//                     "moonrise": "09:06 AM",
//                     "moonset": "11:17 PM"
//                 }
//             },
//             {
//                 "date": "2019-07-06",
//                 "date_epoch": 1562371200,
//                 "day": {
//                     "maxtemp_c": 19.7,
//                     "maxtemp_f": 67.5,
//                     "mintemp_c": 13.0,
//                     "mintemp_f": 55.4,
//                     "avgtemp_c": 16.0,
//                     "avgtemp_f": 60.8,
//                     "maxwind_mph": 11.9,
//                     "maxwind_kph": 19.1,
//                     "totalprecip_mm": 0.0,
//                     "totalprecip_in": 0.0,
//                     "avgvis_km": 10.0,
//                     "avgvis_miles": 6.0,
//                     "avghumidity": 78.0,
//                     "condition": {
//                         "text": "Partly cloudy",
//                         "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
//                         "code": 1003
//                     },
//                     "uv": 8.8
//                 },
//                 "astro": {
//                     "sunrise": "05:55 AM",
//                     "sunset": "08:34 PM",
//                     "moonrise": "10:18 AM",
//                     "moonset": "11:55 PM"
//                 }
//             },
//             {
//                 "date": "2019-07-07",
//                 "date_epoch": 1562457600,
//                 "day": {
//                     "maxtemp_c": 19.4,
//                     "maxtemp_f": 66.9,
//                     "mintemp_c": 12.9,
//                     "mintemp_f": 55.2,
//                     "avgtemp_c": 15.9,
//                     "avgtemp_f": 60.5,
//                     "maxwind_mph": 12.3,
//                     "maxwind_kph": 19.8,
//                     "totalprecip_mm": 0.0,
//                     "totalprecip_in": 0.0,
//                     "avgvis_km": 10.0,
//                     "avgvis_miles": 6.0,
//                     "avghumidity": 79.0,
//                     "condition": {
//                         "text": "Partly cloudy",
//                         "icon": "//cdn.apixu.com/weather/64x64/day/116.png",
//                         "code": 1003
//                     },
//                     "uv": 5.0
//                 },
//                 "astro": {
//                     "sunrise": "05:55 AM",
//                     "sunset": "08:34 PM",
//                     "moonrise": "11:29 AM",
//                     "moonset": "No moonset"
//                 }
//             }
//         ]
//     }
// }

export default App;

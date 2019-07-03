import React, { Component } from 'react';
import './style.css';
import './App.css';

let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let daysArr = ["Sun", "Mon","Tue", "Wed", "Thurs", "Fri", "Sat"]
let newMonth = []
let locInfo = ""
let weatherJSON
var days = []

// PLEASE DO NOT REMOVE
// // const WeatherInfo = (props) => (

// 	<div id="weatherContainer">

// 		<div className="weatherBorder">
// 			<span className='wDate'>{props.info.DailyForecasts[0].Date.split("T")[0]}</span>
// 			<br /><br />
// 			<span className="minTemp">{props.info.DailyForecasts[0].Temperature.Minimum.Value} &#8457;</span>&nbsp;|&nbsp; 
// 			<span className="maxTemp">{props.info.DailyForecasts[0].Temperature.Maximum.Value} &#8457;</span>
// 			<br /><br/>
// 			<span className="dayNight">DAY:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[0].Day.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[0].Day.IconPhrase}</span>
// 			<br /><br/><br/>
// 			<span className="dayNight">NIGHT:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[0].Night.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[0].Night.IconPhrase}</span>
// 		</div>
// 		<div className="weatherBorder">
// 			<span className='wDate'>{props.info.DailyForecasts[1].Date.split("T")[0]}</span>
// 			<br /><br />
// 			<span className="minTemp">{props.info.DailyForecasts[1].Temperature.Minimum.Value} &#8457;</span>&nbsp;|&nbsp; 
// 			<span className="maxTemp">{props.info.DailyForecasts[1].Temperature.Maximum.Value} &#8457;</span>
// 			<br /><br/>
// 			<span className="dayNight">DAY:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[1].Day.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[1].Day.IconPhrase}</span>
// 			<br /><br/><br/>
// 			<span className="dayNight">NIGHT:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[1].Night.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[1].Night.IconPhrase}</span>
// 		</div>
// 		<div className="weatherBorder">
// 			<span className='wDate'>{props.info.DailyForecasts[2].Date.split("T")[0]}</span>
// 			<br /><br />
// 			<span className="minTemp">{props.info.DailyForecasts[2].Temperature.Minimum.Value} &#8457;</span>&nbsp;|&nbsp; 
// 			<span className="maxTemp">{props.info.DailyForecasts[2].Temperature.Maximum.Value} &#8457;</span>
// 			<br /><br/>
// 			<span className="dayNight">DAY:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[2].Day.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[2].Day.IconPhrase}</span>
// 			<br /><br/><br/>
// 			<span className="dayNight">NIGHT:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[2].Night.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[2].Night.IconPhrase}</span>
// 		</div>
// 		<div className="weatherBorder">
// 			<span className='wDate'>{props.info.DailyForecasts[3].Date.split("T")[0]}</span>
// 			<br /><br />
// 			<span className="minTemp">{props.info.DailyForecasts[3].Temperature.Minimum.Value} &#8457;</span>&nbsp;|&nbsp; 
// 			<span className="maxTemp">{props.info.DailyForecasts[3].Temperature.Maximum.Value} &#8457;</span>
// 			<br /><br/>
// 			<span className="dayNight">DAY:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[3].Day.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[3].Day.IconPhrase}</span>
// 			<br /><br/><br/>
// 			<span className="dayNight">NIGHT:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[3].Night.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[3].Night.IconPhrase}</span>
// 		</div>
// 		<div className="weatherBorder">
// 			<span className='wDate'>{props.info.DailyForecasts[4].Date.split("T")[0]}</span>
// 			<br /><br />
// 			<span className="minTemp">{props.info.DailyForecasts[4].Temperature.Minimum.Value} &#8457;</span>&nbsp;|&nbsp; 
// 			<span className="maxTemp">{props.info.DailyForecasts[4].Temperature.Maximum.Value} &#8457;</span>
// 			<br /><br/>
// 			<span className="dayNight">DAY:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[4].Day.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[4].Day.IconPhrase}</span>
// 			<br /><br/><br/>
// 			<span className="dayNight">NIGHT:</span>
// 			<br/>
// 			<img src={`./images/icon${props.info.DailyForecasts[4].Night.Icon}.png`} />
// 			<br />
// 			<span className="iconDesc">{props.info.DailyForecasts[4].Night.IconPhrase}</span>
// 		</div>
// 	</div>

// );

class WeatherInfo extends Component {

	constructor() {

		super()

		this.state = {
			showMe : true,
			index : 0
		}

	}

	componentDidMount() {

	}

	showDetailedInfo = (e) => {

		//console.log(weatherJSON.forecast.forecastday[e])

		this.setState ({
			showMe: false,
			index: e
		})

	}

	goBack = () => {

		this.setState ({
			showMe: true,
		})

	}

	render() {

		weatherJSON = this.props.info

		let fday = this.props.info.forecast.forecastday

		for (var t = 0; t < fday.length; t++) {
			var m = fday[t].date.split("-")[1]
			var h = fday[t].date.split("-")[2]
			var y = fday[t].date.split("-")[0]
			var dy = new Date(fday[t].date+" 00:00:00:00")
			if (m.length === 2 && m < 10)
				newMonth.push(monthArr[m[1] - 1]+" "+h+", "+y)
			else
				newMonth.push(monthArr[m[1] - 1]+" "+h+", "+y)

			//days
			days.push(daysArr[dy.getDay()])

		}

		locInfo = this.props.info.location.name+", "+this.props.info.location.region+", "+this.props.info.location.country

		return (

			<>
				<div id="weatherContainer">
					{ 
						this.state.showMe?
						<>
							<div className="weatherSummary">
								<h3>Location: {locInfo}</h3>
							</div>
							<div className="weatherBorder" onClick={() => {this.showDetailedInfo(0)}}>
								<span className='wDate'>{newMonth[0]}<br/>{days[0]}</span>
								<br /><br />
								<span className="minTemp">{this.props.info.forecast.forecastday[0].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
								<span className="maxTemp">{this.props.info.forecast.forecastday[0].day.maxtemp_f} &#8457;</span>
								<br /><br/>
								<img src={this.props.info.forecast.forecastday[0].day.condition.icon} alt={this.props.info.forecast.forecastday[0].day.condition.text} />
								<br />
								<span className="iconDesc">{this.props.info.forecast.forecastday[0].day.condition.text}</span>
								<br /><br />
								<span className="dayNight">SUNRISE:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[0].astro.sunrise}</span>
								<br /><br />
								<span className="dayNight">SUNSET:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[0].astro.sunset}</span>
							</div>
							<div className="weatherBorder" onClick={() => {this.showDetailedInfo(1)}}>
								<span className='wDate'>{newMonth[1]}<br/>{days[1]}</span>
								<br /><br />
								<span className="minTemp">{this.props.info.forecast.forecastday[1].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
								<span className="maxTemp">{this.props.info.forecast.forecastday[1].day.maxtemp_f} &#8457;</span>
								<br /><br/>
								<img src={this.props.info.forecast.forecastday[1].day.condition.icon} alt={this.props.info.forecast.forecastday[1].day.condition.text} />
								<br />
								<span className="iconDesc">{this.props.info.forecast.forecastday[1].day.condition.text}</span>
								<br /><br />
								<span className="dayNight">SUNRISE:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[1].astro.sunrise}</span>
								<br /><br />
								<span className="dayNight">SUNSET:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[1].astro.sunset}</span>
							</div>
							<div className="weatherBorder" onClick={() => {this.showDetailedInfo(2)}}>
								<span className='wDate'>{newMonth[2]}<br/>{days[2]}</span>
								<br /><br />
								<span className="minTemp">{this.props.info.forecast.forecastday[2].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
								<span className="maxTemp">{this.props.info.forecast.forecastday[2].day.maxtemp_f} &#8457;</span>
								<br /><br/>
								<img src={this.props.info.forecast.forecastday[2].day.condition.icon} alt={this.props.info.forecast.forecastday[0].day.condition.text} />
								<br />
								<span className="iconDesc">{this.props.info.forecast.forecastday[2].day.condition.text}</span>
								<br /><br />
								<span className="dayNight">SUNRISE:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[2].astro.sunrise}</span>
								<br /><br />
								<span className="dayNight">SUNSET:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[2].astro.sunset}</span>
							</div>
							<div className="weatherBorder" onClick={() => {this.showDetailedInfo(3)}}>
								<span className='wDate'>{newMonth[3]}<br/>{days[3]}</span>
								<br /><br />
								<span className="minTemp">{this.props.info.forecast.forecastday[3].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
								<span className="maxTemp">{this.props.info.forecast.forecastday[3].day.maxtemp_f} &#8457;</span>
								<br /><br/>
								<img src={this.props.info.forecast.forecastday[3].day.condition.icon} alt={this.props.info.forecast.forecastday[3].day.condition.text} />
								<br />
								<span className="iconDesc">{this.props.info.forecast.forecastday[3].day.condition.text}</span>
								<br /><br />
								<span className="dayNight">SUNRISE:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[3].astro.sunrise}</span>
								<br /><br />
								<span className="dayNight">SUNSET:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[3].astro.sunset}</span>
							</div>
							<div className="weatherBorder" onClick={() => {this.showDetailedInfo(4)}}>
								<span className='wDate'>{newMonth[4]}<br/>{days[4]}</span>
								<br /><br />
								<span className="minTemp">{this.props.info.forecast.forecastday[4].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
								<span className="maxTemp">{this.props.info.forecast.forecastday[4].day.maxtemp_f} &#8457;</span>
								<br /><br/>
								<img src={this.props.info.forecast.forecastday[4].day.condition.icon} alt={this.props.info.forecast.forecastday[4].day.condition.text} />
								<br />
								<span className="iconDesc">{this.props.info.forecast.forecastday[4].day.condition.text}</span>
								<br /><br />
								<span className="dayNight">SUNRISE:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[4].astro.sunrise}</span>
								<br /><br />
								<span className="dayNight">SUNSET:</span>
								<br />
								<span>{this.props.info.forecast.forecastday[4].astro.sunset}</span>
							</div>
						</>
						:

						<>
							<div className="weatherSummary">
								<h3>Location: {locInfo}</h3>
							</div>
							<div className="detailedInfo">
								<div id="dinfo1">
									<span className='wDate'>{newMonth[this.state.index]}<br/>{days[this.state.index]}</span>
									<br /><br />
									<span className="minTemp">{this.props.info.forecast.forecastday[this.state.index].day.mintemp_f} &#8457;</span>&nbsp;|&nbsp; 
									<span className="maxTemp">{this.props.info.forecast.forecastday[this.state.index].day.maxtemp_f} &#8457;</span>
									<br /><br/>
									<img src={this.props.info.forecast.forecastday[this.state.index].day.condition.icon} alt={this.props.info.forecast.forecastday[this.state.index].day.condition.text} />
									<br />
									<span className="iconDesc">{this.props.info.forecast.forecastday[this.state.index].day.condition.text}</span>
									<br /><br />
									<p>Sunrise: {this.props.info.forecast.forecastday[this.state.index].astro.sunrise}</p>
									<p>Sunset: {this.props.info.forecast.forecastday[this.state.index].astro.sunset}</p>
								</div>
								<div id="dinfo2">
									<p>Average Temperature: {this.props.info.forecast.forecastday[this.state.index].day.avgtemp_f} &#8457;</p>
									<p>Max Wind (MPH): {this.props.info.forecast.forecastday[this.state.index].day.maxwind_mph}</p>
									<p>Max Wind (KPH): {this.props.info.forecast.forecastday[this.state.index].day.maxwind_kph}</p>
									<p>Total Precipitation (mm): {this.props.info.forecast.forecastday[this.state.index].day.totalprecip_mm}</p>
									<p>Total Precipitation (in): {this.props.info.forecast.forecastday[this.state.index].day.totalprecip_in}</p>
									<p>Average Visibility (km): {this.props.info.forecast.forecastday[this.state.index].day.avgvis_km}</p>
									<p>Average Visibility (miles): {this.props.info.forecast.forecastday[this.state.index].day.avgvis_miles}</p>
									<p>Average Humidity: {this.props.info.forecast.forecastday[this.state.index].day.avghumidity}</p>
									<p>UV Index: {this.props.info.forecast.forecastday[this.state.index].day.uv}</p>
								</div>
							</div>
							<br />
							<div className="weatherSummary">
								<button className="submit" onClick={() => {this.goBack()}}>Go Back</button>
							</div>
							<br />
						</>

					}
					</div>

					
				
			</>
		)

	}

}

export default WeatherInfo;
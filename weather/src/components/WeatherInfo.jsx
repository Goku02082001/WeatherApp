import React from 'react'
import '../styles/WeatherInfo.css'
const WeatherInfo = ({data}) => {
if (!data) return <div>No data available</div>;    
console.log("data: ",data)
 return (
    <div className="weather-card">
      <h2>Weather Details</h2>
      <div className="weather-row">
        <span className="label">Temperature:</span>
        <span className="value">{data.temprature}°C</span>
      </div>
      <div className="weather-row">
        <span className="label">Humidity:</span>
        <span className="value">{data.humidity}%</span>
      </div>
      <div className="weather-row">
        <span className="label">Wind:</span>
        <span className="value">{data.wind} km/h</span>
      </div>
      <div className="weather-row">
        <span className="label"> Condition:</span>
        <span className="value">{data.condition}</span>
      </div>
    </div>
  );
}

export default WeatherInfo

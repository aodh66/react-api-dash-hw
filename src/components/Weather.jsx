import { useState } from "react";

function Weather() {
  const weatherAPIKey = `4a8281ca022f942e79e774e72f71eb60`;
  const [position, setPosition] = useState(null);
  const [weather, setWeather] = useState(null);

  function locClick() {
    navigator.geolocation.getCurrentPosition(successWeather, errorWeather);
  }

  async function successWeather(loc) {
    const { latitude, longitude } = loc.coords;
    setPosition({ latitude: latitude, longitude: longitude });
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(
      2
    )}&lon=${longitude.toFixed(2)}&units=metric&appid=${weatherAPIKey}`;

    try {
      const apiCall = await fetch(endpoint);
      if (!apiCall.ok) throw apiCall;
      const weatherData = await apiCall.json();
      setWeather(weatherData);
    } catch (err) {
      console.log(err);
    }
  }

  function errorWeather(err) {
    console.log(err);
  }

  if (!position) {
    return (
      <div className="column-section weather-section top-section">
        <div className="section-title">Weather</div>
        <p className="section-data temperature">
          I need your location to get the weather.
        </p>
        <button onClick={locClick}>Get Location</button>
      </div>
    );
  } else if (position && !weather) {
    return (
      <div className="column-section weather-section top-section">
        <div className="section-title">Weather</div>
        <p className="section-data temperature">
          Error: Could not fetch the weather.
        </p>
        <button onClick={locClick}>Get Weather</button>
      </div>
    );
  } else if (weather) {
    return (
      <div className="column-section weather-section top-section">
        <div className="section-title">Weather</div>
        <p className="section-data temperature">
          Temperature: {weather.main.temp} °C
        </p>
        <p className="section-data weather">
          Weather: {weather.weather[0].main}
        </p>
        <p className="section-data humidity">
          Humidity: {weather.main.humidity}%
        </p>
        <p className="section-data wind">
          Wind Speed: {weather.wind.speed} km/h
        </p>
        <button onClick={locClick}>Get Weather</button>
      </div>
    );
  }
}

export default Weather;

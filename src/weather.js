import React, { useState } from "react";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  function handleWeather(event) {
    event.preventDefault();
    setWeatherInfo(`It is  19°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleWeather}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <h2>{weatherInfo}</h2>
    </div>
  );
}

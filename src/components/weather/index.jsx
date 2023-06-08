import React, { useState, useEffect } from 'react';

export default function WeatherComponent() {
  const [airQualityForecasts, setAirQualityForecasts] = useState([]);
  const [hourlyForecasts, setHourlyForecasts] = useState([]);
  const [currentAirQuality, setCurrentAirQuality] = useState({});
  const [currentConditions, setCurrentConditions] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});
  const [dailyIndices, setDailyIndices] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  })
  const fetchWeatherData = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual API key
      const apiKey = 'IO0_2W8q2AZNzg99-xokIjvG5lZrnp-HBAmii70Cuz0';
      const baseUrl = 'https://atlas.microsoft.com/weather';
      const duration = '24';
      const poluents = 'o3,pm25,pm10,no2,co,so2'; // check spec

      // Get Air Quality Daily Forecasts
      // TODO: get lat/long from user's location
      // TODO: get duration from user's preferences
      const airQualityForecastsResponse = await fetch(
        `${baseUrl}/currentConditions/json?api-version=1.0&query=47.60357,-122.32945&subscription-key=${apiKey}&duration=${duration}`
      );
      const airQualityForecastsData = await airQualityForecastsResponse.json();
      const beutifieldAirQualityForecasts = {
        "relativeHumidity": airQualityForecastsData.results[0].relativeHumidity}
      setAirQualityForecasts(beutifieldAirQualityForecasts);

      // Get Air Quality Hourly Forecasts
      const hourlyForecastsResponse = await fetch(
        `${baseUrl}/airQuality/forecasts/hourly/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}&duration=${duration}`
      );
      const hourlyForecastsData = hourlyForecastsResponse.json();
      setHourlyForecasts(hourlyForecastsData);

      // Get Current Air Quality
      const currentAirQualityResponse = await fetch(
          `${baseUrl}/airQuality/current/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}`
          );
      const currentAirQualityData = await currentAirQualityResponse.json();
      const beutifield = {
        "airQualityCategory": currentAirQualityData.results[0].category,
        "pollutants": currentAirQualityData.results[0].pollutants
      }
      setCurrentAirQuality(beutifield);

      // Get Current Conditions
      const currentConditionsResponse = await fetch(
          `${baseUrl}/currentConditions/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}&duration=${duration}`
      ); 
      const currentConditionsData = await currentConditionsResponse.json();
      const currentConditionsBeutiefeild = {
        "temperature": currentConditionsData.results[0].temperature}

      setCurrentConditions(currentConditionsBeutiefeild);

      // Get Daily Forecast
      const dailyForecastResponse = await fetch(
        `${baseUrl}/forecast/daily/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}`
      );
      const dailyForecastData = await dailyForecastResponse.json();
      const beutifieldDailyForecast = {
        "airAndPollen": dailyForecastData.forecasts[0].realFeelTemperature}
      setDailyForecast(beutifieldDailyForecast);

      // Get Daily Historical Actuals
      const dailyHistoricalActualsResponse = await fetch(
        `${baseUrl}/historical/actuals/daily/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}&endDate=2022-02-03&startDate=2022-01-31`
      );
      const dailyHistoricalActualsData = await dailyHistoricalActualsResponse.json();
      setDailyHistoricalActuals(dailyHistoricalActualsData);

      const dailyIndicesResponse = await fetch(
          `${baseUrl}/indices/daily/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}`
      );
      const dailyIndicesData = await dailyIndicesResponse.json();
      setDailyIndices(dailyIndicesData[0]);

      const hourlyForecastResponse = await fetch(
          `${baseUrl}/forecast/hourly/json?api-version=1&query=47.60357,-122.32945&subscription-key=${apiKey}&duration=${duration}`
      );
      const hourlyForecastData = await hourlyForecastResponse.json();
      setHourlyForecast(hourlyForecastData);

      console.log('airQualityForecasts', airQualityForecasts);
      console.log('hourlyForecasts', hourlyForecasts);
      console.log('currentAirQuality', currentAirQuality);
      console.log('currentConditions', currentConditions);
  } catch (error) {
      console.log(error);
    }
  }
    return (
        <>
            <h1>Current Air Quality</h1>
            <pre>{JSON.stringify(currentAirQuality)}</pre>
            <h1>Current Conditions</h1>
            <pre>{JSON.stringify(currentConditions, null, 2)}</pre>
            <h1>Air Quality Forecasts</h1>
            <pre>{JSON.stringify(airQualityForecasts, null, 2)}</pre>
            <h1>Daily Forecast</h1>
            <pre>{JSON.stringify(dailyForecast, null, 2)}</pre>
        </>
    )}

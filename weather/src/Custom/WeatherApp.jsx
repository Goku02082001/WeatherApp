import React, { useState } from 'react';
import useFetchWeather from './useFetchWeather';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import WeatherInfo from '../components/WeatherInfo';

const WeatherApp = () => {
  const [city, setCity] = useState(''); 
  const { data, isLoading } = useFetchWeather(city); 

  return (
    <div>
      <h1>Here is my weather App</h1>
      {isLoading && <Loading />}
      <SearchBar onSearch={setCity} />
      {data && <WeatherInfo data={data} />}
    </div>
  );
};

export default WeatherApp;

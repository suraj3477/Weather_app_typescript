import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchWeather } from './actions';
import { ThunkDispatch } from 'redux-thunk';
import { WeatherAction } from './types';

const App: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, any, WeatherAction> = useDispatch();
  const { weatherData, loading, error } = useSelector((state: RootState) => state.weather);

  console.log('weatherData===', [weatherData]);
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName) {
      dispatch(fetchWeather(cityName));
    }
  };


  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && typeof weatherData === 'object' && (
        <div>
          <p>City :{weatherData.name}</p>
          <p>Lat : {weatherData.coord.lat}</p>
          <p>Long : {weatherData.coord.lon}</p>
          <p>Timezone : {weatherData.timezone}</p>
          <p>Wind : {weatherData.wind.speed}</p>
        </div>
      )}
    </div>
  );
};

export default App;

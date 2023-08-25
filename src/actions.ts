import { WeatherAction } from './types';
import axios from 'axios';

const API_KEY = 'ffcdab04e9ef3971e27610b6294e5bde';

export const fetchWeather = (cityName: string) => async (dispatch: React.Dispatch<WeatherAction>) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`);
    dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: 'City not found' });
  }
};

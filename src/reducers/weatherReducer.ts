import { Reducer } from 'react';
import { WeatherAction, WeatherState } from '../types';

const initialState: WeatherState = {
  weatherData: null,
  loading: true,
  error: null,
};

const weatherReducer: Reducer<WeatherState, WeatherAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;

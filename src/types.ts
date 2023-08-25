export interface Weather {
    name: null;
    coord: {
      lat: null;
      lon: null;
    };
    timezone: null;
  }
  
  export interface WeatherState {
    weatherData: {
        name: null;
        coord: {
          lat: null;
          lon: null;
        };
        timezone: null;
      } | null;
    loading: boolean;
    error: string | null;
  }
  
  export type WeatherAction =
    | { type: 'FETCH_WEATHER_SUCCESS'; payload: Weather }
    | { type: 'FETCH_WEATHER_FAILURE'; payload: string };
  
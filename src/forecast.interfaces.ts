export interface IForecastResponse {
  statusCode: number;
  body: IForecast;
}

export interface IForecast {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: IWeather;
  hourly: ILongTimeWeather;
  daily: ILongTimeWeather;
  flags: IForecastFlags;
}

export interface IWeather {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  pressure: number;
  ozone: number;
  uvIndex: number;
}

export interface ILongTimeWeather {
  summary: string;
  icon: string;
  data: {
    [index: number]: IWeather
  }
}

export interface IForecastFlags {
  sources: string[];
  "isd-stations": string[];
  units: string;
}

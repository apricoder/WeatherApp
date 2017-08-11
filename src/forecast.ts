import {IWeatherAppConfig} from './app.config.interface';
import {WeatherAppConfig} from './app.config';
import {ICoordinates} from './geocode.interfaces';
import {IForecast} from './forecast.interfaces';

export class ForecastService {

  private config: IWeatherAppConfig;

  constructor() {
    this.config = WeatherAppConfig
  }

  getForecast(location: ICoordinates): Promise<IForecast> {
    return null;
  }

}

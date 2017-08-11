import {WeatherAppConfig} from './app.config';
import {ICoordinates} from './geocode.interfaces';
import {IForecast, IForecastResponse} from './forecast.interfaces';
import PromisifiedRequest from './promisified.request';

const HttpStatus = require('http-status-codes');
const request = PromisifiedRequest;

export function getForecast(location: ICoordinates): Promise<IForecast> {
  const options = getForecastRequestOptions(location);
  return request.getAsync(options)
    .spread((response: IForecastResponse, body: IForecast) => {
      if (response.statusCode === HttpStatus.OK) return body;
      else throw new Error(`Forecast server responded with status ${response.statusCode}: ${body}`);
    })
    .catch(error => {
      throw new Error(`Can't get forecast: ` + error.message);
    });
}

const getForecastRequestOptions = (location: ICoordinates) => ({
  uri: `${WeatherAppConfig.forecast.api}/${WeatherAppConfig.forecast.key}/${location.lat},${location.lng}?units=si`,
  json: true
});
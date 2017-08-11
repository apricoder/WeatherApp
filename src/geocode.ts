import {IGeocode, IGeocodeResponse, IGeocodeResponseBody} from './geocode.interfaces';
import {WeatherAppConfig} from './app.config';
import PromisifiedRequest from './promisified.request';

const request = PromisifiedRequest;

export function getGeocode(address: string): Promise<IGeocode> {
  const options = getGeocodeRequestOptions(address);
  return request.getAsync(options)
    .spread((response: IGeocodeResponse, body: IGeocodeResponseBody) => {
      const results = body.results;
      if (results && results.length) return results[0];
      else throw new Error(`No results for given address.`);
    })
    .catch((error) => {
      throw new Error(`Can't connect to geocode server.` + error);
    });
}

const getGeocodeRequestOptions = (address: string) => ({
  uri: `${WeatherAppConfig.geocode.api}?address=${encodeURIComponent(address)}`,
  json: true
});


import {GeocodeResult, IGeocodeResponse, IGeocodeResponseBody} from './geocode.interfaces';
import {GEOCODE_API_URL} from './geocode.declarations';

const Promise = require('bluebird');
const request = Promise.promisify(require('request'), {multiArgs: true});
Promise.promisifyAll(request, {multiArgs: true});

export function getCoordinates(address: string): Promise<GeocodeResult> {
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
  uri: `${GEOCODE_API_URL}?address=${encodeURIComponent(address)}`,
  json: true
});


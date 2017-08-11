import {ApplicationParams} from './app.params';
import {getGeocode} from './geocode';
import {getForecast} from './forecast';
import {formatForecast} from './forecast.formatter';

getGeocode(ApplicationParams.address)
  .then(geocode => getForecast(geocode.geometry.location)
    .then(forecast => formatForecast(geocode, forecast))
    .then(result => console.log(result)))
  .catch((error) => console.error(error.message));

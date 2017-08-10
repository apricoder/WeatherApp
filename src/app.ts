import {ApplicationParams} from './app.params';
import {getCoordinates} from './geocode';
import {GeocodeResult} from './geocode.interfaces';

getCoordinates(ApplicationParams.address)
  .then((result: GeocodeResult) => console.log(result))
  .catch(console.error);

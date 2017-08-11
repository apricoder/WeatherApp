import {IGeocode} from './geocode.interfaces';
import {IForecast} from './forecast.interfaces';

export const formatForecast = (geocode: IGeocode, forecast: IForecast) => `
Weather info for ${geocode.formatted_address}
--------------------------------------------------
Currently - ${forecast.currently.temperature}°C, ${lowercaseFirstLetter(forecast.currently.summary)}. 
${forecast.hourly.summary}
${forecast.daily.summary}`;

const lowercaseFirstLetter = (text: string) => {
  return text.charAt(0).toLocaleLowerCase() + text.slice(1);
};

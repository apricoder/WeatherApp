import * as yargs from 'yargs';
import {IWeatherAppParams} from './app.params.declarations';

const argv = yargs
  .alias('help', 'h')
  .help()
  .options({
    address: {
      demand: true,
      describe: 'Address to fetch weather for',
      string: true,
      alias: 'a'
    }
  })
  .argv;

export const ApplicationParams = argv as IWeatherAppParams;

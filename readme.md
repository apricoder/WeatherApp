# WeatherApp
Just a typescript node exercise

```
> node dist\src\app.js --address Rzeszów

Weather info for Rzeszow, Poland
--------------------------------------------------
Currently - 23.97°C, clear.
Light rain starting tomorrow afternoon, continuing until tomorrow evening.
Light rain tomorrow and Sunday, with temperatures falling to 21°C on Sunday.
```

### Steps to run
1) Get a free [forecast api](https://darksky.net/dev/register) key.
2) In `config` folder create `config.json` by copying `config.example.json` and inserting your key there.
3) Compile project using `tsc` in project root.
4) Copy config files to `dist` by running `npm run copy:config`.
5) Run `node dist/src/app.js --address="Your address here"` to receive forecast.

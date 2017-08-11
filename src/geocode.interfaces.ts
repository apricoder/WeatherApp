export interface IGeocodeResponse {
  body: IGeocodeResponseBody;
}

export interface IGeocodeResponseBody {
  results: IGeocode[];
}

export interface IGeocode {
  formatted_address: string;
  geometry: {
    location: ICoordinates;
  }
}

export interface ICoordinates {
  lat: number;
  lng: number;
}



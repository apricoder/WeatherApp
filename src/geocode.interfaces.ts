export interface IGeocodeResponse {
  body: IGeocodeResponseBody
}

export interface IGeocodeResponseBody {
  results: Array<GeocodeResult>
}

export interface GeocodeResult {
  formatted_address: string,
  geometry: {
    location: {
      lat: number,
      lng: number
    }
  }
}



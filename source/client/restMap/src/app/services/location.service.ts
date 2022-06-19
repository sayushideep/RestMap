import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  public getLocation(
    successCb: PositionCallback,
    errorCb: PositionErrorCallback
  ) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}

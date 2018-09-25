import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserDevice } from './class/UserDevice';

@Injectable()
export class UserdataService {
  devices: UserDevice[] = [
    {
      id: 11006,
      username: 'leonardo',
      lat: 45.8623,
      long: -120.7503,
    },
    {
      id: 11007,
      username: 'leonardo',
      lat: 45.8623,
      long: -121.7565,
    },
    {
      id: 11008,
      username: 'leonardo',
      lat: 48.8723,
      long: -120.7503,
    },
    {
      id: 11009,
      username: 'leonardo',
      lat: 49.8688,
      long: -125.7803,
    },
    {
      id: 11010,
      username: 'leonardo',
      lat: 50.8825,
      long: -130.7603,
    },
  ];

  constructor() { }

  getDevices(userId: number): Observable<UserDevice[]> {
    return;
  }
}

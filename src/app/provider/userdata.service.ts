import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserdataService {
  private url = '../../assets/markers/markers.json';
  constructor(private http: HttpClient) { }

  getDevices(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}

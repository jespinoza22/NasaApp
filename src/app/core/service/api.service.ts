import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getImageOfDay(date: string) {
    return this.http.get(`${environment.urlapiIOD}${environment.api_key}&date=${date}`);
  }
}

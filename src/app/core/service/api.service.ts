import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ImageOfDay } from '../models/ImageOfDay';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getImageOfDay(date: string) {
    return this.http.get<ImageOfDay>(`${environment.urlapiIOD}${environment.api_key}&date=${date}`);
  }
}

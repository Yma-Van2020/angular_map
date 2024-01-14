// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://api.worldbank.org/v2';

  constructor(private http: HttpClient) {}

  getCountryInfo(countryName: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/country/${countryName}?format=json`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { properties } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl: String = `${properties.baseUrl}${properties.separator}${properties.domainApi}/api/users`;

  constructor(private http: HttpClient) {}

  getUserName(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}`, { responseType: 'text' as 'json' });
  }
}

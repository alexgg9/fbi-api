import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbiApiService {

    private apiUrl = 'https://api.fbi.gov/wanted/v1/list';
  
    constructor(private http: HttpClient) { }
  
    getMostWanted(): Observable<any> {
      return this.http.get<any>(this.apiUrl);  
    }
}

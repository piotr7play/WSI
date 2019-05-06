import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sign } from '../models/sign';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  public saveAssigning(assigning: any[]) {
    return (this.http.post<any[]>(this.url + `/`, assigning));
  }

  public getAssigning(): Observable<Sign[]> {
    return (this.http.get<Sign[]>(this.url));
  }

  public getAllWords(): Observable<string[]> {
    return (this.http.get<string[]>(this.url+'/discString'));
  }
}

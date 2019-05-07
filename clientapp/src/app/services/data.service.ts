import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sign } from '../models/sign';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://localhost:44353/api";
  urlSound: string = "https://localhost:44353/api/Phaistos/convert";

  constructor(private http: HttpClient) { }

  public saveAssigning(assigning: any[]) {
    return (this.http.post<any[]>(this.url + `/`, assigning));
  }

  public getAssigning(): Observable<Sign[]> {
    return (this.http.get<Sign[]>(this.url +'/'));
  }

  public getAllWords(): Observable<string[]> {
    return (this.http.get<string[]>(this.url + '/discString'));
  }

  public getSound(items: string[]): Observable<any> {
    return (this.http.post<string[]>(this.urlSound, items));
  }
}

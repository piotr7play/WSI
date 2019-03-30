import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "";

  constructor(private http: HttpClient) { }

  public saveAssigning(assigning: any[]) {
    return (this.http.post<any[]>(this.url + `/`, assigning));
  }
}

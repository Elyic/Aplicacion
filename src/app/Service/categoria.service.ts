import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:3000';
  uri = '/CONSULTA';
  constructor(private http: HttpClient) { }
  setCONSULTA() {
    return this.http.get(`${this.url}${this.uri}`,
    { }
    );
    }
}

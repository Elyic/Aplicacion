import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://18.221.124.45:3000';
  uri = '/CONSULTA';
  constructor(private http: HttpClient) { }
  setCONSULTA() {
    return this.http.get(`${this.url}${this.uri}`,
    { }
    );
    }
}

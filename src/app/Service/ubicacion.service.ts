import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  url = 'http://192.168.1.8:3000';
  uri = '/PAIS';
  depto = '/DEPTO';
  muni = '/MUNI';
  constructor(private http: HttpClient) { }
  setCONSULTAPAIS() {
    return this.http.get(`${this.url}${this.uri}`,
    { }
    );
    }
    setCONSULTADEPTO(id_p: string) {
      return this.http.get(`${this.url}${this.depto}`,
      {
        params:  {
          id_pais: id_p,
        }
       }
      );
      }
      setCONSULTAMUNI(id_d: string) {
        return this.http.get(`${this.url}${this.muni}`,
        {
          params:  {
            id_depto: id_d,
          }
         }
        );
        }
}

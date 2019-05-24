import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  url = 'http://localhost:3000';
  uri = '/GUARDAR';
  mostrar = '/MOSTRAR';
  constructor(private http: HttpClient) { }
  setGUARDAR(ocu: string, desc: string, id_m: string, id_c: string, id_u: string, salar: string) {
    return this.http.get(`${this.url}${this.uri}`,
    { params:  {
      ocupacion : ocu,
      descripcion : desc,
      id_muni: id_m,
      id_categoria: id_c,
      id_usuario: id_u,
      salario: salar,
    } }
    );
    }
    setCONSULTATRABAJOS() {
      return this.http.get(`${this.url}${this.mostrar}`,
      { }
      );
      }
}

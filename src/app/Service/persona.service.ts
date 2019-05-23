import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:3000';
  uri = '/REGISTRO';
  login = '/LOGIN';
  validar = '/VALIDAR';
  ID = '/ID';
  constructor(private http: HttpClient) { }
  setREGISTRO(nombr: string, ape: string, estad: string, gen: string, dir: string,
    tel: string, ema: string, pas: string, fech: string) {
    return this.http.get(`http://localhost:3000${this.uri}`,
    { params:  {
      nombre : nombr,
      apellido : ape,
      estado: estad,
      genero: gen,
      direccion: dir,
      telefono: tel,
      email: ema,
      pass: pas,
      fecha: fech
    } }
    );
    }
    setLOGIN(ema: string, pas: string) {
      return this.http.get(`http://localhost:3000${this.login}`,
      { params:  {
        email: ema,
        pass: pas,
      } }
      );
      }
      setVALIDAR(ema: string) {
        return this.http.get(`http://localhost:3000${this.validar}`,
        { params:  {
          email: ema,
        } }
        );
        }
        setID(ema: string) {
          return this.http.get(`http://localhost:3000${this.ID}`,
          { params:  {
            email: ema,
          } }
          );
          }
  }


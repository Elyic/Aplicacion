import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://192.168.1.8:3000';
  uri = '/REGISTRO';
  login = '/LOGIN';
  validar = '/VALIDAR';
  ID = '/ID';
  constructor(private http: HttpClient, private storage: Storage) { }
  setREGISTRO(nombr: string, ape: string, estad: string, gen: string, dir: string,
    tel: string, ema: string, pas: string, id_m: string, fech: string) {
    return this.http.get(`${this.url}${this.uri}`,
    { params:  {
      nombre : nombr,
      apellido : ape,
      estado: estad,
      genero: gen,
      direccion: dir,
      telefono: tel,
      email: ema,
      pass: pas,
      id_muni: id_m,
      fecha: fech
    } }
    );
    }
    setLOGIN(ema: string, pas: string) {
      return this.http.get(`${this.url}${this.login}`,
      { params:  {
        email: ema,
        pass: pas,
      } }
      );
      }
      setVALIDAR(ema: string) {
        return this.http.get(`${this.url}${this.validar}`,
        { params:  {
          email: ema,
        } }
        );
        }
        setID(ema: string) {
          return this.http.get(`${this.url}${this.ID}`,
          { params:  {
            email: ema,
          } }
          );
          }
          Guardar(ID: number) {
            this.storage.set('ID_Persona', ID);
          }
          async Obtener() {
           return this.storage.get('ID_Persona').then((val) => {
             console.log('id en servicio', val);
              return val;
            });
          }
  }


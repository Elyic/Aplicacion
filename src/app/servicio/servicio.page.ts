import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../Service/persona.service';
import { CategoriaService } from '../Service/categoria.service';
import { UbicacionService } from '../Service/ubicacion.service';
import { TrabajoService } from '../Service/trabajo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {
  trabajo = {
    ocupacion: '',
    descripcion: '',
    id_categoria: '',
    id_usuario: '',
    id_pais: '',
    id_depto: '',
    id_muni: '',
    salario: '',
  };
  trabajoData: any;
  constructor(private persona: PersonaService, private categoria: CategoriaService,
    private ubicacion: UbicacionService, private trabajos: TrabajoService,
    private router: Router) { }
  arryObj: any;
  arryPais: any;
  ArrayDepto: any;
  ArrayMuni: any;
  ngOnInit() {
    this.categoria.setCONSULTA().subscribe(
      (data: any ) => {
        this.arryObj = data.recordset;
      });
      this.ubicacion.setCONSULTAPAIS().subscribe(
        (data: any ) => {
            this.arryPais = data.recordset;
        });
        this.persona.Obtener().then((idObtener) => {console.log(idObtener );
          this.trabajo.id_usuario = idObtener;
        });
  }
  onSubmitTemplate() {
    this.trabajos.setGUARDAR(this.trabajo.ocupacion, this.trabajo.descripcion, this.trabajo.id_muni,
      this.trabajo.id_categoria, this.trabajo.id_usuario, this.trabajo.salario)
                .subscribe(
                  (data: any) => {
                    this.trabajoData = this.trabajo;
                    console.log(this.trabajoData );
                    this.router.navigate(['/inicio']);
                  },
                  (err: any) => {
                    console.log(err);
              }
                );
  }
  CambioPais(event: any) {
    this.ubicacion.setCONSULTADEPTO(this.trabajo.id_pais).subscribe(
      (data: any ) => {
          this.ArrayDepto = data.recordset;
      });
  }
  CambioDepto(event: any) {
    this.ubicacion.setCONSULTAMUNI(this.trabajo.id_depto).subscribe(
      (data: any ) => {
          this.ArrayMuni = data.recordset;
      });
  }
}

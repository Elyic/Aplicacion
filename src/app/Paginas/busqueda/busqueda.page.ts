import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/Service/trabajo.service';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  usuario = {
    email: '',
    pass: '',
    id_categoria: '',
    id_usuario: '',
  };
  trabajos = {
    id_trabajo: '',
  };
  personaData: any;
  argumentos = null;
  arryObj: any;
  arryTrabajo: any;
  constructor(private persona: PersonaService,
    private activeRoute: ActivatedRoute,
    private categoria: CategoriaService,
    private trabajo: TrabajoService,
    private router: Router) { }

  ngOnInit() {
    this.argumentos = this.activeRoute.snapshot.paramMap.get('id');
    this.persona.Obtener().then((idObtener) => {console.log(idObtener );
      this.usuario.id_usuario = idObtener;
    });
    this.categoria.setCONSULTA().subscribe(
      (data: any ) => {
        this.arryObj = data.recordset;
      });
      this.trabajo.setBUSQUEDACATEGORIA(this.argumentos).subscribe(
        (data: any ) => {
          this.arryTrabajo = data.recordset;
        });
  }
  onSubmit() {
    console.log('Estas en busqueda', this.usuario.id_categoria);
    this.router.navigate(['/busqueda', this.usuario.id_categoria]);
  }

}

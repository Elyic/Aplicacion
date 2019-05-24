import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../Service/categoria.service';
import { TrabajoService } from 'src/app/Service/trabajo.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
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
     private router: Router,
     public menuCtrl: MenuController) { }
     ionViewWillEnter() {
      this.menuCtrl.enable(true);
     }
  ngOnInit() {
    this.persona.Obtener().then((idObtener) => {console.log(idObtener );
      this.usuario.id_usuario = idObtener;
    });
    this.categoria.setCONSULTA().subscribe(
      (data: any ) => {
        this.arryObj = data.recordset;
      });
      this.trabajo.setCONSULTATRABAJOS().subscribe(
        (data: any ) => {
          this.arryTrabajo = data.recordset;
        });
  }
onSubmit() {
  console.log(this.usuario.id_categoria);
  this.router.navigate(['/busqueda', this.usuario.id_categoria]);
}
Refresh(event: any) {
  this.trabajo.setCONSULTATRABAJOS().subscribe(
    (data: any ) => {
      this.arryTrabajo = data.recordset;
    });
    this.categoria.setCONSULTA().subscribe(
      (data: any ) => {
        this.arryObj = data.recordset;
      });
  setTimeout(() => {
    event.target.complete();
  }, 1000);
}
}

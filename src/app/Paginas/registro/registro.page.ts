import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PersonaService } from 'src/app/Service/persona.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    nacimiento: '',
    civil: '',
    genero: '',
    dire: '',
    telefono: '',
    email: '',
    pass: '',
    pass2: '',
  };
  personaData: any;
  constructor(private persona: PersonaService) { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    if (this.usuario.pass === this.usuario.pass2) {
      this.persona.setREGISTRO(this.usuario.nombre, this.usuario.apellido, this.usuario.civil,
      this.usuario.genero, this.usuario.dire, this.usuario.telefono, this.usuario.email, this.usuario.pass,
      this.usuario.nacimiento)
                 .subscribe(
                   (data: any) => {
                    this.personaData = this.usuario;
                    console.log(this.personaData );
                   },
                  (err: any) => {
                        console.log(err);
                  });
    }
    }
  }


import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    if (this.usuario.pass === this.usuario.pass2) {
      console.log(this.usuario.pass);
    }
    }
  }


import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
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
  constructor(private persona: PersonaService, private persona2: PersonaService, public alertController: AlertController) { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    this.persona2.setVALIDAR(this.usuario.email)
                 .subscribe(
                   (data: any) => {
                    this.personaData = this.usuario;
                    console.log(data.recordset[0].Validacion );
                    if (data.recordset[0].Validacion > 0) {
                      this.presentAlert();
                    } else {
                      if (this.usuario.pass === this.usuario.pass2) {
                        this.persona.setREGISTRO(this.usuario.nombre, this.usuario.apellido, this.usuario.civil,
                        this.usuario.genero, this.usuario.dire, this.usuario.telefono, this.usuario.email, this.usuario.pass,
                        this.usuario.nacimiento)
                                   .subscribe(
                                     (data2: any) => {
                                      this.personaData = this.usuario;
                                      console.log(this.personaData );
                                     },
                                    (err: any) => {
                                          console.log(err);
                                    });
                      } else {
                        this.Contra();
                      }
                    }
                   },
                  (err: any) => {
                        console.log(err);
                  });
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Error',
        message: 'El Email ingresado ya se encuentra registrado!',
        buttons: ['OK']
      });
      await alert.present();
    }
    async Contra() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Error',
        message: 'Las contraseñas no coinciden!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }


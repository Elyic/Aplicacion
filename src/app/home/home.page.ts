import { Component } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    email: '',
    pass: '',
  };
  personaData: any;
  constructor(private persona: PersonaService, public alertController: AlertController, private router: Router,
    private persona2: PersonaService, private navCtrl: NavController) { }
  onSubmitTemplate() {
      this.persona.setLOGIN(this.usuario.email, this.usuario.pass)
                 .subscribe(
                   (data: any) => {
                    this.personaData = this.usuario;
                    console.log(data.recordset[0].Validacion );
                    if (data.recordset[0].Validacion > 0) {
                      this.persona2.setID(this.usuario.email)
                 .subscribe(
                   (data2: any) => {
                    console.log(data2.recordset[0].ID_USUARIO );
                    this.router.navigate(['/inicio', data2.recordset[0].ID_USUARIO]);
                   },
                  (err: any) => {
                        console.log(err);
                  });
                    } else {
                      this.presentAlert();
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
          message: 'Correo y/o contraseña invalido!',
          buttons: ['OK']
        });
        await alert.present();
      }
}

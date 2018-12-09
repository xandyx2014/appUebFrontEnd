import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos';
import { format } from 'date-fns';
import { AgendaPage } from '../agenda/agenda';
import { HorarioPage } from '../horario/horario';
import { ExamenesPage } from '../examenes/examenes';
import { LoginProvider } from '../../providers/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = [];
  agenda = AgendaPage;
  examenes = ExamenesPage;
  horario = HorarioPage;
  constructor(public navCtrl: NavController,
              public eventoProvider: EventosProvider,
              private alertCtrl: AlertController,
              private loginPro: LoginProvider) {
                format
  this.eventoProvider.traerEvento().subscribe((data: any) => {
      this.data = data['data'];
  });
  this.presentPrompt();
  }
  cambiarFecha(fecha: string) {
    return format(fecha, 'DD/MM/YYYY');
  }
  presentPrompt() {

    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Usuario'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            this.presentPrompt();
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.loginPro.login({
              id_alu: data.usuario,
              pin_alu: data.password
            }).subscribe((data) => {
              console.log(JSON.stringify( data));
            }, (err) => {
                this.presentPrompt();
            });
          }
        }
      ]
    });
    alert.present();

  }
}

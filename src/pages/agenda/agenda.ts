import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  items = [
    {
      texto: 'Tarea...'
    },
    {
      texto: 'Tarea...'
    },
    {
      texto: 'Tarea...'
    },
    {
      texto: 'Tarea...'
    },
    {
      texto: 'Tarea...'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,private calendar: Calendar) {
  }

  ionViewDidLoad() {
  }


}

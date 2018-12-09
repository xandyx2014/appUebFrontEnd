import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AgendaPage } from '../pages/agenda/agenda';
import { ExamenesPage } from '../pages/examenes/examenes';
import { HorarioPage } from '../pages/horario/horario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  agendaPage: any = AgendaPage;
  examenesPage: any = ExamenesPage;
  horarioPage: any = HorarioPage;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  irAgenda() {
    this.nav.push(this.agendaPage);
  }
  irExamenes() {
    this.nav.push(this.examenesPage);
  }
  irHorario() {
    this.nav.push(this.horarioPage);
  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgendaPage } from '../pages/agenda/agenda';
import { Calendar } from '@ionic-native/calendar';
import { CalendarModule } from 'ionic3-calendar-en';
import { ExamenesPage } from '../pages/examenes/examenes';
import { HorarioPage } from '../pages/horario/horario';
import { EventosProvider } from '../providers/eventos';
import {HttpClientModule} from '@angular/common/http';
import { LoginProvider } from '../providers/login';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaPage,
    ExamenesPage,
    HorarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaPage,
    ExamenesPage,
    HorarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    EventosProvider,
    LoginProvider
  ]
})
export class AppModule {}

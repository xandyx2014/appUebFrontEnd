import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from './config';

/*
  Generated class for the ServicesEventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesEventosProvider Provider');
  }
  traerEvento() {
    return this.http.get(`/evento`);
  }

}

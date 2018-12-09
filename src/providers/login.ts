import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  httpOptions;
  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
  }
  login(idAlumno) {
    const body = this.postData(idAlumno);
    return this.http.post('/login', body, this.httpOptions);
  }
  postData(dataParams) {
    const urlSearchParams = new URLSearchParams();
    // tslint:disable-next-line:forin
    for (const prop in dataParams) {
      urlSearchParams.append(`${prop}`, `${dataParams[prop]}`);
    }
    const body = urlSearchParams.toString();
    return body;
  }
}

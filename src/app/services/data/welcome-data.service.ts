
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(/*private http: HttpClient*/) { }

  executeHelloWorldService() {
    let data = '';// this.http.get('http://localhost:8080/hello-bean');
    console.log('data=', data);
    return data;
  }
}

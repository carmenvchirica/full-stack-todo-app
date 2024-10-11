import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {

    if(username==="carmen" && password === 'dummy') {
      console.log(this.isUserLoggedIn());

      // Save data to sessionStorage
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {

      return false;
    }
  }

  isUserLoggedIn() {
    // Get saved data from sessionStorage
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
} 

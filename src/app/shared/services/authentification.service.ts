import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  public currentUser! : BehaviorSubject<string>

  constructor() {
    this.currentUser = new BehaviorSubject<string>('')
  }

  login(emailValue : string) : void {
    sessionStorage.setItem('email', emailValue);
    this.currentUser.next(emailValue);
  }

  logout() : void {
    sessionStorage.clear();
    this.currentUser.next('');
  }

  isConnected() : boolean {
    const email = sessionStorage.getItem('email');
    if (!email) {
      return false;
    }
    
    return true;
  }

  getEmailConnected() : string | null {
    return sessionStorage.getItem('email')
  }



}

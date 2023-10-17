import { Component } from '@angular/core';
import { AuthentificationService } from '../shared/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  isConnected : boolean = false;
  email : string |null = this._nomAuthentification.getEmailConnected();

  constructor(
    private _nomAuthentification : AuthentificationService,
    private _nomRouter : Router
  ) {
    _nomAuthentification.currentUser.subscribe({
      next : (data) => {
        console.log(`Voici mon data au subscribe: ${data}`);
        if (data !== '') {
          this.isConnected = true
        } else {
          this.isConnected = false
        }
      },

      error : (error) => {
        console.log(`L'erreur suivante a été relevée: \n ${error}`);
      },

      complete : () => {
        console.log("Je suis arrivé au complete!");
      }
    })
  }

  ngOnInit() {
    console.log("Chargement de la valeur");
  }

  getConnexion() : void {
    this._nomRouter.navigate(['demo9']);
  }

  logout() : void {
    this._nomAuthentification.logout();
    this.getConnexion();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})

export class Demo7Component {

  idUser! : number;

  constructor(
    private _nomRouter : Router,
  ){}

  redirectToHome() : void {
    this._nomRouter.navigate(['home']);
  }

  redirectToProfilUser() : void {
    if (this.idUser) {
      this._nomRouter.navigate(['demo7-activated-route/'+this.idUser])
    }
  }

}

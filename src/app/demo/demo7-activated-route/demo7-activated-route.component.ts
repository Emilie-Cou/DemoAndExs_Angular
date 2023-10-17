import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo7-activated-route',
  templateUrl: './demo7-activated-route.component.html',
  styleUrls: ['./demo7-activated-route.component.css']
})

export class Demo7ActivatedRouteComponent {

  idUser! : string;

  constructor(
    private _nomActivatedRoute : ActivatedRoute
  ){}

  ngOnInit() {
    this.idUser = this._nomActivatedRoute.snapshot.params['id']
  }
}

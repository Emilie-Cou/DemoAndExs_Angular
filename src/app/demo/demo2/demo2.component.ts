import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})

export class Demo2Component {
  myString : string = "hElLo WoRlD!!!";
  myNumber : number = 42.22222222;
  myDate : Date = new Date();
  myTempC : number = 16;
  myTempF : number = 42;
}

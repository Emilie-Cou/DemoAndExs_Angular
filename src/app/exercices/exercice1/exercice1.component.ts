import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})

export class Exercice1Component {
  myNumber!: number;

  ngOnInit(): void {
    this.myNumber = 0;
  }

  addOne(): void {
    // this.myNumber = this.myNumber + 1
    this.myNumber += 1;
    // this.myNumber++;
  }

  withDrawOne(): void {
    this.myNumber -= 1;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})

export class Exercice2Component {
  timer: any = undefined;
  chrono: number = 0;
  isActive: boolean = false;

  start(): void {
    this.timer = setInterval(
      () => {
        this.chrono++;
      }, 1000
    )
  }

  stop(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset(): void {
    this.chrono = 0;
  }

  toggle(): void {
    if (!this.isActive) {
      this.start();
    } else {
      this.stop();
    }
    this.isActive = !this.isActive;
  }
}

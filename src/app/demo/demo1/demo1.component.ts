import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})

export class Demo1Component {
  // Property binding
  prenom: string = "Emilie";
  prenom2: string = "";

  // Event binding
  jour: string = "";

  // Attribute binding
  id: string = "ma-div";
  isActive: boolean = true;

  // Méthode
  changerJour(j: string): void {
    this.jour = j;
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}

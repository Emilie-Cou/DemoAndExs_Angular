import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    /*
    dans une class : je peux avoir exclusivement des déclarations (de variable ou de méthode)
    mais pas de code fonctionnel
    le code fonctionnel devra se trouver dans des méthodes
  */

  monNom : string = "Emilie"
  monAge : number = 33
  maDateNaissance : Date = new Date(90, 0, 3)
  marier : boolean = false

  noms : string[] = ['Emilie', 'Julie', 'Elia', 'Elisa']

  changerNom() {
    if (this.monNom == "Emilie") {
      this.monNom = "J'ai changé de nom"
    } else if (this.monNom == "J'ai changé de nom") {
      this.monNom = "Emilie"
    }
  }
  
  changerNomBis(nom : string) {
      this.monNom = nom
  }

  
  timer: any = undefined;

  start(): void {
    this.timer = setInterval(
      () => {
        console.log('Hello world!!!');
      }, 1000
    )
  }

  stop(): void {
    clearInterval(this.timer);
  }
}

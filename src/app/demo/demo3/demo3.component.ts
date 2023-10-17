import { Component } from '@angular/core';
import { Taches } from 'src/app/shared/models/taches';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})

export class Demo3Component {

  // je créer plusieurs taches
  tache1 : Taches = {
    id : 0,
    nom : 'Tache 1',
    complet : false
  }

  tache2 : Taches = {
    id : 1,
    nom : 'Tache 1',
    complet : false
  }

  tache3 : Taches = {
    id : 2,
    nom : 'Tache 2',
    complet : false
  }

  tache4 : Taches = {
    id : 3,
    nom : 'Tache 3',
    complet : false
  }

  taches : Taches[] = [this.tache1,this.tache2,this.tache3,this.tache4]

  changerEtat(id : number) : void {
    // Inversion de l'état booléen de complet
    this.taches[id].complet = !this.taches[id].complet
  }

}
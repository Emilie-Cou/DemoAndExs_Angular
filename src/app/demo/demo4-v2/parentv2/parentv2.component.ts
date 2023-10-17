import { Component } from '@angular/core';
import { datasUtilisateurs } from 'src/app/shared/data/datasUtilisateurs';
import { Utilisateur } from 'src/app/shared/models/utilisateur';

@Component({
  selector: 'app-parentv2',
  templateUrl: './parentv2.component.html',
  styleUrls: ['./parentv2.component.css']
})

export class Parentv2Component {

  listePersonne : Utilisateur[] = datasUtilisateurs;

  deleteChildById(idPerson : number) {
    let indexToDelete = this.listePersonne.findIndex((person) => person.id == idPerson);
    this.listePersonne.splice(indexToDelete, 1);
  }

  updateChildPrenom(updatedPerson : Utilisateur) : void {
    let indexToUpdate = this.listePersonne.findIndex((person) => person.id == updatedPerson.id);
    this.listePersonne[indexToUpdate].prenom = updatedPerson.prenom;
  }

  ngOnInit() : void{

  }

}
 
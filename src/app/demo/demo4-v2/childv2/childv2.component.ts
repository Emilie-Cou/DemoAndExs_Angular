import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Utilisateur } from 'src/app/shared/models/utilisateur';

@Component({
  selector: 'app-childv2',
  templateUrl: './childv2.component.html',
  styleUrls: ['./childv2.component.css']
})

export class Childv2Component {

  @Input() id : number = 0;
  @Input() prenom: string = "";

  @Output() clickOnChildDelete : EventEmitter<number> = new EventEmitter<number>();
  @Output() clickOnChildUpdatePrenom : EventEmitter<Utilisateur> = new EventEmitter<Utilisateur>();

  triggerInputName : boolean = false;

  newPrenom : string = "";
  newUser : Utilisateur = {
    id : 0,
    prenom : "",
  };

  deleteMe(idPerson : number) : void {
    this.clickOnChildDelete.emit(idPerson)
  }

  saveOnParent(idPerson : number) : void {
    this.newUser.id = idPerson;
    this.newUser.prenom = this.newPrenom;
    this.clickOnChildUpdatePrenom.emit(this.newUser);
  }

  showInput(prenom : string) : void {
    this.newPrenom = prenom;
    this.triggerInputName = !this.triggerInputName;
  }

}

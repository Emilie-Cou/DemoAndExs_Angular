import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {

  message : string = "Message du composant parent vers le composant enfant.";
  messageRecu : string = "";
  
  methodeDefiniePourEnvoi(texte : string) : void {
    this.messageRecu = texte;
  }
}

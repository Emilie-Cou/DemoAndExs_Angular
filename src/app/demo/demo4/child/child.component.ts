import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  @Input() messageDepuisParent! : string;
  @Output() messageAEnvoyer = new EventEmitter<string>();

  envoyerMessageAuParent() {
    this.messageAEnvoyer.emit("Message partant du composant enfant vers le parent.")
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-click-enfant',
  templateUrl: './click-enfant.component.html',
  styleUrls: ['./click-enfant.component.css']
})

export class ClickEnfantComponent {

  @Output() buttonClicked = new EventEmitter<void>();

  handleButtonClick() : void {
    this.buttonClicked.emit();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-click-parent',
  templateUrl: './click-parent.component.html',
  styleUrls: ['./click-parent.component.css']
})

export class ClickParentComponent {

  handleButtonClicked() : void {
    console.log("Le boutton a été cliqué!");
  }
}

import { Component } from '@angular/core';
import { LivresService } from 'src/app/shared/services/livres.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})

export class Demo5Component {

  public livres : string[] = [];

  newLivre : string = '';

  erreurMessage : string = "Entre le titre d'un livre";
  erreur : boolean = false;

  constructor(private _livresService : LivresService){}

  ngOnInit(){
    this.livres = this._livresService.getLivres();
  }

  addNewLivre() : void {
    if (this.newLivre != "") {
          this._livresService.addLivre(this.newLivre);
    } else {
      this.erreur = true;
    }
  }

  removeChoiceLivre(index : number) : void {
    this._livresService.removeLivre(index);
  }
}

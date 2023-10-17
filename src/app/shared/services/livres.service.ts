import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LivresService {

  private _livres : string[] = ["Peter Pan 1", "L'enfant de l'aube 2", "Mon super livre 3"]
  
  getLivres() : string[] {
    return this._livres;
  }

  addLivre(newLivre : string) : void {
    this._livres.push(newLivre);
  }

  removeLivre(index : number) : void {
    if (index >= 0 && index < this._livres.length) {
      this._livres.splice(index, 1);
    }
  }

}

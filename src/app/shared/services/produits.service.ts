import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  
  private _produits : Produit[] = [
    {
      id : 0,
      nom : 'café',
      description : 'Ceci est une description de café',
      prix : 2.5,
      enStock : true,
    },
    
    {
      id : 1,
      nom : 'tasse',
      description : 'Ceci est une description de tasse',
      prix : 1.75,
      enStock : false,
    },
    
    {
      id : 2,
      nom : 'tableau',
      description : 'Ceci est une description de tableau',
      prix : 19864,
      enStock : false,
    },
    
    {
      id : 3,
      nom : 'vase chinois',
      description : 'Ceci est une description de vase chinois',
      prix : 24351,
      enStock : false,
    },
    
    {
      id : 4,
      nom : 'homard',
      description : 'Ceci est une description de homard',
      prix : 125,
      enStock : true,
    },
  ]

  getProduits() : Produit[] {
    return this._produits;
  }

  getProduit(id : number) : Produit {
    return this._produits[id];
  }

  addProduit(newProduit : Produit) : void {
    this._produits.push(newProduit);
  }

  removeProduit(index : number) : void {
    if (index >= 0 && index < this._produits.length) {
      this._produits.splice(index, 1);
    }
  }

  updateProduit(produitUpdated : Produit) {
    const index = this._produits.findIndex((produit) => produit.id === produitUpdated.id)
    if (index >=0 && index < this._produits.length) {
      this._produits[index] = produitUpdated;
    }
    console.log(produitUpdated.id + "C'est mis à jour");
    
  }


// ------------------------------------------------ //
// -------------------a compléter------------------ //
  maListe : Produit[] = this._produits;
  resetProduits() : Produit[] {
    return this.maListe;
  }
}

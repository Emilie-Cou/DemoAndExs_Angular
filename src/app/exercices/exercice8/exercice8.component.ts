import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-exercice8',
  templateUrl: './exercice8.component.html',
  styleUrls: ['./exercice8.component.css']
})

export class Exercice8Component {

  idARecup : number = -1;
  produitToUpdate! : Produit;
  messageErreur! : string;
  updateForm! : FormGroup;

  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomProductService : ProduitsService,
    private _nomRouter : Router,
  ){
    this.produitToUpdate = {
      id : -1,
      nom : '',
      description : '',
      prix : 0,
      enStock : null,
    }
  }

  ngOnInit(){
    this.updateForm = this._nomFormBuilder.group({
      nom : ['', [Validators.required]],
      description : ['', [Validators.required]],
      prix : ['', [Validators.required]],
    })
  }

  recupProduit() : void {
    console.log(`L'id est => ${this.idARecup}`);
    const nbreProduits = this._nomProductService.getProduits().length;
    if (this.idARecup == -1 || this.idARecup >= nbreProduits) {
      this.messageErreur = "ID introuvable...";
    }
    else {
      this.produitToUpdate = this._nomProductService.getProduit(this.idARecup);
      this.messageErreur = '';
      console.log(this.produitToUpdate);
    }
  }

  soumettreFormulaire() : void {
    const form = this.updateForm.value
    this.produitToUpdate.nom = form['nom'];
    this.produitToUpdate.description = form['description'];
    this.produitToUpdate.prix = form.prix;
    this._nomProductService.updateProduit(this.produitToUpdate);
    this._nomRouter.navigate(['exercice7']);
  }
}

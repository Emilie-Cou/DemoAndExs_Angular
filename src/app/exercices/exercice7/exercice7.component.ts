import { Component } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-exercice7',
  templateUrl: './exercice7.component.html',
  styleUrls: ['./exercice7.component.css']
})

export class Exercice7Component {
  
  constructor(public produitsService : ProduitsService){}

  public listeProduits : Produit[] = [];

  newProduitNom : string = '';
  newProduitDescription : string = '';
  newProduitPrix : number = 0;
  newProduitStock : boolean | null = null;

  selectedProduitId : number | null = null;
  updatedProduitNom : string = '';
  updatedProduitDescription : string = '';
  updatedProduitPrix : number = 0;
  updatedProduitStock : boolean | null = null;

  montreForm : boolean = false;

  ngOnInit() {
    this.listeProduits = this.produitsService.getProduits();
  }

  resetForm() {
    this.newProduitNom = '';
    this.newProduitDescription = "";
    this.newProduitPrix = 0;
    this.newProduitStock = null;
  }

  private getNextProduitId() : number {
    const ids = this.produitsService.getProduits().map((produit) => produit.id);
    return Math.max(0, ...ids) + 1;
  }

  addNewProduit() : void {
    const newProduit : Produit = {
      id : this.getNextProduitId(),
      nom : this.newProduitNom,
      description : this.newProduitDescription,
      prix : this.newProduitPrix,
      enStock : this.newProduitStock,
    }

    this.produitsService.addProduit(newProduit);
    this.resetForm();
  }

  removeChoiceProduit(index : number) : void {
    this.produitsService.removeProduit(index);
  }

  updateChoiceProduit(produitEdite : Produit) : void {
    this.montreForm = !this.montreForm;

    this.selectedProduitId = produitEdite.id;
    this.updatedProduitNom = produitEdite.nom;
    this.updatedProduitDescription = produitEdite.description;
    this.updatedProduitPrix = produitEdite.prix;
    this.updatedProduitStock = produitEdite.enStock;
  }
  
  updateSelectProduit() {
    if (this.selectedProduitId !== null) {
      const updatedProduit : Produit = {
        id : this.selectedProduitId,
        nom : this.updatedProduitNom,
        description : this.updatedProduitDescription,
        prix : this.updatedProduitPrix,
        enStock : this.updatedProduitStock,
      }
      this.produitsService.updateProduit(updatedProduit);

    }
  }



// ------------------------------------------------ //
// -------------------a compléter------------------ //
  resetListeProduits() {
    this.listeProduits = this.produitsService.resetProduits();
    console.log(this.produitsService.maListe);
    console.log("J'ai reset!!!");
  }
}

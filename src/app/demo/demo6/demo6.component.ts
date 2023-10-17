import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitsService } from 'src/app/shared/services/produits.service';
import { customValidators } from 'src/app/shared/validators/customValidators';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.css']
})

export class Demo6Component {

  ajoutForm! : FormGroup;

  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomProductService : ProduitsService,
  ){}

  ngOnInit(){
    console.log("Start du component formulaire...")
    this.ajoutForm = this._nomFormBuilder.group({
      nom : ['', Validators.required],
      description : ["test", Validators.required],
      email: ['', [Validators.required, customValidators.customDomainValidator('gmail.com')]],
      prix : [0, Validators.required],
    });
  }


  // // V_1 => envoi vers le services
  // submitForm() : void{
  //   const form = this.ajoutForm.value
  //   console.log(form)
  //   const newProduct : Product = {
  //     id : 0,
  //     nom : form['nom'],
  //     description : form['description'],
  //     prix : form['prix']
  //   }

  //   this._nomProductService.ajoutProduit(newProduct)
  // }

  // V_2 => Custom Validator => affichage en console uniquement
  submitForm() : void{
    const form = this.ajoutForm.value
    console.log(form['nom'])
    console.log(form['description'])
    console.log(form['prix'])
  }
}

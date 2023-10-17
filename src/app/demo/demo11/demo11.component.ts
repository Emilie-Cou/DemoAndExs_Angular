import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.css']
})

export class Demo11Component {

  found : boolean = false;
  currentPokemon! :  Pokemon;

  constructor(private _nomPokeApi : PokeapiService) {}

  ngOnInit() {
    this._nomPokeApi.getById(25).subscribe({
      next : (data) => {
        this.currentPokemon = {
          name : data.name,
          weight : data.poids,
          height : data.taille,
          base_experience : data.base_experience,
          is_default : data.is_default,
        }
        console.log(this.currentPokemon);
      },

      error : (error) => {
        console.log(error);     
      },

      complete : () => {
        console.log('Subscribe fini!');
        this.found = !this.found;
      }
    })
  }
}

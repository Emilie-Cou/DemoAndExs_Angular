import { Component } from '@angular/core';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})

export class Exercice3Component {
  
  maListeArticles : Article[] = [
    {
      id : 1,
      titre : "premier titre",
      description : "Ceci est mon premier article.",
      estPublie : false,
    },
    
    {
      id : 2,
      titre : "deuxième titre",
      description : "Ceci est mon deuxième article.",
      estPublie : false,
    },

    {
      id : 3,
      titre : "troisième titre",
      description : "Ceci est mon troisième article.",
      estPublie : false,
    },
  
    {
      id : 4,
      titre : "quatrième titre",
      description : "Ceci est mon quatrième article.",
      estPublie : false,
    },

    {
      id : 5,
      titre : "cinquième titre",
      description : "Ceci est mon cinquième article.",
      estPublie : false,
    },
  
    {
      id : 6,
      titre : "sixième titre",
      description : "Ceci est mon sixième article.",
      estPublie : true,
    },
  ];
  
  
  publie(id : number) : void {
    this.maListeArticles[id-1].estPublie = !this.maListeArticles[id-1].estPublie;
  }
  
  afficherTous = true;
  basculerAffichage() : void {
    this.afficherTous = !this.afficherTous;
  }
}

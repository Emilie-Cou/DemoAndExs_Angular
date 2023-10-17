import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Exercice3Component } from './exercices/exercice3/exercice3.component';
import { ParentComponent } from './demo/demo4/parent/parent.component';
import { Parentv2Component } from './demo/demo4-v2/parentv2/parentv2.component';
import { ClickParentComponent } from './exercices/exercice4/click-parent/click-parent.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { CompteurParentComponent } from './exercices/exercice5/compteur-parent/compteur-parent.component';
import { FormParentComponent } from './exercices/exercice6/form-parent/form-parent.component';
import { Exercice7Component } from './exercices/exercice7/exercice7.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { Exercice8Component } from './exercices/exercice8/exercice8.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import { Demo8Component } from './demo/demo8/demo8.component';
import { authGuard } from './shared/guard/auth.guard';
import { Demo9Component } from './demo/demo9/demo9.component';
import { Demo10Component } from './demo/demo10/demo10.component';
import { Demo11Component } from './demo/demo11/demo11.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'demo1', component: Demo1Component},
  { path: 'demo2', component: Demo2Component},
  { path: 'demo3', component: Demo3Component},
  { path: 'demo4', component: ParentComponent},
  { path: 'demo4v2', component: Parentv2Component},
  { path: 'demo5', component: Demo5Component},
  { path: 'demo6', component: Demo6Component},
  { path: 'demo7', component: Demo7Component},
  { path: 'demo7-activated-route/:id', component: Demo7Component},
  { path: 'demo8', canActivate : [authGuard], component: Demo8Component},
  { path: 'demo9', component: Demo9Component},
  { path: 'demo10', component: Demo10Component},
  { path: 'demo11', component: Demo11Component},
  { path: 'exercice1', component: Exercice1Component},
  { path: 'exercice2', component: Exercice2Component},
  { path: 'exercice3', component: Exercice3Component},
  { path: 'exercice4', component: ClickParentComponent},
  { path: 'exercice5', component: CompteurParentComponent},
  { path: 'exercice6', component: FormParentComponent},
  { path: 'exercice7', component: Exercice7Component},
  { path: 'exercice8', component: Exercice8Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { SharedModule } from './shared/shared.module';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { ParentComponent } from './demo/demo4/parent/parent.component';
import { ChildComponent } from './demo/demo4/child/child.component';
import { Exercice3Component } from './exercices/exercice3/exercice3.component';
import { Childv2Component } from './demo/demo4-v2/childv2/childv2.component';
import { Parentv2Component } from './demo/demo4-v2/parentv2/parentv2.component';
import { ClickParentComponent } from './exercices/exercice4/click-parent/click-parent.component';
import { ClickEnfantComponent } from './exercices/exercice4/click-enfant/click-enfant.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { CompteurEnfantComponent } from './exercices/exercice5/compteur-enfant/compteur-enfant.component';
import { CompteurParentComponent } from './exercices/exercice5/compteur-parent/compteur-parent.component';
import { FormParentComponent } from './exercices/exercice6/form-parent/form-parent.component';
import { FormEnfantComponent } from './exercices/exercice6/form-enfant/form-enfant.component';
import { Exercice7Component } from './exercices/exercice7/exercice7.component';
import { Demo6Component } from './demo/demo6/demo6.component';
import { Exercice8Component } from './exercices/exercice8/exercice8.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import { Demo7ActivatedRouteComponent } from './demo/demo7-activated-route/demo7-activated-route.component';
import { Demo8Component } from './demo/demo8/demo8.component';
import { Demo9Component } from './demo/demo9/demo9.component';
import { Demo10Component } from './demo/demo10/demo10.component';
import { Demo11Component } from './demo/demo11/demo11.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Demo2Component,
    Exercice1Component,
    NavbarComponent,
    Exercice2Component,
    Demo3Component,
    ParentComponent,
    ChildComponent,
    Exercice3Component,
    Childv2Component,
    Parentv2Component,
    ClickParentComponent,
    ClickEnfantComponent,
    Demo5Component,
    CompteurEnfantComponent,
    CompteurParentComponent,
    FormParentComponent,
    FormEnfantComponent,
    Exercice7Component,
    Demo6Component,
    Exercice8Component,
    Demo7Component,
    Demo7ActivatedRouteComponent,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

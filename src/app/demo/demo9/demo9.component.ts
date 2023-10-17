import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})

export class Demo9Component {

  loginForm! : FormGroup;
  
  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomAuthantification : AuthentificationService,
    private _nomRouter : Router,
    ) {}

  ngOnInit() {
    this.loginForm = this._nomFormBuilder.group({
      email : ['', Validators.required],
      mdp : ['', Validators.required],
    })
  }

  onSubmit() : void {
    const form = this.loginForm.value;
    this._nomAuthantification.login(form['email'])
    this._nomRouter.navigate(['demo8'])
  }
}

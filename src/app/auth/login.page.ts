import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <style>
      :host{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      form {
        max-width: 300px;
        width: 100%;
      }
    </style>
    <form #form="ngForm" (ngSubmit)="login(form)" >
      <mat-card>
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>

          <div fxLayout>
            <div>
              <mat-form-field class="full-width">
                <input matInput placeholder="Email" type="email" #email="ngModel" ngModel name="email" required/>
                <mat-error *ngIf="email.invalid">
                  Email <strong>Obbligatoria</strong>
                </mat-error>
              </mat-form-field>
            </div>
          </div>
          <div fxLayout>
            <div>
              <mat-form-field class="full-width">
                <input matInput type="password" #password="ngModel" placeholder="Password" ngModel name="password" required/>
                <mat-error *ngIf="password.invalid">
                  Password <strong>Obbligatoria</strong>
                </mat-error>
              </mat-form-field>

            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="warn" type="submit">Accedi</button>
        </mat-card-actions>
      </mat-card>
    </form>
    <div fxLayout>
<p>oppure_</p> <a [routerLink]="['/register']" style="color: red"> Registrati</a>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
    hide = true;
  constructor(private authSrv: AuthService, private router:Router) {}

  ngOnInit(): void {}

  async login(form: NgForm) {
    try {
      await this.authSrv.login(form.value).toPromise();
      this.router.navigate(['/'])
    } catch (error) {
      alert('Autenticazione negata')
    }
  }
}

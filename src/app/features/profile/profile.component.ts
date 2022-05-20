import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  template: `
  <style>
    .info{
      margin: 30px auto;
      max-width: 200px;
    }
  </style>
    <mat-tab-group>
      <mat-tab label="Profilo utente">
      <div class="info" *ngIf="user$|async as user" >
        <p style="color: violet;">Nome: <span style="color: white;">{{user.user.name}}</span></p>
        <p style="color: violet;">Email: <span style="color: white;">{{user.user.email}}</span></p>
      </div>
      </mat-tab>
    </mat-tab-group>

  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  user$ = this.auth.user$

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

}

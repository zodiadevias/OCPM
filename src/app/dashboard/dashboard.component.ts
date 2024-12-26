import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,LoginComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  email = LoginComponent.email;
  router = inject(Router);

  constructor(){
    if (LoginComponent.isSignedIn == false) {
      this.router.navigateByUrl('login');
    }
      
    }


    signOut(){
      LoginComponent.isSignedIn = false;
      this.router.navigateByUrl('login');
    }
  }


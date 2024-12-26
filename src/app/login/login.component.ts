import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  signInError: string = '';
  isLoginView: boolean = true;

  show: boolean = false;
  password:any;

  
  public static email: any = '';
  public static isSignedIn: boolean = false;
  
  

  userReg: any ={
    email: 'master@gmail.com',
    password: 'password',
  }

  userLog: any = {
    email: '',
    password: ''
  }
  
  router = inject(Router);




 ngOnInit(){
  this.password = 'password';
 }

 showHide(){
  if(this.password === 'password'){
    this.password = 'text';
    this.show = true;
  }else{
    this.password = 'password';
    this.show = false;
  }
 }


  onRegister(){
    const isLData = localStorage.getItem('userR');

    
      if(isLData != null){
        const aLocal = JSON.parse(isLData);
        aLocal.push(this.userReg);
        localStorage.setItem('userR', JSON.stringify(aLocal));
      }else{
        const aLocal = [];
        aLocal.push(this.userReg);
        localStorage.setItem('userR', JSON.stringify(aLocal));
      }
      
      

    
    
  }
  
  login(){
    const isLData = localStorage.getItem('userR');
    if(isLData != null){
      const users = JSON.parse(isLData);
      const isUserFound = users.find((user: any) => user.email === this.userLog.email && user.password === this.userLog.password);
      if(isUserFound != undefined){
        LoginComponent.isSignedIn = true;
        LoginComponent.email = this.userLog.email;
        this.userLog.email = '';
        this.userLog.password = '';
        this.router.navigateByUrl('dashboard');
        
      }else{
        this.signInError = 'Invalid Credentials';
        this.userLog.email = '';
        this.userLog.password = '';
      }
    }else{
      this.signInError = 'Invalid Credentials';
    }

  }


 
}

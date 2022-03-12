import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
 import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any={};    
    
  errorMessage:string; 

  constructor(private router:Router,private LoginService:LoginService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('username');    
    sessionStorage.clear();  
  }

  login(){    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        console.log(data)
        if(data.status=="Success")    
        {       
          sessionStorage.setItem('username',this.model.username)
          this.router.navigate(['/Dashboard/'+data.id]);    
          
        }    
        else{    
          this.errorMessage = 'invalid username/password';    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    

}

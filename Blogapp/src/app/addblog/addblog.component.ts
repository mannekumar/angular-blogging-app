import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  model : any={};    
  errorMessage:string
  loggedin:any=''
  constructor(private router:Router,private LoginService:LoginService) { 
    this.loggedin=sessionStorage.getItem('username')
  }
  massage:string
  ngOnInit(): void {
  }

  add_blog(){   
    this.model['created_by']= sessionStorage.getItem('username')
    this.model['created_on']=new Date()
    this.LoginService.Addblog(this.model).subscribe(    
      data => {    
        console.log(data)
        if(data)    
        {       
          this.massage = 'Data saved Successfully';  
          
        }    
        else{    
          this.errorMessage = 'error occured'  
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };  


  logout()
  {
    this.router.navigate(['/login']);    
  }

}

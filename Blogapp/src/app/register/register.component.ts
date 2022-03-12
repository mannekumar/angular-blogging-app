import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = false;    
  employeeForm: any;    
  massage:string;    
  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
    this.employeeForm = this.formbulider.group({    
      username: ['', [Validators.required]],    
      password: ['', [Validators.required]],
    });  
  }
  onFormSubmit()    
  {    
    const user = this.employeeForm.value;    
    console.log(user)
     this.Createemployee(user);    
  }  

  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.employeeForm.reset();    
    });    
  }   


}

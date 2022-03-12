import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../app/register"; 


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url :string;  
  token : string;  
  header : any;  

  constructor(private http : HttpClient) { 
    this.Url = 'http://127.0.0.1:8000/blog/';  
  
    const header: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(header); 
  }

  Login(model : any){  
    debugger;  
   return this.http.post<any>(this.Url+'login',model,{ headers: this.header});  
  }  

   CreateUser(register:Register)  
   {  
     
    return this.http.post<Register[]>(this.Url + 'register', register, this.header)  
   } 

   GetBlogList()  
   {  
     
    return this.http.get<any>(this.Url + 'blogs_list', this.header)  
   } 

   Addblog(payload:any)  
   {  
     
    return this.http.post<any>(this.Url + 'create_blog', payload, this.header)  
   } 
}

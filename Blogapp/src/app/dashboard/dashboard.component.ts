import { Component, OnInit,ViewChild } from '@angular/core';
import { LoginService } from '../login.service';    
import { Router } from '@angular/router';    




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  blogsOfCategory:any
  errorMessage:string
  displayStyle = "none";
  dynamic_desc=''
  loggedin:any=''
    myModal:any
  constructor(private router:Router,private LoginService:LoginService) {

    this.LoginService.GetBlogList().subscribe(    
      data => {    
        console.log(data)
        if(data)    
        {       
          this.blogsOfCategory=data
          this.loggedin=sessionStorage.getItem('username')
           
          
        }    
        else{    
          
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
   }

  ngOnInit(): void {
  //   this.blogsOfCategory= [
  //     {
  //         "id": 1,
  //         "title": "test",
  //         "description": "testing first blog",
  //         "created_on": "2022-03-12T00:00:00Z",
  //         "created_by": "admin"
  //     },
  //     {
  //         "id": 2,
  //         "title": "test1",
  //         "description": "testing first blog2",
  //         "created_on": "2022-03-12T00:00:00Z",
  //         "created_by": "admin1"
  //     },
  //     {
  //         "id": 3,
  //         "title": "test2",
  //         "description": "testing first blog2",
  //         "created_on": "2022-03-12T00:00:00Z",
  //         "created_by": "admin2"
  //     },
  //     {
  //       "id": 1,
  //       "title": "test",
  //       "description": "testing first blog",
  //       "created_on": "2022-03-12T00:00:00Z",
  //       "created_by": "admin"
  //   },
  //   {
  //       "id": 2,
  //       "title": "test1",
  //       "description": "testing first blog2",
  //       "created_on": "2022-03-12T00:00:00Z",
  //       "created_by": "admin1"
  //   },
  //   {
  //       "id": 3,
  //       "title": "test2",
  //       "description": "testing first blog2",
  //       "created_on": "2022-03-12T00:00:00Z",
  //       "created_by": "admin2"
  //   }
  // ]
  }
  openPopup(temp:string) {
    this.dynamic_desc=temp
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  logout()
  {
    this.router.navigate(['/login']);    
  }
  


}

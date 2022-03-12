import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';  
import {AddblogComponent} from './addblog/addblog.component'

const routes: Routes = [
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'Dashboard/:id',    
    component: DashboardComponent,    
    pathMatch: 'full',
  },    
  {    
    path: 'register',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },
  {    
    path: 'add',    
    component: AddblogComponent,    
    data: {    
      title: 'Add blog'    
    }    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

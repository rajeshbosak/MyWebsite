import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path:'**',
    component:  PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { QuestionRegisterComponent } from './modules/dashboard/components/question-register/question-register.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent

  },
  {
    path:"dashboard",
    component:QuestionRegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

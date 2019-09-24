import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { QuestionRegisterComponent } from './modules/dashboard/components/question-register/question-register.component';
import { QuestionsComponent } from './modules/dashboard/components/questions/questions.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent

  },
  {
    path:"dashboard",
    component:QuestionRegisterComponent
  },
  {
    path:"question",
    component:QuestionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

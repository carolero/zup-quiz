import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRegisterComponent } from './components/question-register/question-register.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [QuestionRegisterComponent, QuestionsComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }

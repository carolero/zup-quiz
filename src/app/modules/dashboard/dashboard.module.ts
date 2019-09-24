import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRegisterComponent } from './components/question-register/question-register.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [QuestionRegisterComponent, QuestionsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRegisterComponent } from './components/question-register/question-register.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"


@NgModule({
  declarations: [QuestionRegisterComponent],
  imports: [
    CommonModule,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class DashboardModule { }

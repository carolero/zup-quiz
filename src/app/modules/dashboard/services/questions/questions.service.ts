import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionRegisterComponent } from '../../components/question-register/question-register.component';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private htpp) {}
    
    questionRegister(question) {
      return this.htpp.post('/quiz/', question)
    }
  }


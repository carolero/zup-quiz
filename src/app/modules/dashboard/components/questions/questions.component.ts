import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './service/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private questionsList = []

  private index = 0
  private showForm = false;
  
  constructor(private questionsService: QuestionsService, private router: Router) {}

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((response:[])=>{
      console.log(response.length)
      this.questionsList = response
      this.showForm = true;
    })
  }

  nextQuestion() {
    if(this.index < this.questionsList.length) {
      this.index++
      console.log(this.index, this.questionsList.length)
    }
  }

  register() {
    this.questionsService.register() 
      console.log()
      this.router.navigateByUrl("dashboard")
  }

}

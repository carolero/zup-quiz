import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './service/questions.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private questionsList = []

  private index = 0
  private showForm = false;

  public answerForm:FormGroup
  
  constructor(private questionsService: QuestionsService, private router: Router) {}

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((response:[])=>{
      console.log(response.length)
      this.questionsList = response
      this.showForm = true;
    })
    this.answerForm = new FormGroup({
      alternatives : new FormControl("")
    })
  }

  nextQuestion() {
    if(this.index <= this.questionsList.length) {
      this.index++
      console.log(this.index, this.questionsList.length)
      this.answerForm.get("alternatives").setValue("")
    }
    if(this.index == this.questionsList.length) {
      this.router.navigateByUrl("dashboard")
    }
  }

  register() {
    this.questionsService.register() 
      console.log()
      this.router.navigateByUrl("dashboard")
  }

  submit() {
    console.log(this.answerForm.value)
    this.nextQuestion()
  }

}

import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './service/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private router: Router) {}

  ngOnInit() {
  }

  register() {
    this.questionsService.register() 
      console.log()
      this.router.navigateByUrl("dashboard")
  }

}

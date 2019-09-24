import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-register',
  templateUrl: './question-register.component.html',
  styleUrls: ['./question-register.component.css']
})

export class QuestionRegisterComponent implements OnInit {
  public questionForm: FormGroup;
  constructor( private formBuilder : FormBuilder) { }

  onSubmit(){
    console.log(this.questionForm.value)
  }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({ 
      question: new FormControl("", Validators.compose([Validators.required])),
      answer: new FormControl("", Validators.compose([Validators.required])),
      alternative1: new FormControl("", Validators.compose([Validators.required])),
      alternative2: new FormControl("", Validators.compose([Validators.required])),
      alternative3: new FormControl("", Validators.compose([Validators.required])),
      alternative4: new FormControl("", Validators.compose([Validators.required]))
    })
  }  
}

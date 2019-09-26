import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@angular/forms';
import { environment } from './../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  readonly API_URL = environment.API_BASE

  constructor(private http: HttpClient) { }

  register() {
    console.log("registrou")
  }

  getQuestions() {
    return this.http.get(this.API_URL + environment.QUIZ_URL)
  }

}
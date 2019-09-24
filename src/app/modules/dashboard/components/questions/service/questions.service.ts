import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  readonly API_URL = "http://localhost:8080/quiz"

  constructor(private http: HttpClient) { }

  register() {
    console.log("registrou")
  }

  getQuestions() {
    return this.http.get(this.API_URL)
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userId) {
    return this.http.get('/users/' + userId)
  }

  createUser(user) {
    return this.http.post('/users/', user)
  }

}

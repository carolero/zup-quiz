import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title = "Seja bem vindo ao quiz da Zup Quiz"

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }

  login() {
    this.loginService.login().then((response)=>{
      console.log(response)
      this.router.navigateByUrl("question")
    });
  } 

}

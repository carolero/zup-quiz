import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private title = "Seja bem vindo ao quiz da Zup Quiz"

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }

  login() {
    this.loginService.login().then((googleResponse) => {
      if (this.userService.getUser) {
        console.log("usuario já existe")
        console.log(googleResponse);
      } else {
        let user = {
          idGoogle: googleResponse.id,
          name: googleResponse.name,
          email: googleResponse.email
        }
        this.userService.registerUser(user).subscribe((user) => {
          console.log(googleResponse);
        });
      }
      this.router.navigateByUrl("question")
    });
  }
}

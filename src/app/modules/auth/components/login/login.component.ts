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

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {}

  ngOnInit() {
  }

  login() {
    this.loginService.login().then((response1)=>{
      console.log(response1.email)
      this.router.navigateByUrl("question")
      
      this.userService.getUser(response1.id).subscribe(response2=>{
        if(response2) {

        } else {
          this.userService.createUser({id:response1.id ,name:response1.name, email:response1.email})
        }
      })

    });
  } 

}

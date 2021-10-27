import { Component } from '@angular/core';
import 'firebase/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private auth : AuthService) { }

  login(){
    this.auth.login();
  }   

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private auth: AuthService,private router: Router) { }
  
  canActivate(){
    this.auth.user$.map(user=>{
      if (user) return true;

      this.router.navigate(['/login']);
      return false;
    });
  }
}

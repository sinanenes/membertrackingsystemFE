import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  private loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  login(user:User){
    if (user.email == "1" && user.password =="1"){
      // this.errorMessage="Basarili!";
      // this.router.navigate(['./dashboard']);
      this.loggedIn.next(true);
      this.router.navigate(['./dashboard']);
      return "Basarili";
    }
    else{
      this.loggedIn.next(false);
      return "Basarisiz!";
    }
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}

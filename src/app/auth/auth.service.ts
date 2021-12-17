import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private service:SharedService) { }

  private loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  KullaniciList: any = [];

  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  login(user:User){


    this.service.getKullaniciByKullaniciAdiParolaList(user.email,user.password).subscribe(data => {
      this.KullaniciList = data;


      //alert(this.KullaniciList[0].KullaniciId);
      if (Array.isArray(this.KullaniciList) && this.KullaniciList.length) {
        // this.errorMessage="Basarili!";
        // this.router.navigate(['./dashboard']);
        this.loggedIn.next(true);
        this.router.navigate(['./dashboard']);
        //return "Basarili";
        alert("Basarili");
      }
      else {
        this.loggedIn.next(false);
        //return "Basarisiz!";
        alert("Basarisiz");
      }

    });
    


    // if (user.email == "1" && user.password =="1"){
    //   // this.errorMessage="Basarili!";
    //   // this.router.navigate(['./dashboard']);
    //   this.loggedIn.next(true);
    //   this.router.navigate(['./dashboard']);
    //   return "Basarili";
    // }
    // else{
    //   this.loggedIn.next(false);
    //   return "Basarisiz!";
    // }
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}

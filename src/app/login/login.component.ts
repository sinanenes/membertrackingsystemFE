import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authservice: AuthService, private fb: FormBuilder,private router:Router) { }

  form:FormGroup;

  // KullaniciAdi:string;
  // Parola:string;
  email: string;
  password: string;
  errorMessage: string;

  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

  logInUser(){
    // if (this.email == "test" && this.password=="1"){
    //   this.errorMessage="Basarili!";
    //   this.router.navigate(['./dashboard']);
    // }
    // else{
    //   this.errorMessage="Basarisiz!";
    // }
    this.form.patchValue({
      email:this.email,
      password:this.password
    });
    //this.errorMessage = this.authservice.login(this.form.value);
    this.authservice.login(this.form.value);
  }

}

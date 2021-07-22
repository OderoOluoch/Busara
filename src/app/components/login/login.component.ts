import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.class';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  isLoginError : boolean = false;

  constructor(
    private userService: UserService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? :NgForm){
    if(form != null )
    form.reset();
    this.user = {
      username:'',
      email: '',
      password1:'',
      password2:'',
      referral_code:'',
      phone_number:'',
      full_name:'',
      device_details: '',
      location: ''
    }
  }
  login(username:string,password:string){
    this.userService.userAuthentication(username,password)
      .subscribe((data:any) =>{
          localStorage.setItem('userToken', data.access_token);
          this.router.navigate(['']);
          // console.log(data);
      },
      (err :HttpErrorResponse) => {
          this.isLoginError = true;
          // console.log(err);
      })
  }

}

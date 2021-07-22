import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user.class';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User;
  constructor(private userService :UserService) { }

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

  OnSubmit(form : NgForm){
    console.log(form.value)
    this.userService.registerUser(form.value)
      .subscribe((res: any) => {
        console.log("Good " + res)
        // if(res.Succeeded ==true){
        //   this.resetForm(form);
        //   console.log("Good " + res)
        // }else{
        //   console.log("Bad " +res.error);
        // }
      })
  }

}

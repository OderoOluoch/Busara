import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: any;

 constructor(private userService: UserService) { }

 ngOnInit(): void {
  this.userService.getLogedInUser().subscribe(
    (data : any) => {
      this.userDetails = data;
      // console.log(data)
    }
  )
}

}

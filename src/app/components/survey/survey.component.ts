import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  viewForm(){
    this.userService.getSurveyFormData().subscribe(
      (data : any) => {
        console.log(data.forms[0].pages)
      }
    )
  }

}

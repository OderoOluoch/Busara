import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm!: FormGroup;
  formPageTwo: any;
  formPageOne: any;
  formGender:any;
  formEducation:any;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.userService.getSurveyFormData().subscribe(
      (data : any) => {
        this.formPageOne  = data.forms[0].pages[0].sections[0].questions
        this.formPageTwo = data.forms[0].pages[1].sections[0].questions

        this.formEducation = data.forms[0].pages[1].sections[0].questions[0].q_options
        this.formGender = data.forms[0].pages[0].sections[0].questions[7].q_options
        
      }
    )

    this.surveyForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      contact: '',
      country: '',
      county: '',
      constituency: '',
      ward: '',
      gender: '',
      education: '',
    });
  }



  submitSurveyData(){
    console.log(this.surveyForm?.getRawValue())
  }

}

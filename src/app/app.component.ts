import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm : FormGroup; 
  
  ngOnInit() {
    //FormGroup pass json object
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email':new FormControl(null),
      'gender':new FormControl('male')
    });
  }

}

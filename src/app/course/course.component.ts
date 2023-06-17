import { Component } from '@angular/core';
import {EmailService} from "../email.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  // @ts-ignore
  mail ;
  constructor(services:EmailService) {
  this.mail = services.getEmail();
  }

  onClick() {
    console.log("Deleted");
  }

  email = "exam@gmail.com";
  onKeyUp() {
    console.log(this.email);
  }
}

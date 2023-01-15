import { NgIfContext, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  coreCourse=COURSES[0];
  RxJs=COURSES[1];
  NgRx=COURSES[2];

kursevi=COURSES;


onAppViewed(){
console.log("app is not cuci");
}
onCourseSelected(course:Course) {
  console.log("selected:", course);
}
}

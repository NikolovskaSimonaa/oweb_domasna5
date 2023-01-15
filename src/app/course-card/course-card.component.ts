import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import {Course, suzi} from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
constructor() {}

@Input()
indeks:number=0;

@Input()
crs:Course=suzi;

@Output()
courseSelected=new EventEmitter<Course>();
ngOnInit(){

}
onCrsViewed(){
  console.log("suzi is cuci and cuci is suzi");
  this.courseSelected.emit(this.crs);
}
categoryClass(){
  if(this.crs.category=='BEGINNER') return ['b'];
  else if(this.crs.category=='INTERMEDIATE') return ['i'];
  else if (this.crs.category=='ADVANCED') return ['a'];
  else return null;
}

/*klasi(){

  return {

    'beginner':this.crs.category=='BEGINNER', 
    'course-card':true
  }
}*/
}

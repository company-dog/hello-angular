import { Component, Injectable } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: '2.1-1' }} <br />
    {{ course.price | currency: 'JPY' }} <br />
    {{ course.releaseDate | date }} <br />

    {{ text | summary:10 }} <br/>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  email = 'makio@example.com';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  text =
    'lorem ipusum aihaoihgaioghaiohgoiah oivah oifhaiov haiohioighoaihgo a';

  onKeyUp() {
    console.log(this.email);
  }
}

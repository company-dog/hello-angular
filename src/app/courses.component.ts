import { Component, Injectable } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses>
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  private courses: string[];

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}

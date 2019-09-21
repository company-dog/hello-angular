import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <input [(ngModel)]="text" />
    <p>{{ text | casing }}</p>
  `
})
export class TitleComponent implements OnInit {
  text: string;
  constructor() {}

  ngOnInit() {}
}
